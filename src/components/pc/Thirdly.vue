<!--  -->
<template>
  <div
    class="group_thirdly"
    :style="'height:' + fullHeight + 'px; ' + 'width:' + fullWidth + 'px;'"
  >
    <div class="group_thirdly_title">
    最低<b>9800元/年</b>起<br>
   获取价值<b>超20万</b>的广告投放效果
    </div>
    <div class="group_thirly_subtitle">
    让你轻松拥有多个国际站推广账号<br>
    并为你配备专业的优化及运营团队
    </div>
    <div class="hq_reg_btn">
      <div class="set_4_button2 raised hoverable " @click="obtain">
        <div class="anim"></div>
        <span>现在获取</span>
      </div>
    </div>
    <div
      class="group_second_layer"
      :style="'height:' + layerHeight + 'px;' + 'width:' + layerWidth + 'px;'"
    >
      <img
        :src="layerUrl"
        fluid
        alt="Responsive image"
        :style="'height:' + layerHeight + 'px;' + 'width:' + layerWidth + 'px;'"
      />
    </div>
    <Dialog
      :dialogFormVisible="dialogFormVisible"
      :form ="form"
      :Numeber = "Numeber"
      @send = "send"
      @cancelFn ="dialogFormVisible = false"
      @Verification ="Verification"
      @close = "dialogFormVisible = false"
     >
     </Dialog>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { getSignUpNumeber } from '@/mixins/getNumeber'
import Dialog from '@/components/pc/Dialog'
export default {
// import引入的组件需要注入到对象中才能使用
  components: {Dialog},
  mixins: [getSignUpNumeber],
  data () {
    // 这里存放数据
    return {
      fullHeight: document.documentElement.clientHeight,
      fullWidth: document.documentElement.clientWidth,
      layerUrl:
        'https://video.my51share.com/image/default/6A3182D98D4C4019B11F4CFF07274784-6-2.png',
      layerHeight: document.documentElement.clientHeight * (715 / 990),
      layerWidth: document.documentElement.clientHeight * (635 / 990),
      dialogFormVisible: false,
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
    get_bodyHeight () {
      // 动态获取浏览器高度
      const that = this
      window.onresize = () => {
        return (() => {
          window.fullHeight = document.documentElement.clientHeight
          that.fullHeight = window.fullHeight
          that.fullWidth = document.documentElement.clientWidth
          that.layerHeight = window.fullHeight * (715 / 990)
          that.layerWidth = window.fullHeight * (635 / 990)
        })()
      }
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
    this.get_bodyHeight()
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {},
  beforeCreate () {}, // 生命周期 - 创建之前
  beforeMount () {}, // 生命周期 - 挂载之前
  beforeUpdate () {}, // 生命周期 - 更新之前
  updated () {}, // 生命周期 - 更新之后
  beforeDestroy () {}, // 生命周期 - 销毁之前
  destroyed () {}, // 生命周期 - 销毁完成
  activated () {} // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
.group_thirdly {
  position: relative;
  overflow: hidden;
  background: url("https://video.my51share.com/image/default/34861C7B7ABB46EAAB3CAE66EC5284B1-6-2.png");
  background-size: auto auto;
  background-position: top right;
}
.group_thirdly_title {
  position: absolute;
  left: 13.34%;
  top: 8.11%;
  font-size: 36px;
  width: 30%;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  line-height: 50px;
  text-align: center;
   & b {
    color: #ffb900;
  }
}
.group_thirly_subtitle {
  position: absolute;
  left: 13.34%;
  top: 19.68%;
  width: 30%;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  font-size: 20px;
  color: rgba(153, 153, 153, 1);
  line-height: 28px;
   text-align: center;
}
.hq_reg_btn {
  position: absolute;
  left: 20.34%;
  top: 27.53%;
  width: 118px;
  height: 50px;
  border-radius: 6px;
  border: 2px solid rgba(22, 76, 245, 1);
  & span {
    width: 72px;
    height: 50px;
    font-size: 18px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(22, 76, 245, 1);
    line-height: 50px;
    position: relative;
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
.group_second_layer {
  position: absolute;
  left: 50.98%;
  top: 3.03%;
}
.dialog_title {
  font-size: 20px;
  & b {
    color: #ffb900;
  }
}
</style>
