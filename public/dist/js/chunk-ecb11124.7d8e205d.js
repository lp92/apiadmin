(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ecb11124"],{3786:function(t,e,n){"use strict";n.d(e,"f",function(){return a}),n.d(e,"g",function(){return o}),n.d(e,"h",function(){return i}),n.d(e,"b",function(){return s}),n.d(e,"a",function(){return l}),n.d(e,"e",function(){return c}),n.d(e,"c",function(){return u}),n.d(e,"d",function(){return m});var r=n("66df"),a=function(){return r["b"].request({url:"Auth/getGroups",method:"get"})},o=function(t){return r["b"].request({url:"Auth/index",method:"get",params:t})},i=function(t){return r["b"].request({url:"Auth/getRuleList",method:"get",params:t})},s=function(t,e){return r["b"].request({url:"Auth/changeStatus",method:"get",params:{status:t,id:e}})},l=function(t){return r["b"].request({url:"Auth/add",method:"post",data:t})},c=function(t){return r["b"].request({url:"Auth/edit",method:"post",data:t})},u=function(t){return r["b"].request({url:"Auth/del",method:"get",params:{id:t}})},m=function(t){return r["b"].request({url:"Auth/delMember",method:"get",params:t})}},7536:function(t,e,n){"use strict";var r=n("e24c"),a=n.n(r);a.a},"7f5e":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Row",[n("Col",{attrs:{span:"24"}},[n("Card",{staticStyle:{"margin-bottom":"10px"}},[n("Form",{attrs:{inline:""}},[n("FormItem",{staticStyle:{"margin-bottom":"0"}},[n("Select",{staticStyle:{width:"100px"},attrs:{clearable:"",placeholder:"请选择状态"},model:{value:t.searchConf.status,callback:function(e){t.$set(t.searchConf,"status",e)},expression:"searchConf.status"}},[n("Option",{attrs:{value:1}},[t._v("启用")]),n("Option",{attrs:{value:0}},[t._v("禁用")])],1)],1),n("FormItem",{staticStyle:{"margin-bottom":"0"}},[n("Input",{attrs:{placeholder:"请输入组名称"},model:{value:t.searchConf.keywords,callback:function(e){t.$set(t.searchConf,"keywords",e)},expression:"searchConf.keywords"}})],1),n("FormItem",{staticStyle:{"margin-bottom":"0"}},[n("Button",{attrs:{type:"primary"},on:{click:t.search}},[t._v(t._s(t.$t("find_button"))+"/"+t._s(t.$t("refresh_button")))])],1)],1)],1)],1)],1),n("Row",[n("Col",{attrs:{span:"24"}},[n("Card",[n("p",{staticStyle:{height:"32px"},attrs:{slot:"title"},slot:"title"},[n("Button",{attrs:{type:"primary",icon:"md-add"},on:{click:t.alertAdd}},[t._v(t._s(t.$t("add_button")))])],1),n("div",[n("Table",{attrs:{columns:t.columnsList,data:t.tableData,border:"","disabled-hover":""}})],1),n("div",{staticClass:"margin-top-15",staticStyle:{"text-align":"center"}},[n("Page",{attrs:{total:t.tableShow.listCount,current:t.tableShow.currentPage,"page-size":t.tableShow.pageSize,"show-elevator":"","show-sizer":"","show-total":""},on:{"on-change":t.changePage,"on-page-size-change":t.changeSize}})],1)])],1)],1),n("Modal",{attrs:{width:"668",styles:{top:"30px"}},on:{"on-visible-change":t.doCancel},model:{value:t.modalSetting.show,callback:function(e){t.$set(t.modalSetting,"show",e)},expression:"modalSetting.show"}},[n("p",{staticStyle:{color:"#2d8cf0"},attrs:{slot:"header"},slot:"header"},[n("Icon",{attrs:{type:"md-alert"}}),n("span",[t._v(t._s(t.formItem.id?"编辑":"新增")+"权限组")])],1),n("Form",{ref:"myForm",attrs:{rules:t.ruleValidate,model:t.formItem,"label-width":80}},[n("FormItem",{attrs:{label:"组名称",prop:"name"}},[n("Input",{attrs:{placeholder:"请输入权限组名称"},model:{value:t.formItem.name,callback:function(e){t.$set(t.formItem,"name",e)},expression:"formItem.name"}})],1),n("FormItem",{attrs:{label:"组描述",prop:"description"}},[n("Input",{attrs:{type:"textarea",placeholder:"请输入权限组描述"},model:{value:t.formItem.description,callback:function(e){t.$set(t.formItem,"description",e)},expression:"formItem.description"}})],1),n("FormItem",{attrs:{label:"组授权",prop:"rules"}},[n("div",{staticClass:"rule-list"},[n("Tree",{ref:"formTree",attrs:{data:t.ruleList,"show-checkbox":"",multiple:""}})],1)])],1),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("Button",{staticStyle:{"margin-right":"8px"},attrs:{type:"text"},on:{click:t.cancel}},[t._v("取消")]),n("Button",{attrs:{type:"primary",loading:t.modalSetting.loading},on:{click:t.submit}},[t._v("确定")])],1)],1),n("Modal",{attrs:{width:"998",styles:{top:"30px"}},model:{value:t.memberSetting.show,callback:function(e){t.$set(t.memberSetting,"show",e)},expression:"memberSetting.show"}},[n("p",{staticStyle:{color:"#2d8cf0"},attrs:{slot:"header"},slot:"header"},[n("Icon",{attrs:{type:"information-circled"}}),n("span",[t._v("组成员列表")])],1),n("div",[n("Table",{attrs:{columns:t.memberColumns,data:t.memberData,border:"","disabled-hover":""}})],1),n("div",{staticClass:"margin-top-15",staticStyle:{"text-align":"center"}},[n("Page",{attrs:{total:t.memberShow.listCount,current:t.memberShow.currentPage,"page-size":t.memberShow.pageSize,"show-elevator":"","show-sizer":"","show-total":""},on:{"on-change":t.changeMemberPage,"on-page-size-change":t.changeMemberSize}})],1),n("p",{attrs:{slot:"footer"},slot:"footer"})])],1)},a=[],o=(n("7f7f"),n("c24f")),i=n("3786"),s=function(t,e,n,r){return e("Button",{props:{type:"primary"},style:{margin:"0 5px"},on:{click:function(){t.formItem.id=n.id,t.formItem.name=n.name,t.formItem.description=n.description,Object(i["h"])({group_id:n.id}).then(function(e){t.ruleList=e.data.data.list}),t.modalSetting.show=!0,t.modalSetting.index=r}}},t.$t("edit_button"))},l=function(t,e,n,r){return e("Poptip",{props:{confirm:!0,title:"您确定要删除这条数据吗? ",transfer:!0},on:{"on-ok":function(){Object(i["c"])(n.id).then(function(e){t.tableData.splice(r,1),t.$Message.success(e.data.msg)})}}},[e("Button",{style:{margin:"0 5px"},props:{type:"error",placement:"top",loading:n.isDeleting}},t.$t("delete_button"))])},c=function(t,e,n,r){return e("Button",{props:{type:"primary"},style:{margin:"0 5px"},on:{click:function(){t.memberSetting.show=!0,t.memberShow.gid=n.id,t.getMemberList()}}},"组成员")},u=function(t,e,n,r){return e("Poptip",{props:{confirm:!0,title:"您确定要删除这条数据吗? ",transfer:!0},on:{"on-ok":function(){Object(i["d"])({uid:n.id,gid:t.memberShow.gid}).then(function(e){t.memberData.splice(r,1),t.$Message.success(e.data.msg)})}}},[e("Button",{style:{margin:"0 5px"},props:{type:"error",placement:"top",loading:n.isDeleting}},t.$t("delete_button"))])},m={name:"system_auth",data:function(){var t=this;return{ruleList:[],columnsList:[{title:"序号",type:"index",width:65,align:"center"},{title:"权限组",align:"center",key:"name",width:100},{title:"描述",align:"center",key:"description"},{title:"成员授权",align:"center",width:116,render:function(e,n){return e("div",[c(t,e,n.row,n.index)])}},{title:"状态",align:"center",width:100,render:function(e,n){var r=t;return e("i-switch",{attrs:{size:"large"},props:{"true-value":1,"false-value":0,value:n.row.status},on:{"on-change":function(t){Object(i["b"])(t,n.row.id).then(function(t){r.$Message.success(t.data.msg),r.getList(),r.cancel()})}}},[e("span",{slot:"open"},r.$t("open_choose")),e("span",{slot:"close"},r.$t("close_choose"))])}},{title:"操作",align:"center",width:200,render:function(e,n){return e("div",[s(t,e,n.row,n.index),l(t,e,n.row,n.index)])}}],memberColumns:[{title:"序号",type:"index",width:65,align:"center"},{title:"用户账号",align:"center",key:"username"},{title:"真实姓名",align:"center",key:"nickname",width:90},{title:"登录次数",align:"center",key:"login_times",width:90},{title:"最后登录时间",align:"center",key:"last_login_time",width:160},{title:"最后登录IP",align:"center",key:"last_login_ip",width:160},{title:"状态",align:"center",width:100,render:function(t,e){return 1===e.row.status?t("Tag",{props:{color:"green"}},"启用"):t("Tag",{props:{color:"red"}},vm.$t("close_choose"))}},{title:"操作",align:"center",width:175,render:function(e,n){return e("div",[u(t,e,n.row,n.index)])}}],tableData:[],memberData:[],tableShow:{currentPage:1,pageSize:10,listCount:0},memberShow:{currentPage:1,pageSize:10,listCount:0,gid:0},searchConf:{keywords:"",status:""},modalSetting:{show:!1,loading:!1,index:0},memberSetting:{show:!1,loading:!1,index:0},formItem:{name:"",description:"",rules:[],id:0},ruleValidate:{name:[{required:!0,message:"组名称不能为空",trigger:"blur"}]}}},created:function(){this.getList()},methods:{alertAdd:function(){var t=this;Object(i["h"])().then(function(e){t.ruleList=e.data.data.list}),this.modalSetting.show=!0},submit:function(){this.formItem.rules=[];var t=this.$refs["formTree"].getCheckedNodes(),e=t.length;if(e)for(var n=0;n<=e-1;n++)this.formItem.rules.push(t[n]["key"]);var r=this;this.$refs["myForm"].validate(function(t){t&&(r.modalSetting.loading=!0,0===r.formItem.id?Object(i["a"])(r.formItem).then(function(t){r.$Message.success(t.data.msg),r.getList(),r.cancel()}).catch(function(){r.cancel()}):Object(i["e"])(r.formItem).then(function(t){r.$Message.success(t.data.msg),r.getList(),r.cancel()}).catch(function(){r.cancel()}))})},cancel:function(){this.modalSetting.show=!1},doCancel:function(t){t||(this.formItem.id=0,this.$refs["myForm"].resetFields(),this.modalSetting.loading=!1,this.modalSetting.index=0)},changePage:function(t){this.tableShow.currentPage=t,this.getList()},changeSize:function(t){this.tableShow.pageSize=t,this.getList()},changeMemberPage:function(t){this.memberShow.currentPage=t,this.getMemberList()},changeMemberSize:function(t){this.memberShow.pageSize=t,this.getMemberList()},search:function(){this.tableShow.currentPage=1,this.getList()},getList:function(){var t=this,e={page:t.tableShow.currentPage,size:t.tableShow.pageSize,keywords:t.searchConf.keywords,status:t.searchConf.status};Object(i["g"])(e).then(function(e){t.tableData=e.data.data.list,t.tableShow.listCount=e.data.data.count})},getMemberList:function(){var t=this,e={page:t.memberShow.currentPage,size:t.memberShow.pageSize,gid:t.memberShow.gid};Object(o["g"])(e).then(function(e){t.memberData=e.data.data.list,t.memberShow.listCount=e.data.data.count})}}},d=m,h=(n("7536"),n("2877")),g=Object(h["a"])(d,r,a,!1,null,"465da0e3",null);e["default"]=g.exports},e24c:function(t,e,n){}}]);