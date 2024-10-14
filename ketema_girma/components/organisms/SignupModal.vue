<template>
  <div>
    <!-- Registration Modal -->
    <Modal :isOpen="isOpen" @close-modal="closeModal" dataTest="register-modal">
      <div class="absolute inset-0 p-1 bg-gradient-to-r from-gray-800 via-white to-gray-800 rounded-md"></div>

      <div class="relative bg-black rounded-lg">
        <div class="flex flex-col justify-center items-center gap-y-4 bg-black text-white rounded-lg shadow-lg p-8 max-h-screen max-w-md">
          <!-- Back to login -->
          <div class="flex items-center text-white- hover:text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            <span class="text-sm font-medium text-white">Back to login</span>
          </div>

          <!-- Logo and Intro -->
          <div class="flex gap-x-8 items-center justify-between">
            <div class="relative border border-gray-500">
              <div class="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-400 to-gray-900"></div>
              <div class="relative z-10 flex items-center justify-center h-full text-black">
                <img src="/img/logo.png" alt="Logo" />
              </div>
            </div>
            <div>
              <p class="text-md font-semibold">Nice to meet you</p>
              <p class="text-gray-300 text-sm">Upload a profile picture and complete your presentation</p>
            </div>
          </div>

          <!-- Form -->
          <div class="flex flex-col gap-y-5 w-full">
            <div>
              <TextInput v-model="form.name" id="name" placeholder="Name" leading="mdi:account" />
              <Text class="text-red-500 text-sm h-1">{{ errors.name }}</Text>
            </div>
            <div>
              <TextInput v-model="form.email" id="email" placeholder="Email Address" leading="fa-solid fa-envelope" />
              <Text class="text-red-500 text-sm h-1">{{ errors.email }}</Text>
            </div>
            <div>
              <TextInput v-model="form.password" id="password" placeholder="Password" leading="fa-solid fa-lock" type="password" />
              <Text class="text-red-500 text-sm h-1">{{ passwordError }}</Text>
            </div>
            <div>
              <TextInput v-model="form.confirmPassword" id="confirmPassword" placeholder="Confirm Password" leading="fa-solid fa-lock" type="password" />
              <Text class="text-red-500 text-sm h-1">{{ passwordMatchError }}</Text>
            </div>
          </div>

          <Button :clickHandler="submitForm" :dataTest="'submit-user-register-button'" variant="primary" class="w-full mt-4 bg-gradient-to-r from-zinc-500 via-stone-600 to-zinc-900">
            Enter
          </Button>

          <p class="text-sm text-center mt-4">Terms & Conditions</p>
        </div>
      </div>
    </Modal>

    <!-- Thank You Modal -->
    <ThankYouModal :isOpen="isThankYouModalOpen" :name="form.name" @close-modal="closeThankYouModal" />
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue';
import { z } from 'zod';
import Modal from '../../components/atoms/Modal.vue';
import Button from '../../components/atoms/Button.vue';
import TextInput from '../../components/molecules/TextInput.vue';
import ThankYouModal from '../../components/organisms/ThankYouModal.vue';

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(['close-modal']);

const form = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  termsAccepted: false,
});

const errors = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
});

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
  confirmPassword: z.string().min(1, 'Confirm Password is required').refine(val => val === form.password, {
    message: 'Passwords do not match',
  }),
});

const passwordError = computed(() => errors.password || '');
const passwordMatchError = computed(() => errors.confirmPassword || '');

const isThankYouModalOpen = ref(false);

function submitForm() {
  // Reset errors
  (Object.keys(errors) as Array<keyof typeof errors>).forEach((key) => (errors[key] = ''));

  const result = schema.safeParse(form);

  if (!result.success) {
    result.error.errors.forEach(error => {
      const field = error.path[0] as keyof typeof errors;
      errors[field] = error.message;
    });
    return;
  }

  // Form submitted successfully, close the registration modal and open the Thank You modal
  closeModal();
  openThankYouModal();
}

function closeModal() {
  emit('close-modal');
}

function openThankYouModal() {
  isThankYouModalOpen.value = true;
}

function closeThankYouModal() {
  isThankYouModalOpen.value = false;
}
</script>
