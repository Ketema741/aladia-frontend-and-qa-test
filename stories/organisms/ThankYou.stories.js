import Modal from '../../components/atoms/Modal.vue';
import Button from '../../components/atoms/Button.vue';

export default {
    title: 'Components/organisms/ThankYouModal',
    component: Modal,
  argTypes: {
    isOpen: { control: 'boolean' },
    name: { control: 'text' },
    closeModal: { action: 'close-modal' },
  },
};

const Template = (args) => ({
  components: { Modal, Button },
  setup() {
    return { args };
  },
  template: `
    <Modal :isOpen="args.isOpen" @close-modal="args.closeModal">
      <!-- Outer Border with Gradient -->
      <div class="absolute inset-0 p-1 bg-gradient-to-r from-gray-800 via-white to-gray-800 rounded-md"></div>
  
      <div class="relative px-6 py-4 pb-50 bg-black rounded-lg">
          
          <!-- Thank You Message -->
        <div class="my-6">
            <p class="text-xl font-bold text-center text-gray-400 mt-2">{{ args.name }}</p>
            <h2 class="text-l text-center text-white">Thanks for Joining Aladia!</h2>
        </div>

        <img src="/img/logo.png" alt="Logo" class="my-36 mx-auto" />
  
        <Button 
          :clickHandler="args.submitForm" 
          :dataTest="'submit-user-register-button'" 
          variant="primary" 
          class="w-full mb-4 bg-gradient-to-r from-zinc-500 via-stone-600 to-zinc-900"
        >
          Join Marketplace
        </Button>
      </div>
    </Modal>
  `,
});

// Default story
export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  name: 'Ketema Girma',
};
