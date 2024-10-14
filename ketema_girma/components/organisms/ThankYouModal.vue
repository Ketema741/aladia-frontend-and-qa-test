<template>
    <Modal :isOpen="isOpen" @close-modal="closeModal">
      <!-- Outer Border with Gradient -->
      <div class="absolute inset-0 p-1 bg-gradient-to-r from-gray-800 via-white to-gray-800 rounded-md"></div>
  
      <div class="relative px-6 py-4 pb-50 bg-black rounded-lg">
          
          <!-- Thank You Message -->
        <div class="my-6">
            <p class="text-xl font-bold text-center text-gray-400 mt-2">{{ name }}.</p>
            <h2 class="text-l text-center text-white">Thanks for Joining Aladia!</h2>
        </div>

        <img src="/img/logo.png" alt="Logo" class="my-36 mx-auto" />
  
        <Button :clickHandler="submitForm" :dataTest="'submit-user-register-button'" variant="primary" class="w-full mb-4 bg-gradient-to-r from-zinc-500 via-stone-600 to-zinc-900">
            Join Marketplace
        </Button>
      </div>
    </Modal>
  </template>
  
  <script>
  import Button from '../../components/atoms/Button.vue';
  import Modal from '../../components/atoms/Modal.vue';
  
  export default {
    components: {
      Button,
      Modal,
    },
    props: {
      isOpen: {
        type: Boolean,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
    },
    methods: {
      closeModal() {
        this.$emit('close-modal');
      },
    },
  };
  </script>
  