<!--  -->
<template>
<div class='second'>
   <div class="second_wrap">
     <div
        class="group_second_title"
      >
     提升外贸询盘量<b>3倍</b>以上
     </div>
     <div  class="group_second_subtitle">
      阿里巴巴国际站，中国制造国际站，环球资源站，<br>
          三平台多账号广告投放
     </div>
     <div class="btn_wrap">
       <div class="hq_reg_btn">
          <div class="set_4_button2 raised hoverable " @click="obtain">
             <div class="anim"></div>
             <span>现在获取</span>
          </div>
      </div>
     </div>
      <div class="group_second_layer">
        <img
          :src="layerUrl"
          fluid
          alt="Responsive image"
        />
      </div>
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
      layerUrl: 'https://video.my51share.com/image/default/E4645D43FEFB4673BD3ECDDCFFFD49F6-6-2.png',
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
.second{
    margin:auto  auto;
    width:375px;
    height:717px;
   // background:linear-gradient(180deg,rgba(0,214,255,1) 0%,rgba(22,56,241,1) 100%);
    position: relative;
}
.second_wrap{
    max-width: 414px;
    min-width: 375px;
    width:375px;
    margin: 0px auto;
    height: 100%;
    position: relative;
    overflow: hidden;
}
.group_second_title{
  position:absolute;
  top:80px;
  width: 100%;
  height:40px;
  font-size:28px;
  font-family:PingFangSC-Medium,PingFang SC;
  font-weight:500;
  color:rgba(51,51,51,1);
  line-height:40px;
  text-align: center;
  & b{
    color:#FFB900;
  }
}
.group_second_subtitle{
   position:absolute;
   top:128px;
   width: 100%;
   text-align: center;
   height:44px;
   font-size:15px;
   font-family:PingFangSC-Medium,PingFang SC;
   font-weight:500;
   color:rgba(153,153,153,1);
   line-height:22px;
}
   .btn_wrap{
     position: absolute;
     top:187px;
     width: 100%;
     text-align: center;
   }
  .hq_reg_btn {
    position: relative;
    //text-align: center;
    margin: 0 auto;
    width:118px;
    height:50px;
    border-radius:6px;
    border:1px solid rgba(22,76,245,1);
    & span {
        height:50px;
        font-size:18px;
        font-family:PingFangSC-Medium,PingFang SC;
        font-weight:500;
        color:rgba(22,76,245,1);
        line-height:50px;
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
.group_second_layer{
  position: absolute;
  text-align: center;
  bottom: 37px;
}
</style>
