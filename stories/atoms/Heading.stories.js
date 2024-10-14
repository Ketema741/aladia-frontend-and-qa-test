import Heading from "../../components/atoms/Heading.vue" 

export default {
  title: 'Components/Atoms/Heading',
  component: Heading,
  argTypes: {
    text: { control: 'text', defaultValue: 'Heading Text' },
    variant: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      defaultValue: 'h1',
    },
    size: {
      control: { type: 'select' },
      options: ['6xl', '5xl', '4xl', '3xl', '2xl', 'xl', 'lg'],
      defaultValue: '6xl',
    },
    class: { control: 'text', defaultValue: '' },
  },
};

const Template = (args) => ({
  components: { Heading },
  setup() {
    return { args };
  },
  template: '<Heading v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  text: 'Heading Text',
  variant: 'h1',
  size: '6xl',
};

export const H2 = Template.bind({});
H2.args = {
  text: 'This is an H2 Heading',
  variant: 'h2',
  size: '5xl',
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  text: 'Custom Styled Heading',
  variant: 'h2',
  size: 'xl',
  class: 'text-red-500',
};
