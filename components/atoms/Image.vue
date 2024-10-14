<template>
  <img
    :src="props.src"
    :alt="props.alt"
    :class="computedClass"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';


interface ImageProps {
  src: string; 
  alt: string; 
  class?: string;
  variant?: 'rounded' | 'circle' | 'thumbnail' | 'default';
}

const props = defineProps<ImageProps>();

const computedClass = computed(() => {
  let baseClass = props.class ? props.class : '';
  
  switch (props.variant) {
    case 'rounded':
      return `${baseClass} rounded-lg`;
    case 'circle':
      return `${baseClass} rounded-full`;
    case 'thumbnail':
      return `${baseClass} border border-gray-200 p-2`;
    case 'default':
    default:
      return baseClass;
  }
});
</script>
