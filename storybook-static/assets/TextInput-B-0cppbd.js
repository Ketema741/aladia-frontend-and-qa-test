import{p as h,s as n,c as l,t as v,b as o,a as p,x as m,y as z,z as q,o as s}from"./vue.esm-bundler-BdSlZwTZ.js";const C={class:"flex flex-col space-y-2"},_=["for"],k={class:"relative flex items-center"},V={key:0,class:"absolute left-3"},I=["id","type","placeholder","disabled","value"],S={key:1,class:"absolute right-3"},N=h({__name:"TextInput",props:{placeholder:{},label:{},modelValue:{},size:{},disabled:{type:Boolean},class:{},id:{},leading:{},trailing:{},iconSize:{},iconColor:{},type:{}},emits:["update:modelValue"],setup(u,{emit:c}){const a=u,g=c,f=n(()=>{switch(a.size){case"sm":return"text-sm py-1";case"lg":return"text-lg py-3";case"md":default:return"text-base py-2"}}),y=n(()=>{let e="pl-4 pr-4";return a.leading&&(e="pl-10 pr-4"),a.trailing&&(e="pl-4 pr-10"),a.leading&&a.trailing&&(e="pl-10 pr-10"),e}),r=n(()=>a.iconSize?a.iconSize:"24"),i=n(()=>a.iconColor?a.iconColor:"#000000");function b(e){const t=e.target;t&&g("update:modelValue",t.value)}return(e,t)=>{const d=q("Icon");return s(),l("div",C,[e.label?(s(),l("label",{key:0,for:e.id,class:"text-gray-600 font-medium"},v(e.label),9,_)):o("",!0),p("div",k,[e.leading?(s(),l("span",V,[m(d,{name:e.leading,size:r.value,color:i.value},null,8,["name","size","color"])])):o("",!0),p("input",z({id:e.id},e.$attrs,{type:e.type,placeholder:e.placeholder,class:["w-full px-4 py-2 border rounded-lg text-black",f.value,y.value,e.disabled?"bg-gray-100 cursor-not-allowed":"",a.class],disabled:e.disabled,value:e.modelValue,onInput:b}),null,16,I),e.trailing?(s(),l("span",S,[m(d,{name:e.trailing,size:r.value,color:i.value},null,8,["name","size","color"])])):o("",!0)])])}}});N.__docgenInfo={exportName:"default",displayName:"TextInput",description:"",tags:{},props:[{name:"placeholder",required:!1,type:{name:"string"}},{name:"label",required:!1,type:{name:"string"}},{name:"modelValue",required:!1,type:{name:"string"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"class",required:!1,type:{name:"string"}},{name:"id",required:!1,type:{name:"string"}},{name:"leading",required:!1,type:{name:"string"}},{name:"trailing",required:!1,type:{name:"string"}},{name:"iconSize",required:!1,type:{name:"string"}},{name:"iconColor",required:!1,type:{name:"string"}},{name:"type",required:!1,type:{name:"string"}}],events:[{name:"update:modelValue"}],sourceFiles:["/Users/a2sv/Desktop/freelancing/upwork/paulo/chromatic/ketema_girma/components/molecules/TextInput.vue"]};export{N as _};
