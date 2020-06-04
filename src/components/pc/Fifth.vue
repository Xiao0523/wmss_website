<!--  -->
<template>
  <div
    class="group_fifth"
    :style="'height:' + fullHeight + 'px; ' + 'width:' + fullWidth + 'px;'"
  >
    <div class="group_fifth_title">
      针对不同的企业和用户，<br />
      <span>免费</span>提供对应的外贸询盘
    </div>
    <div class="group_fifth_subtitle">
      免费提供！免费提供！免费提供！
    </div>
    <div class="hq_reg_btn">
      <div class="set_4_button2 raised hoverable " @click="obtain">
        <div class="anim"></div>
        <span>现在获取</span>
      </div>
    </div>
    <div
      class="group_fifth_layer"
      :style="'height:' + layerHeight + 'px;' + 'width:' + layerWidth + 'px;'"
    >
      <img
        :src="layerUrl"
        fluid
        alt="Responsive image"
        :style="'height:' + layerHeight + 'px;' + 'width:' + layerWidth + 'px;'"
      />
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
        'https://video.my51share.com/image/default/FC06C9D6B1A346ADB1B0057B37FF3209-6-2.png',
      layerHeight: document.documentElement.clientHeight * (539 / 990),
      layerWidth: document.documentElement.clientHeight * (748 / 990),
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
        this.get_bodyHeight()
      }
    },
    fullWidth (val) {
      // 监控浏览器高度变化
      if (!this.timer) {
        this.fullWidth = val
        this.timer = true
        let that = this
        setTimeout(function () {
          that.timer = false
        }, 400)
        this.get_bodyHeight()
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
          that.layerHeight = window.fullHeight * (539 / 990)
          that.layerWidth = window.fullHeight * (748 / 990)
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
.group_fifth {
  position: relative;
  overflow: hidden;
  background: url("https://video.my51share.com/image/default/BB8B5499152D4F19B0A19C3D6A735F23-6-2.png");
  background-size: auto auto;
  background-position: top right;
}
.group_fifth_title {
  position: absolute;
  top: 20.2%;
  left: 27.34%;
  font-size: 36px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  line-height: 50px;
  & span {
    color: #ff452d;
  }
}
.group_fifth_subtitle {
  position: absolute;
  left: 27.34%;
  top: 31.82%;
  font-family: PingFangSC-Medium, PingFang SC;
  color: #ff452d;
  font-size: 20px;
  font-weight: 500;
  color: rgba(255, 69, 45, 1);
  line-height: 28px;
}
.hq_reg_btn {
  position: absolute;
  left: 27.34%;
  top: 36.67%;
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
.group_fifth_layer {
  position: absolute;
  left: 51.29%;
  top: 14.95%;
}
.dialog_title {
  font-size: 20px;
  & b {
    color: #ffb900;
  }
}
</style>
