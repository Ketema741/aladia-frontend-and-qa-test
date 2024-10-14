import{N as n}from"./Navbar-BAAVOr9Y.js";import{H as r}from"./Heading-BYGnDgim.js";import{B as i}from"./Button-Ce77g7DU.js";import"./vue.esm-bundler-BdSlZwTZ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./SvgIcon-Br4evAWk.js";const b={title:"Pages/HomePage",component:{Navbar:n,Heading:r,Button:i},argTypes:{openEmailModal:{action:"openEmailModal"},closeEmailModal:{action:"closeEmailModal"},openSignupModal:{action:"openSignupModal"},closeSignupModal:{action:"closeSignupModal"},updateEmail:{action:"updateEmail"},submitEmail:{action:"submitEmail"},email:{control:"text"},emailError:{control:"text"}}},s=l=>({components:{Navbar:n,Heading:r,Button:i},setup(){return{args:l}},template:`
    <div class="min-h-screen bg-black text-white">
      <!-- Navbar -->
      <Navbar @open-modal="args.openEmailModal" />

      <!-- Main Content -->
      <div class="flex items-center justify-center h-full">
        <div class="container mx-auto px-6 py-6 text-center">
          <Heading :text="'E-learning Revolution 2'" />
          <p class="text-lg text-gray-400 mb-8">
            We have worked to digitize our school and give the whole world the opportunity to do it with a new study platform designed for teachers.
          </p>
          <Button 
            :click-handler="args.openEmailModal" 
            :dataTest="'go-to-marketplace-button'" 
            buttonClasses="flex flex-row gap-4 bg-black text-white border border-white py-1 px-2 rounded-lg hover:bg-gray-800 transition">
            Go to Marketplace
          </Button>
        </div>
      </div>

    </div>
  `}),e=s.bind({});e.args={email:"",emailError:""};var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  components: {
    Navbar,
    Heading,
    Button
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div class="min-h-screen bg-black text-white">
      <!-- Navbar -->
      <Navbar @open-modal="args.openEmailModal" />

      <!-- Main Content -->
      <div class="flex items-center justify-center h-full">
        <div class="container mx-auto px-6 py-6 text-center">
          <Heading :text="'E-learning Revolution 2'" />
          <p class="text-lg text-gray-400 mb-8">
            We have worked to digitize our school and give the whole world the opportunity to do it with a new study platform designed for teachers.
          </p>
          <Button 
            :click-handler="args.openEmailModal" 
            :dataTest="'go-to-marketplace-button'" 
            buttonClasses="flex flex-row gap-4 bg-black text-white border border-white py-1 px-2 rounded-lg hover:bg-gray-800 transition">
            Go to Marketplace
          </Button>
        </div>
      </div>

    </div>
  \`
})`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const h=["Default"];export{e as Default,h as __namedExportsOrder,b as default};
