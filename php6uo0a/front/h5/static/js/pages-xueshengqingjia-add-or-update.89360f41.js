(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-xueshengqingjia-add-or-update"],{"12fa":function(e,i,r){"use strict";r.r(i);var t=r("55f9"),o=r("a11a");for(var n in o)"default"!==n&&function(e){r.d(i,e,(function(){return o[e]}))}(n);r("8092");var a,s=r("f0c5"),u=Object(s["a"])(o["default"],t["b"],t["c"],!1,null,"10eb5eff",null,!1,t["a"],a);i["default"]=u.exports},"51ec":function(e,i,r){var t=r("24fb");i=t(!1),i.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-10eb5eff]{padding:%?20?%}.content[data-v-10eb5eff]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-10eb5eff]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-10eb5eff]{width:%?180?%}.avator[data-v-10eb5eff]{width:%?150?%;height:%?60?%}.right-input[data-v-10eb5eff]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-10eb5eff]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-10eb5eff]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-10eb5eff]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-10eb5eff]{border:0}.cu-form-group uni-input[data-v-10eb5eff]{padding:0 %?30?%}.uni-input[data-v-10eb5eff]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-10eb5eff]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-10eb5eff]::after{line-height:%?68?%}.select .uni-input[data-v-10eb5eff]{line-height:%?68?%}.input .right-input[data-v-10eb5eff]{line-height:%?68?%}',""]),e.exports=i},"55f9":function(e,i,r){"use strict";var t={"w-picker":r("e2b1").default},o=function(){var e=this,i=e.$createElement,r=e._self._c||i;return r("v-uni-view",{staticClass:"content"},[r("v-uni-form",{staticClass:"app-update-pv"},[r("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(228, 232, 230, 1)",margin:"0 0 0px 0",borderWidth:"2rpx",borderStyle:"none none solid none ",height:"88rpx"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(0, 102, 51, 1)",textAlign:"left"}},[e._v("学号")]),r("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0, 102, 51, 1)",borderRadius:"0px",color:"rgba(0, 102, 51, 1)",textAlign:"left",borderWidth:"0 0 6rpx",fontSize:"28rpx",borderStyle:"solid",height:"68rpx"},attrs:{disabled:e.ro.xuehao,placeholder:"学号"},model:{value:e.ruleForm.xuehao,callback:function(i){e.$set(e.ruleForm,"xuehao",i)},expression:"ruleForm.xuehao"}})],1),r("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(228, 232, 230, 1)",margin:"0 0 0px 0",borderWidth:"2rpx",borderStyle:"none none solid none ",height:"88rpx"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(0, 102, 51, 1)",textAlign:"left"}},[e._v("姓名")]),r("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0, 102, 51, 1)",borderRadius:"0px",color:"rgba(0, 102, 51, 1)",textAlign:"left",borderWidth:"0 0 6rpx",fontSize:"28rpx",borderStyle:"solid",height:"68rpx"},attrs:{disabled:e.ro.xingming,placeholder:"姓名"},model:{value:e.ruleForm.xingming,callback:function(i){e.$set(e.ruleForm,"xingming",i)},expression:"ruleForm.xingming"}})],1),r("v-uni-view",{staticClass:"cu-form-group",class:"left"==e.left?"":"active",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(218, 220, 219, 1)",margin:"0 0 0px 0",borderWidth:"2rpx",borderStyle:"none none solid none ",height:"108rpx"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.touxiangTap.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(0, 102, 51, 1)",textAlign:"left"}},[e._v("头像")]),r("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"},style:{textAlign:"left"}},[e.ruleForm.touxiang?r("v-uni-image",{staticClass:"avator",style:{width:"68rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"68rpx"},attrs:{src:e.ruleForm.touxiang,mode:"aspectFill"}}):r("v-uni-image",{staticClass:"avator",style:{width:"68rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"68rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),r("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(228, 232, 230, 1)",margin:"0 0 0px 0",borderWidth:"2rpx",borderStyle:"none none solid none ",height:"88rpx"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(0, 102, 51, 1)",textAlign:"left"}},[e._v("标题")]),r("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0, 102, 51, 1)",borderRadius:"0px",color:"rgba(0, 102, 51, 1)",textAlign:"left",borderWidth:"0 0 6rpx",fontSize:"28rpx",borderStyle:"solid",height:"68rpx"},attrs:{disabled:e.ro.biaoti,placeholder:"标题"},model:{value:e.ruleForm.biaoti,callback:function(i){e.$set(e.ruleForm,"biaoti",i)},expression:"ruleForm.biaoti"}})],1),r("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(228, 232, 230, 1)",margin:"0 0 0px 0",borderWidth:"2rpx",borderStyle:"none none solid none ",height:"88rpx"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(0, 102, 51, 1)",textAlign:"left"}},[e._v("请假时间")]),r("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0, 102, 51, 1)",borderRadius:"0px",color:"rgba(0, 102, 51, 1)",textAlign:"left",borderWidth:"0 0 6rpx",fontSize:"28rpx",borderStyle:"solid",height:"68rpx"},attrs:{placeholder:"请假时间"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.toggleTab("qingjiashijian")}},model:{value:e.ruleForm.qingjiashijian,callback:function(i){e.$set(e.ruleForm,"qingjiashijian",i)},expression:"ruleForm.qingjiashijian"}})],1),r("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(228, 232, 230, 1)",margin:"0 0 0px 0",borderWidth:"2rpx",borderStyle:"none none solid none ",height:"88rpx"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(0, 102, 51, 1)",textAlign:"left"}},[e._v("请假天数")]),r("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0, 102, 51, 1)",borderRadius:"0px",color:"rgba(0, 102, 51, 1)",textAlign:"left",borderWidth:"0 0 6rpx",fontSize:"28rpx",borderStyle:"solid",height:"68rpx"},attrs:{disabled:e.ro.qingjiatianshu,placeholder:"请假天数"},model:{value:e.ruleForm.qingjiatianshu,callback:function(i){e.$set(e.ruleForm,"qingjiatianshu",i)},expression:"ruleForm.qingjiatianshu"}})],1),r("v-uni-view",{staticClass:"cu-form-group select",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(224, 227, 225, 1)",margin:"0 0 0px 0",borderWidth:"2rpx",borderStyle:"none none solid none",height:"108rpx"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(0, 102, 51, 1)",textAlign:"left"}},[e._v("教师工号")]),r("v-uni-picker",{attrs:{value:e.jiaoshigonghaoIndex,range:e.jiaoshigonghaoOptions},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.jiaoshigonghaoChange.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"uni-input",style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0, 102, 51, 1)",borderRadius:"0px",color:"rgba(0, 102, 51, 1)",textAlign:"left",borderWidth:"0 0 6rpx",fontSize:"28rpx",borderStyle:"solid",height:"68rpx"}},[e._v(e._s(e.jiaoshigonghaoOptions[e.jiaoshigonghaoIndex]))])],1)],1),r("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(228, 232, 230, 1)",margin:"0 0 0px 0",borderWidth:"2rpx",borderStyle:"none none solid none ",height:"88rpx"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(0, 102, 51, 1)",textAlign:"left"}},[e._v("教师姓名")]),r("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0, 102, 51, 1)",borderRadius:"0px",color:"rgba(0, 102, 51, 1)",textAlign:"left",borderWidth:"0 0 6rpx",fontSize:"28rpx",borderStyle:"solid",height:"68rpx"},attrs:{disabled:e.ro.jiaoshixingming,placeholder:"教师姓名"},model:{value:e.ruleForm.jiaoshixingming,callback:function(i){e.$set(e.ruleForm,"jiaoshixingming",i)},expression:"ruleForm.jiaoshixingming"}})],1),r("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(227, 228, 227, 1)",margin:"0 0 0px 0",borderWidth:"2rpx",borderStyle:"none none solid none",height:"308rpx"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(0, 102, 51, 1)",textAlign:"left"}},[e._v("请假理由")]),r("v-uni-textarea",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0, 102, 51, 1)",borderRadius:"0px",color:"rgba(0, 102, 51, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"280rpx"},attrs:{placeholder:"请假理由"},model:{value:e.ruleForm.qingjialiyou,callback:function(i){e.$set(e.ruleForm,"qingjialiyou",i)},expression:"ruleForm.qingjialiyou"}})],1),r("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(227, 228, 227, 1)",margin:"0 0 0px 0",borderWidth:"2rpx",borderStyle:"none none solid none",height:"308rpx"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(0, 102, 51, 1)",textAlign:"left"}},[e._v("备注")]),r("v-uni-textarea",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0, 102, 51, 1)",borderRadius:"0px",color:"rgba(0, 102, 51, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"280rpx"},attrs:{placeholder:"备注"},model:{value:e.ruleForm.beizhu,callback:function(i){e.$set(e.ruleForm,"beizhu",i)},expression:"ruleForm.beizhu"}})],1),r("v-uni-view",{staticClass:"btn"},[r("v-uni-button",{staticClass:"bg-red",style:{boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",backgroundColor:"rgba(0, 102, 51, 1)",borderColor:"#409EFF",borderRadius:"8rpx",color:"rgba(255, 255, 255, 1)",borderWidth:"0",width:"70%",fontSize:"32rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1),r("w-picker",{ref:"qingjiashijian",attrs:{mode:"dateTime",step:"1",current:!1,hasSecond:!1,themeColor:"#333333"},on:{confirm:function(i){arguments[0]=i=e.$handleEvent(i),e.qingjiashijianConfirm.apply(void 0,arguments)}}})],1)},n=[];r.d(i,"b",(function(){return o})),r.d(i,"c",(function(){return n})),r.d(i,"a",(function(){return t}))},"774c":function(e,i,r){"use strict";var t=r("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,r("ac6a"),r("96cf");var o=t(r("3b8d")),n=t(r("e2b1")),a={data:function(){return{ruleForm:{xuehao:"",xingming:"",touxiang:"",biaoti:"",qingjiashijian:"",qingjiatianshu:"",qingjialiyou:"",beizhu:"",jiaoshigonghao:"",jiaoshixingming:"",sfsh:"",shhf:"",userid:""},jiaoshigonghaoOptions:[],jiaoshigonghaoIndex:0,user:{},ro:{xuehao:!1,xingming:!1,touxiang:!1,biaoti:!1,qingjiashijian:!1,qingjiatianshu:!1,qingjialiyou:!1,beizhu:!1,jiaoshigonghao:!1,jiaoshixingming:!1,sfsh:!1,shhf:!1,userid:!1}}},components:{wPicker:n.default},computed:{},onLoad:function(){var e=(0,o.default)(regeneratorRuntime.mark((function e(i){var r,t,o,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=uni.getStorageSync("nowTable"),e.next=3,this.$api.session(r);case 3:return t=e.sent,this.user=t.data,this.ruleForm.xuehao=this.user.xuehao,this.ruleForm.xingming=this.user.xingming,e.next=9,this.$api.option("jiaoshi","jiaoshigonghao",{});case 9:if(t=e.sent,this.jiaoshigonghaoOptions=t.data,this.ruleForm.userid=uni.getStorageSync("userid"),i.refid&&(this.ruleForm.refid=i.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!i.id){e.next=19;break}return this.ruleForm.id=i.id,e.next=17,this.$api.info("xueshengqingjia",this.ruleForm.id);case 17:t=e.sent,this.ruleForm=t.data;case 19:if(!i.cross){e.next=70;break}o=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(o);case 22:if((e.t1=e.t0()).done){e.next=70;break}if(n=e.t1.value,"xuehao"!=n){e.next=28;break}return this.ruleForm.xuehao=o[n],this.ro.xuehao=!0,e.abrupt("continue",22);case 28:if("xingming"!=n){e.next=32;break}return this.ruleForm.xingming=o[n],this.ro.xingming=!0,e.abrupt("continue",22);case 32:if("touxiang"!=n){e.next=36;break}return this.ruleForm.touxiang=o[n],this.ro.touxiang=!0,e.abrupt("continue",22);case 36:if("biaoti"!=n){e.next=40;break}return this.ruleForm.biaoti=o[n],this.ro.biaoti=!0,e.abrupt("continue",22);case 40:if("qingjiashijian"!=n){e.next=44;break}return this.ruleForm.qingjiashijian=o[n],this.ro.qingjiashijian=!0,e.abrupt("continue",22);case 44:if("qingjiatianshu"!=n){e.next=48;break}return this.ruleForm.qingjiatianshu=o[n],this.ro.qingjiatianshu=!0,e.abrupt("continue",22);case 48:if("qingjialiyou"!=n){e.next=52;break}return this.ruleForm.qingjialiyou=o[n],this.ro.qingjialiyou=!0,e.abrupt("continue",22);case 52:if("beizhu"!=n){e.next=56;break}return this.ruleForm.beizhu=o[n],this.ro.beizhu=!0,e.abrupt("continue",22);case 56:if("jiaoshigonghao"!=n){e.next=60;break}return this.ruleForm.jiaoshigonghao=o[n],this.ro.jiaoshigonghao=!0,e.abrupt("continue",22);case 60:if("jiaoshixingming"!=n){e.next=64;break}return this.ruleForm.jiaoshixingming=o[n],this.ro.jiaoshixingming=!0,e.abrupt("continue",22);case 64:if("userid"!=n){e.next=68;break}return this.ruleForm.userid=o[n],this.ro.userid=!0,e.abrupt("continue",22);case 68:e.next=22;break;case 70:this.styleChange();case 71:case"end":return e.stop()}}),e,this)})));function i(i){return e.apply(this,arguments)}return i}(),methods:{styleChange:function(){this.$nextTick((function(){}))},jiaoshigonghaoChange:function(){var e=(0,o.default)(regeneratorRuntime.mark((function e(i){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.jiaoshigonghaoIndex=i.target.value,this.ruleForm.jiaoshigonghao=this.jiaoshigonghaoOptions[this.jiaoshigonghaoIndex],e.next=4,this.$api.follow("jiaoshi","jiaoshigonghao",{columnValue:this.ruleForm.jiaoshigonghao});case 4:r=e.sent,r.data.jiaoshixingming&&(this.ruleForm.jiaoshixingming=r.data.jiaoshixingming);case 6:case"end":return e.stop()}}),e,this)})));function i(i){return e.apply(this,arguments)}return i}(),qingjiashijianConfirm:function(e){console.log(e),this.ruleForm.qingjiashijian=e.result,this.$forceUpdate()},touxiangTap:function(){var e=this;this.$api.upload((function(i){e.ruleForm.touxiang=e.$base.url+"upload/"+i.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,o.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.ruleForm.qingjiatianshu||this.$validate.isIntNumer(this.ruleForm.qingjiatianshu)){e.next=3;break}return this.$utils.msg("请假天数应输入整数"),e.abrupt("return");case 3:if(this.ruleForm.userid){e.next=6;break}return this.$utils.msg("用户id不能为空"),e.abrupt("return");case 6:if(!this.ruleForm.id){e.next=11;break}return e.next=9,this.$api.update("xueshengqingjia",this.ruleForm);case 9:e.next=13;break;case 11:return e.next=13,this.$api.add("xueshengqingjia",this.ruleForm);case 13:this.$utils.msgBack("提交成功");case 14:case"end":return e.stop()}}),e,this)})));function i(){return e.apply(this,arguments)}return i}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var i=new Date,r=i.getFullYear(),t=i.getMonth()+1,o=i.getDate();return"start"===e?r-=60:"end"===e&&(r+=2),t=t>9?t:"0"+t,o=o>9?o:"0"+o,"".concat(r,"-").concat(t,"-").concat(o)},toggleTab:function(e){this.$refs[e].show()}}};i.default=a},8092:function(e,i,r){"use strict";var t=r("b646"),o=r.n(t);o.a},a11a:function(e,i,r){"use strict";r.r(i);var t=r("774c"),o=r.n(t);for(var n in t)"default"!==n&&function(e){r.d(i,e,(function(){return t[e]}))}(n);i["default"]=o.a},b646:function(e,i,r){var t=r("51ec");"string"===typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);var o=r("4f06").default;o("23508b0a",t,!0,{sourceMap:!1,shadowMode:!1})}}]);