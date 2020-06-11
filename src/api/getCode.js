import request from '@/http/api'

function getCode (codeId) {
  //
  return request.get(`api/code/${codeId}`)
}
function patchConsultation (data) {
  return request.post('api/consultation', data)
}
function getSignUp () {
  return request.get('api/signUp')
}
function getPhoneCode (phone) {
  return request.get(`api/code/${phone}`)
}
export { getCode,
  patchConsultation,
  getSignUp,
  getPhoneCode}
