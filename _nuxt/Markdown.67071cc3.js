import s from"./ContentSlot.f6024a19.js";import{g as o,Q as m,l as p,Y as u}from"./entry.e98381d6.js";import"./utils.48f37298.js";import"./preview.92488640.js";const d=o({name:"Markdown",extends:s,setup(t){const{parent:e}=u(),{between:n,default:r}=m(),a=p(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:r,tags:a,between:n,parent:e}}});export{d as default};