<!--  -->
<template>
<div class='second'>
   <div class="second_wrap">
     <div
        class="group_second_title"
      >
      <b>利润</b>是你的，<b>客户</b>也是你的
     </div>
     <div  class="group_second_subtitle">
       零基础起步外贸业务，轻松收获高达13%退税
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
      layerUrl: 'https://video.my51share.com/image/default/89405DEF904E4C55817CA128041B70F5-6-2.png',
      form: {
        name: '',
        way: '',
        sex: '0',
        validCode: '',
        source: 4
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
.second{
    margin:auto  auto;
    width:375px;
    height:717px;
   // background:linear-gradient(180deg,rgba(0,214,255,1) 0%,rgba(22,56,241,1) 100%);
    background: url("https://video.my51share.com/image/default/371338C6E6AB40329B88F97DC5AB0930-6-2.png");
    background-size:375px 717px;
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
  color:#FFFFFF;
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
   color:#FFFFFF;
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
    border:1px solid rgba(255,255,255,1);
    & span {
        height:50px;
        font-size:18px;
        font-family:PingFangSC-Medium,PingFang SC;
        font-weight:500;
        color:rgba(255,255,255,1);
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
  bottom: 30px;
}
</style>
