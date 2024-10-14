import Checkbox from "../../components/atoms/CheckboxInput.vue" 

export default {
  title: 'Components/Atoms/Checkbox',
  component: Checkbox,
  argTypes: {
    modelValue: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    required: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      defaultValue: 'md',
    },
    label: {
      control: { type: 'text' },
      defaultValue: 'Label',
    },
    id: {
      control: { type: 'text' },
      defaultValue: 'checkbox-id',
    },
    class: {
      control: { type: 'text' },
      defaultValue: '',
    },
  },
};

const Template = (args) => ({
  components: { Checkbox },
  setup() {
    return { args };
  },
  template: '<Checkbox v-bind="args" />',
});

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  modelValue: false,
  label: 'Small Checkbox',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'md',
  modelValue: true,
  label: 'Medium Checkbox',
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  modelValue: false,
  label: 'Large Checkbox',
};

export const RequiredCheckbox = Template.bind({});
RequiredCheckbox.args = {
  size: 'md',
  modelValue: false,
  label: 'Required Checkbox',
  required: true,
};

export const WithCustomClass = Template.bind({});
WithCustomClass.args = {
  size: 'md',
  modelValue: false,
  label: 'Custom Styled Checkbox',
  class: 'custom-checkbox-class',
};
