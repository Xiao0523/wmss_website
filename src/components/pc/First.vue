<!--  -->
<template>
  <div class="">
    <div
      class="group_first"
      :style="'height:' + fullHeight + 'px; ' + 'width:' + fullWidth"
    >
      <div
        class="group_first_logo"
        :style="'height:' + logoHeight + 'px;' + 'width:100%'"
      >
        <img
          :src="logoUrl"
          fluid
          alt="Responsive image"
          :style="'height:' + logoHeight + 'px;' + 'width:' + logoWidth"
        />
      </div>

      <div
        class="group_first_title"
        :style="'height:' + titleHeight + 'px;' + 'width:' + titleWidth"
      >
        <img
          :src="titleUrl"
          fluid
          alt="Responsive image"
          :style="'height:' + titleHeight + 'px;' + 'width:' + titleWidth"
        />
      </div>
      <div
        class="group_first_subtitle"
        :style="'font-size:' + fontSize + 'px;'"
      >
        全球<span :style="'font-size:' + fontSize * 2 + 'px;'">700万+</span
        >国际采购商
      </div>

      <div
        class="group_first_layer"
        :style="'height:' + layerHeight + 'px;' + 'width:' + fullWidth + 'px;'"
      >
        <img
          :src="layerUrl"
          fluid
          alt="Responsive image"
          :style="
            'height:' + layerHeight + 'px;' + 'width:' + layerWidth + 'px;'
          "
        />
      </div>
      <div class="hq_reg_btn">
        <div class="set_4_button2 raised hoverable " @click="obtain">
          <div class="anim"></div>
          <span>现在获取</span>
          </div>
      </div>
    </div>
    <el-dialog
      :visible.sync="dialogFormVisible"
      width="20%"
      append-to-body
      center
      custom-class="el-dialog_radius"
    >
      <div slot="title" class="dialog_title">
        <span>截止目前为止已有<b>{{Numeber}}名</b>用户报名</span>
      </div>
      <el-form :model="form">
        <el-form-item>
          <el-input
            v-model="form.name"
            autocomplete="off"
            placeholder="姓(已加密)"
            style="width:50%"
          ></el-input>
          <el-radio v-model="form.sex" label="0" style="padding-left: 5%;"
            >先生</el-radio
          >
          <el-radio v-model="form.sex" label="1">女士</el-radio>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="form.way"
            autocomplete="off"
            placeholder="电话(请耐心等待咨询师联系)"
          ></el-input>
        </el-form-item>
        <el-form-item>
         <el-row>
           <el-col :span="12">
          <el-input
            v-model="form.validCode"
            placeholder="请输入短信验证码"
          ></el-input>
           </el-col>
          <el-col :span="1" class="back"></el-col>
          <el-col :span="8">
             <el-button class="code-btn"  @click="send">获取验证码</el-button>
          </el-col>
         </el-row>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="Verification">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { getSignUpNumeber } from '@/mixins/getNumeber'
