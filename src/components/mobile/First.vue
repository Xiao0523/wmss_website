<!--  -->
<template>
<div class='firth'>
   <div class="firth_wrap">
    <div class="group_first_logo">
        <img :src="logoUrl">
    </div>

     <div
        class="group_first_title"
      >
      让外贸订单<b>轻松</b>获取，<br>
       让你的业务覆盖<b>全世界</b>！
     </div>
     <div  class="group_first_subtitle">
       全球<b>700万+</b>国际采购商
     </div>

     <div class="btn_wrap">
       <div class="hq_reg_btn" >
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
   <Dialog
      :modal="modal"
      :form ="form"
      :Numeber = "Numeber"
      @send = "send"
      @callPhone ="callPhone"
      @Verification ="Verification"
      @close = "modal = false"
    ></Dialog>
</div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { getMixins } from '@/mixins/mixinsMobile'
import Dialog from '@/components/mobile/Dialog'
export default {
// import引入的组件需要注入到对象中才能使用
  components: {Dialog},
  mixins: [getMixins],
  data () {
    // 这里存放数据
    return {
      logoUrl: 'https://video.my51share.com/image/default/99BA03966B8949D684FE81F285CBA9F8-6-2.png',
      layerUrl: 'https://video.my51share.com/image/default/46DB9BF27ED0469FAE5200E68A006ED1-6-2.png',
      form: {
        name: '',
        way: '',
        sex: '0',
        validCode: '',
        source: 1
      }
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
   top:282px;
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
     top:367px;
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
  z-index: 2;
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
  z-index: 1;
}
</style>
