import Navbar from '../../components/organisms/Navbar.vue';
import Heading from '../../components/atoms/Heading.vue';
import Button from '../../components/atoms/Button.vue';

export default {
  title: 'Pages/HomePage',
  component: {
    Navbar,
    Heading,
    Button,
  },
  argTypes: {
    openEmailModal: { action: 'openEmailModal' },
    closeEmailModal: { action: 'closeEmailModal' },
    openSignupModal: { action: 'openSignupModal' },
    closeSignupModal: { action: 'closeSignupModal' },
    updateEmail: { action: 'updateEmail' },
    submitEmail: { action: 'submitEmail' },
    email: { control: 'text' },
    emailError: { control: 'text' },
  },
};

const Template = (args) => ({
  components: { Navbar, Heading, Button },
  setup() {
    return { args };
  },
  template: `
    <div class="min-h-screen bg-black text-white">
      <!-- Navbar -->
      <Navbar @open-modal="args.openEmailModal" />

      <!-- Main Content -->
      <div class="flex items-center justify-center h-full">
        <div class="container mx-auto px-6 py-6 text-center">
          <Heading :text="'E-learning Revolution 2'" />
          <p class="text-lg text-gray-400 mb-8">
            We have worked to digitize our school and give the whole world the opportunity to do it with a new study platform designed for teachers.
          </p>
          <Button 
            :click-handler="args.openEmailModal" 
            :dataTest="'go-to-marketplace-button'" 
            buttonClasses="flex flex-row gap-4 bg-black text-white border border-white py-1 px-2 rounded-lg hover:bg-gray-800 transition">
            Go to Marketplace
          </Button>
        </div>
      </div>

    </div>
  `,
});

// Default story for HomePage
export const Default = Template.bind({});
Default.args = {
  email: '',
  emailError: '',
};
