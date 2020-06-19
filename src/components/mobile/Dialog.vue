<!--  -->
<template>
 <Modal v-model="Mymodal" draggable scrollable  width="330"
 @on-cancel ="close"
 >
        <p slot="header" style="text-align:center">
            <span style="font-size:16px;
                         font-family:PingFangSC-Medium,PingFang SC;
                         color:rgba(51,51,51,1);line-height:16px;">
                         截止目前已有<b style="color:#FFB900">{{Numeber}}名</b>名用户报名</span>
        </p>
        <div>
        <Form :model="form">
           <FormItem>
            <Row>
             <Col span="12">
              <Input v-model="form.name" placeholder="姓名（已加密）" size="large" clearable  style="width: 100%" />
             </Col>
              <Col span="12" tyle="text-align:center">
                 <RadioGroup v-model="form.sex" size="large" style="padding-left: 10%;">
                        <Radio label="0">先生</Radio>
                        <Radio label="1">女士</Radio>
               </RadioGroup>
             </Col>y
            </Row>
          </FormItem>
          <FormItem>
              <Input  v-model="form.way" placeholder="手机号(请耐心等待咨询师联系)" size="large"  clearable  style="width: 100%" />
          </FormItem>
            <FormItem >
            <Row>
              <Col span="12">
                  <Input v-model="form.validCode" placeholder="请输入短信验证码" size="large"  clearable />
              </Col>
              <Col span="1" style="height:5px"/>
              <Col span="11">
                 <Button  type="primary" class="code-btn"   @click="send">获取验证码</Button>
              </Col>
            </Row>
            </FormItem>
        </Form>
        </div>
        <div slot="footer">
          <Form >
          <FormItem >
            <Button type="primary" size="large" long  @click="Verification">立即报名享优惠</Button>
          </FormItem>
           <FormItem >
             <Button type="info" size="large" long ghost   @click="callPhone" >
              <Icon type="ios-call" size = "30"/>
                电话拨打
            </Button>
           </FormItem>
          </Form>
        </div>
    </Modal>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
// import引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    modal: {
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
      Mymodal: this.modal
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {
    modal (val) {
      this.Mymodal = val// 新增result的watch，监听变更并同步到myResult上
    }
  },
  // 方法集合
  methods: {
    send () {
      this.$emit('send')
    },
    Verification () {
      this.$emit('Verification')
    },
    callPhone () {
      this.$emit('callPhone')
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
