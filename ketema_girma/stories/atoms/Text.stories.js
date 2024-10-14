import Text from "../../components/atoms/Text.vue" 

export default {
  title: 'Components/Atoms/Text',
  component: Text,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      defaultValue: 'md',
    },
    weight: {
      control: { type: 'select' },
      options: ['light', 'normal', 'medium', 'semibold', 'bold'],
      defaultValue: 'normal',
    },
    class: {
      control: 'text',
      defaultValue: '',
    },
  },
};

const Template = (args) => ({
  components: { Text },
  setup() {
    return { args };
  },
  template: '<Text v-bind="args">This is a sample Text text.</Text>',
});

export const Default = Template.bind({});
Default.args = {
  size: 'md',
  weight: 'normal',
};

export const SmallText = Template.bind({});
SmallText.args = {
  size: 'sm',
  weight: 'normal',
};

export const LargeText = Template.bind({});
LargeText.args = {
  size: 'lg',
  weight: 'normal',
};

export const BoldText = Template.bind({});
BoldText.args = {
  size: 'md',
  weight: 'bold',
};

export const SemiboldText = Template.bind({});
SemiboldText.args = {
  size: 'md',
  weight: 'semibold',
};

export const LightText = Template.bind({});
LightText.args = {
  size: 'md',
  weight: 'light',
};
