<!--  -->
<template>
<div class='firth'>
   <div class="firth_wrap">
    <div class="group_first_logo">
        <img :src="logoUrl">
    </div>
    <!--
     <div
        class="group_first_title"
      >
      让外贸订单<b>轻松</b>获取，<br>
       让你的业务覆盖<b>全世界</b>！
     </div>
     <div  class="group_first_subtitle">
       全球<b>700万+</b>国际采购商
     </div>
     -->
       <div  class="group_first_title">
          外贸推广巨献<br>
          </div>
       <div  class="group_first_subtitle">
       <b>前10名 </b>抢购<br>
        中国制造网 \ 环球资源网推广服务 <br>
        赠送价值<b>80000元 </b> <br>
        阿里巴巴国际站（金品城企）账户<br>
        推广服务一年 <br>
        活动仅限<span :style="'font-size:' + fontSize * 2 + 'px;'"><b>三天</b> </span> <br>
        活动时间：6月10日-6月12日<br>
        本活动最终解释权归公司所有<br>
       </div>

     <div class="btn_wrap">
       <div class="hq_reg_btn">
          <div class="set_4_button2 raised hoverable " @click="obtain">
             <div class="anim"></div>
             <span>现在获取</span>
          </div>
      </div>
     </div>
      <div class="group_first_layer">
        <img
          :src="layerUrl"
          fluid
          alt="Responsive image"
        />
      </div>
   </div>

    <Modal v-model="modal" draggable scrollable  width="330" class-name="vertical-center-modal">
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
      logoUrl: 'https://video.my51share.com/image/default/99BA03966B8949D684FE81F285CBA9F8-6-2.png',
      layerUrl: 'https://video.my51share.com/image/default/46DB9BF27ED0469FAE5200E68A006ED1-6-2.png',
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
.firth{
    margin:auto  auto;
    width:375px;
    height:717px;
    background:linear-gradient(180deg,rgba(0,214,255,1) 0%,rgba(22,56,241,1) 100%);
    position: relative;
}
.firth_wrap{
    max-width: 414px;
    min-width: 375px;
    width:375px;
    margin: 0px auto;
    height: 100%;
    position: relative;
    overflow: hidden;
}
.group_first_logo{
     width: 375px;
     height: 121px;
}
.group_first_title{
  position:absolute;
  top:167px;
  width: 100%;
  height:100px;
  font-size:30px;
  font-family:Fontquan-XinYiGuanHeiTi-Regular,Fontquan-XinYiGuanHeiTi;
  font-weight:400;
  color:rgba(255,255,255,1);
  line-height:50px;
  letter-spacing:1px;
  text-align: center;
  & b{
    color:#FFB900;
  }
}
.group_first_subtitle{
   position:absolute;
   //top:282px;
   top:220px;
   width: 100%;
   text-align: center;
   height:56px;
   font-size:17px;
   font-family:PingFangSC-Regular,PingFang SC;
   font-weight:400;
   color:rgba(255,255,255,1);
   line-height:24px;
   letter-spacing:2px;
    & b{
    font-size:30px;
    color:#FFB900;
  }
}
   .btn_wrap{
     position: absolute;
    // top:367px;
     top:450px;
     width: 100%;
     text-align: center;
   }
  .hq_reg_btn {
    position: relative;
    //text-align: center;
    margin: 0 auto;
    width:140px;
    height:50px;
    border-radius:6px;
    border:1px solid rgba(255,255,255,1);
    & span {
      font-size: 18px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 50px;
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
.group_first_layer{
  position: absolute;
  text-align: center;
  bottom: 0;
}
</style>