export default {
// import引入的组件需要注入到对象中才能使用
  components: {},
  mixins: [getSignUpNumeber],
  data () {
    // 这里存放数据
    return {
      fullHeight: document.documentElement.clientHeight,
      fullWidth: document.documentElement.clientWidth,
      logoUrl:
        'https://video.my51share.com/image/default/4DDB9B4676A54B398E92897038D877BE-6-2.png',
      logoHeight: document.documentElement.clientHeight * (121 / 990),
      logoWidth: document.documentElement.clientWidth * 0.12,
      titleUrl:
        'https://video.my51share.com/image/default/B22F95BF94784C6BB0E0C2C5CCEB5AA3-6-2.png',
      titleHeight: document.documentElement.clientHeight * (55 / 990),
      titleWidth: document.documentElement.clientWidth * (977 / 2560),
      fontSize: (23 * document.documentElement.clientHeight) / 990,
      layerUrl:
        'https://video.my51share.com/image/default/F7B374D377084AAD962367887C1E3048-6-2.png',
      layerHeight: document.documentElement.clientHeight * (704 / 990),
      layerWidth:
        document.documentElement.clientHeight * (704 / 990) * (1613 / 704),

      btnHeight: document.documentElement.clientHeight * (50 / 990),
      btnWidth: document.documentElement.clientWidth * (184 / 2560)
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {
    fullHeight (val) {
      // 监控浏览器高度变化
      if (!this.timer) {
        this.fullHeight = val
        this.timer = true
        let that = this
        setTimeout(function () {
          that.timer = false
        }, 400)
      }
    },
    logoHeight (val) {
      // 监控浏览器高度变化
      if (!this.timer) {
        this.logoHeight = val
        this.timer = true
        let that = this
        setTimeout(function () {
          that.timer = false
        }, 400)
      }
    }
  },
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
          that.logoHeight = window.fullHeight * (121 / 990)
          that.logoWidth = document.documentElement.clientWidth * 0.12
          that.titleHeight = window.fullHeight * (55 / 990)
          that.titleWidth = document.documentElement.clientWidth * (977 / 2560)
          that.fontSize = (23 * window.fullHeight) / 990
          that.layerHeight =
            document.documentElement.clientHeight * (704 / 990)
          that.layerWidth = that.layerHeight * (1613 / 704)
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
.group_first {
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #4fa1f3 0%, rgba(22, 56, 241, 1) 100%);
  &_logo {
    text-align: center;
  }
  &_title {
    width: 100%;
    text-align: center;
    position: absolute;
    top: 18.18%;
  }
  &_subtitle {
    width: 100%;
    top: 27.76%;
    text-align: center;
    position: absolute;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 40px;
    letter-spacing: 2px;
    & span {
      color: #ffb900;
    }
  }
  &_layer {
    position: absolute;
    bottom: 0;
    text-align: center;
    background: url("https://video.my51share.com/image/default/F7B374D377084AAD962367887C1E3048-6-2.png")
      left center center;
  }
  .hq_reg_btn {
    position: absolute;
    float: left;
    text-align: center;
    top: 38.35%;
  //  top: 64.35%;
    left: 45%;
    width: 184px;
    height: 50px;
    border-radius: 6px;
    border: 1px solid rgba(255, 255, 255, 1);
    & span {
      font-size: 18px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 50px;
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

.anim {
  -moz-transform: translateY(-50%) translateX(-50%);
  -ms-transform: translateY(-50%) translateX(-50%);
  -webkit-transform: translateY(-50%) translateX(-50%);
  transform: translateY(-50%) translateX(-50%);
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: -1;
}

.anim:before {
  position: relative;
  content: "";
  display: block;
  margin-top: 100%;
}

.anim:after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 50%;
}

.hoverable .anim {
  -moz-animation: anim-out 0.75s;
  -webkit-animation: anim-out 0.75s;
  animation: anim-out 0.75s;
}

.hoverable .anim:after {
  -moz-animation: anim-out-pseudo 0.75s;
  -webkit-animation: anim-out-pseudo 0.75s;
  animation: anim-out-pseudo 0.75s;
}

.hoverable .anim,
.hoverable .anim:after {
  animation-iteration-count: infinite;
  animation-duration: 1.3s;
}

@-webkit-keyframes anim-in {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

@-moz-keyframes anim-in {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

@-ms-keyframes anim-in {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

@keyframes anim-in {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

@-webkit-keyframes anim-in-pseudo {
  0% {
    background: rgba(255, 206, 182, 0.35);
  }
  100% {
    background: transparent;
  }
}

@-moz-keyframes anim-in-pseudo {
  0% {
    background: rgba(255, 206, 182, 0.35);
  }
  100% {
    background: transparent;
  }
}

@-ms-keyframes anim-in-pseudo {
  0% {
    background: rgba(255, 206, 182, 0.35);
  }
  100% {
    background: transparent;
  }
}

@keyframes anim-in-pseudo {
  0% {
    background: rgba(255, 206, 182, 0.35);
  }
  100% {
    background: transparent;
  }
}

@-webkit-keyframes anim-out {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

@-moz-keyframes anim-out {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

@-ms-keyframes anim-out {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

@keyframes anim-out {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

@-webkit-keyframes anim-out-pseudo {
  0% {
    background: rgba(255, 206, 182, 0.35);
  }
  100% {
    background: transparent;
  }
}

@-moz-keyframes anim-out-pseudo {
  0% {
    background: rgba(255, 206, 182, 0.35);
  }
  100% {
    background: transparent;
  }
}

@-ms-keyframes anim-out-pseudo {
  0% {
    background: rgba(255, 206, 182, 0.35);
  }
  100% {
    background: transparent;
  }
}

@keyframes anim-out-pseudo {
  0% {
    background: rgba(255, 206, 182, 0.35);
  }
  100% {
    background: transparent;
  }
}
.dialog_title {
  font-size: 20px;
  & b {
    color: #ffb900;
  }
}
</style>
<style>
.el-dialog_radius {
  border-radius: 10px;
}
</style>
