import{g as u,h,l as m,o as r,c as l,a as c,t as k,k as d,i as B,u as C,b as A,F as $,r as w,j as _,m as N}from"./entry.e98381d6.js";import{m as D}from"./helper.0f331916.js";import{_ as F,a as I}from"./empty.144de9e3.js";import{u as T,q as V}from"./query.ce7f4390.js";import"./nuxt-img.f35bdae3.js";import"./tag.217f102c.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./arrow.2884c153.js";import"./nuxt-link.0d36552f.js";import"./preview.92488640.js";import"./utils.48f37298.js";const q={class:"container mx-auto"},E={class:"p-6 my-4 mx-3 rounded-md bg-gray-200"},O={class:"text-black font-semibold leading-tight text-4xl md:text-5xl my-5"},j=u({__name:"topic",setup(y){const n=h(),i=m(()=>{const s=n.params.category||"";let a="";return Array.isArray(s)?a=s.at(0)||"":a=s,D(a)});return(s,a)=>(r(),l("div",q,[c("div",E,[c("h1",O," #"+k(d(i)),1)])]))}}),z={class:"container max-w-5xl mx-auto text-zinc-600"},H={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"},W=u({__name:"[category]",async setup(y){let n,i;const s=h(),a=m(()=>{const o=s.params.category||"";let t="";return Array.isArray(o)?t=o.at(0)||"":t=o,t}),{data:g}=([n,i]=B(()=>T("home",()=>V("/blogs").where({tags:{$contains:a.value}}).find())),n=await n,i(),n),x=m(()=>{var o;return(o=g.value)==null?void 0:o.map(t=>({path:t._path,title:t.title||"no-title available",description:t.description||"no-descriptoin available",image:t.image||"/nuxt-blog/no-image_cyyits.png",alt:t.alt||"no alter data available",ogImage:t.ogImage||"/nuxt-blog/no-image_cyyits.png",date:t.date||"not-date-available",tags:t.tags||[],published:t.published||!1}))});return C({title:a.value,meta:[{name:"description",content:`You will find all the ${a.value} related posts here`}],titleTemplate:"TODO's Blog - %s"}),(o,t)=>{var p;const f=j,b=F,v=I;return r(),l("main",z,[A(f),c("div",H,[(r(!0),l($,null,w(d(x),e=>(r(),_(b,{key:e.title,path:e.path,title:e.title,date:e.date,description:e.description,image:e.image,alt:e.alt,"og-image":e.ogImage,tags:e.tags,published:e.published},null,8,["path","title","date","description","image","alt","og-image","tags","published"]))),128)),((p=d(g))==null?void 0:p.length)===0?(r(),_(v,{key:0})):N("",!0)])])}}});export{W as default};
