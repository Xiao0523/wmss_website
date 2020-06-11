<!--  -->
<template>
<div class='thirdly'>
   <div class="thirdly_wrap">
     <div
        class="group_thirdly_title"
      >
      让客户无法忽视你的<b>存在</b>
     </div>
     <div  class="group_thirdly_subtitle">
        谷歌推广+个人商务社交站+企业全球站=绝配
     </div>
     <div class="btn_wrap">
       <div class="hq_reg_btn">
          <div class="set_4_button2 raised hoverable " @click="obtain">
             <div class="anim"></div>
             <span>现在获取</span>
          </div>
      </div>
     </div>
      <div class="group_thirdly_layer">
        <img
          :src="layerUrl"
          fluid
          alt="Responsive image"
        />
      </div>
      <div class="group_thirdly_background">
        <div class="group_thirdly_layer">
        <img
          :src="layerUrl"
          fluid
          alt="Responsive image"
        />
      </div>
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
              <Input  v-model="form.way" placeholder="手机号(请耐心等待咨询师联系)" size="large"  clearable  style="width: 100%" />
          </FormItem>
            <FormItem >
            <Row>
              <Col span="12">
                  <Input v-model="form.validCode" placeholder="请输入短信验证码" size="large"  clearable />
              </Col>
              <Col span="1" style="height:5px"/>
              <Col span="11">
                 <Button  type="primary" class="code-btn"   @click="send">获取验证码</Button>
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
import { getMixins } from '@/mixins/mixinsMobile'
export default {
// import引入的组件需要注入到对象中才能使用
  components: {},
  mixins: [getMixins],
  data () {
    // 这里存放数据
    return {
      layerUrl: 'https://video.my51share.com/image/default/D91C433F6D2E4D16A311861E6A8E1F55-6-2.png'
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
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
.thirdly{
    margin:auto  auto;
    width:375px;
    height:717px;
   // background:linear-gradient(180deg,rgba(0,214,255,1) 0%,rgba(22,56,241,1) 100%);
    //background: url(https://video.my51share.com/image/default/4C8A9F08DBB94A7DBF4645AB92283BAD-6-2.png) bottom;
    position: relative;
}
.thirdly_wrap{
    max-width: 414px;
    min-width: 375px;
    width:375px;
    margin: 0px auto;
    height: 100%;
    position: relative;
    overflow: hidden;
}
.group_thirdly_title{
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
.group_thirdly_subtitle{
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
     top:165px;
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
  z-index: 3;
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
.group_thirdly_layer{
  position: absolute;
  text-align: center;
  bottom: 19px;
  z-index: 1;
}
.group_thirdly_background{
    z-index: 2;
   position: absolute;
   bottom: 0;
   width: 375px;
   height: 552px;
   z-index: 2;
   background: url(https://video.my51share.com/image/default/4C8A9F08DBB94A7DBF4645AB92283BAD-6-2.png) center center;
   background-size:375px 552px;
}
</style>
