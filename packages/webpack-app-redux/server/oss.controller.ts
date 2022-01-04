const Core = require('@alicloud/pop-core')

//构建一个阿里云客户端, 用于发起请求。
//构建阿里云客户端时，需要设置AccessKey ID和AccessKey Secret。
const client = new Core({
  accessKeyId: '',
  accessKeySecret: '',
  endpoint: 'https://sts.aliyuncs.com',
  apiVersion: '2015-04-01',
})

//设置参数。关于参数含义和设置方法，请参见《API参考》。
const params = {
  RegionId: 'cn-hangzhou',
  RoleArn: '',
  RoleSessionName: '',
}

const requestOption = {
  method: 'POST',
}

//发起请求，并得到响应。
module.exports = function getToken() {
  return client.request('AssumeRole', params, requestOption).then(
    (result) => {
      console.log(JSON.stringify(result))
      return result.Credentials
    },
    (ex) => {
      console.log(ex)
    }
  )
}
