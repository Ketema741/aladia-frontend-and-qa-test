import Input from "../../components/molecules/TextInput.vue" 

export default {
  title: 'Components/Molecules/TextInput',
  component: Input,
  argTypes: {
    id: {
      control: 'text',
      defaultValue: 'input-id',
    },
    label: {
      control: 'text',
      defaultValue: 'Input Label',
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
    variant: {
      control: { type: 'select' },
      options: ['default', 'underlined', 'bordered', 'pill', 'minimal'],
      defaultValue: 'default',
    },
    inputClasses: {
      control: 'text',
      defaultValue: '',
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
  id: 'default-input',
  label: 'Default Input',
  type: 'text',
  variant: 'default',
  placeholder: 'Enter some text...',
};

export const Underlined = Template.bind({});
Underlined.args = {
  id: 'underlined-input',
  label: 'Underlined Input',
  type: 'text',
  variant: 'underlined',
  placeholder: 'Enter some text...',
};

export const Bordered = Template.bind({});
Bordered.args = {
  id: 'bordered-input',
  label: 'Bordered Input',
  type: 'text',
  variant: 'bordered',
  placeholder: 'Enter some text...',
};

export const Pill = Template.bind({});
Pill.args = {
  id: 'pill-input',
  label: 'Pill Input',
  type: 'text',
  variant: 'pill',
  placeholder: 'Enter some text...',
};

export const Minimal = Template.bind({});
Minimal.args = {
  id: 'minimal-input',
  label: 'Minimal Input',
  type: 'text',
  variant: 'minimal',
  placeholder: 'Enter some text...',
};

export const EmailValidation = Template.bind({});
EmailValidation.args = {
  id: 'email-input',
  label: 'Email Input',
  type: 'email',
  variant: 'bordered',
  placeholder: 'Enter your email...',
};
