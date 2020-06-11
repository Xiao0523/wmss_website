<!--  -->
<template>
  <div
    class="group_second"
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
    <div class="group_second_title">
      提升外贸询盘量<span>3倍</span>以上
    </div>
    <div class="group_second_subtitle">
      阿里巴巴国际站，中国制造国际站，环球资源站，<br />
      三平台多账号广告投放
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
      layerHeight: document.documentElement.clientHeight * (556 / 990),
      layerWidth: document.documentElement.clientHeight * (845 / 990),
      layerUrl:
        'https://video.my51share.com/image/default/FAF34602314B44E39914BB5542995AB2-6-2.png',
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
          that.layerHeight = window.fullHeight * (556 / 990)
          that.layerWidth = window.fullHeight * (845 / 990)
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
.group_second {
  position: relative;
  overflow: hidden;
  background: url("https://video.my51share.com/image/default/5A2F85668C44409D95376268646A6998-6-2.png");
  background-size: auto auto;
  background-position: bottom right;
}
.group_second_layer {
  position: absolute;
  top: 22.22%;
  left: 10.3%;
}
.group_second_title {
  position: absolute;
  top: 28.08%;
  left: 54.69%;
  height: 5.05%;
  font-size: 36px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  line-height: 50px;
  & span {
    color: #ffb900;
  }
}
.group_second_subtitle {
  position: absolute;
  top: 33.65%;
  left: 54.69%;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(153, 153, 153, 1);
  font-size: 20px;
}
.hq_reg_btn {
  position: absolute;
  top: 41.42%;
  left: 54.69%;
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
.dialog_title {
  font-size: 20px;
  & b {
    color: #ffb900;
  }
}
</style>
