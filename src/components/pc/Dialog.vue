<!--  -->
<template>
  <el-dialog
      :visible.sync="myDialogFormVisible"
      width="20%"
      append-to-body
      center
      custom-class="el-dialog_radius"
      @close= "close"
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
        <el-button @click="cancelFn">取 消</el-button>
        <el-button type="primary" @click="Verification">确 定</el-button>
      </div>
    </el-dialog>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
// import引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    dialogFormVisible: {
      type: Boolean,
      default: false
    },
    Numeber: {
      type: Number,
      default: 3680
    },
    form: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    // 这里存放数据
    return {
      myDialogFormVisible: this.dialogFormVisible
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {
    dialogFormVisible (val) {
      this.myDialogFormVisible = val// 新增result的watch，监听变更并同步到myResult上
    }
  },
  // 方法集合
  methods: {
    send () {
      this.$emit('send')
    },
    cancelFn () {
      this.$emit('cancelFn')
    },
    Verification () {
      this.$emit('Verification')
    },
    close () {
      this.$emit('close')
    }
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

</style>
