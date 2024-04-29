import{_ as A}from"./index-f858892f.js";import{r as m,G as L,c as N,m as I,w as o,f as u,i as G,$ as R,M as D,a1 as V,a2 as Q,a3 as J,a4 as T,e as r,h as _,a5 as U,Z as W,u as Z,d as H,R as X,a6 as Y,Q as O,a7 as ee,a8 as te,I as ae,B as se,W as oe}from"./index-18b660c1.js";import{f as re,a as M}from"./index-a6ad3bbb.js";import{_ as ne,P as le}from"./index-bae3b8b9.js";import{C as ie,_ as ce}from"./bom.vue_vue_type_script_setup_true_lang-95283b00.js";import{D as me}from"./formula-4ae4e899.js";import{S as ue,L as pe}from"./index-d761e5bd.js";import{F as fe}from"./index-c23684c8.js";import{_ as de}from"./detail-189fd5ec.js";import"./slotCell.vue_vue_type_script_lang-b6931333.js";import"./index-0cd7f2c9.js";const _e={__name:"edit",emits:["submit"],setup(z,{expose:K,emit:j}){const p=m(null),y=m(null),b=m(!1),S=j,B=m(null),q=L(()=>`${B.value?"编辑":"创建"}产品工艺`),$=m([]),P=m(!1),i=e=>{e&&(P.value=!0,R({projectName:e}).then(a=>{$.value=(a.rows||[]).map(t=>({value:t.projectId,label:`${t.projectName} 【${t.projectId}】`}))}).finally(()=>{P.value=!1}))},l=m(null),v=m([{cmp:"select",name:"projectId",label:"项目编号/名称",itemOptions:{options:L(()=>$.value),filterable:!0,onSearch:i},rules:[{required:!0,message:"必选",type:"error",trigger:"change"}]},{cmp:"slot",slotName:"copyOne"},{cmp:"input",name:"id",label:"工艺编号",itemOptions:{placeholder:"自动生成",disabled:!0}},{cmp:"input",name:"craftName",label:"工艺名称",rules:[{required:!0,message:"必填",type:"error",trigger:"blur"}]},{cmp:"input",name:"primaryComment",label:"一级注释",rules:[{required:!0,message:"必填",type:"error",trigger:"blur"}]},{cmp:"input",name:"secondaryComment",label:"二级注释"},{cmp:"textarea",name:"remark",label:"备注"}]),w=e=>{let a=!1;const t=c=>{var d,C,h;for(let f=0;f<c.length;f++){const s=c[f];if(s.children&&s.children.length)return t(s.children);if(((d=s.material)==null?void 0:d.itemCategory)==2&&(!s.result||s.result<=0)||((C=s.material)==null?void 0:C.itemCategory)==3&&(!s.result||!s.result2||s.result<=0||s.result2<=0)||((h=s.material)==null?void 0:h.itemCategory)==4&&(isNaN(s.result)||s.result<0))return a=s.name}};return t(e),a},g=m(!1),x=m([]),E=async e=>{if(!e)return;g.value=!0;const a=await U({craftName:e});x.value=(a.rows||[]).map(t=>({label:t.craftName,value:t.id})),g.value=!1},F=async e=>{const a=await J({id:e}),{photos:t,gyParams:c,boms:d,craftName:C,primaryComment:h,secondaryComment:f,remark:s}=a.data;T(()=>{l.value.fillFormData({craftName:C,primaryComment:h,secondaryComment:f,remark:s}),p.value.setPhotos(t),p.value.setKeys(c),y.value.setBomData(d)})},n=async()=>{const e=await l.value.getFormData(!0);if(e===!1)return!1;const a=p.value.getPhotos(),t=p.value.getKeys(),c=y.value.getBomData();if(!c.length)return D.error("请录入组件信息！");const d=w(c);if(d)return D.error("组件["+d+"]，结果有异常，请处理！");e.id?(await V({...e,photos:a,gyParams:JSON.stringify(t),boms:JSON.stringify(c)}),D.success("产品工艺编辑成功")):(await Q({...e,photos:a,gyParams:JSON.stringify(t),boms:JSON.stringify(c)}),D.success("产品工艺创建成功")),S("submit"),b.value=!1},k=e=>{y.value.changeKeyData(e)};return K({open:async(e=null)=>{if(B.value=e,b.value=!0,$.value=[],e){const a=await J({id:e}),{photos:t,gyParams:c,boms:d,...C}=a.data;T(()=>{l.value.fillFormData(a.data),p.value.setPhotos(t),p.value.setKeys(c),y.value.setBomData(d)});const h=await R({projectId:a.data.projectId});$.value=(h.rows||[]).map(f=>({value:f.projectId,label:`${f.projectName} 【${f.projectId}】`}))}}}),(e,a)=>{const t=W,c=ue,d=fe,C=ne,h=me;return N(),I(h,{visible:u(b),"onUpdate:visible":a[0]||(a[0]=f=>G(b)?b.value=f:null),attach:"body",header:u(q),"destroy-on-close":"",placement:"bottom",size:"100%","on-confirm":n},{body:o(()=>[r(C,{ref_key:"$form",ref:l,"label-width":"150px",forms:u(v)},{copyOne:o(({formData:f})=>[r(t,{class:"divider",align:"left"},{default:o(()=>[_("选择已有工艺模板")]),_:1}),r(d,{label:"工艺模板",help:"tips：重新选择工艺模版，会重置全部已填写的信息。"},{default:o(()=>[r(c,{placeholder:"按名称搜索工艺模板",filterable:"",loading:u(g),options:u(x),onSearch:E,onChange:F},null,8,["loading","options"])]),_:1}),r(t,{class:"divider",align:"left"},{default:o(()=>[_("基本信息")]),_:1})]),_:1},8,["forms"]),r(t,{class:"divider",align:"left"},{default:o(()=>[_("示意图及参数")]),_:1}),r(u(ie),{ref_key:"$comKey",ref:p,onChange:k},null,512),r(t,{class:"divider",align:"left"},{default:o(()=>[_("BOM组成")]),_:1}),r(u(ce),{ref_key:"$comBom",ref:y},null,512)]),_:1},8,["visible","header"])}}},ye=_e,je={__name:"index",setup(z){const K=m(null),j=m(null),p=m(null),y=Z(),b=L(()=>{var i;return(i=y==null?void 0:y.info)==null?void 0:i.userId}),S=[{cmp:"input",name:"craftName",label:"工艺名称"},{cmp:"select",name:"status",label:"状态",itemOptions:{options:re(M)}}],B=[{colKey:"serial-number",title:"#",width:60},{colKey:"id",title:"工艺编号"},{colKey:"projectName",title:"归属项目"},{colKey:"xx6",title:"项目经理"},{colKey:"designer",title:"设计师"},{colKey:"craftName",title:"工艺名称"},{colKey:"primaryComment",title:"一级注释"},{colKey:"photos",title:"示意图",width:132,cell:(i,{row:l})=>r(Y,{src:l.photos,fit:"cover",class:"img-list-demo"},null)},{colKey:"remark",title:"备注"},{colKey:"status",title:"状态",cell:(i,{row:l})=>{var v;return(v=M[l.status])==null?void 0:v.label}},{colKey:"operation",title:"操作",width:290}],q=i=>{V({id:i,status:1}).then(()=>{D.success("工艺已提交模板库"),p.value.refresh()})},$=i=>{ee({id:i}).then(l=>{D.success("工艺删除成功"),p.value.refresh()})},P=async(i,l)=>{const v=await requestProductTaskExport({id:i});te(v,l)};return(i,l)=>{const v=ae,w=se,g=pe,x=le,E=oe,F=A;return N(),H(X,null,[r(F,{ref_key:"$table",ref:p,searchItems:S,columns:B,api:u(U),searchExtras:{designerId:u(b)}},{topBtns:o(()=>[r(w,{onClick:l[0]||(l[0]=n=>u(K).open())},{icon:o(()=>[r(v,{name:"add"})]),default:o(()=>[_(" 新建产品工艺 ")]),_:1})]),operation:o(({row:n})=>[r(E,null,{default:o(()=>[r(g,{theme:"primary",onClick:k=>u(j).open(n.id)},{default:o(()=>[_(" 查看 ")]),_:2},1032,["onClick"]),n.status==0||n.status==9?(N(),I(g,{key:0,theme:"primary",onClick:k=>u(K).open(n.id)},{default:o(()=>[_(" 编辑")]),_:2},1032,["onClick"])):O("",!0),n.status==0||n.status==9?(N(),I(x,{key:1,content:"确认删除吗？",onConfirm:k=>$(n.id)},{default:o(()=>[r(g,{theme:"primary"},{default:o(()=>[_("删除")]),_:1})]),_:2},1032,["onConfirm"])):O("",!0),n.status==0||n.status==9?(N(),I(x,{key:2,content:"确认将此工艺提交模板库吗？",onConfirm:k=>q(n.id)},{default:o(()=>[r(g,{theme:"primary"},{default:o(()=>[_(" 提交模板库 ")]),_:1})]),_:2},1032,["onConfirm"])):O("",!0),n.status!=1?(N(),I(g,{key:3,theme:"primary",onClick:k=>P(n.id,n.craftName)},{default:o(()=>[_(" 导出 ")]),_:2},1032,["onClick"])):O("",!0)]),_:2},1024)]),_:1},8,["api","searchExtras"]),r(ye,{ref_key:"$DialogEdit",ref:K,onSubmit:l[1]||(l[1]=n=>u(p).refresh())},null,512),r(de,{ref_key:"$DialogDetail",ref:j},null,512)],64)}}};export{je as default};
