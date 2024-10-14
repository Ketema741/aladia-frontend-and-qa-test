<template>
    <div v-if="isOpen" @click.self="closeModal" :data-test="dataTest" class="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
      <div class="relative p-0.1 bg-black shadow-md w-full max-w-md">
        <!-- Modal content goes here -->
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      isOpen: {
        type: Boolean,
        required: true,
      },
      dataTest: {
        type: String,
        default: 'default-button', // Fallback if no data-test prop is provided
      },
    },
    methods: {
      closeModal() {
        this.$emit('close-modal');
      },
    },
  };
  </script>
  