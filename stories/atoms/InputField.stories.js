import Input from "../../components/atoms/InputField.vue" 

export default {
  title: 'Components/Atoms/InputField',
  component: Input,
  argTypes: {
    id: {
      control: 'text',
      defaultValue: 'input-id',
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password'],
      defaultValue: 'text',
    },
    placeholder: {
      control: 'text',
      defaultValue: 'Enter some text...',
    },
    inputClasses: {
      control: 'text',
      defaultValue: 'w-full py-2 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500',
    },
  },
};

const Template = (args) => ({
  components: { Input },
  setup() {
    return { args };
  },
  template: '<Input v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  id: 'input-default',
  type: 'text',
  placeholder: 'Enter text here...',
};

export const EmailInput = Template.bind({});
EmailInput.args = {
  id: 'input-email',
  type: 'email',
  placeholder: 'Enter your email...',
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  id: 'input-password',
  type: 'password',
  placeholder: 'Enter your password...',
};
