const o=(a,s=!1)=>{const e=[],t=/\d*/i;for(const l in a)if(a.hasOwnProperty(l)){const b=a[l];e.push({label:b.label,value:l.match(t)==l&&!s?Number(l):l})}return e},n={0:{label:"草稿"},1:{label:"待审核"},5:{label:"已审核"},9:{label:"未通过"}},c={0:{label:"草稿"},1:{label:"待审核"},5:{label:"已审核"},9:{label:"未通过"}},m={0:{label:"正常"},1:{label:"暂停"},9:{label:"停止"}},r={1:{label:"新增"},2:{label:"修改"},3:{label:"删除"},4:{label:"授权"},5:{label:"导出"},6:{label:"导入"},7:{label:"强退"},8:{label:"生成代码"},9:{label:"清空数据"}},f={0:{label:"成功"},1:{label:"失败"}},u={Y:{label:"启用"},N:{label:"停用"}},S={2:{label:"主材"},3:{label:"面板"},4:{label:"辅材"}},i={Y:{label:"启用"},N:{label:"停用"}},y={0:{label:"正常"},1:{label:"已撤销"}},p={0:{label:"启用"},1:{label:"停用"}},T={0:{label:"启用"},1:{label:"停用"}},d={M:{label:"目录"},C:{label:"菜单"},F:{label:"按钮"}},k={0:{label:"启用"},1:{label:"停用"}};export{n as a,c as b,m as c,S as d,y as e,o as f,i as g,u as h,r as i,f as j,p as k,T as l,d as m,k as n};
