import{_ as E}from"./index-f858892f.js";import{r as l,G as I,u as J,Y as P,ab as V,c as C,m as x,w as c,f as u,i as L,$ as z,af as A,M as K,as as R,a4 as G,e as a,h as w,Z as q,d as B,R as S,at as Q,Q as W,au as Z,I as H,B as X,W as ee}from"./index-18b660c1.js";import{f as te,e as M}from"./index-a6ad3bbb.js";import{_ as ae,P as oe}from"./index-bae3b8b9.js";import{a as O,_ as le}from"./computedMaterial.vue_vue_type_script_setup_true_lang-7a0f04f7.js";import{D as F}from"./formula-4ae4e899.js";import{_ as re}from"./index-0cd7f2c9.js";import{L as T}from"./index-d761e5bd.js";import"./index-c23684c8.js";import"./slotCell.vue_vue_type_script_lang-b6931333.js";const se={__name:"edit",emits:["submit"],setup(j,{expose:g,emit:h}){const n=l(null),p=l(!1),_=h,D=I(()=>"上传领料单"),y=J(),r=l([]),f=l(!1),N=t=>{t&&(f.value=!0,z({projectName:t}).then(o=>{r.value=(o.rows||[]).map(s=>({value:s.projectId,label:`${s.projectName} 【${s.projectId}】`}))}).finally(()=>{f.value=!1}))},e=l([]),d=l(!1),b=async t=>{const o=await i.value.getFormDataByName("projectId");o?t&&(d.value=!0,A({status:5,projectId:o,id:t}).then(s=>{e.value=(s.rows||[]).map(v=>({value:v.id,label:`${v.id}`}))}).finally(()=>{d.value=!1})):e.value=[]},i=l(null),m=l([{cmp:"desc",name:"applyName",label:"申请人"},{cmp:"select",name:"projectId",label:"项目编号/名称",itemOptions:{options:I(()=>r.value),filterable:!0,onSearch:N,onChange:t=>{e.value=[],n.value.setComputedData(),i.value.setFormDataByName("productorderId",null),$({})}},rules:[{required:!0,message:"必选",type:"error",trigger:"change"}]},{cmp:"select",name:"productorderId",label:"生产计划",itemOptions:{options:I(()=>e.value),filterable:!0,onSearch:b,onChange:async t=>{const o=await i.value.getFormDataByName("projectId");P({projectId:o,productorderId:t,status:0}).then(s=>{s.rows&&s.rows.length?$(s.rows[0]):V({id:t}).then(v=>{$(v.data)})})}},rules:[{required:!0,message:"必选",type:"error",trigger:"change"}]},{cmp:"input",name:"pickListName",label:"领料单名称",rules:[{required:!0,message:"必填",type:"error",trigger:"blur"}]},{cmp:"textarea",name:"remark",label:"备注"},{cmp:"datePicker",name:"pickDate",label:"领料时间",itemOptions:{valueType:"YYYY-MM-DD"},rules:[{required:!0,message:"必选",type:"error",trigger:"change"}]},{cmp:"upload",name:"fileUrl",label:"附件",otherProps:{filenameKey:"fileName"}}]),k=async()=>{const t=await i.value.getFormData(!0);if(t===!1)return!1;const o=n.value.getPickAllDataList();if(!o.pickCurrent)return K.error("没有领取任何物料");await R({...t,materials:JSON.stringify(o.materials),panel:JSON.stringify(o.panel),accessory:JSON.stringify(o.accessory)}),K.success("领料单上传成功"),_("submit"),p.value=!1},$=(t={})=>{const{materials:o,panel:s,accessory:v}=t;n.value.setComputedData({materials:o,panel:s,accessory:v})};return g({open:()=>{p.value=!0;const t={applyId:y.info.userId,applyName:y.info.nickName};G(()=>{i.value.fillFormData(t),n.value.setComputedData()})}}),(t,o)=>{const s=ae,v=q,U=F;return C(),x(U,{visible:u(p),"onUpdate:visible":o[0]||(o[0]=Y=>L(p)?p.value=Y:null),attach:"body",header:u(D),"destroy-on-close":"",placement:"bottom",size:"100%","on-confirm":k},{body:c(()=>[a(s,{ref_key:"$form",ref:i,"label-width":"150px",forms:u(m)},null,8,["forms"]),a(v,{class:"divider",align:"left"},{default:c(()=>[w("用料明细")]),_:1}),a(u(O),{ref_key:"$computedMaterial",ref:n,isPick:!0},null,512)]),_:1},8,["visible","header"])}}},ne=se,ie={__name:"detail",emits:["submit"],setup(j,{expose:g,emit:h}){const n=l(null),p=l(null),_=l(!1),D=l(null),y=I(()=>`领料单-${r.value.pickListName}`),r=l({}),f=[{colKey:"projectId",label:"所属项目"},{colKey:"productorderId",label:"生产计划"},{colKey:"pickDate",label:"领料时间"},{colKey:"createBy",label:"申请人"},{colKey:"remark",label:"备注"},{colKey:"fileName",label:"附件",cell:e=>e.fileUrl?a(T,{theme:"primary",onClick:()=>p.value.open(e.fileUrl,e.fileName)},{default:()=>[e.fileName]}):"-"}];return g({open:async(e=null)=>{D.value=e,_.value=!0,e&&Q({id:e}).then(d=>{const{materials:b,panel:i,accessory:m,...k}=d.data;n.value.setComputedData({materials:b,panel:i,accessory:m}),r.value=d.data})}}),(e,d)=>{const b=re,i=q,m=F,k=le;return C(),B(S,null,[a(m,{visible:u(_),"onUpdate:visible":d[0]||(d[0]=$=>L(_)?_.value=$:null),attach:"body",header:u(y),"destroy-on-close":"",placement:"bottom",size:"100%"},{body:c(()=>[a(b,{columnCount:2,"label-width":"150px",columns:f,data:u(r)},null,8,["data"]),a(i,{class:"divider",align:"left"},{default:c(()=>[w("用料明细")]),_:1}),a(u(O),{ref_key:"$computedMaterial",ref:n,isPick:!0,isDetail:!0},null,512)]),_:1},8,["visible","header"]),a(k,{ref_key:"$preview",ref:p,canDown:!0},null,512)],64)}}},ke={__name:"index",setup(j){const g=l(null),h=l(null),n=l(null),p=[{cmp:"input",name:"pickListName",label:"领料单名称"},{cmp:"select",name:"status",label:"单据状态",itemOptions:{options:te(M)}}],_=[{colKey:"serial-number",title:"#",width:60},{colKey:"id",title:"领料单"},{colKey:"pickListName",title:"领料单名称"},{colKey:"productorderId",title:"生产计划"},{colKey:"pickDate",title:"领料日期"},{colKey:"createBy",title:"申请人"},{colKey:"status",title:"单据状态",cell:(y,{row:r})=>{var f;return(f=M[r.status])==null?void 0:f.label}},{colKey:"remark",title:"备注"},{colKey:"operation",title:"操作",width:120}],D=y=>{Z({id:y}).then(()=>{K.success("领料单撤销成功"),n.value.refresh()})};return(y,r)=>{const f=H,N=X,e=T,d=oe,b=ee,i=E;return C(),B(S,null,[a(i,{ref_key:"$table",ref:n,searchItems:p,columns:_,api:u(P)},{topBtns:c(()=>[a(N,{onClick:r[0]||(r[0]=m=>u(g).open())},{icon:c(()=>[a(f,{name:"add"})]),default:c(()=>[w(" 上传领料单 ")]),_:1})]),operation:c(({row:m})=>[a(b,null,{default:c(()=>[a(e,{theme:"primary",onClick:k=>u(h).open(m.id)},{default:c(()=>[w(" 查看 ")]),_:2},1032,["onClick"]),m.status==0?(C(),x(d,{key:0,content:"确认撤销此次领料吗？",onConfirm:k=>D(m.id)},{default:c(()=>[a(e,{theme:"primary"},{default:c(()=>[w(" 撤销 ")]),_:1})]),_:2},1032,["onConfirm"])):W("",!0)]),_:2},1024)]),_:1},8,["api"]),a(ne,{ref_key:"$DialogEdit",ref:g,onSubmit:r[1]||(r[1]=m=>u(n).refresh())},null,512),a(ie,{ref_key:"$DialogDetail",ref:h},null,512)],64)}}};export{ke as default};
