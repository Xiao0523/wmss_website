import {getSignUp, getPhoneCode, patchConsultation} from '@/api/getCode'

export const getSignUpNumeber = {
  data () {
    return {
      Numeber: 5038,
      dialogFormVisible: false
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
      this.dialogFormVisible = true
      this.getSignUpNumeber()
    },
    send () {
      if (!this.form.way) {
        this.$message({
          message: '请先输入联系方式',
          type: 'warning',
          duration: 5000
        })
        return
      }
      getPhoneCode(this.form.way).then(res => {
        if (res.data.code) {
          return (
            res.data.message &&
            this.$message({
              message: res.data.message,
              type: 'warning',
              duration: 5000
            })
          )
        }
        this.$message({
          message: res.data.message,
          type: 'success',
          duration: 5000
        })
      })
    },
    Verification () {
      if (!this.form.way) {
        this.$message({
          message: '请先输入联系方式',
          type: 'warning',
          duration: 5000
        })
        return
      }
      if (!this.form.name) {
        this.$message({
          message: '请先输入姓',
          type: 'warning',
          duration: 5000
        })
        return
      }
      patchConsultation(this.form)
        .then(res => {
          if (res.data.code) {
            return (
              res.data.message &&
              this.$message({
                message: res.data.message,
                type: 'warning',
                duration: 5000
              })
            )
          }
          this.$message({
            message: res.data.message,
            type: 'success',
            duration: 5000
          })
          this.dialogFormVisible = false
          this.form = {
            name: '',
            way: '',
            sex: '0',
            validCode: ''
          }
        })
    }
  }
}
