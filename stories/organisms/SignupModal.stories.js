import Modal from '../../components/atoms/Modal.vue';
import Image from '../../components/atoms/Image.vue';
import Text from '../../components/atoms/Text.vue';
import TextInput from '../../components/molecules/TextInput.vue';
import Button from '../../components/atoms/Button.vue';
import CheckboxInput from '../../components/atoms/CheckboxInput.vue';

export default {
  title: 'Components/organisms/SignupModal',
  component: Modal,
  argTypes: {
    isOpen: { control: 'boolean' },
    closeModal: { action: 'close-modal' },
    submitForm: { action: 'submitForm' },
    form: { control: 'object' },
    errors: { control: 'object' },
  },
  parameters: {
    docs: {
      description: {
        component: 'The RegisterModal allows users to sign up, validate input fields, and accept terms and conditions.',
      },
    },
  },
};

const Template = (args) => ({
  components: { Modal, Image, Text, TextInput, Button, CheckboxInput },
  setup() {
    return { args };
  },
  template: `
    <Modal :isOpen="args.isOpen" @close-modal="args.closeModal">
      <div class="absolute inset-0 p-1 bg-gradient-to-r from-gray-800 via-white to-gray-800 rounded-md"></div>
      <div class="relative bg-black rounded-lg">
        <div class="flex flex-col justify-center items-center gap-y-4 bg-black text-white rounded-lg shadow-lg p-8 max-h-screen max-w-md">
          <div class="flex items-center text-white hover:text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            <span class="text-sm font-medium text-white">Back to login</span>
          </div>

          <div class="flex gap-x-8 items-center justify-between">
            <div class="relative border border-gray-500">
              <div class="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-400 to-gray-900"></div>
              <div class="relative z-10 flex items-center justify-center h-full text-black">
                <Image src="/img/logo.png" alt="Logo" />
              </div>
            </div>
            <div>
              <Text size="md" weight="semibold">Nice to meet you</Text>
              <Text class="text-gray-300" size="sm" weight="light">Upload a profile picture and complete your presentation</Text>
            </div>
          </div>

          <div class="flex gap-x-2">
            <CheckboxInput id="terms" size="sm" v-model="args.form.termsAccepted" />
            <Text size="sm">I accept <a href="#" class="underline font-semibold">Terms & Conditions</a> and <a href="#" class="underline font-semibold">Privacy Policy</a></Text>
          </div>

          <Text size="sm">Enter your details</Text>

          <div class="flex flex-col gap-y-5 w-full">
            <div>
              <TextInput v-model="args.form.name" id="name" placeholder="Name" />
              <Text class="text-red-500 text-sm h-1">{{ args.errors.name }}</Text>
            </div>

            <div>
              <TextInput v-model="args.form.email" id="email" placeholder="Email Address" />
              <Text class="text-red-500 text-sm h-1">{{ args.errors.email }}</Text>
            </div>

            <div>
              <TextInput v-model="args.form.password" id="password" placeholder="Password" type="password" />
              <Text class="text-red-500 text-sm h-1">{{ args.errors.password }}</Text>
            </div>

            <div>
              <TextInput v-model="args.form.confirmPassword" id="confirmPassword" placeholder="Confirm Password" type="password" />
              <Text class="text-red-500 text-sm h-1">{{ args.errors.confirmPassword }}</Text>
            </div>
          </div>

          <Button :clickHandler="args.submitForm" variant="primary" class="w-full mt-4 bg-gradient-to-r from-zinc-500 via-stone-600 to-zinc-900">
            Enter
          </Button>

          <Text size="sm" class="text-center mt-4">Terms & Conditions</Text>
        </div>
      </div>
    </Modal>
  `,
});

// Default story for the RegisterModal
export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  form: {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
  },
  errors: {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAccepted: '',
  },
};

// Story with validation errors
export const WithErrors = Template.bind({});
WithErrors.args = {
  isOpen: true,
  form: {
    name: 'John Doe',
    email: 'invalid-email',
    password: 'password',
    confirmPassword: 'different-password',
    termsAccepted: false,
  },
  errors: {
    name: '',
    email: 'Invalid email address',
    password: 'Password is too weak',
    confirmPassword: 'Passwords do not match',
    termsAccepted: 'You must accept the terms and conditions',
  },
};
