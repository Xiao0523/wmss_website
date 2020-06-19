<!--  -->
<template>
  <div>
    <div
      class="group_sixth"
      :style="'height:' + fullHeight + 'px; ' + 'width:' + fullWidth + 'px;'"
    >
      <div class="group_sixth_layer" :style="'width:' + fullWidth + 'px;'">
        <img
          :src="layerUrl"
          fluid
          alt="Responsive image"
          style="height:297px;width:282px;"
        />
      </div>
      <div class="hq_reg_btn">
        <div class="set_4_button2 raised hoverable " @click="obtain">
          <div class="anim"></div>
          <span
            >同样的营销费用，可以得到<b>更多的询盘订单和客户信息</b>！！！</span
          >
        </div>
      </div>
      <div class="group_sixth_public">
        <img
          :src="publicUrl"
          fluid
          alt="Responsive image"
          :style="
            'height:' + publicHeight + 'px;' + 'width:' + publicHeight + 'px;'
          "
        />
      </div>
      <div
        class="group_sixth_public_text"
        :style="'width:' + publicHeight + 'px;'"
      >
        关注公众号
      </div>
      <div class="group_sixth_WeChat">
        <img
          :src="wechatUrl"
          fluid
          alt="Responsive image"
          :style="
            'height:' + publicHeight + 'px;' + 'width:' + publicHeight + 'px;'
          "
        />
      </div>
      <div
        class="group_sixth_WeChat_text"
        :style="
          'height:' + publicHeight + 'px;' + 'width:' + publicHeight + 'px;'
        "
      >
        微信联系
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
    <div
      class="sixth_bottom"
      :style="'height:' + bottomHeight + 'px; ' + 'width:' + fullWidth + 'px;'"
    >
      <div
        class="sixth_bottom_text"
        :style="
          'line-height:' +
            bottomHeight +
            'px;' +
            'height:' +
            bottomHeight +
            'px;'
        "
      >
        © 2019 宁波一顺二维文化传媒有限公司 - All Rights Reserved
      </div>
    </div>
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
      fullHeight: document.documentElement.clientHeight * (920 / 990),
      fullWidth: document.documentElement.clientWidth,
      layerUrl:
        'https://video.my51share.com/image/default/07512BC522584C4CA75BB6B1E7920EAF-6-2.png',
      layerHeight: document.documentElement.clientHeight * (297 / 990),
      layerWidth: document.documentElement.clientWidth * (282 / 2560),
      publicUrl:
        'https://video.my51share.com/image/default/E2E492CAFD864BDD8B10B303C698A908-6-2.png',
      publicHeight: document.documentElement.clientHeight * (140 / 990),
      publicWidth: document.documentElement.clientWidth * (140 / 2560),
      wechatUrl:
        'https://video.my51share.com/image/default/E48DD0C5BE5A4D0AAAE3DBECF31BA052-6-2.png',
      bottomHeight: document.documentElement.clientHeight * (70 / 990),
      dialogFormVisible: false,
      form: {
        name: '',
        way: '',
        sex: '0',
        validCode: '',
        source: 6
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
          that.fullHeight = window.fullHeight * (920 / 990)
          that.fullWidth = document.documentElement.clientWidth
          that.layerHeight = window.fullHeight * (297 / 990)
          that.layerWidth = document.documentElement.clientWidth * (282 / 2560)
          that.publicHeight = window.fullHeight * (140 / 990)
          that.publicWidth =
            document.documentElement.clientWidth * (140 / 2560)
          that.bottomHeight = window.fullHeight * (70 / 990)
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
.group_sixth {
  position: relative;
  overflow: hidden;
  background: url("https://video.my51share.com/image/default/D47DC351F4054BAC9C89CC4FA4C575A9-6-2.png");
  background-size: auto auto;
  background-position: top right;
}
.group_sixth_title {
  position: absolute;
  top: 20.2%;
  left: 22.34%;
  font-size: 36px;
  font-family: PingFangSC-Medium, PingFang SC;
  color: rgba(51, 51, 51, 1);
  & span {
    color: #ff452d;
  }
}
.group_sixth_subtitle {
  position: absolute;
  left: 22.34%;
  top: 35.82%;
  font-family: PingFangSC-Medium, PingFang SC;
  color: rgba(153, 153, 153, 1);
  font-size: 20px;
}
.btn_wrap {
  position: relative;
  top: 40.71%;
  width: 100%;
  text-align: center;
}
.hq_reg_btn {
  position: absolute;
  border-radius: 50px;
  top: 43.71%;
  left: 30%;
  width: 802px;
  height: 80px;
  border-radius: 50px;
  border: 2px solid rgba(255, 255, 255, 1);
  & span {
    width: 737px;
    height: 37px;
    font-size: 26px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 37px;
    letter-spacing: 1px;
    position: relative;
    top: 23%;
    & b {
      color: #ffb900;
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
.group_sixth_layer {
  position: absolute;
  top: 12.12%;
  text-align: center;
}
.group_sixth_public {
  position: absolute;
  top: 61.92%;
  left: 42.58%;
}
.group_sixth_public_text {
  position: absolute;
  top: 78.3%;
  left: 42.58%;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 30px;
  font-size: 22px;
  text-align: center;
}
.group_sixth_WeChat {
  position: absolute;
  top: 61.92%;
  left: 51.95%;
}
.group_sixth_WeChat_text {
  position: absolute;
  top: 78.3%;
  left: 51.95%;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 30px;
  font-size: 22px;
  text-align: center;
}
.sixth_bottom {
  position: absolute;
  background: rgba(20, 102, 248, 1);
  bottom: 0;
  text-align: center;
}
.sixth_bottom_text {
  position: relative;
  text-align: center;

  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);

  letter-spacing: 1px;
}
.dialog_title {
  font-size: 20px;
  & b {
    color: #ffb900;
  }
}
</style>
