webpackJsonp([1],{"+708":function(e,t,i){"use strict";var o={name:"vue-particles",props:{color:{type:String,default:"#dedede"},particleOpacity:{type:Number,default:.7},particlesNumber:{type:Number,default:80},shapeType:{type:String,default:"circle"},particleSize:{type:Number,default:4},linesColor:{type:String,default:"#dedede"},linesWidth:{type:Number,default:1},lineLinked:{type:Boolean,default:!0},lineOpacity:{type:Number,default:.4},linesDistance:{type:Number,default:150},moveSpeed:{type:Number,default:3},hoverEffect:{type:Boolean,default:!0},hoverMode:{type:String,default:"grab"},clickEffect:{type:Boolean,default:!0},clickMode:{type:String,default:"push"}},mounted:function(){var e=this;i("JAHf"),this.$nextTick(function(){e.initParticleJS(e.color,e.particleOpacity,e.particlesNumber,e.shapeType,e.particleSize,e.linesColor,e.linesWidth,e.lineLinked,e.lineOpacity,e.linesDistance,e.moveSpeed,e.hoverEffect,e.hoverMode,e.clickEffect,e.clickMode)})},methods:{initParticleJS:function(e,t,i,o,a,n,l,s,r,d,c,m,u,f,h){particlesJS("particles-js",{particles:{number:{value:i,density:{enable:!0,value_area:800}},color:{value:e},shape:{type:o,stroke:{width:0,color:"#192231"},polygon:{nb_sides:5}},opacity:{value:t,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:a,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:s,distance:d,color:n,opacity:r,width:l},move:{enable:!0,speed:c,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:m,mode:u},onclick:{enable:f,mode:h},onresize:{enable:!0,density_auto:!0,density_area:400}},modes:{grab:{distance:140,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}}},a={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{attrs:{id:"particles-js",color:e.color,particleOpacity:e.particleOpacity,linesColor:e.linesColor,particlesNumber:e.particlesNumber,shapeType:e.shapeType,particleSize:e.particleSize,linesWidth:e.linesWidth,lineLinked:e.lineLinked,lineOpacity:e.lineOpacity,linesDistance:e.linesDistance,moveSpeed:e.moveSpeed,hoverEffect:e.hoverEffect,hoverMode:e.hoverMode,clickEffect:e.clickEffect,clickMode:e.clickMode}})},staticRenderFns:[]},n=i("VU/8")(o,a,!1,null,null,null);t.a=n.exports},BpKH:function(e,t){},GPkK:function(e,t,i){"use strict";var o=i("//Fk"),a=i.n(o),n=i("mtWM"),l=i.n(n),s=i("zL8q"),r=l.a.create({});r.defaults.withCredentials=!0,r.defaults.baseURL="https://www.my51share.com/waimaoshuishou/",r.interceptors.request.use(function(e){return s.Loading.service(),e},function(e){var t=s.Loading.service();return setTimeout(function(){t.close(),Object(s.Message)({message:"请求超时",type:"error"})},1e3),a.a.reject(e)}),r.interceptors.response.use(function(e){var t=s.Loading.service();return setTimeout(function(){t.close()},0),e},function(e){var t=s.Loading.service();return setTimeout(function(){t.close()},1e3),e&&e.response&&(403==e.response.status?Object(s.Message)({message:e.response.data.data,type:"error"}):Object(s.Message)({message:e.response.data.message,type:"error"})),a.a.reject(e)});var d=r,c={get:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return d.get(e,{params:t})},post:function(e,t){return d.post(e,t)},put:function(e,t){return d.put(e,t)},patch:function(e,t){return d.patch(e,t)},del:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return d.delete(e,{params:t})},del2:function(e,t){return d.delete(e,{data:t})}};function m(e){return c.get("api/code/"+e)}function u(e){return c.post("api/consultation",e)}i.d(t,"a",function(){return m}),i.d(t,"b",function(){return u})},X0l6:function(e,t){},c7Fe:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i("7+uW"),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var n=i("VU/8")({name:"App"},a,!1,function(e){i("sUkM")},null,null).exports,l=i("/ocq"),s=i("mtWM"),r=i.n(s),d=i("GPkK"),c={components:{},data:function(){return{fullHeight:document.documentElement.clientHeight,fullWidth:document.documentElement.clientWidth,logoUrl:"https://video.my51share.com/image/default/4DDB9B4676A54B398E92897038D877BE-6-2.png",logoHeight:document.documentElement.clientHeight*(121/990),logoWidth:.12*document.documentElement.clientWidth,titleUrl:"https://video.my51share.com/image/default/B22F95BF94784C6BB0E0C2C5CCEB5AA3-6-2.png",titleHeight:document.documentElement.clientHeight*(55/990),titleWidth:document.documentElement.clientWidth*(977/2560),fontSize:23*document.documentElement.clientHeight/990,layerUrl:"https://video.my51share.com/image/default/F7B374D377084AAD962367887C1E3048-6-2.png",layerHeight:document.documentElement.clientHeight*(704/990),layerWidth:document.documentElement.clientHeight*(704/990)*(1613/704),btnHeight:document.documentElement.clientHeight*(50/990),btnWidth:.071875*document.documentElement.clientWidth,dialogFormVisible:!1,form:{name:"",way:"",detail:"现在获取",sex:"0",validCode:"",code:"",codeUrl:""}}},computed:{},watch:{fullHeight:function(e){if(!this.timer){this.fullHeight=e,this.timer=!0;var t=this;setTimeout(function(){t.timer=!1},400)}},logoHeight:function(e){if(!this.timer){this.logoHeight=e,this.timer=!0;var t=this;setTimeout(function(){t.timer=!1},400)}}},methods:{get_bodyHeight:function(){var e=this;window.onresize=function(){return window.fullHeight=document.documentElement.clientHeight,e.fullHeight=window.fullHeight,e.fullWidth=document.documentElement.clientWidth,e.logoHeight=window.fullHeight*(121/990),e.logoWidth=.12*document.documentElement.clientWidth,e.titleHeight=window.fullHeight*(55/990),e.titleWidth=document.documentElement.clientWidth*(977/2560),e.fontSize=23*window.fullHeight/990,e.layerHeight=document.documentElement.clientHeight*(704/990),void(e.layerWidth=e.layerHeight*(1613/704))}},obtain:function(){var e=this;this.form.code=Math.ceil(1e5*Math.random()),this.form.code=this.form.code+"YZM",Object(d.a)(this.form.code).then(function(t){if(t.data.code)return t.data.message&&e.$message({message:t.data.message,type:"warning",duration:3e3});t.data.data&&(e.form.codeUrl=t.data.data,e.dialogFormVisible=!0)})},Verification:function(){var e=this;this.form.way?this.form.name?Object(d.b)(this.form).then(function(t){if(t.data.code)return t.data.message&&e.$message({message:t.data.message,type:"warning",duration:3e3});e.$message({message:t.data.message,type:"success",duration:4e3}),e.dialogFormVisible=!1,e.form={name:"",phone:"",detail:"现在获取",sex:"0",validCode:"",code:"",codeUrl:""}}):this.$message({message:"请先输入姓",type:"warning",duration:5e3}):this.$message({message:"请先输入联系方式",type:"warning",duration:5e3})}},created:function(){this.get_bodyHeight()},mounted:function(){},beforeCreate:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},activated:function(){}},m={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{},[i("div",{staticClass:"group_first",style:"height:"+e.fullHeight+"px; width:"+e.fullWidth},[i("div",{staticClass:"group_first_logo",style:"height:"+e.logoHeight+"px;width:100%"},[i("img",{style:"height:"+e.logoHeight+"px;width:"+e.logoWidth,attrs:{src:e.logoUrl,fluid:"",alt:"Responsive image"}})]),e._v(" "),i("div",{staticClass:"group_first_title",style:"height:"+e.titleHeight+"px;width:"+e.titleWidth},[i("img",{style:"height:"+e.titleHeight+"px;width:"+e.titleWidth,attrs:{src:e.titleUrl,fluid:"",alt:"Responsive image"}})]),e._v(" "),i("div",{staticClass:"group_first_subtitle",style:"font-size:"+e.fontSize+"px;"},[e._v("\n      全球"),i("span",{style:"font-size:"+2*e.fontSize+"px;"},[e._v("700万+")]),e._v("国际采购商\n    ")]),e._v(" "),i("div",{staticClass:"group_first_layer",style:"height:"+e.layerHeight+"px;width:"+e.fullWidth+"px;"},[i("img",{style:"height:"+e.layerHeight+"px;width:"+e.layerWidth+"px;",attrs:{src:e.layerUrl,fluid:"",alt:"Responsive image"}})]),e._v(" "),i("div",{staticClass:"hq_reg_btn"},[i("div",{staticClass:"set_4_button2 raised hoverable ",on:{click:e.obtain}},[i("div",{staticClass:"anim"}),e._v(" "),i("span",[e._v("现在获取")])])])]),e._v(" "),i("el-dialog",{attrs:{visible:e.dialogFormVisible,width:"20%","append-to-body":"",center:"","custom-class":"el-dialog_radius"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[i("div",{staticClass:"dialog_title",attrs:{slot:"title"},slot:"title"},[i("span",[e._v("截止目前为止已有"),i("b",[e._v("5038名")]),e._v("用户报名")])]),e._v(" "),i("el-form",{attrs:{model:e.form}},[i("el-form-item",[i("el-input",{staticStyle:{width:"50%"},attrs:{autocomplete:"off",placeholder:"姓(已加密)"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),i("el-radio",{staticStyle:{"padding-left":"5%"},attrs:{label:"0"},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[e._v("先生")]),e._v(" "),i("el-radio",{attrs:{label:"1"},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[e._v("女士")])],1),e._v(" "),i("el-form-item",[i("el-input",{attrs:{autocomplete:"off",placeholder:"电话(请耐心等待咨询师联系)"},model:{value:e.form.way,callback:function(t){e.$set(e.form,"way",t)},expression:"form.way"}})],1),e._v(" "),i("el-form-item",[i("el-row",[i("el-col",{attrs:{span:12}},[i("el-input",{attrs:{placeholder:"请输入验证码"},model:{value:e.form.validCode,callback:function(t){e.$set(e.form,"validCode",t)},expression:"form.validCode"}})],1),e._v(" "),i("el-col",{attrs:{span:12}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.form.codeUrl,expression:"form.codeUrl"}],staticStyle:{"padding-left":"10%"}})])],1)],1)],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.Verification}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var u={components:{},data:function(){return{fullHeight:document.documentElement.clientHeight,fullWidth:document.documentElement.clientWidth,layerHeight:document.documentElement.clientHeight*(556/990),layerWidth:document.documentElement.clientHeight*(845/990),layerUrl:"https://video.my51share.com/image/default/FAF34602314B44E39914BB5542995AB2-6-2.png",dialogFormVisible:!1,form:{name:"",way:"",detail:"现在获取",sex:"0",validCode:"",code:"",codeUrl:""}}},computed:{},watch:{},methods:{get_bodyHeight:function(){var e=this;window.onresize=function(){return window.fullHeight=document.documentElement.clientHeight,e.fullHeight=window.fullHeight,e.fullWidth=document.documentElement.clientWidth,e.layerHeight=window.fullHeight*(556/990),void(e.layerWidth=window.fullHeight*(845/990))}},obtain:function(){var e=this;this.form.code=Math.ceil(1e5*Math.random()),this.form.code=this.form.code+"YZM",Object(d.a)(this.form.code).then(function(t){if(t.data.code)return t.data.message&&e.$message({message:t.data.message,type:"warning",duration:3e3});t.data.data&&(e.form.codeUrl=t.data.data,e.dialogFormVisible=!0)})},Verification:function(){var e=this;this.form.way?this.form.name?Object(d.b)(this.form).then(function(t){if(t.data.code)return t.data.message&&e.$message({message:t.data.message,type:"warning",duration:3e3});e.$message({message:t.data.message,type:"success",duration:4e3}),e.dialogFormVisible=!1,e.form={name:"",phone:"",detail:"现在获取",sex:"0",validCode:"",code:"",codeUrl:""}}):this.$message({message:"请先输入姓",type:"warning",duration:5e3}):this.$message({message:"请先输入联系方式",type:"warning",duration:5e3})}},created:function(){this.get_bodyHeight()},mounted:function(){},beforeCreate:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},activated:function(){}},f={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"group_second",style:"height:"+e.fullHeight+"px; width:"+e.fullWidth+"px;"},[i("div",{staticClass:"group_second_layer",style:"height:"+e.layerHeight+"px;width:"+e.layerWidth+"px;"},[i("img",{style:"height:"+e.layerHeight+"px;width:"+e.layerWidth+"px;",attrs:{src:e.layerUrl,fluid:"",alt:"Responsive image"}})]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),i("div",{staticClass:"hq_reg_btn"},[i("div",{staticClass:"set_4_button2 raised hoverable ",on:{click:e.obtain}},[i("div",{staticClass:"anim"}),e._v(" "),i("span",[e._v("现在获取")])])]),e._v(" "),i("el-dialog",{attrs:{visible:e.dialogFormVisible,width:"20%","append-to-body":"",center:"","custom-class":"el-dialog_radius"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[i("div",{staticClass:"dialog_title",attrs:{slot:"title"},slot:"title"},[i("span",[e._v("截止目前为止已有"),i("b",[e._v("5038名")]),e._v("用户报名")])]),e._v(" "),i("el-form",{attrs:{model:e.form}},[i("el-form-item",[i("el-input",{staticStyle:{width:"50%"},attrs:{autocomplete:"off",placeholder:"姓(已加密)"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),i("el-radio",{staticStyle:{"padding-left":"5%"},attrs:{label:"0"},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[e._v("先生")]),e._v(" "),i("el-radio",{attrs:{label:"1"},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[e._v("女士")])],1),e._v(" "),i("el-form-item",[i("el-input",{attrs:{autocomplete:"off",placeholder:"电话(请耐心等待咨询师联系)"},model:{value:e.form.way,callback:function(t){e.$set(e.form,"way",t)},expression:"form.way"}})],1),e._v(" "),i("el-form-item",[i("el-row",[i("el-col",{attrs:{span:12}},[i("el-input",{attrs:{placeholder:"请输入验证码"},model:{value:e.form.validCode,callback:function(t){e.$set(e.form,"validCode",t)},expression:"form.validCode"}})],1),e._v(" "),i("el-col",{attrs:{span:12}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.form.codeUrl,expression:"form.codeUrl"}],staticStyle:{"padding-left":"10%"}})])],1)],1)],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.Verification}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"group_second_title"},[this._v("\n    提升外贸询盘量"),t("span",[this._v("3倍")]),this._v("以上\n  ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"group_second_subtitle"},[this._v("\n    阿里巴巴国际站，中国制造国际站，环球资源站，"),t("br"),this._v("\n    三平台多账号广告投放\n  ")])}]};var h={components:{},data:function(){return{fullHeight:document.documentElement.clientHeight,fullWidth:document.documentElement.clientWidth,layerUrl:"https://video.my51share.com/image/default/6A3182D98D4C4019B11F4CFF07274784-6-2.png",layerHeight:document.documentElement.clientHeight*(715/990),layerWidth:document.documentElement.clientHeight*(635/990),dialogFormVisible:!1,form:{name:"",way:"",detail:"现在获取",sex:"0",validCode:"",code:"",codeUrl:""}}},computed:{},watch:{},methods:{get_bodyHeight:function(){var e=this;window.onresize=function(){return window.fullHeight=document.documentElement.clientHeight,e.fullHeight=window.fullHeight,e.fullWidth=document.documentElement.clientWidth,e.layerHeight=window.fullHeight*(715/990),void(e.layerWidth=window.fullHeight*(635/990))}},obtain:function(){var e=this;this.form.code=Math.ceil(1e5*Math.random()),this.form.code=this.form.code+"YZM",Object(d.a)(this.form.code).then(function(t){if(t.data.code)return t.data.message&&e.$message({message:t.data.message,type:"warning",duration:3e3});t.data.data&&(e.form.codeUrl=t.data.data,e.dialogFormVisible=!0)})},Verification:function(){var e=this;this.form.way?this.form.name?Object(d.b)(this.form).then(function(t){if(t.data.code)return t.data.message&&e.$message({message:t.data.message,type:"warning",duration:3e3});e.$message({message:t.data.message,type:"success",duration:4e3}),e.dialogFormVisible=!1,e.form={name:"",phone:"",detail:"现在获取",sex:"0",validCode:"",code:"",codeUrl:""}}):this.$message({message:"请先输入姓",type:"warning",duration:5e3}):this.$message({message:"请先输入联系方式",type:"warning",duration:5e3})}},created:function(){this.get_bodyHeight()},mounted:function(){},beforeCreate:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},activated:function(){}},g={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"group_thirdly",style:"height:"+e.fullHeight+"px; width:"+e.fullWidth+"px;"},[e._m(0),e._v(" "),i("div",{staticClass:"group_thirly_subtitle"},[e._v("\n    谷歌推广+个人商务社交站+企业全球站=绝配\n  ")]),e._v(" "),i("div",{staticClass:"hq_reg_btn"},[i("div",{staticClass:"set_4_button2 raised hoverable ",on:{click:e.obtain}},[i("div",{staticClass:"anim"}),e._v(" "),i("span",[e._v("现在获取")])])]),e._v(" "),i("div",{staticClass:"group_second_layer",style:"height:"+e.layerHeight+"px;width:"+e.layerWidth+"px;"},[i("img",{style:"height:"+e.layerHeight+"px;width:"+e.layerWidth+"px;",attrs:{src:e.layerUrl,fluid:"",alt:"Responsive image"}})]),e._v(" "),i("el-dialog",{attrs:{visible:e.dialogFormVisible,width:"20%","append-to-body":"",center:"","custom-class":"el-dialog_radius"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[i("div",{staticClass:"dialog_title",attrs:{slot:"title"},slot:"title"},[i("span",[e._v("截止目前为止已有"),i("b",[e._v("5038名")]),e._v("用户报名")])]),e._v(" "),i("el-form",{attrs:{model:e.form}},[i("el-form-item",[i("el-input",{staticStyle:{width:"50%"},attrs:{autocomplete:"off",placeholder:"姓(已加密)"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),i("el-radio",{staticStyle:{"padding-left":"5%"},attrs:{label:"0"},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[e._v("先生")]),e._v(" "),i("el-radio",{attrs:{label:"1"},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[e._v("女士")])],1),e._v(" "),i("el-form-item",[i("el-input",{attrs:{autocomplete:"off",placeholder:"电话(请耐心等待咨询师联系)"},model:{value:e.form.way,callback:function(t){e.$set(e.form,"way",t)},expression:"form.way"}})],1),e._v(" "),i("el-form-item",[i("el-row",[i("el-col",{attrs:{span:12}},[i("el-input",{attrs:{placeholder:"请输入验证码"},model:{value:e.form.validCode,callback:function(t){e.$set(e.form,"validCode",t)},expression:"form.validCode"}})],1),e._v(" "),i("el-col",{attrs:{span:12}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.form.codeUrl,expression:"form.codeUrl"}],staticStyle:{"padding-left":"10%"}})])],1)],1)],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.Verification}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"group_thirdly_title"},[this._v("让客户无法忽视你的"),t("span",[this._v("存在")])])}]};var p={components:{},data:function(){return{fullHeight:document.documentElement.clientHeight,fullWidth:document.documentElement.clientWidth,layerUrl:"https://video.my51share.com/image/default/5CF749FBBC134D649C59B7BE2EE9D454-6-2.png",layerHeight:document.documentElement.clientHeight*(591/990),layerWidth:document.documentElement.clientHeight*(828/990),dialogFormVisible:!1,form:{name:"",way:"",detail:"现在获取",sex:"0",validCode:"",code:"",codeUrl:""}}},computed:{},watch:{},methods:{get_bodyHeight:function(){var e=this;window.onresize=function(){return window.fullHeight=document.documentElement.clientHeight,e.fullHeight=window.fullHeight,e.fullWidth=document.documentElement.clientWidth,e.layerHeight=window.fullHeight*(591/990),void(e.layerWidth=window.fullHeight*(828/990))}},obtain:function(){var e=this;this.form.code=Math.ceil(1e5*Math.random()),this.form.code=this.form.code+"YZM",Object(d.a)(this.form.code).then(function(t){if(t.data.code)return t.data.message&&e.$message({message:t.data.message,type:"warning",duration:3e3});t.data.data&&(e.form.codeUrl=t.data.data,e.dialogFormVisible=!0)})},Verification:function(){var e=this;this.form.way?this.form.name?Object(d.b)(this.form).then(function(t){if(t.data.code)return t.data.message&&e.$message({message:t.data.message,type:"warning",duration:3e3});e.$message({message:t.data.message,type:"success",duration:4e3}),e.dialogFormVisible=!1,e.form={name:"",phone:"",detail:"现在获取",sex:"0",validCode:"",code:"",codeUrl:""}}):this.$message({message:"请先输入姓",type:"warning",duration:5e3}):this.$message({message:"请先输入联系方式",type:"warning",duration:5e3})}},created:function(){this.get_bodyHeight()},mounted:function(){},beforeCreate:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},activated:function(){}},v={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"group_fourthly",style:"height:"+e.fullHeight+"px; width:"+e.fullWidth+"px;"},[i("div",{staticClass:"group_second_layer",style:"height:"+e.layerHeight+"px;width:"+e.layerWidth+"px;"},[i("img",{style:"height:"+e.layerHeight+"px;width:"+e.layerWidth+"px;",attrs:{src:e.layerUrl,fluid:"",alt:"Responsive image"}})]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),i("div",{staticClass:"hq_reg_btn"},[i("div",{staticClass:"set_4_button2 raised hoverable ",on:{click:e.obtain}},[i("div",{staticClass:"anim"}),e._v(" "),i("span",[e._v("现在获取")])])]),e._v(" "),i("el-dialog",{attrs:{visible:e.dialogFormVisible,width:"20%","append-to-body":"",center:"","custom-class":"el-dialog_radius"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[i("div",{staticClass:"dialog_title",attrs:{slot:"title"},slot:"title"},[i("span",[e._v("截止目前为止已有"),i("b",[e._v("5038名")]),e._v("用户报名")])]),e._v(" "),i("el-form",{attrs:{model:e.form}},[i("el-form-item",[i("el-input",{staticStyle:{width:"50%"},attrs:{autocomplete:"off",placeholder:"姓(已加密)"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),i("el-radio",{staticStyle:{"padding-left":"5%"},attrs:{label:"0"},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[e._v("先生")]),e._v(" "),i("el-radio",{attrs:{label:"1"},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[e._v("女士")])],1),e._v(" "),i("el-form-item",[i("el-input",{attrs:{autocomplete:"off",placeholder:"电话(请耐心等待咨询师联系)"},model:{value:e.form.way,callback:function(t){e.$set(e.form,"way",t)},expression:"form.way"}})],1),e._v(" "),i("el-form-item",[i("el-row",[i("el-col",{attrs:{span:12}},[i("el-input",{attrs:{placeholder:"请输入验证码"},model:{value:e.form.validCode,callback:function(t){e.$set(e.form,"validCode",t)},expression:"form.validCode"}})],1),e._v(" "),i("el-col",{attrs:{span:12}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.form.codeUrl,expression:"form.codeUrl"}],staticStyle:{"padding-left":"10%"}})])],1)],1)],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.Verification}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"group_thirdly_title"},[t("span",[this._v("利润")]),this._v("是你的，"),t("span",[this._v("客户")]),this._v("也是你的\n  ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"group_thirly_subtitle"},[this._v("\n    零基础起步外贸业务，轻松收获高达"),t("span",[this._v("13%")]),this._v("退税\n  ")])}]};var _={components:{},data:function(){return{fullHeight:document.documentElement.clientHeight,fullWidth:document.documentElement.clientWidth,layerUrl:"https://video.my51share.com/image/default/FC06C9D6B1A346ADB1B0057B37FF3209-6-2.png",layerHeight:document.documentElement.clientHeight*(539/990),layerWidth:document.documentElement.clientHeight*(748/990),dialogFormVisible:!1,form:{name:"",way:"",detail:"现在获取",sex:"0",validCode:"",code:"",codeUrl:""}}},computed:{},watch:{fullHeight:function(e){if(!this.timer){this.fullHeight=e,this.timer=!0;var t=this;setTimeout(function(){t.timer=!1},400),this.get_bodyHeight()}},fullWidth:function(e){if(!this.timer){this.fullWidth=e,this.timer=!0;var t=this;setTimeout(function(){t.timer=!1},400),this.get_bodyHeight()}}},methods:{get_bodyHeight:function(){var e=this;window.onresize=function(){return window.fullHeight=document.documentElement.clientHeight,e.fullHeight=window.fullHeight,e.fullWidth=document.documentElement.clientWidth,e.layerHeight=window.fullHeight*(539/990),void(e.layerWidth=window.fullHeight*(748/990))}},obtain:function(){var e=this;this.form.code=Math.ceil(1e5*Math.random()),this.form.code=this.form.code+"YZM",Object(d.a)(this.form.code).then(function(t){if(t.data.code)return t.data.message&&e.$message({message:t.data.message,type:"warning",duration:3e3});t.data.data&&(e.form.codeUrl=t.data.data,e.dialogFormVisible=!0)})},Verification:function(){var e=this;this.form.way?this.form.name?Object(d.b)(this.form).then(function(t){if(t.data.code)return t.data.message&&e.$message({message:t.data.message,type:"warning",duration:3e3});e.$message({message:t.data.message,type:"success",duration:4e3}),e.dialogFormVisible=!1,e.form={name:"",phone:"",detail:"现在获取",sex:"0",validCode:"",code:"",codeUrl:""}}):this.$message({message:"请先输入姓",type:"warning",duration:5e3}):this.$message({message:"请先输入联系方式",type:"warning",duration:5e3})}},created:function(){this.get_bodyHeight()},mounted:function(){},beforeCreate:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},activated:function(){}},y={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"group_fifth",style:"height:"+e.fullHeight+"px; width:"+e.fullWidth+"px;"},[e._m(0),e._v(" "),i("div",{staticClass:"group_fifth_subtitle"},[e._v("\n    免费提供！免费提供！免费提供！\n  ")]),e._v(" "),i("div",{staticClass:"hq_reg_btn"},[i("div",{staticClass:"set_4_button2 raised hoverable ",on:{click:e.obtain}},[i("div",{staticClass:"anim"}),e._v(" "),i("span",[e._v("现在获取")])])]),e._v(" "),i("div",{staticClass:"group_fifth_layer",style:"height:"+e.layerHeight+"px;width:"+e.layerWidth+"px;"},[i("img",{style:"height:"+e.layerHeight+"px;width:"+e.layerWidth+"px;",attrs:{src:e.layerUrl,fluid:"",alt:"Responsive image"}})]),e._v(" "),i("el-dialog",{attrs:{visible:e.dialogFormVisible,width:"20%","append-to-body":"",center:"","custom-class":"el-dialog_radius"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[i("div",{staticClass:"dialog_title",attrs:{slot:"title"},slot:"title"},[i("span",[e._v("截止目前为止已有"),i("b",[e._v("5038名")]),e._v("用户报名")])]),e._v(" "),i("el-form",{attrs:{model:e.form}},[i("el-form-item",[i("el-input",{staticStyle:{width:"50%"},attrs:{autocomplete:"off",placeholder:"姓(已加密)"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),i("el-radio",{staticStyle:{"padding-left":"5%"},attrs:{label:"0"},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[e._v("先生")]),e._v(" "),i("el-radio",{attrs:{label:"1"},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[e._v("女士")])],1),e._v(" "),i("el-form-item",[i("el-input",{attrs:{autocomplete:"off",placeholder:"电话(请耐心等待咨询师联系)"},model:{value:e.form.way,callback:function(t){e.$set(e.form,"way",t)},expression:"form.way"}})],1),e._v(" "),i("el-form-item",[i("el-row",[i("el-col",{attrs:{span:12}},[i("el-input",{attrs:{placeholder:"请输入验证码"},model:{value:e.form.validCode,callback:function(t){e.$set(e.form,"validCode",t)},expression:"form.validCode"}})],1),e._v(" "),i("el-col",{attrs:{span:12}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.form.codeUrl,expression:"form.codeUrl"}],staticStyle:{"padding-left":"10%"}})])],1)],1)],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.Verification}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"group_fifth_title"},[this._v("\n    针对不同的企业和用户，"),t("br"),this._v(" "),t("span",[this._v("免费")]),this._v("提供对应的外贸询盘\n  ")])}]};var b={components:{},data:function(){return{fullHeight:document.documentElement.clientHeight*(920/990),fullWidth:document.documentElement.clientWidth,layerUrl:"https://video.my51share.com/image/default/07512BC522584C4CA75BB6B1E7920EAF-6-2.png",layerHeight:.3*document.documentElement.clientHeight,layerWidth:document.documentElement.clientWidth*(282/2560),publicUrl:"https://video.my51share.com/image/default/E2E492CAFD864BDD8B10B303C698A908-6-2.png",publicHeight:document.documentElement.clientHeight*(140/990),publicWidth:.0546875*document.documentElement.clientWidth,wechatUrl:"https://video.my51share.com/image/default/1CAA1E9369CC4B3FB2B0E850A73DD5B0-6-2.png",bottomHeight:document.documentElement.clientHeight*(70/990),dialogFormVisible:!1,form:{name:"",way:"",detail:"现在获取",sex:"0",validCode:"",code:"",codeUrl:""}}},computed:{},watch:{},methods:{get_bodyHeight:function(){var e=this;window.onresize=function(){return window.fullHeight=document.documentElement.clientHeight,e.fullHeight=window.fullHeight*(920/990),e.fullWidth=document.documentElement.clientWidth,e.layerHeight=.3*window.fullHeight,e.layerWidth=document.documentElement.clientWidth*(282/2560),e.publicHeight=window.fullHeight*(140/990),e.publicWidth=.0546875*document.documentElement.clientWidth,void(e.bottomHeight=window.fullHeight*(70/990))}},obtain:function(){var e=this;this.form.code=Math.ceil(1e5*Math.random()),this.form.code=this.form.code+"YZM",Object(d.a)(this.form.code).then(function(t){if(t.data.code)return t.data.message&&e.$message({message:t.data.message,type:"warning",duration:3e3});t.data.data&&(e.form.codeUrl=t.data.data,e.dialogFormVisible=!0)})},Verification:function(){var e=this;this.form.way?this.form.name?Object(d.b)(this.form).then(function(t){if(t.data.code)return t.data.message&&e.$message({message:t.data.message,type:"warning",duration:3e3});e.$message({message:t.data.message,type:"success",duration:4e3}),e.dialogFormVisible=!1,e.form={name:"",phone:"",detail:"现在获取",sex:"0",validCode:"",code:"",codeUrl:""}}):this.$message({message:"请先输入姓",type:"warning",duration:5e3}):this.$message({message:"请先输入联系方式",type:"warning",duration:5e3})}},created:function(){this.get_bodyHeight()},mounted:function(){},beforeCreate:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},activated:function(){}},w={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"group_sixth",style:"height:"+e.fullHeight+"px; width:"+e.fullWidth+"px;"},[i("div",{staticClass:"group_sixth_layer",style:"width:"+e.fullWidth+"px;"},[i("img",{staticStyle:{height:"297px",width:"282px"},attrs:{src:e.layerUrl,fluid:"",alt:"Responsive image"}})]),e._v(" "),i("div",{staticClass:"hq_reg_btn"},[i("div",{staticClass:"set_4_button2 raised hoverable ",on:{click:e.obtain}},[i("div",{staticClass:"anim"}),e._v(" "),e._m(0)])]),e._v(" "),i("div",{staticClass:"group_sixth_public"},[i("img",{style:"height:"+e.publicHeight+"px;width:"+e.publicHeight+"px;",attrs:{src:e.publicUrl,fluid:"",alt:"Responsive image"}})]),e._v(" "),i("div",{staticClass:"group_sixth_public_text",style:"width:"+e.publicHeight+"px;"},[e._v("\n      关注公众号\n    ")]),e._v(" "),i("div",{staticClass:"group_sixth_WeChat"},[i("img",{style:"height:"+e.publicHeight+"px;width:"+e.publicHeight+"px;",attrs:{src:e.wechatUrl,fluid:"",alt:"Responsive image"}})]),e._v(" "),i("div",{staticClass:"group_sixth_WeChat_text",style:"height:"+e.publicHeight+"px;width:"+e.publicHeight+"px;"},[e._v("\n      微信联系\n    ")]),e._v(" "),i("el-dialog",{attrs:{visible:e.dialogFormVisible,width:"20%","append-to-body":"",center:"","custom-class":"el-dialog_radius"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[i("div",{staticClass:"dialog_title",attrs:{slot:"title"},slot:"title"},[i("span",[e._v("截止目前为止已有"),i("b",[e._v("5038名")]),e._v("用户报名")])]),e._v(" "),i("el-form",{attrs:{model:e.form}},[i("el-form-item",[i("el-input",{staticStyle:{width:"50%"},attrs:{autocomplete:"off",placeholder:"姓(已加密)"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),i("el-radio",{staticStyle:{"padding-left":"5%"},attrs:{label:"0"},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[e._v("先生")]),e._v(" "),i("el-radio",{attrs:{label:"1"},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[e._v("女士")])],1),e._v(" "),i("el-form-item",[i("el-input",{attrs:{autocomplete:"off",placeholder:"电话(请耐心等待咨询师联系)"},model:{value:e.form.way,callback:function(t){e.$set(e.form,"way",t)},expression:"form.way"}})],1),e._v(" "),i("el-form-item",[i("el-row",[i("el-col",{attrs:{span:12}},[i("el-input",{attrs:{placeholder:"请输入验证码"},model:{value:e.form.validCode,callback:function(t){e.$set(e.form,"validCode",t)},expression:"form.validCode"}})],1),e._v(" "),i("el-col",{attrs:{span:12}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.form.codeUrl,expression:"form.codeUrl"}],staticStyle:{"padding-left":"10%"}})])],1)],1)],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.Verification}},[e._v("确 定")])],1)],1)],1),e._v(" "),i("div",{staticClass:"sixth_bottom",style:"height:"+e.bottomHeight+"px; width:"+e.fullWidth+"px;"},[i("div",{staticClass:"sixth_bottom_text",style:"line-height:"+e.bottomHeight+"px;height:"+e.bottomHeight+"px;"},[e._v("\n      © 2019 宁波一顺二维文化传媒有限公司 - All Rights Reserved\n    ")])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("span",[this._v("同样的营销费用，可以得到"),t("b",[this._v("更多的询盘订单和客户信息")]),this._v("！！！")])}]};var x={name:"carrousel",components:{First:i("VU/8")(c,m,!1,function(e){i("cLhZ"),i("vplz")},"data-v-2b336138",null).exports,Second:i("VU/8")(u,f,!1,function(e){i("X0l6")},"data-v-72d1e539",null).exports,Thirdly:i("VU/8")(h,g,!1,function(e){i("po4t")},"data-v-6db2030b",null).exports,Fourthly:i("VU/8")(p,v,!1,function(e){i("fobh")},"data-v-3f062f5d",null).exports,Fifth:i("VU/8")(_,y,!1,function(e){i("vk4p")},"data-v-8d9a9792",null).exports,Sixth:i("VU/8")(b,w,!1,function(e){i("mbVm")},"data-v-397b89dc",null).exports},data:function(){return{swiperOptions:{direction:"vertical",setWrapperSize:!0,autoHeight:!0,slidesPerView:1,mousewheel:!0,mousewheelControl:!0,height:window.innerHeight,resistanceRatio:0,observeParents:!0,pagination:{el:".swiper-pagination",clickable:!0}}}},computed:{swiper:function(){return this.$refs.mySwiper.$swiper}},mounted:function(){console.log("Current Swiper instance object",this.swiper),console.log("Current Swiper instance object",this.swiper.height),this.swiper.slideTo(-1,1e3,!1),r.a.get("https://www.my51share.com/web/count/yishunerweizhzl").then(function(e){console.log(e.data)}).catch(function(e){console.log(e)})}},H={render:function(){var e=this.$createElement,t=this._self._c||e;return t("swiper",{ref:"mySwiper",attrs:{options:this.swiperOptions}},[t("swiper-slide",[t("first")],1),this._v(" "),t("swiper-slide",[t("second")],1),this._v(" "),t("swiper-slide",[t("thirdly")],1),this._v(" "),t("swiper-slide",[t("fourthly")],1),this._v(" "),t("swiper-slide",[t("fifth")],1),this._v(" "),t("swiper-slide",[t("sixth")],1),this._v(" "),t("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],1)},staticRenderFns:[]},C=i("VU/8")(x,H,!1,null,null,null).exports;o.default.use(l.a);var E=new l.a({routes:[{path:"/",name:"Home",component:C}]});E.beforeEach(function(e,t,i){/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)?window.location.href="./mobile.html#/":i()});var W=E,$=i("mM94"),k=i("7QTg"),U=i.n(k),F=(i("BpKH"),i("Rf8U")),V=i.n(F),S=i("zL8q"),B=i.n(S),M=(i("tvR6"),i("tHyU"),i("AXdl"));o.default.use(U.a),o.default.use($.a),o.default.use(V.a,r.a),o.default.use(B.a),o.default.use(M.a,{error:"./static/error.png",loading:"./static/loading.png"}),o.default.config.productionTip=!1,new o.default({el:"#app",router:W,components:{App:n},template:"<App/>"})},cLhZ:function(e,t){},fobh:function(e,t){},mbVm:function(e,t){},po4t:function(e,t){},sUkM:function(e,t){},tHyU:function(e,t){},tvR6:function(e,t){},vk4p:function(e,t){},vplz:function(e,t){}},["c7Fe"]);
//# sourceMappingURL=index.7c28df1fab5f0b683c8a.js.map