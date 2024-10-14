import{m as v,v as _,c as V,n as w,o as C}from"./vue.esm-bundler-BdSlZwTZ.js";import{_ as E}from"./_plugin-vue_export-helper-DlAUqK2U.js";const h={props:{id:{type:String,required:!0},type:{type:String,default:"text"},placeholder:{type:String,default:""},inputClasses:{type:[String,Array,Object],default:()=>"w-full py-2 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"}},data(){return{inputValue:"",error:!1,errorMessage:""}},methods:{validateInput(){this.type==="email"&&(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.inputValue)?(this.error=!1,this.errorMessage=""):(this.error=!0,this.errorMessage="Please enter a valid email address."))}},computed:{computedClasses(){return this.inputClasses}}},S=["type","id","placeholder"];function k(n,a,s,D,p,o){return v((C(),V("input",{type:s.type,id:s.id,placeholder:s.placeholder,class:w(o.computedClasses),"onUpdate:modelValue":a[0]||(a[0]=u=>p.inputValue=u),onInput:a[1]||(a[1]=(...u)=>o.validateInput&&o.validateInput(...u))},null,42,S)),[[_,p.inputValue]])}const x=E(h,[["render",k]]);h.__docgenInfo={exportName:"default",displayName:"InputField",description:"",tags:{},props:[{name:"id",type:{name:"string"},required:!0},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:'"text"'}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"inputClasses",type:{name:"string|array|object"},defaultValue:{func:!0,value:'() => "w-full py-2 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"'}}],sourceFiles:["/Users/a2sv/Desktop/freelancing/upwork/paulo/chromatic/ketema_girma/components/atoms/InputField.vue"]};const M={title:"Components/Atoms/InputField",component:x,argTypes:{id:{control:"text",defaultValue:"input-id"},type:{control:{type:"select"},options:["text","email","password"],defaultValue:"text"},placeholder:{control:"text",defaultValue:"Enter some text..."},inputClasses:{control:"text",defaultValue:"w-full py-2 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"}}},l=n=>({components:{Input:x},setup(){return{args:n}},template:'<Input v-bind="args" />'}),e=l.bind({});e.args={id:"input-default",type:"text",placeholder:"Enter text here..."};const t=l.bind({});t.args={id:"input-email",type:"email",placeholder:"Enter your email..."};const r=l.bind({});r.args={id:"input-password",type:"password",placeholder:"Enter your password..."};var i,d,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
  components: {
    Input
  },
  setup() {
    return {
      args
    };
  },
  template: '<Input v-bind="args" />'
})`,...(c=(d=e.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,g,f;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  components: {
    Input
  },
  setup() {
    return {
      args
    };
  },
  template: '<Input v-bind="args" />'
})`,...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var y,I,b;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
  components: {
    Input
  },
  setup() {
    return {
      args
    };
  },
  template: '<Input v-bind="args" />'
})`,...(b=(I=r.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};const j=["Default","EmailInput","PasswordInput"];export{e as Default,t as EmailInput,r as PasswordInput,j as __namedExportsOrder,M as default};
