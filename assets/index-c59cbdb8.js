import{_ as x}from"./index-f858892f.js";import{r as d,c,d as N,e as s,w as n,f as y,R as D,a6 as E,h as r,m,Q as p,a5 as q,a1 as I,M as h,a7 as P,a8 as T,W as B}from"./index-18b660c1.js";import{f as L,a as k}from"./index-a6ad3bbb.js";import{_ as R}from"./detail-189fd5ec.js";import{L as V}from"./index-d761e5bd.js";import{P as M}from"./index-bae3b8b9.js";import"./index-c23684c8.js";import"./index-0cd7f2c9.js";import"./slotCell.vue_vue_type_script_lang-b6931333.js";import"./bom.vue_vue_type_script_setup_true_lang-95283b00.js";import"./formula-4ae4e899.js";const U={__name:"index",setup(O){const u=d(null),i=d(null),C=[{cmp:"input",name:"craftName",label:"工艺名称"},{cmp:"select",name:"status",label:"状态",itemOptions:{options:L(k)}}],K=[{colKey:"serial-number",title:"#",width:60},{colKey:"id",title:"工艺编号"},{colKey:"craftName",title:"模板编号"},{colKey:"designer",title:"设计师"},{colKey:"craftName",title:"工艺名称"},{colKey:"primaryComment",title:"一级注释"},{colKey:"photos",title:"示意图",width:132,cell:(o,{row:e})=>s(E,{src:e.photos,fit:"cover",class:"img-list-demo"},null)},{colKey:"remark",title:"备注"},{colKey:"applyId",title:"审核人"},{colKey:"applyTime",title:"通过时间"},{colKey:"status",title:"状态",cell:(o,{row:e})=>{var t;return(t=k[e.status])==null?void 0:t.label}},{colKey:"operation",title:"操作",width:110}],f=(o,e)=>{I({id:o,status:e}).then(()=>{h.success(`生产任务已审核，状态：${e==5?"通过":e==9?"不通过":"未知"}`),i.value.refresh()})},g=o=>{P({id:o}).then(e=>{h.success("工艺删除成功"),i.value.refresh()})},$=async(o,e)=>{const t=await requestProductTaskExport({id:o});T(t,e)};return(o,e)=>{const t=V,_=M,b=B,v=x;return c(),N(D,null,[s(v,{ref_key:"$table",ref:i,searchItems:C,columns:K,api:y(q)},{operation:n(({row:a})=>[s(b,null,{default:n(()=>[s(t,{theme:"primary",onClick:l=>y(u).open(a.id)},{default:n(()=>[r(" 查看 ")]),_:2},1032,["onClick"]),a.status==1?(c(),m(_,{key:0,content:"请选择此生产任务的审核结果","confirm-btn":{content:"通过",theme:"success"},onConfirm:l=>f(a.id,5),"cancel-btn":{content:"不通过",theme:"danger"},onCancel:l=>f(a.id,9)},{default:n(()=>[s(t,{theme:"primary"},{default:n(()=>[r(" 审核 ")]),_:1})]),_:2},1032,["onConfirm","onCancel"])):p("",!0),a.status==9?(c(),m(_,{key:1,content:"确认删除吗？",onConfirm:l=>g(a.id)},{default:n(()=>[s(t,{theme:"primary"},{default:n(()=>[r("删除")]),_:1})]),_:2},1032,["onConfirm"])):p("",!0),a.status==5?(c(),m(t,{key:2,theme:"primary",onClick:l=>$(a.id,a.craftName)},{default:n(()=>[r(" 导出 ")]),_:2},1032,["onClick"])):p("",!0)]),_:2},1024)]),_:1},8,["api"]),s(R,{ref_key:"$DialogDetail",ref:u},null,512)],64)}}};export{U as default};
