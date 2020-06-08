import {getSignUp} from '@/api/getCode'

export const getSignUpNumeber = {
  data () {
    return {
      Numeber: 5038
    }
  },
  methods: {
    getSignUpNumeber () {
      debugger
      getSignUp().then(res => {
        if (res.data.code) return
        this.Numeber = res.data.data
      })
    }
  },
  created () {
    this.getSignUpNumeber()
  }
}
