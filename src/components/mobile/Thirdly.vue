<!--  -->
<template>
<div class='thirdly'>
   <div class="thirdly_wrap">
     <div
        class="group_thirdly_title"
      >
      最低<b>9800元/年</b>起,
      获取价值<b>超20万</b>的广告投放效果
     </div>
     <div  class="group_thirdly_subtitle">
       让你轻松拥有多个国际站推广账号<br>
       并为你配备专业的优化及运营团队
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
      layerUrl: 'https://video.my51share.com/image/default/D91C433F6D2E4D16A311861E6A8E1F55-6-2.png',
      form: {
        name: '',
        way: '',
        sex: '0',
        validCode: '',
        source: 3
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
  top:40px;
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
     top:180px;
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
