(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-e6b0"],{"/vWL":function(t,e,a){"use strict";var l=a("E9rK");a.n(l).a},E9rK:function(t,e,a){},aFx9:function(t,e,a){"use strict";a.d(e,"c",function(){return s}),a.d(e,"a",function(){return o}),a.d(e,"d",function(){return i}),a.d(e,"f",function(){return n}),a.d(e,"e",function(){return c}),a.d(e,"b",function(){return r});var l=a("t3Un");function s(t){return Object(l.a)({url:"/admin/get_images_list",method:"get",params:t})}function o(t){return Object(l.a)({url:"/admin/del_images",method:"post",data:{id:t}})}function i(){return Object(l.a)({url:"/admin/get_store_list",method:"get"})}function n(t){return Object(l.a)({url:"/admin/sync_images",method:"post",data:{list:t}})}function c(t){return Object(l.a)({url:"/admin/get_sync_images",method:"get",params:t})}function r(t){return Object(l.a)({url:"/admin/del_sync_images",method:"post",data:{id:t}})}},uqMi:function(t,e,a){"use strict";a.r(e);var l=a("t3Un");var s=a("aFx9"),o={name:"SiteConfig",data:function(){return{tableData:[],config:null,siteBase:Object,sina:Object,flickr:Object,local:Object,upload:Object,database:Object,jwt:Object,storeList:[],selectValue:"",sinaOptions:[{size:"square"},{size:"thumb150"},{size:"orj360"},{size:"orj480"},{size:"mw690"},{size:"mw1024"},{size:"mw2048"},{size:"small"},{size:"bmiddle"},{size:"large"}],sinaTimeOptions:[{size:"一小时",value:3600},{size:"半天",value:43200},{size:"一天",value:86400}],sinaEx:"",flickrOptions:[{size:"小正方形",value:"s"},{size:"大正方形",value:"q"},{size:"缩略图",value:"t"},{size:"小型图片",value:"m"},{size:"稍微小的图片",value:"n"},{size:"中等图片",value:""},{size:"中等偏大",value:"z"},{size:"中等大",value:"c"},{size:"大尺寸",value:"b"},{size:"高清尺寸",value:"h"},{size:"超大尺寸",value:"k"},{size:"原始图片",value:"o"}],mailPortList:[{info:"465 (ssl)",value:"465"},{info:"587 (tls)",value:"587"},{info:"22 (无加密)",value:"22"}],privateKey:"",publicKey:"",configLoading:!1}},watch:{siteBase:function(){console.log("hello")},config:function(){console.log("change")}},created:function(){this.loadConfig(),this.loadStore()},methods:{loadConfig:function(){var t=this;Object(l.a)({url:"/admin/get_site_config",method:"get"}).then(function(e){t.config=e.data,t.siteBase=e.data,t.sina=e.data,t.flickr=e.data,t.upload=e.data,t.local=e.data,t.database=e.data,t.jwt=e.data,t.tableData=[e.data.auxpi_info],t.selectValue=e.data.api_default,t.sinaEx="https://ws3.sinaimg.cn/"+t.sina.site_upload_way.sina_account.defult_pic_size+"/0072Vf1pgy1foxk7j6oxuj31hc0u0k6u",t.flickr.site_upload_way.flickr_account.default_size=e.data.site_upload_way.flickr_account.default_size,console.log(t.local.site_upload_way.local_store.open)}).then(this.loadConfig=!0),Object(l.a)({url:"/admin/get_rsa_key",method:"get"}).then(function(e){t.privateKey=e.data.private_key,t.publicKey=e.data.public_key})},loadStore:function(){var t=this;Object(s.d)().then(function(e){t.storeList=e.list,console.log(t.storeList)})},resetLink:function(t){this.sinaEx="https://ws3.sinaimg.cn/"+t+"/0072Vf1pgy1foxk7j6oxuj31hc0u0k6u"},reset:function(t){var e=this;(function(t){return Object(l.a)({url:"/admin/update_site_config",method:"post",data:t})})(t).then(function(t){e.$message({message:"修改成功",type:"success"})})}}},i=(a("/vWL"),a("KHd+")),n=Object(i.a)(o,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-editor-container"},[t.loadConfig?a("el-row",{attrs:{gutter:8}},[a("el-col",{staticClass:"box",attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("基本信息")]),t._v(" "),a("el-button",{staticStyle:{float:"right"},attrs:{type:"success",plain:"",round:"",icon:"el-icon-success"},on:{click:function(e){t.reset(t.siteBase)}}},[t._v("保存")])],1),t._v(" "),a("div",{staticClass:"box"},[a("el-row",[a("el-input",{attrs:{placeholder:"请输入您的站点名称"},model:{value:t.siteBase.site_name,callback:function(e){t.$set(t.siteBase,"site_name",e)},expression:"siteBase.site_name"}},[a("template",{slot:"prepend"},[a("el-tooltip",{attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v("此项会显示在您的首页和其他地方")]),t._v(" "),a("el-button",{attrs:{type:"primary"}},[t._v("站点名称")])],1)],1)],2)],1),t._v(" "),a("el-row",[a("el-input",{attrs:{placeholder:"请输入你的站点域名，需要带有 http或 https"},model:{value:t.siteBase.site_url,callback:function(e){t.$set(t.siteBase,"site_url",e)},expression:"siteBase.site_url"}},[a("template",{slot:"prepend"},[a("el-tooltip",{attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v('最后必须要有 "/",例如'),a("br"),t._v("http://abc.com/"),a("br"),t._v("此项决定了您的本地图床的链接")]),t._v(" "),a("el-button",{attrs:{type:"primary"}},[t._v("站点链接")])],1)],1)],2)],1),t._v(" "),a("el-row",[a("el-input",{attrs:{placeholder:""},model:{value:t.siteBase.site_footer,callback:function(e){t.$set(t.siteBase,"site_footer",e)},expression:"siteBase.site_footer"}},[a("template",{slot:"prepend"},[a("el-tooltip",{attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v("此项将在您网站的页面底部显示")]),t._v(" "),a("el-button",{attrs:{type:"primary"}},[t._v("页脚文字")])],1)],1)],2)],1),t._v(" "),a("el-row",[a("el-input",{attrs:{placeholder:""},model:{value:t.siteBase.logo,callback:function(e){t.$set(t.siteBase,"logo",e)},expression:"siteBase.logo"}},[a("template",{slot:"prepend"},[a("el-tooltip",{attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v("此项将于登录等地方显示")]),t._v(" "),a("el-button",{attrs:{type:"primary"}},[t._v("Logo链接")])],1)],1)],2)],1),t._v(" "),a("el-row",[t._v("\n            是否开启注册 :\n            "),a("el-switch",{staticStyle:{"margin-left":"25px"},attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.siteBase.allow_register,callback:function(e){t.$set(t.siteBase,"allow_register",e)},expression:"siteBase.allow_register"}})],1),t._v(" "),a("el-row",[t._v("\n            是否允许游客上传 :\n            "),a("el-switch",{staticStyle:{"margin-left":"25px"},attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.siteBase.allow_tourists,callback:function(e){t.$set(t.siteBase,"allow_tourists",e)},expression:"siteBase.allow_tourists"}})],1)],1)]),t._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",{staticStyle:{"font-size":"25px"}},[t._v("本地图床配置")]),t._v(" "),a("el-button",{staticStyle:{float:"right"},attrs:{type:"success",plain:"",round:"",icon:"el-icon-success"},on:{click:function(e){t.reset(t.local)}}},[t._v("保存")])],1),t._v(" "),a("div",[a("el-row",[t._v("\n            是否开启本地图床:\n            "),a("el-switch",{staticStyle:{"margin-left":"25px"},attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.local.site_upload_way.local_store.open,callback:function(e){t.$set(t.local.site_upload_way.local_store,"open",e)},expression:"local.site_upload_way.local_store.open"}})],1),t._v(" "),a("transition",{attrs:{name:"el-zoom-in-center"}},[a("el-card",{directives:[{name:"show",rawName:"v-show",value:t.local.site_upload_way.local_store.open,expression:"local.site_upload_way.local_store.open"}],staticClass:"box-card"},[a("el-row",[a("el-button",{attrs:{round:""}},[t._v("点我查看配置教程")])],1),t._v(" "),a("el-row",[a("el-input",{attrs:{placeholder:"请输入您的默认链接地址"},model:{value:t.local.site_upload_way.local_store.link,callback:function(e){t.$set(t.local.site_upload_way.local_store,"link",e)},expression:"local.site_upload_way.local_store.link"}},[a("template",{slot:"prepend"},[a("el-tooltip",{attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v('开头必须要有"/",最后不能有 "/"')]),t._v(" "),a("el-button",{attrs:{type:"primary"}},[t._v("软路径")])],1)],1)],2)],1),t._v(" "),a("el-row",[a("el-input",{attrs:{placeholder:"请输入储存路径"},model:{value:t.local.site_upload_way.local_store.storage_location,callback:function(e){t.$set(t.local.site_upload_way.local_store,"storage_location",e)},expression:"local.site_upload_way.local_store.storage_location"}},[a("template",{slot:"prepend"},[a("el-tooltip",{attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v('开头不能有"/",最后也不能有"/"'),a("br"),t._v("也可以直接填写绝对地址")]),t._v(" "),a("el-button",{attrs:{type:"primary"}},[t._v("储存路径")])],1)],1)],2)],1)],1)],1)],1)]),t._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",{staticStyle:{"font-size":"25px"}},[t._v("数据库配置")]),t._v(" "),a("el-button",{staticStyle:{float:"right"},attrs:{type:"success",plain:"",round:"",icon:"el-icon-success"},on:{click:function(e){t.reset(t.database)}}},[t._v("保存")])],1),t._v(" "),a("div",[a("el-row",[a("el-alert",{attrs:{title:"请注意，如果您不清楚数据库的信息请不要随意修改，这可能导致无法访问后台",type:"warning",center:"","show-icon":""}})],1),t._v(" "),a("el-card",{staticClass:"box-card"},[a("el-row",[a("el-input",{attrs:{disabled:!0},model:{value:t.database.db_option.db_type,callback:function(e){t.$set(t.database.db_option,"db_type",e)},expression:"database.db_option.db_type"}},[a("template",{slot:"prepend"},[a("el-tooltip",{attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v("暂时仅支持 MySQL")]),t._v(" "),a("el-button",{attrs:{type:"primary"}},[t._v("数据库驱动")])],1)],1)],2)],1),t._v(" "),a("el-row",[a("el-input",{attrs:{placeholder:"数据库服务器地址"},model:{value:t.database.db_option.db_host,callback:function(e){t.$set(t.database.db_option,"db_host",e)},expression:"database.db_option.db_host"}},[a("template",{slot:"prepend"},[a("el-tooltip",{attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v("数据库服务器地址")]),t._v(" "),a("el-button",{attrs:{type:"primary"}},[t._v("服务器地址")])],1)],1)],2)],1),t._v(" "),a("el-row",[a("el-input",{attrs:{placeholder:"数据库名称"},model:{value:t.database.db_option.db_name,callback:function(e){t.$set(t.database.db_option,"db_name",e)},expression:"database.db_option.db_name"}},[a("template",{slot:"prepend"},[a("el-tooltip",{attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v("您安装程序所用的数据库")]),t._v(" "),a("el-button",{attrs:{type:"primary"}},[t._v("数据库名称")])],1)],1)],2)],1),t._v(" "),a("el-row",[a("el-input",{attrs:{placeholder:"用户名"},model:{value:t.database.db_option.db_user,callback:function(e){t.$set(t.database.db_option,"db_user",e)},expression:"database.db_option.db_user"}},[a("template",{slot:"prepend"},[a("el-tooltip",{attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v("链接数据库所使用的用户名")]),t._v(" "),a("el-button",{attrs:{type:"primary"}},[t._v("用户名")])],1)],1)],2)],1),t._v(" "),a("el-row",[a("el-input",{attrs:{placeholder:"密码"},model:{value:t.database.db_option.db_user,callback:function(e){t.$set(t.database.db_option,"db_user",e)},expression:"database.db_option.db_user"}},[a("template",{slot:"prepend"},[a("el-tooltip",{attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v("链接数据库所使用的密码")]),t._v(" "),a("el-button",{attrs:{type:"primary"}},[t._v("密码")])],1)],1)],2)],1),t._v(" "),a("el-row",[a("el-input",{attrs:{placeholder:"表前缀"},model:{value:t.database.db_option.table_prefix,callback:function(e){t.$set(t.database.db_option,"table_prefix",e)},expression:"database.db_option.table_prefix"}},[a("template",{slot:"prepend"},[a("el-tooltip",{attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v("数据表前缀")]),t._v(" "),a("el-button",{attrs:{type:"primary"}},[t._v("表前缀")])],1)],1)],2)],1)],1)],1)]),t._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",{staticStyle:{"font-size":"25px"}},[t._v("邮件配置")]),t._v(" "),a("el-button",{staticStyle:{float:"right"},attrs:{type:"success",plain:"",round:"",icon:"el-icon-success"},on:{click:function(e){t.reset(t.local)}}},[t._v("保存")])],1),t._v(" "),a("div",[a("el-row",[t._v("\n            是否开启 SMTP 发邮件:\n            "),a("el-switch",{staticStyle:{"margin-left":"25px"},attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.local.mail_config.status,callback:function(e){t.$set(t.local.mail_config,"status",e)},expression:"local.mail_config.status"}})],1),t._v(" "),a("transition",{attrs:{name:"el-zoom-in-center"}},[a("el-card",{directives:[{name:"show",rawName:"v-show",value:t.local.mail_config.status,expression:"local.mail_config.status"}],staticClass:"box-card"},[a("el-row",[a("el-input",{attrs:{placeholder:"邮件服务器地址"},model:{value:t.local.mail_config.host,callback:function(e){t.$set(t.local.mail_config,"host",e)},expression:"local.mail_config.host"}},[a("template",{slot:"prepend"},[a("el-tooltip",{attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v("例如 stmp.qq.com")]),t._v(" "),a("el-button",{attrs:{type:"primary"}},[t._v("服务器地址")])],1)],1)],2)],1),t._v(" "),a("el-row",[a("el-input",{attrs:{placeholder:"发件昵称"},model:{value:t.local.mail_config.from,callback:function(e){t.$set(t.local.mail_config,"from",e)},expression:"local.mail_config.from"}},[a("template",{slot:"prepend"},[a("el-tooltip",{attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v("即 来自 xxxx 的邮件")]),t._v(" "),a("el-button",{attrs:{type:"primary"}},[t._v("发件昵称")])],1)],1)],2)],1),t._v(" "),a("el-row",[a("el-input",{attrs:{placeholder:"用户名"},model:{value:t.local.mail_config.user,callback:function(e){t.$set(t.local.mail_config,"user",e)},expression:"local.mail_config.user"}},[a("template",{slot:"prepend"},[a("el-tooltip",{attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v("您 SMTP 服务的用户名")]),t._v(" "),a("el-button",{attrs:{type:"primary"}},[t._v("用户名")])],1)],1)],2)],1),t._v(" "),a("el-row",[a("el-input",{attrs:{placeholder:"密码"},model:{value:t.local.mail_config.pass,callback:function(e){t.$set(t.local.mail_config,"pass",e)},expression:"local.mail_config.pass"}},[a("template",{slot:"prepend"},[a("el-tooltip",{attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v("您 SMTP 服务的密码")]),t._v(" "),a("el-button",{attrs:{type:"primary"}},[t._v("密码")])],1)],1)],2)],1),t._v(" "),a("el-row",[t._v("\n                发送端口 :\n                "),a("el-select",{staticStyle:{"margin-left":"25px"},attrs:{placeholder:"请选择"},model:{value:t.local.mail_config.port,callback:function(e){t.$set(t.local.mail_config,"port",e)},expression:"local.mail_config.port"}},t._l(t.mailPortList,function(t){return a("el-option",{key:t.value,attrs:{label:t.info,value:t.value}})}))],1)],1)],1)],1)])],1),t._v(" "),a("el-col",{staticClass:"box",attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("图床配置")]),t._v(" "),a("el-button",{staticStyle:{float:"right"},attrs:{type:"success",plain:"",round:"",icon:"el-icon-success"},on:{click:function(e){t.reset(t.upload)}}},[t._v("保存")])],1),t._v(" "),a("div",[a("el-row",[t._v("\n            默认图床API :\n            "),a("el-select",{staticStyle:{"margin-left":"25px"},attrs:{placeholder:"请选择"},model:{value:t.upload.api_default,callback:function(e){t.$set(t.upload,"api_default",e)},expression:"upload.api_default"}},t._l(t.storeList,function(t){return a("el-option",{key:t.id,attrs:{label:t.api,value:t.api}})}))],1),t._v(" "),a("el-row",[t._v("\n            一次性最大上传 :\n            "),a("el-input-number",{staticStyle:{"margin-left":"25px"},model:{value:t.upload.site_upload_max_number,callback:function(e){t.$set(t.upload,"site_upload_max_number",e)},expression:"upload.site_upload_max_number"}}),t._v(" 张\n          ")],1),t._v(" "),a("el-row",[t._v("\n            允许的最大图片体积 :\n            "),a("el-input-number",{staticStyle:{"margin-left":"25px"},model:{value:t.upload.site_upload_max_size,callback:function(e){t.$set(t.upload,"site_upload_max_size",e)},expression:"upload.site_upload_max_size"}}),t._v(" MB\n          ")],1)],1)]),t._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",{staticStyle:{"font-size":"25px"}},[t._v("微博图床配置")]),t._v(" "),a("el-button",{staticStyle:{float:"right"},attrs:{type:"success",plain:"",round:"",icon:"el-icon-success"},on:{click:function(e){t.reset(t.sina)}}},[t._v("保存")])],1),t._v(" "),a("div",[a("el-row",[t._v("\n            是否开启微博图床:\n            "),a("el-switch",{staticStyle:{"margin-left":"25px"},attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.sina.site_upload_way.open_sina_pic_store,callback:function(e){t.$set(t.sina.site_upload_way,"open_sina_pic_store",e)},expression:"sina.site_upload_way.open_sina_pic_store"}})],1),t._v(" "),a("transition",{attrs:{name:"el-zoom-in-center"}},[t.sina.site_upload_way.open_sina_pic_store?a("el-card",{staticClass:"box-card"},[a("el-row",[a("el-input",{attrs:{placeholder:"请输入用户名"},model:{value:t.sina.site_upload_way.sina_account.user_name,callback:function(e){t.$set(t.sina.site_upload_way.sina_account,"user_name",e)},expression:"sina.site_upload_way.sina_account.user_name"}},[a("template",{slot:"prepend"},[a("el-tooltip",{attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v("您的微博登录用来登录的用户名")]),t._v(" "),a("el-button",{attrs:{type:"primary"}},[t._v("微博用户名")])],1)],1)],2)],1),t._v(" "),a("el-row",[a("el-input",{attrs:{placeholder:"请输入密码"},model:{value:t.sina.site_upload_way.sina_account.pass_word,callback:function(e){t.$set(t.sina.site_upload_way.sina_account,"pass_word",e)},expression:"sina.site_upload_way.sina_account.pass_word"}},[a("template",{slot:"prepend"},[a("el-tooltip",{attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v("您的微博登录用来登录的密码")]),t._v(" "),a("el-button",{attrs:{type:"primary"}},[t._v("微博密码")])],1)],1)],2)],1),t._v(" "),a("el-row",[t._v("\n                默认图片大小 :\n                "),a("el-select",{staticStyle:{"margin-left":"25px"},attrs:{placeholder:"请选择"},on:{change:function(e){t.resetLink(t.sina.site_upload_way.sina_account.defult_pic_size)}},model:{value:t.sina.site_upload_way.sina_account.defult_pic_size,callback:function(e){t.$set(t.sina.site_upload_way.sina_account,"defult_pic_size",e)},expression:"sina.site_upload_way.sina_account.defult_pic_size"}},t._l(t.sinaOptions,function(t){return a("el-option",{key:t.size,attrs:{label:t.size,value:t.size}})})),t._v(" "),a("el-card",{attrs:{shadow:"always"}},[t._v("\n                  链接效果 (点击可以直接查看图片) :"),a("br"),a("br"),t._v(" "),a("a",{attrs:{href:t.sinaEx,target:"_blank"}},[t._v(t._s(t.sinaEx))])])],1),t._v(" "),a("el-row",[a("span",[t._v(" Cookie 缓存时间:")]),t._v(" "),a("el-select",{staticStyle:{"margin-left":"25px"},attrs:{clearable:"",placeholder:"请选择"},model:{value:t.sina.site_upload_way.sina_account.reset_sina_cookie_time,callback:function(e){t.$set(t.sina.site_upload_way.sina_account,"reset_sina_cookie_time",e)},expression:"sina.site_upload_way.sina_account.reset_sina_cookie_time"}},t._l(t.sinaTimeOptions,function(t){return a("el-option",{key:t.value,attrs:{label:t.size,value:t.value}})}))],1)],1):t._e()],1)],1)]),t._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",{staticStyle:{"font-size":"25px"}},[t._v("Flickr图床配置")]),t._v(" "),a("el-button",{staticStyle:{float:"right"},attrs:{type:"success",plain:"",round:"",icon:"el-icon-success"},on:{click:function(e){t.reset(t.flickr)}}},[t._v("保存")])],1),t._v(" "),a("div",[a("el-row",[t._v("\n            是否开启Flickr图床:\n            "),a("el-switch",{staticStyle:{"margin-left":"25px"},attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.flickr.site_upload_way.open_flickr_store,callback:function(e){t.$set(t.flickr.site_upload_way,"open_flickr_store",e)},expression:"flickr.site_upload_way.open_flickr_store"}})],1),t._v(" "),a("transition",{attrs:{name:"el-zoom-in-center"}},[t.flickr.site_upload_way.open_flickr_store?a("el-card",{staticClass:"box-card"},[a("el-row",[a("el-input",{attrs:{placeholder:"Flickr ID"},model:{value:t.flickr.site_upload_way.flickr_account.id,callback:function(e){t.$set(t.flickr.site_upload_way.flickr_account,"id",e)},expression:"flickr.site_upload_way.flickr_account.id"}},[a("template",{slot:"prepend"},[a("el-tooltip",{attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v("Flickr ID 及 Flickr 分配给您的用户 ID")]),t._v(" "),a("el-button",{attrs:{type:"primary"}},[t._v("ID")])],1)],1)],2)],1),t._v(" "),a("el-row",[a("el-input",{attrs:{placeholder:"api_key"},model:{value:t.flickr.site_upload_way.flickr_account.api_key,callback:function(e){t.$set(t.flickr.site_upload_way.flickr_account,"api_key",e)},expression:"flickr.site_upload_way.flickr_account.api_key"}},[a("template",{slot:"prepend"},[a("el-tooltip",{attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v("向 Flickr 申请到的 api_key")]),t._v(" "),a("el-button",{attrs:{type:"primary"}},[t._v("Api_key")])],1)],1)],2)],1),t._v(" "),a("el-row",[a("el-input",{attrs:{placeholder:"api_secret"},model:{value:t.flickr.site_upload_way.flickr_account.api_secret,callback:function(e){t.$set(t.flickr.site_upload_way.flickr_account,"api_secret",e)},expression:"flickr.site_upload_way.flickr_account.api_secret"}},[a("template",{slot:"prepend"},[a("el-tooltip",{attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v("向 Flickr 申请到的 api_secret")]),t._v(" "),a("el-button",{attrs:{type:"primary"}},[t._v("Api_secret")])],1)],1)],2)],1),t._v(" "),a("el-row",[a("el-input",{attrs:{placeholder:"Oauth_token"},model:{value:t.flickr.site_upload_way.flickr_account.oauth_token,callback:function(e){t.$set(t.flickr.site_upload_way.flickr_account,"oauth_token",e)},expression:"flickr.site_upload_way.flickr_account.oauth_token"}},[a("template",{slot:"prepend"},[a("el-tooltip",{attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v("通过 Flickr 工具获取到的Oauth_token")]),t._v(" "),a("el-button",{attrs:{type:"primary"}},[t._v("Oauth_token")])],1)],1)],2)],1),t._v(" "),a("el-row",[a("el-input",{attrs:{placeholder:"Oauth_token_secret"},model:{value:t.flickr.site_upload_way.flickr_account.oauth_token_secret,callback:function(e){t.$set(t.flickr.site_upload_way.flickr_account,"oauth_token_secret",e)},expression:"flickr.site_upload_way.flickr_account.oauth_token_secret"}},[a("template",{slot:"prepend"},[a("el-tooltip",{attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v("通过 Flickr 工具获取到的Oauth_token_secret")]),t._v(" "),a("el-button",{attrs:{type:"primary"}},[t._v("Oauth_token_secret")])],1)],1)],2)],1),t._v(" "),a("el-row",[t._v("\n                默认图片大小 :\n                "),a("el-select",{staticStyle:{"margin-left":"25px"},attrs:{clearable:"",placeholder:"请选择"},model:{value:t.flickr.site_upload_way.flickr_account.default_size,callback:function(e){t.$set(t.flickr.site_upload_way.flickr_account,"default_size",e)},expression:"flickr.site_upload_way.flickr_account.default_size"}},t._l(t.flickrOptions,function(t){return a("el-option",{key:t.value,attrs:{label:t.size,value:t.value}})}))],1),t._v(" "),a("el-row",[a("el-button",{staticStyle:{float:"right"},attrs:{round:""}},[t._v("查看教程")])],1)],1):t._e()],1)],1)]),t._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("JWT 设置")]),t._v(" "),a("el-button",{staticStyle:{float:"right"},attrs:{type:"success",plain:"",round:"",icon:"el-icon-success"},on:{click:function(e){t.reset(t.jwt)}}},[t._v("保存")])],1),t._v(" "),a("div",{staticClass:"box"},[a("el-row",[a("el-input",{attrs:{placeholder:"jwt_secret"},model:{value:t.jwt.jwt_secret,callback:function(e){t.$set(t.jwt,"jwt_secret",e)},expression:"jwt.jwt_secret"}},[a("template",{slot:"prepend"},[a("el-tooltip",{attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v("请随意输入字符串用于认证加密")]),t._v(" "),a("el-button",{attrs:{type:"primary"}},[t._v("jwt_secret")])],1)],1)],2)],1),t._v(" "),a("el-row",[t._v("\n            jwt签发时长 :\n            "),a("el-input-number",{staticStyle:{"margin-left":"25px"},model:{value:t.jwt.jwt_due_time,callback:function(e){t.$set(t.jwt,"jwt_due_time",e)},expression:"jwt.jwt_due_time"}}),t._v(" 小时\n          ")],1)],1)])],1),t._v(" "),a("el-col",{staticClass:"box",attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",{staticStyle:{"font-size":"25px"}},[t._v("RSA证书")])]),t._v(" "),a("div",[a("el-row",[a("el-col",{staticStyle:{margin:"10px"},attrs:{xs:24,sm:24,md:11,lg:11,xl:11}},[a("el-card",[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("公钥")])]),t._v(" "),a("el-input",{attrs:{autosize:{minRows:10,maxRows:20},disabled:!0,type:"textarea"},model:{value:t.publicKey,callback:function(e){t.publicKey=e},expression:"publicKey"}})],1)],1),t._v(" "),a("el-col",{staticStyle:{margin:"10px"},attrs:{xs:24,sm:24,md:11,lg:11,xl:11}},[a("el-card",[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("私钥")])]),t._v(" "),a("el-input",{attrs:{autosize:{minRows:10,maxRows:20},disabled:!0,type:"textarea"},model:{value:t.privateKey,callback:function(e){t.privateKey=e},expression:"privateKey"}})],1)],1)],1)],1)])],1),t._v(" "),a("el-col",{staticClass:"box",attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",{staticStyle:{"font-size":"25px"}},[t._v("AUXPI 程序信息")]),t._v(" "),a("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",plain:"",round:"",icon:"el-icon-time"}},[t._v("检查更新")])],1),t._v(" "),a("div",[a("el-row",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:""}},[a("el-table-column",{attrs:{prop:"author",label:"作者",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"version",label:"版本",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"branch",label:"branch"}}),t._v(" "),a("el-table-column",{attrs:{prop:"repositories",label:"项目地址"}})],1)],1)],1)])],1)],1):t._e()],1)},[],!1,null,"31fc7a1e",null);n.options.__file="index.vue";e.default=n.exports}}]);