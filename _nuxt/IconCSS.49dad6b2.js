import{g as p,C as m,l as o,o as d,c as f,a8 as x}from"./entry.e98381d6.js";import{u as S}from"./config.745fada6.js";import{_ as v}from"./_plugin-vue_export-helper.c27b6911.js";const z=p({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(u){var c;const n=u;m(t=>({"5fa51ebc":_.value}));const e=S();(c=e==null?void 0:e.nuxtIcon)!=null&&c.aliases;const l=o(()=>{var t;return(((t=e==null?void 0:e.nuxtIcon)==null?void 0:t.aliases)||{})[n.name]||n.name}),_=o(()=>`url('https://api.iconify.design/${l.value.replace(":","/")}.svg')`),a=o(()=>{var s,r,i;if(!n.size&&typeof((s=e.nuxtIcon)==null?void 0:s.size)=="boolean"&&!((r=e.nuxtIcon)!=null&&r.size))return;const t=n.size||((i=e.nuxtIcon)==null?void 0:i.size)||"1em";return String(Number(t))===t?`${t}px`:t});return(t,s)=>(d(),f("span",{style:x({width:a.value,height:a.value})},null,4))}});const h=v(z,[["__scopeId","data-v-5ee01813"]]);export{h as default};
