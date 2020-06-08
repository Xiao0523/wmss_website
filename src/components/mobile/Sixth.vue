<!--  -->
<template>
<div class="">
<div class='sixth'>
   <div class="bj"></div>
   <div class="sixth_wrap">
     <div class="btn_wrap">
       <div class="hq_reg_btn">
          <div class="set_4_button2 raised hoverable " @click="obtain">
             <div class="anim"></div>
             <span>同样的营销费用，可以得到<br>
              <b>更多的询盘订单和客户信息</b> ！！！</span>
          </div>
      </div>
     </div>
      <div class="group_sixth_layer">
        <img
          :src="layerUrl"
          fluid
          alt="Responsive image"
        />
      </div>
        <div class="group_sixth_public">
        <img :src="publicUrl"/>
    </div>
    <div class="group_sixth_public_text">
        关注公众号
    </div>
    <div class="group_sixth_WeChat">
        <img  :src="wechatUrl"/>
    </div>
    <div class="group_sixth_WeChat_text"> 微信联系</div>

   </div>
    <Modal v-model="modal" draggable scrollable  width="330" >
        <p slot="header" style="text-align:center">
            <span style="font-size:16px;
                         font-family:PingFangSC-Medium,PingFang SC;
                         color:rgba(51,51,51,1);line-height:16px;">
                         截止目前已有<b style="color:#FFB900">{{Numeber}}名</b>名用户报名</span>
        </p>
        <div>
        <Form :model="form">
           <FormItem>
            <Row>
             <Col span="12">
              <Input v-model="form.name" placeholder="姓名（已加密）" size="large" clearable  style="width: 100%" />
             </Col>
              <Col span="12" tyle="text-align:center">
                 <RadioGroup v-model="form.sex" size="large" style="padding-left: 10%;">
                        <Radio label="0">先生</Radio>
                        <Radio label="1">女士</Radio>
               </RadioGroup>
             </Col>
            </Row>
          </FormItem>
          <FormItem>
              <Input  v-model="form.way" placeholder="电话(请耐心等待咨询师联系)" size="large"  clearable  style="width: 100%" />
          </FormItem>
            <FormItem >
            <Row>
              <Col span="12">
                  <Input v-model="form.validCode" placeholder="请输入验证码" size="large"  clearable />
              </Col>
             <Col span="12">
                  <img v-lazy="form.codeUrl" style="padding-left: 10%;" />
             </Col>
            </Row>
            </FormItem>
        </Form>
        </div>
        <div slot="footer">
          <Form >
          <FormItem >
            <Button type="primary" size="large" long  @click="Verification">立即报名享优惠</Button>
          </FormItem>
           <FormItem >
             <Button type="info" size="large" long ghost   @click="callPhone" >
              <Icon type="ios-call" size = "30"/>
                电话拨打
            </Button>
           </FormItem>
          </Form>
        </div>
    </Modal>
</div>
  <div class="sixth_bottom">
     © 2019 宁波一顺二维文化传媒有限公司-All Rights Reserved
  </div>
