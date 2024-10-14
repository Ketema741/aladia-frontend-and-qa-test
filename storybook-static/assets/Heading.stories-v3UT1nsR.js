import{H as m}from"./Heading-BYGnDgim.js";import"./vue.esm-bundler-BdSlZwTZ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const f={title:"Components/Atoms/Heading",component:m,argTypes:{text:{control:"text",defaultValue:"Heading Text"},variant:{control:{type:"select"},options:["h1","h2","h3","h4","h5","h6"],defaultValue:"h1"},size:{control:{type:"select"},options:["6xl","5xl","4xl","3xl","2xl","xl","lg"],defaultValue:"6xl"},class:{control:"text",defaultValue:""}}},a=u=>({components:{Heading:m},setup(){return{args:u}},template:'<Heading v-bind="args" />'}),e=a.bind({});e.args={text:"Heading Text",variant:"h1",size:"6xl"};const t=a.bind({});t.args={text:"This is an H2 Heading",variant:"h2",size:"5xl"};const n=a.bind({});n.args={text:"Custom Styled Heading",variant:"h2",size:"xl",class:"text-red-500"};var s,r,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`args => ({
  components: {
    Heading
  },
  setup() {
    return {
      args
    };
  },
  template: '<Heading v-bind="args" />'
})`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};var i,l,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
  components: {
    Heading
  },
  setup() {
    return {
      args
    };
  },
  template: '<Heading v-bind="args" />'
})`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,p,g;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
  components: {
    Heading
  },
  setup() {
    return {
      args
    };
  },
  template: '<Heading v-bind="args" />'
})`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const v=["Default","H2","CustomStyle"];export{n as CustomStyle,e as Default,t as H2,v as __namedExportsOrder,f as default};
