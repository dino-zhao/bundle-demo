import React, { useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import ReactHtmlParser from 'react-html-parser'

export default function TinyMce() {
  const editorRef = useRef(null)
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent())
    }
  }
  const images_upload_handler = async (blob, success, fail) => {
    const param = new FormData()
    param.append('img', blob.blob())
    console.log(blob.blob())
    // const data = await update_img(param) //update_img是自己定义的上传图片视频方法,需要自行封装，很简单
    // success(data.url)
  }
  const html = `<p>This is the initial content of the editor.</p>
<p>&nbsp;</p>
<p><span style="font-size: 36pt;">sssssss</span></p>`
  return (
    <>
      <Editor
        tinymceScriptSrc="https://statics-websites.oss-cn-hangzhou.aliyuncs.com/tinymce/tinymce.min.js"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          menubar: false,
          plugins:
            'print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons',
          toolbar:
            'undo redo | formatselect | image | fontsizeselect | preview |' +
            'bold italic backcolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style:
            'body { font-family:Helvetica,Arial,sans-serif; font-size:14pt }',
          //   images_upload_handler,
          //   paste_data_images: true,
          images_upload_handler,
          fontsize_formats: '8pt 10pt 12pt 14pt 16pt 18pt 24pt 36pt 48pt',
        }}
      />
      <button onClick={log}>Log editor content</button>
      <div>{ReactHtmlParser(html)}</div>
    </>
  )
}