</div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { getCode, patchConsultation } from '@/api/getCode'
import { getSignUpNumeber } from '@/mixins/getNumeber'
export default {
// import引入的组件需要注入到对象中才能使用
  components: {},
  mixins: [getSignUpNumeber],
  data () {
    // 这里存放数据
    return {
      layerUrl: 'https://video.my51share.com/image/default/B6AF5AC850A34D1988932FF554D80DD3-6-2.png',
      publicUrl: 'https://video.my51share.com/image/default/CC6459F96E0249DE9CB885311BFD61EF-6-2.png',
      wechatUrl: 'https://video.my51share.com/image/default/ECE4B0E0646C4427BCE5A86D7B49E7A0-6-2.png',
      modal: false,
      form: {
        name: '',
        way: '',
        detail: '现在获取',
        sex: '0',
        validCode: '',
        code: '',
        codeUrl: ''
      }
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    obtain () {
      this.form.code = Math.ceil(Math.random() * 100000)
      this.form.code = this.form.code + 'YZM'
      getCode(this.form.code)
        .then(res => {
          if (res.data.code) {
            return (
              res.data.message &&
              this.$message({
                message: res.data.message,
                type: 'warning',
                duration: 3000
              })
            )
          }
          if (!res.data.data) return
          this.form.codeUrl = res.data.data
          this.modal = true
        })
      this.getSignUpNumeber()
    },
    Verification () {
      if (!this.form.way) {
        this.$Notice.warning({
          title: '请先输入联系方式'
        })
        return
      }
      if (!this.form.name) {
        this.$Notice.warning({
          title: '请输入姓名'
        })
        return
      }
      if (!this.form.validCode) {
        this.$Notice.warning({
          title: '请输入验证码'
        })
        return
      }
      patchConsultation(this.form)
        .then(res => {
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
          this.modal = false
          this.form = {
            name: '',
            phone: '',
            detail: '现在获取',
            sex: '0',
            validCode: '',
            code: '',
            codeUrl: ''
          }
        })
    },
    callPhone () {
      window.location.href = 'tel://15773030067'
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {

  },
  beforeCreate () {}, // 生命周期 - 创建之前
  beforeMount () {}, // 生命周期 - 挂载之前
  beforeUpdate () {}, // 生命周期 - 更新之前
  updated () {}, // 生命周期 - 更新之后
  beforeDestroy () {}, // 生命周期 - 销毁之前
  destroyed () {}, // 生命周期 - 销毁完成
  activated () {} // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.bj{
    position: absolute;
    margin:auto  auto;
    width:375px;
    height:610px;
    background:linear-gradient(180deg,#099FFB 0%,#0325E5 100%);
}

.sixth{
    margin:auto  auto;
    width:375px;
    height:610px;
}
.sixth_wrap{
    max-width: 414px;
    min-width: 375px;
    width:375px;
    margin: 0px auto;
    height: 100%;
    position: relative;
    overflow: hidden;
    background: url(https://video.my51share.com/image/default/F345EDEE0A764CCD8CAFE2385FF137C2-6-2.png) center center ;
}
.group_sixth_layer{
  position: absolute;
  width: 100%;
  text-align: center;
  top: 58px;
}
   .btn_wrap{
     position: absolute;
     top:273px;
     width: 100%;
     text-align: center;
   }
  .hq_reg_btn {
    position: relative;
    //text-align: center;
    margin: 0 auto;
    width:320px;
    height:80px;
    border-radius:15px;
    border:2px solid rgba(255,255,255,1);
    & span {
      width:285px;
      height:60px;
      font-size:18px;
      font-family:PingFangSC-Medium,PingFang SC;
      font-weight:500;
      color:rgba(255,255,255,1);
      line-height:35px;
      letter-spacing:1px;
      & b{
        color:#FFB900
      }
    }
  }
.set_4_button2 {
  position: relative;
  font-weight: 400;
  text-align: center;
  width: auto;
  font-size: 0.21rem;
  overflow: hidden;
  position: relative;
  z-index: 0;
  cursor: pointer;
  border-radius: 0.35rem;
  text-align: center;
  width: 100%;
  height: 100%;
}

.set_4_button2.raised {
  -moz-transition: all 0.1s;
  -o-transition: all 0.1s;
  -webkit-transition: all 0.1s;
  transition: all 0.1s;
}
.group_sixth_public{
   position: absolute;
   top:393px;
   left: 48px;
   width: 120px;
   height: 120px;
}
.group_sixth_public_text {
  position: absolute;
  top: 532px;
  left: 48px;
  width: 120px;
  height:30px;
  font-size:22px;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:rgba(255,255,255,1);
  line-height:30px;
  text-align: center;
}
.group_sixth_WeChat{
   position: absolute;
   top:393px;
   left: 208px;
   width: 120px;
   height: 120px;
}
.group_sixth_WeChat_text {
  position: absolute;
  top: 532px;
  left: 208px;
  width: 120px;
  height:30px;
  font-size:22px;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:rgba(255,255,255,1);
  line-height:30px;
  text-align: center;
}
.sixth_bottom{
  margin:auto  auto;
  width:375px;
  height:57px;
  background:rgba(20,102,248,1);
  text-align: center;
  font-size:12px;
  font-family:PingFangSC-Medium,PingFang SC;
  font-weight:500;
  color:rgba(255,255,255,1);
  line-height:57px;
}
</style>
