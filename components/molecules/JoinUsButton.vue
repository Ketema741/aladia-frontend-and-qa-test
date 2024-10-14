<template>
    <Button :clickHandler="openModal" :dataTest="'join-us-button'" class="flex flex-row gap-4 bg-black text-white border border-white py-1 px-2 rounded-lg  hover:bg-gray-800 transition h-[40px] w-full">
      <SvgIcon viewBox="0 0 24 24"class="w-6 h-6 text-gray-800 dark:text-white" ariaHidden="true" >   
        <path fill-rule="evenodd" d="M9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H7Zm8-1a1 1 0 0 1 1-1h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 0 1-1-1Z" clip-rule="evenodd"/>
      </SvgIcon>
      <div class="text-sm ">Join Us</div>
    </Button>
  </template>
  <script>
  import Button from '../../components/atoms/Button.vue';
  import SvgIcon from '../../components/atoms/SvgIcon.vue';
  
  export default {
    methods: {
      openModal() {
        this.$emit('open-modal');
      },
    },
    components: {
      Button,
      SvgIcon,
    },
  };
  </script>
  