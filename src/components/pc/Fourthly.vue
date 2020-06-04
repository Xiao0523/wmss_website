<!--  -->
<template>
  <div
    class="group_fourthly"
    :style="'height:' + fullHeight + 'px; ' + 'width:' + fullWidth + 'px;'"
  >
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
    <div class="group_thirdly_title">
      <span>利润</span>是你的，<span>客户</span>也是你的
    </div>
    <div class="group_thirly_subtitle">
      零基础起步外贸业务，轻松收获高达<span>13%</span>退税
    </div>
    <div class="hq_reg_btn">
      <div class="set_4_button2 raised hoverable " @click="obtain">
        <div class="anim"></div>
        <span>现在获取</span>
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
        <span>截止目前为止已有<b>5038名</b>用户报名</span>
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
            placeholder="请输入验证码"
          ></el-input>
           </el-col>
           <el-col :span="12">
          <img v-lazy="form.codeUrl" style="padding-left: 10%;" />
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
import { getCode, patchConsultation } from '@/api/getCode'

export default {
  // import引入的组件需要注入到对象中才能使用
  components: {},
  data () {
    // 这里存放数据
    return {
      fullHeight: document.documentElement.clientHeight,
      fullWidth: document.documentElement.clientWidth,
      layerUrl:
        'https://video.my51share.com/image/default/5CF749FBBC134D649C59B7BE2EE9D454-6-2.png',
      layerHeight: document.documentElement.clientHeight * (591 / 990),
      layerWidth: document.documentElement.clientHeight * (828 / 990),
      dialogFormVisible: false,
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
    get_bodyHeight () {
      // 动态获取浏览器高度
      const that = this
      window.onresize = () => {
        return (() => {
          window.fullHeight = document.documentElement.clientHeight
          that.fullHeight = window.fullHeight
          that.fullWidth = document.documentElement.clientWidth
          that.layerHeight = window.fullHeight * (591 / 990)
          that.layerWidth = window.fullHeight * (828 / 990)
        })()
      }
    },
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
          this.dialogFormVisible = true
        })
    },
    Verification () {
      if (!this.form.way) {
        this.$message({
          message: '请先输入联系方式',
          type: 'warning',
          duration: 5000
        })
        return
      }
      if (!this.form.name) {
        this.$message({
          message: '请先输入姓',
          type: 'warning',
          duration: 5000
        })
        return
      }
      patchConsultation(this.form)
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

          this.$message({
            message: res.data.message,
            type: 'success',
            duration: 4000
          })
          this.dialogFormVisible = false
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
.group_fourthly {
  position: relative;
  overflow: hidden;
  background: url("https://video.my51share.com/image/default/9930281CD3E54FE583A1CF093E929376-6-2.png");
  background-size: auto auto;
  background-position: top right;
}

.group_second_layer {
  position: absolute;
  left: 7.64%;
  top: 5.25%;
}
.group_thirdly_title {
  position: absolute;
  left: 54.77%;
  top: 31.21%;
  font-size: 36px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  & span {
    color: #ffb900;
  }
}
.group_thirly_subtitle {
  position: absolute;
  left: 54.77%;
  top: 37.78%;
  font-family: PingFangSC-Medium, PingFang SC;
  color: rgba(153, 153, 153, 1);
  font-size: 20px;
  & span {
    color: #ff452d;
  }
}
.hq_reg_btn {
  position: absolute;
  left: 54.77%;
  top: 42.63%;
  width: 118px;
  height: 50px;
  border-radius: 6px;
  border: 1px solid rgba(22, 76, 245, 1);
  & span {
    width: 72px;
    height: 50px;
    font-size: 18px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(22, 76, 245, 1);
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
.dialog_title {
  font-size: 20px;
  & b {
    color: #ffb900;
  }
}
</style>
