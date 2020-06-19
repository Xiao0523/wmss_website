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
      layerUrl: 'https://video.my51share.com/image/default/E4645D43FEFB4673BD3ECDDCFFFD49F6-6-2.png',
      form: {
        name: '',
        way: '',
        sex: '0',
        validCode: '',
        source: 2
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
