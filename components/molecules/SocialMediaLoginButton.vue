<template>
    <Button :buttonClasses="'flex items-center justify-start w-full bg-black text-white py-3 rounded-lg p-0.1 border border-gray-800'">
      <div class="flex flex-row items-center justify-start">
        <div class="pl-20 pr-6">
          <SvgIcon :viewBox="iconViewBox">
            <slot name="icon"></slot>
          </SvgIcon>
        </div>
        <div>{{ text }}</div>
      </div>
    </Button>
  </template>
  
  <script>
  import Button from '../../components/atoms/Button.vue';
  import SvgIcon from '../../components/atoms/SvgIcon.vue';
  
  export default {
    components: {
      Button,
      SvgIcon,
    },
    props: {
      text: {
        type: String,
        required: true,
      },
      iconViewBox: {
        type: String,
        default: "0 0 48 48",
      },
      buttonClasses: {
        type: [String, Array, Object],
        default: () => "flex items-center justify-start w-full bg-black text-white py-3 rounded-lg p-0.1 border border-gray-800",
      },
    },
  };
  </script>
  