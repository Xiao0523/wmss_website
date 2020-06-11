import {getSignUp, getPhoneCode, patchConsultation} from '@/api/getCode'

export const getMixins = {
  data () {
    return {
      form: {
        name: '',
        way: '',
        sex: '0',
        validCode: ''
      },
      Numeber: 5038,
      modal: false
    }
  },
  methods: {
    getSignUpNumeber () {
      debugger
      getSignUp().then(res => {
        if (res.data.code) return
        this.Numeber = res.data.data
      })
    },
    obtain () {
      this.modal = true
      this.getSignUpNumeber()
    },
    send () {
      if (!this.form.way) {
        this.$Notice.info({
          title: '请先输入手机号'
        })
        return
      }
      getPhoneCode(this.form.way).then(res => {
        if (res.data.code) {
          return (
            res.data.message &&
            this.$Notice.warning({
              title: res.data.message
            })
          )
        }
        this.$Notice.success({
          title: res.data.message
        })
      })
    },
    Verification () {
      if (!this.form.way) {
        this.$Notice.info({
          title: '请先输入联系方式'
        })
        return
      }
      if (!this.form.name) {
        this.$Notice.info({
          title: '请先输入姓名'
        })
        return
      }
      patchConsultation(this.form).then(res => {
        if (res.data.code) {
          this.$Notice.warning({
            title: res.data.message
          })
          return
        }
        this.$Notice.success({
          title: res.data.message
        })
        this.modal = false
        this.form = {
          name: '',
          way: '',
          sex: '0',
          validCode: ''
        }
      })
    },
    callPhone () {
      window.location.href = 'tel://15773030067'
    }
  }
}
