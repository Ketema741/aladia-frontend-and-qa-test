import{_ as V}from"./CheckboxInput-DjjZ2iJs.js";import"./vue.esm-bundler-BdSlZwTZ.js";const z={title:"Components/Atoms/Checkbox",component:V,argTypes:{modelValue:{control:{type:"boolean"},defaultValue:!1},required:{control:{type:"boolean"},defaultValue:!1},size:{control:{type:"select"},options:["sm","md","lg"],defaultValue:"md"},label:{control:{type:"text"},defaultValue:"Label"},id:{control:{type:"text"},defaultValue:"checkbox-id"},class:{control:{type:"text"},defaultValue:""}}},n=S=>({components:{Checkbox:V},setup(){return{args:S}},template:'<Checkbox v-bind="args" />'}),e=n.bind({});e.args={size:"sm",modelValue:!1,label:"Small Checkbox"};const s=n.bind({});s.args={size:"md",modelValue:!0,label:"Medium Checkbox"};const a=n.bind({});a.args={size:"lg",modelValue:!1,label:"Large Checkbox"};const r=n.bind({});r.args={size:"md",modelValue:!1,label:"Required Checkbox",required:!0};const o=n.bind({});o.args={size:"md",modelValue:!1,label:"Custom Styled Checkbox",class:"custom-checkbox-class"};var t,c,l;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  components: {
    Checkbox
  },
  setup() {
    return {
      args
    };
  },
  template: '<Checkbox v-bind="args" />'
})`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,u,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  components: {
    Checkbox
  },
  setup() {
    return {
      args
    };
  },
  template: '<Checkbox v-bind="args" />'
})`,...(d=(u=s.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var p,i,b;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
  components: {
    Checkbox
  },
  setup() {
    return {
      args
    };
  },
  template: '<Checkbox v-bind="args" />'
})`,...(b=(i=a.parameters)==null?void 0:i.docs)==null?void 0:b.source}}};var g,x,C;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`args => ({
  components: {
    Checkbox
  },
  setup() {
    return {
      args
    };
  },
  template: '<Checkbox v-bind="args" />'
})`,...(C=(x=r.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var h,k,f;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
  components: {
    Checkbox
  },
  setup() {
    return {
      args
    };
  },
  template: '<Checkbox v-bind="args" />'
})`,...(f=(k=o.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};const _=["Small","Medium","Large","RequiredCheckbox","WithCustomClass"];export{a as Large,s as Medium,r as RequiredCheckbox,e as Small,o as WithCustomClass,_ as __namedExportsOrder,z as default};
