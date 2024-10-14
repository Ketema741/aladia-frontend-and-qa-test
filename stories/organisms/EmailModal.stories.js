import Modal from '../../components/atoms/Modal.vue';
import Button from '../../components/atoms/Button.vue';
import SocialLoginButtons from '../../components/molecules/SocialMediaLoginButtons.vue';

export default {
  title: 'Components/organisms/EmailModal',
  component: Modal,
  argTypes: {
    isOpen: { control: 'boolean' },
    email: { control: 'text' },
    emailError: { control: 'text' },
    closeModal: { action: 'close-modal' },
    updateEmail: { action: 'update-email' },
    submitEmail: { action: 'submit-email' },
  },
  parameters: {
    docs: {
      description: {
        component: 'The EmailModal component allows users to sign up or log in by entering their email and other details.',
      },
    },
  },
};

const Template = (args) => ({
  components: { Modal, Button, SocialLoginButtons },
  setup() {
    return { args };
  },
  template: `
    <Modal :isOpen="args.isOpen" @close-modal="args.closeModal">
      <div class="absolute inset-0 p-1 bg-gradient-to-r from-gray-800 via-white to-gray-800 rounded-md"></div>

      <div class="relative px-6 py-4 bg-black rounded-lg">
        <div class="flex relative bg-gradient-to-br from-gray-800 to-black border border-gray-800 rounded-md">
          <img src="/img/welcome-to-aladia.png" alt="Logo" class="border border-gray-800 rounded-md mx-auto" />
        </div>

        <div class="mb-6">
          <label for="email" class="block text-center text-sm my-6">Enter your email</label>
          <div class="flex items-center bg-white rounded-lg">
            <span class="px-3 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4.5 4h15a2.5 2.5 0 012.5 2.5v11a2.5 2.5 0 01-2.5 2.5h-15A2.5 2.5 0 012 17.5v-11A2.5 2.5 0 014.5 4zm15 1.5h-15a1 1 0 00-1 1v.512l8 5.023 8-5.023V6.5a1 1 0 00-1-1z"/>
              </svg>
            </span>
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              data-test="signin-or-signup-email-input"
              class="bg-white text-gray-500 focus:outline-none py-3 px-3 flex-1 rounded-lg"
              :value="args.email"
              @input="event => args.updateEmail(event.target.value)"
            />
          </div>
          <p v-if="args.emailError" class="text-red-500 text-xs mt-2">{{ args.emailError }}</p>
        </div>

        <Button :clickHandler="args.submitEmail" :dataTest="'join-us-button'" buttonClasses="w-full bg-gradient-to-br from-gray-800 to-black text-gray-300 py-3 rounded-lg mb-6 transition hover:bg-gray-600">
          Enter
        </Button>

        <div class="flex items-center my-6">
          <div class="flex-grow h-px bg-gradient-to-l from-white to-black"></div>
          <span class="mx-3 text-white">Or</span>
          <div class="flex-grow h-px bg-gradient-to-r from-white to-black"></div>
        </div>

        <SocialLoginButtons />

        <p class="text-center text-gray-400 text-xs mt-6">Terms & Conditions</p>
      </div>
    </Modal>
  `,
});

// Default story for EmailModal
export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  email: '',
  emailError: '',
};

// Story for EmailModal with error message
export const WithError = Template.bind({});
WithError.args = {
  isOpen: true,
  email: 'user@example.com',
  emailError: 'Invalid email address',
};
