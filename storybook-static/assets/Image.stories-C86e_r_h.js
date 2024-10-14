import{_ as v}from"./Image-C7QlFIKy.js";import"./vue.esm-bundler-BdSlZwTZ.js";const x={title:"Components/Atoms/Image",component:v,argTypes:{src:{control:"text",defaultValue:"https://via.placeholder.com/150"},alt:{control:"text",defaultValue:"Placeholder Image"},variant:{control:{type:"select"},options:["default","rounded","circle","thumbnail"],defaultValue:"default"},class:{control:"text",defaultValue:""}}},n=b=>({components:{Image:v},setup(){return{args:b}},template:'<Image v-bind="args" />'}),e=n.bind({});e.args={src:"https://via.placeholder.com/150",alt:"Default Image",variant:"default"};const a=n.bind({});a.args={src:"https://via.placeholder.com/150",alt:"Rounded Image",variant:"rounded"};const r=n.bind({});r.args={src:"https://via.placeholder.com/150",alt:"Circle Image",variant:"circle"};const t=n.bind({});t.args={src:"https://via.placeholder.com/150",alt:"Thumbnail Image",variant:"thumbnail"};var s,o,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`args => ({
  components: {
    Image
  },
  setup() {
    return {
      args
    };
  },
  template: '<Image v-bind="args" />'
})`,...(c=(o=e.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var m,l,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  components: {
    Image
  },
  setup() {
    return {
      args
    };
  },
  template: '<Image v-bind="args" />'
})`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var d,u,i;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
  components: {
    Image
  },
  setup() {
    return {
      args
    };
  },
  template: '<Image v-bind="args" />'
})`,...(i=(u=r.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var g,I,h;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`args => ({
  components: {
    Image
  },
  setup() {
    return {
      args
    };
  },
  template: '<Image v-bind="args" />'
})`,...(h=(I=t.parameters)==null?void 0:I.docs)==null?void 0:h.source}}};const T=["Default","Rounded","Circle","Thumbnail"];export{r as Circle,e as Default,a as Rounded,t as Thumbnail,T as __namedExportsOrder,x as default};
