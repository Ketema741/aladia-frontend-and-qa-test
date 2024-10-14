<template>
  <Modal :isOpen="isOpen" @close-modal="closeModal">
    <!-- Outer Border with Gradient -->
    <div class="absolute inset-0 p-1 bg-gradient-to-r from-gray-800 via-white to-gray-800 rounded-md"></div>

    <div class="relative px-6 py-4 bg-black rounded-lg">
      <!-- Welcome Content with Inner Gradient -->
      <div class="flex relative bg-gradient-to-br from-gray-800 to-black border border-gray-800 rounded-md">
        <img src="/img/welcome-to-aladia.png" alt="Logo" class="border border-gray-800 rounded-md mx-auto" />
      </div>

      <!-- Email Input -->
      <div class="mb-6">
        <label for="email" class="block text-center text-sm my-6">Enter your email</label>
        <div class="flex items-center bg-white rounded-lg">
          <span class="px-3 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4.5 4h15a2.5 2.5 0 012.5 2.5v11a2.5 2.5 0 01-2.5 2.5h-15A2.5 2.5 0 012 17.5v-11A2.5 2.5 0 014.5 4zm15 1.5h-15a1 1 0 00-1 1v.512l8 5.023 8-5.023V6.5a1 1 0 00-1-1zM4.5 19h15a1 1 0 001-1v-7.233l-8 5.023-8-5.023V18a1 1 0 001 1z"/>
            </svg>
          </span>
          <input
            type="email"
            id="email"
            placeholder="Email Address"
            data-test="signin-or-signup-email-input"
            class="bg-white text-gray-500 focus:outline-none py-3 px-3 flex-1 rounded-lg"
            :value="email"
            @input="handleInput"
          />
        </div>
        <p v-if="emailError" class="text-red-500 text-xs mt-2">{{ emailError }}</p>
      </div>

      <!-- Enter Button -->
      <Button :clickHandler="handleSubmit" :dataTest="'join-us-button'" buttonClasses="w-full bg-gradient-to-br from-gray-800 to-black text-gray-300 py-3 rounded-lg mb-6 transition hover:bg-gray-600">
        Enter
      </Button>

      <!-- Or Divider -->
      <div class="flex items-center my-6">
        <div class="flex-grow h-px bg-gradient-to-l from-white to-black"></div>
        <span class="mx-3 text-white">Or</span>
        <div class="flex-grow h-px bg-gradient-to-r from-white to-black"></div>
      </div>

      <!-- Social Login Buttons -->
      <div class="space-y-3">
        <SocialLoginButtons />
      </div>

      <!-- Terms and Conditions -->
      <p class="text-center text-gray-400 text-xs mt-6">Terms & Conditions</p>
    </div>
  </Modal>
</template>

<script>
import Button from '../../components/atoms/Button.vue';
import Modal from '../../components/atoms/Modal.vue';
import SocialLoginButtons from '../../components/molecules/SocialMediaLoginButtons.vue';

export default {
  components: {
    Button,
    Modal,
    SocialLoginButtons,
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    emailError: {
      type: String,
      default: '',
    },
  },
  methods: {
    closeModal() {
      this.$emit('close-modal');
    },
    handleInput(event) {
      this.$emit('update-email', event.target.value);
    },
    handleSubmit() {
      this.$emit('submit-email');
    },
  },
};
</script>


