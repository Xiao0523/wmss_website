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
export { getCode, patchConsultation, getSignUp }
