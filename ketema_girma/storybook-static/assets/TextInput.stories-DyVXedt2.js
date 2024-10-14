import{_}from"./TextInput-B-0cppbd.js";import"./vue.esm-bundler-BdSlZwTZ.js";const D={title:"Components/Molecules/TextInput",component:_,argTypes:{id:{control:"text",defaultValue:"input-id"},label:{control:"text",defaultValue:"Input Label"},type:{control:{type:"select"},options:["text","email","password"],defaultValue:"text"},placeholder:{control:"text",defaultValue:"Enter some text..."},variant:{control:{type:"select"},options:["default","underlined","bordered","pill","minimal"],defaultValue:"default"},inputClasses:{control:"text",defaultValue:""}}},e=M=>({components:{Input:_},setup(){return{args:M}},template:'<Input v-bind="args" />'}),t=e.bind({});t.args={id:"default-input",label:"Default Input",type:"text",variant:"default",placeholder:"Enter some text..."};const n=e.bind({});n.args={id:"underlined-input",label:"Underlined Input",type:"text",variant:"underlined",placeholder:"Enter some text..."};const r=e.bind({});r.args={id:"bordered-input",label:"Bordered Input",type:"text",variant:"bordered",placeholder:"Enter some text..."};const a=e.bind({});a.args={id:"pill-input",label:"Pill Input",type:"text",variant:"pill",placeholder:"Enter some text..."};const s=e.bind({});s.args={id:"minimal-input",label:"Minimal Input",type:"text",variant:"minimal",placeholder:"Enter some text..."};const o=e.bind({});o.args={id:"email-input",label:"Email Input",type:"email",variant:"bordered",placeholder:"Enter your email..."};var l,p,i;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`args => ({
  components: {
    Input
  },
  setup() {
    return {
      args
    };
  },
  template: '<Input v-bind="args" />'
})`,...(i=(p=t.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var d,u,c;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
  components: {
    Input
  },
  setup() {
    return {
      args
    };
  },
  template: '<Input v-bind="args" />'
})`,...(c=(u=n.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var m,g,b;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  components: {
    Input
  },
  setup() {
    return {
      args
    };
  },
  template: '<Input v-bind="args" />'
})`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var I,x,f;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`args => ({
  components: {
    Input
  },
  setup() {
    return {
      args
    };
  },
  template: '<Input v-bind="args" />'
})`,...(f=(x=a.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var v,y,E;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`args => ({
  components: {
    Input
  },
  setup() {
    return {
      args
    };
  },
  template: '<Input v-bind="args" />'
})`,...(E=(y=s.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var V,h,S;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`args => ({
  components: {
    Input
  },
  setup() {
    return {
      args
    };
  },
  template: '<Input v-bind="args" />'
})`,...(S=(h=o.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const P=["Default","Underlined","Bordered","Pill","Minimal","EmailValidation"];export{r as Bordered,t as Default,o as EmailValidation,s as Minimal,a as Pill,n as Underlined,P as __namedExportsOrder,D as default};
