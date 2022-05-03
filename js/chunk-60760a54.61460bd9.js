(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60760a54"],{4917:function(t,r,e){"use strict";var o=e("cb7c"),n=e("9def"),i=e("0390"),a=e("5f1b");e("214f")("match",1,(function(t,r,e,l){return[function(e){var o=t(this),n=void 0==e?void 0:e[r];return void 0!==n?n.call(e,o):new RegExp(e)[r](String(o))},function(t){var r=l(e,t,this);if(r.done)return r.value;var c=o(t),u=String(this);if(!c.global)return a(c,u);var s=c.unicode;c.lastIndex=0;var p,f=[],m=0;while(null!==(p=a(c,u))){var d=String(p[0]);f[m]=d,""===d&&(c.lastIndex=i(u,n(c.lastIndex),s)),m++}return 0===m?null:f}]}))},b613:function(t,r,e){"use strict";e.r(r);var o=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("Form",{ref:"form",attrs:{model:t.form,rules:t.ruleCustom,"label-width":120}},[e("Form-item",{attrs:{label:"解读文献对象",prop:"citation"}},[e("Input",{attrs:{type:"text",placeholder:"请输入解读文献(GB7714格式)"},model:{value:t.form.citation,callback:function(r){t.$set(t.form,"citation",r)},expression:"form.citation"}})],1),e("Form-item",{attrs:{label:"解读文献链接",prop:"citationUrl"}},[e("Input",{attrs:{type:"url",placeholder:"请输入解读文献链接"},model:{value:t.form.citationUrl,callback:function(r){t.$set(t.form,"citationUrl",r)},expression:"form.citationUrl"}})],1),e("Form-item",{attrs:{label:"解读文献年份",prop:"year"}},[e("Input-number",{model:{value:t.form.year,callback:function(r){t.$set(t.form,"year",r)},expression:"form.year"}})],1),e("Form-item",{attrs:{label:"标签",prop:"tags"}},[e("Input",{attrs:{type:"text",placeholder:"请输入至少三个标签(以空格分隔)"},model:{value:t.form.tags,callback:function(r){t.$set(t.form,"tags","string"===typeof r?r.trim():r)},expression:"form.tags"}})],1),e("Form-item",{attrs:{label:"标题",prop:"title"}},[e("Input",{attrs:{type:"text",placeholder:"请输入标题"},model:{value:t.form.title,callback:function(r){t.$set(t.form,"title",r)},expression:"form.title"}})],1),e("Form-item",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],attrs:{label:"论文解读",prop:"paper"}},[e("editor",{attrs:{pasteFilter:"true"},model:{value:t.form.paper,callback:function(r){t.$set(t.form,"paper",r)},expression:"form.paper"}})],1),e("Button",{attrs:{type:"primary",long:""},on:{click:function(r){return t.handleSubmit("form")}}},[t._v("发布")])],1)],1)},n=[],i=(e("7f7f"),e("28a5"),e("4917"),e("c276")),a=e("dac0"),l=e("6c49"),c={components:{editor:a["a"],Editor:a["a"]},data:function(){var t=function(t,r,e){""===r?e(new Error("请输入解读对象")):e()},r=function(t,r,e){""===r?e(new Error("请输入论文解读")):e()},e=function(t,r,e){""===r?e(new Error("请输入标题")):e()},o=function(t,r,e){r?r<0?e(new Error("年份不能为负数")):e():e(new Error("请输入！"))},n=function(t,r,e){""===r?e(new Error("请输入链接")):r.match(/^((ht|f)tps?):\/\/[\w-]+(\.[\w-]+)+([\w\-.,@?^=%&:/~+#]*[\w\-@?^=%&/~+#])?$/)?e():e(new Error("文献链接不正确"))},i=function(t,r,e){if(""===r||r.split(/\s+/).length<3)e(new Error("请输入至少3个标签(以空格分隔)"));else{for(var o=r.split(/\s+/).map((function(t){return t.trim()})).filter((function(t){return""!=t.trim()})),n=0;n<o.length;n++)for(var i=n+1;i<o.length;i++)o[n]==o[i]&&e(new Error("输入了重复的标签请检查"));e()}},a=function(t,r,e){r.length,e()};return{topicList:[],form:{topic:[],paper:"",tags:"",year:null,citationUrl:"",title:"",citation:""},ruleCustom:{citation:[{required:!0,validator:t,trigger:"blur"}],citationUrl:[{required:!0,validator:n,trigger:"blur"}],topic:[{required:!0,validator:a,trigger:"blur"}],paper:[{required:!0,validator:r,trigger:"blur"}],year:[{required:!0,validator:o,trigger:"blur"}],tags:[{required:!0,validator:i,trigger:"blur"}],title:[{required:!0,validator:e,trigger:"blur"}]}}},mounted:function(){this.getTopicList()},methods:{handleSubmit:function(t){var r=this;this.$refs[t].validate((function(t){if(t){var e=r.form.topic.map((function(t){return{name:t,type:0}})).concat(r.form.tags.split(/\s+/).map((function(t){return{name:t,type:1}}))),o={content:r.form.paper,tags:e,citation:r.form.citation,source:r.form.citationUrl,title:r.form.title,published_year:r.form.year};Object(l["c"])("post",o).then((function(t){r.$Message.success("发布成功!"),r.$router.push({name:"home"})})).catch(r.$Modal.error(Object(i["c"])(err)))}else r.$Message.error("发布失败!")}))},getTopicList:function(){var t=this;Object(l["h"])("get",{pindx:1,num_per_page:99,presupposed:!0}).then((function(r){t.topicList=r.data.page.map((function(t){return{value:t.name,label:t.name}}))})).catch((function(t){console.log(t)}))},handleReset:function(t){this.$refs[t].resetFields()}}},u=c,s=e("2877"),p=Object(s["a"])(u,o,n,!1,null,null,null);r["default"]=p.exports}}]);