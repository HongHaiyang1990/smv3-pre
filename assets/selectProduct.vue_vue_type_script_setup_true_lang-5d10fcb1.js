import{r as c,c as x,m as B,w as n,f as l,a5 as Q,e,h as y,Q as F,i as U,a6 as W,W as R,al as T,a4 as z,Z as J,G as Z,d as V,am as H,R as X,an as Y,M as j,I as ee,B as te}from"./index-18b660c1.js";import{_ as ae}from"./index-f858892f.js";import{L as q,I as le,E as oe}from"./index-d761e5bd.js";import{D as E,d as ne}from"./formula-4ae4e899.js";import{_ as se,P as ce}from"./index-bae3b8b9.js";import{C as A,_ as G}from"./bom.vue_vue_type_script_setup_true_lang-95283b00.js";import{_ as re}from"./index-0cd7f2c9.js";const ie={__name:"selectList",emits:["add"],setup(C,{expose:N,emit:h}){const i=h,o=c(!1),m=c(null),$=[{cmp:"input",name:"craftName",label:"工艺名称"}],v=[{colKey:"serial-number",title:"#",width:60},{colKey:"id",title:"工艺编号"},{colKey:"projectName",title:"归属项目"},{colKey:"xx6",title:"项目经理"},{colKey:"designer",title:"设计师"},{colKey:"craftName",title:"工艺名称"},{colKey:"primaryComment",title:"一级注释"},{colKey:"photos",title:"示意图",width:132,cell:(d,{row:p})=>e(W,{src:p.photos,fit:"cover",class:"img-list-demo"},null)},{colKey:"remark",title:"备注"},{colKey:"operation",title:"操作",width:120}],K=d=>{i("add",d),o.value=!1};return N({open:()=>{o.value=!0}}),(d,p)=>{const a=q,k=R,r=ae,_=E;return x(),B(_,{visible:l(o),"onUpdate:visible":p[0]||(p[0]=b=>U(o)?o.value=b:null),attach:"body",header:"选择添加的产品","destroy-on-close":"",placement:"bottom",size:"80%",footer:!1,closeBtn:!0},{body:n(()=>[l(o)?(x(),B(r,{key:0,ref_key:"$table",ref:m,searchItems:$,columns:v,api:l(Q),searchExtras:{status:5}},{operation:n(({row:b})=>[e(k,null,{default:n(()=>[e(a,{theme:"primary",onClick:D=>K(b)},{default:n(()=>[y(" 添加 ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:1},8,["api"])):F("",!0)]),_:1},8,["visible"])}}},me={__name:"productEdit",emits:["submit"],setup(C,{expose:N,emit:h}){const i=c(null),o=c(null),m=c(!1),$=h,v=c(null),K=c(!1),u=c(null),d=[{cmp:"desc",name:"craftName",label:"产品工艺名称"},{cmp:"inputNumber",name:"expectNum",label:"生产数量",rules:[{required:!0,message:"必填",type:"error",trigger:["change","blur"]}]},{cmp:"input",name:"bimCode",label:"BIM对应编码"},{cmp:"input",name:"extraCode",label:"可扩展编码"}],p=r=>{o.value.changeKeyData(r)},a=async()=>{const r=await u.value.getFormData(!0);if(r===!1)return!1;const _=i.value.getKeys();$("submit",v.value,{...r,realParam:JSON.stringify(_||"[]")}),m.value=!1};return N({open:async(r,_,b=!1)=>{if(_){const D=T(_);K.value=b,v.value=r,m.value=!0;const{photos:s,gyParams:t,boms:f,craftName:g,expectNum:P,bimCode:w,extraCode:O,realParam:I}=D;z(()=>{u.value.fillFormData({craftName:g,expectNum:P,bimCode:w,extraCode:O}),i.value.setPhotos(s),i.value.setKeys(t,I),o.value.setBomData(f)})}}}),(r,_)=>{const b=se,D=J,s=E;return x(),B(s,{visible:l(m),"onUpdate:visible":_[0]||(_[0]=t=>U(m)?m.value=t:null),attach:"body",header:"编辑生产产品","destroy-on-close":"",placement:"bottom",size:"80%","on-confirm":a,cancelBtn:l(K)?null:"取消",closeOnOverlayClick:!l(K)},{body:n(()=>[e(b,{ref_key:"$form",ref:u,"label-width":"150px",forms:d},null,512),e(D,{class:"divider",align:"left"},{default:n(()=>[y("示意图及参数")]),_:1}),e(l(A),{ref_key:"$comKey",ref:i,isReal:!0,onChange:p},null,512),e(D,{class:"divider",align:"left"},{default:n(()=>[y("BOM组成")]),_:1}),e(l(G),{ref_key:"$comBom",ref:o,isDetail:!0},null,512)]),_:1},8,["visible","cancelBtn","closeOnOverlayClick"])}}},ue={__name:"productDetail",setup(C,{expose:N}){const h=c(null),i=c(null),o=c(!1),m=c({}),$=[{colKey:"craftName",label:"产品工艺名称"},{colKey:"expectNum",label:"生产数量"},{colKey:"bimCode",label:"BIM对应编码"},{colKey:"extraCode",label:"可扩展编码"}],v=u=>{i.value.changeKeyData(u)};return N({open:async u=>{if(u){const d=T(u);m.value=d,o.value=!0;const{photos:p,gyParams:a,boms:k,craftName:r,expectNum:_,bimCode:b,extraCode:D,realParam:s}=d;z(()=>{h.value.setPhotos(p),h.value.setKeys(a,s),i.value.setBomData(k)})}}}),(u,d)=>{const p=re,a=J,k=E;return x(),B(k,{visible:l(o),"onUpdate:visible":d[0]||(d[0]=r=>U(o)?o.value=r:null),attach:"body",header:"生产产品","destroy-on-close":"",placement:"bottom",size:"80%",footer:!1,closeBtn:!0},{body:n(()=>[e(p,{columnCount:2,"label-width":"150px",columns:$,data:l(m)},null,8,["data"]),e(a,{class:"divider",align:"left"},{default:n(()=>[y("示意图及参数")]),_:1}),e(l(A),{ref_key:"$comKey",ref:h,isDetail:!0,isReal:!0,onChange:v},null,512),e(a,{class:"divider",align:"left"},{default:n(()=>[y("BOM组成")]),_:1}),e(l(G),{ref_key:"$comBom",ref:i,isDetail:!0},null,512)]),_:1},8,["visible"])}}},de={key:0},ge={__name:"selectProduct",props:{isDetail:{type:Boolean,default:!1},isUpdate:{type:Boolean,default:!1}},emits:["change"],setup(C,{expose:N,emit:h}){const i=c(null),o=c(null),m=c(null),$=c(null),v=h,K=C,u=[{colKey:"serial-number",title:"#",width:60},{colKey:"craftName",title:"产品工艺名称"},{colKey:"gyCraftId",title:"产品工艺编号"},{colKey:"primaryComment",title:"一级注释"},{colKey:"secondaryComment",title:"二级注释"},{colKey:"realParam",title:"实际工艺参数",cell:(s,{row:t})=>{if(Y(t.realParam)){const f=JSON.parse(t.realParam||"[]");return f.length?e("div",null,[f.map((g,P)=>e("div",null,[g.key,y(":"),g.value]))]):e("div",null,[y("-")])}return e("div",null,[y("-")])},width:150},{colKey:"expectNum",title:"生产数量",width:100},{colKey:"bimCode",title:"BIM对应编码"},{colKey:"extraCode",title:"可扩展编码"}],d=[{colKey:"finishNum",title:"已完成"},{colKey:"newNum",title:"本次完成",cell:(s,{row:t})=>e(le,{modelValue:t.newNum,"onUpdate:modelValue":f=>t.newNum=f,allowInputOverLimit:!1,decimalPlaces:0,min:0,max:(t.expectNum||0)-(t.finishNum||0)},null),width:180},{colKey:"progress",title:"累计完成",cell:(s,{row:t})=>Math.floor(((t.finishNum||0)+(t.newNum||0))/(t.expectNum||1)*100)+"%",width:120}],p=Z(()=>K.isUpdate?[...u,...d]:[...u,{colKey:"operation",title:"操作",width:120}]),a=c([]),k=s=>{const{id:t,...f}=s,g={...f,gyCraftId:t,expectNum:1};a.value.push(g),o.value.open(a.value.length-1,g,!0)},r=(s,t)=>{a.value[s]={...a.value[s],...t},v("change",a.value)},_=s=>{a.value.splice(s,1),v("change",a.value)};return N({getProductData:()=>a.value.length?a.value:(j.error("请先添加产品！！"),!1),setProductData:(s=[])=>{a.value=s,v("change",a.value)}}),(s,t)=>{const f=q,g=ce,P=R,w=oe,O=ee,I=te;return x(),V(X,null,[e(w,H({ref_key:"$table",ref:$,columns:l(p),data:l(a)},l(ne),{rowKey:"id"}),{operation:n(({row:M,rowIndex:L})=>[!C.isDetail&&!C.isUpdate?(x(),B(P,{key:0},{default:n(()=>[e(f,{theme:"primary",onClick:S=>l(o).open(L,M)},{default:n(()=>[y("编辑")]),_:2},1032,["onClick"]),e(g,{content:"确认删除吗？",onConfirm:S=>_(L)},{default:n(()=>[e(f,{theme:"primary"},{default:n(()=>[y("删除")]),_:1})]),_:2},1032,["onConfirm"])]),_:2},1024)):(x(),B(P,{key:1},{default:n(()=>[e(f,{theme:"primary",onClick:S=>l(m).open(M)},{default:n(()=>[y("查看")]),_:2},1032,["onClick"])]),_:2},1024))]),_:1},16,["columns","data"]),!C.isDetail&&!C.isUpdate?(x(),V("p",de,[e(I,{variant:"outline",theme:"default",onClick:t[0]||(t[0]=M=>l(i).open())},{icon:n(()=>[e(O,{name:"add"})]),default:n(()=>[y(" 添加生产产品 ")]),_:1})])):F("",!0),e(l(ie),{ref_key:"$selectList",ref:i,onAdd:k},null,512),e(l(me),{ref_key:"$productEdit",ref:o,onSubmit:r},null,512),e(l(ue),{ref_key:"$productDetail",ref:m},null,512)],64)}}};export{ge as _};
