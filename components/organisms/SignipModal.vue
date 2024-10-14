<template>
  <Modal :isOpen="isOpen" @close-modal="closeModal" dataTest="register-modal">
    <!-- Outer Border with Gradient -->
    <div class="absolute inset-0 p-1 bg-gradient-to-r from-gray-800 via-white to-gray-800 rounded-md"></div>
      <!-- Modal content -->
       
      <div class="relative bg-black rounded-lg">
      <div class="flex flex-col justify-center items-center gap-y-4 bg-black text-white rounded-lg shadow-lg p-8 max-h-screen max-w-md">
        <div class="flex items-center text-white- hover:text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>

          <span class="text-sm font-medium text-white">Back to login</span>
        </div>
        <div class="flex gap-x-8 items-center justify-between">
          <div class="relative border border-gray-500">
              <div class="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-400 to-gray-900" ></div>
                <div class="relative z-10 flex items-center justify-center h-full text-black">
                  <Image class="flex items-center" src="/img/logo.png" alt="Logo" />
                </div>
            </div>
          <div>
            <Text size="md" weight="semibold">Nice to meet you</Text>
            <Text class="text-gray-300" size="sm" weight="light">Upload a profile picture and complete your presentation</Text>
          </div>
        </div>

        <div class="flex gap-x-2">
          <CheckboxInput id="terms" size="sm" v-model="form.termsAccepted" />
          <Text size="sm">I accept <a href="#" class="underline font-semibold">Terms & Conditions</a> and <a href="#" class="underline font-semibold">Privacy Policy</a></Text>
        </div>

        <Text size="sm">Enter your details</Text>

        <div class="flex flex-col gap-y-5 w-full">
          <!-- Input fields and validation messages -->
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

        <Text size="sm" class="text-center mt-4">Terms & Conditions</Text>
      </div>
      </div>
</Modal>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue';
import { z } from 'zod';
import Image from '~/components/atoms/Image.vue';
import Text from '~/components/atoms/Text.vue';
import TextInput from '~/components/molecules/TextInput.vue';
import Button from '~/components/atoms/Button.vue';
import CheckboxInput from '~/components/atoms/CheckboxInput.vue';
import Modal from '~/components/atoms/Modal.vue';

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(['close-modal']);

const form = reactive({
  name: '',
  surname: '',
  email: '',
  password: '',
  confirmPassword: '',
  termsAccepted: false,
});

const errors = reactive({
  name: '',
  surname: '',
  email: '',
  password: '',
  confirmPassword: '',
  termsAccepted: '',
});

// Validation schema with password match
const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  // surname: z.string().min(1, 'Surname is required'),
  email: z.string().email('Invalid email address'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters long')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/\d/, 'Password must contain at least one digit')
    .regex(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character'),
  confirmPassword: z.string().min(1, 'Confirm Password is required').refine(val => val === form.password, {
    message: 'Passwords do not match',
  }),
  termsAccepted: z.boolean().refine(val => val === true, 'You must accept the terms and conditions'),
});

const passwordError = computed(() => errors.password || '');
const passwordMatchError = computed(() => errors.confirmPassword || '');

function submitForm() {
  (Object.keys(errors) as Array<keyof typeof errors>).forEach((key) => (errors[key] = ''));

  const result = schema.safeParse(form);

  if (!result.success) {
    result.error.errors.forEach(error => {
      const field = error.path[0] as keyof typeof errors;
      errors[field] = error.message;
    });
    return;
  }

  console.log('Form submitted successfully:', form);
  closeModal();
}

// Emit close modal event when required
function closeModal() {
  emit('close-modal');
}
</script>
