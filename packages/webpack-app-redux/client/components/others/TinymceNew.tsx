import React, { useEffect, useRef, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import ReactHtmlParser from 'react-html-parser'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
const OSS = require('ali-oss')
interface TokenInfo {
  AccessKeyId: string
  AccessKeySecret: string
  SecurityToken: string
}
async function getToken(): Promise<TokenInfo> {
  const info = await axios('/api/oss-token')
  return info.data.data
}

export default function TinymceNew() {
  const editorRef = useRef(null)
  const ossClient = useRef(null)
  const contentIFrameRef = useRef<HTMLIFrameElement>(null)
  const [filePath] = useState(() => 'help-center/' + uuidv4() + '/')

  const log = () => {
    if (editorRef.current) {
      const doc = contentIFrameRef.current.contentWindow.document
      //参考 https://www.cnblogs.com/zhangym118/p/13255043.html
      const link = doc.createElement('link')
      const head = doc.createElement('head')
      link.href = 'inner-iframe.css'
      link.rel = 'stylesheet'
      link.type = 'text/css'
      head.appendChild(link)
      console.log(ossClient.current)
      const xss = `<button onclick='alert(2)'>点击</button>`
      console.log(editorRef.current.getContent())
      doc.open()

      doc.write(editorRef.current.getContent() + xss)
      //   doc.documentElement.appendChild(head)
      doc.head.appendChild(link)
      doc.close()
    }
  }

  useEffect(() => {
    ;(async () => {
      const token = await getToken()
      const client = new OSS({
        // yourRegion填写Bucket所在地域。以华东1（杭州）为例，Region填写为oss-cn-hangzhou。
        region: 'oss-cn-hangzhou',
        // 从STS服务获取的临时访问密钥（AccessKey ID和AccessKey Secret）。
        accessKeyId: token.AccessKeyId,
        accessKeySecret: token.AccessKeySecret,
        // 从STS服务获取的安全令牌（SecurityToken）。
        stsToken: token.SecurityToken,
        refreshSTSToken: async () => {
          // 向您搭建的STS服务获取临时访问凭证。
          const info = await getToken()
          return {
            accessKeyId: info.AccessKeyId,
            accessKeySecret: info.AccessKeySecret,
            stsToken: info.SecurityToken,
          }
        },
        // 刷新临时访问凭证的时间间隔，单位为毫秒。
        refreshSTSTokenInterval: 300000,
        // 填写Bucket名称。
        bucket: 'statics-websites',
      })
      ossClient.current = client
    })()
  }, [])
  const images_upload_handler = async (blob, success, fail) => {
    // const oldFile = blob.blob()
    // const fileName =
    //   uuidv4() + oldFile.name.slice(oldFile.name.lastIndexOf('.'))
    // const file = new File([oldFile], fileName, { type: oldFile.type })
    // console.log(blob.blob())
    const file = blob.blob()
    console.log(file)
    const fileName = 'aa/' + uuidv4() + '.png'

    const client = ossClient.current

    client
      .put(fileName, file)
      .then(function (r1) {
        // console.log('put success: %j', client.get(fileName))
        success('https://statics.ppio.cloud/' + fileName)
        console.log(r1)
      })
      .then(function (r2) {
        console.log('get success: %j', r2)
      })
      .catch(function (err) {
        console.error('error: %j', err)
        fail(err)
      })
  }

  return (
    <>
      <Editor
        // tinymceScriptSrc="https://statics.ppio.cloud/tinymce1/tinymce.min.js"
        tinymceScriptSrc="tinymce1/tinymce.min.js"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          language: 'zh_CN',
          height: 500,
          menubar: false,
          plugins:
            'print preview powerpaste importcss textcolor  searchreplace autolink image autosave save directionality code visualblocks visualchars fullscreen  link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap  emoticons',
          toolbar:
            'undo redo  table | image | fontsizeselect | preview |' +
            'bold italic forecolor backcolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist  | ' +
            'removeformat',
          content_style:
            'body { font-family:Helvetica,Arial,sans-serif; font-size:14pt }',
          //   images_upload_handler,
          //   paste_data_images: true,
          powerpaste_allow_local_images: true,
          end_container_on_empty_block: true,
          powerpaste_word_import: 'propmt',
          powerpaste_html_import: 'propmt',
          images_upload_handler,
          fontsize_formats: '8pt 10pt 12pt 14pt 16pt 18pt 24pt 36pt 48pt',
        }}
      />
      <button onClick={log}>Log editor content</button>
      <iframe
        style={{ width: '100%', height: 'auto' }}
        ref={contentIFrameRef}
        sandbox="allow-same-origin"
      ></iframe>
    </>
  )
}
