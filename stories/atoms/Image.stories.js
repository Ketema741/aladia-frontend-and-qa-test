import Image from "../../components/atoms/Image.vue" 


export default {
  title: 'Components/Atoms/Image',
  component: Image,
  argTypes: {
    src: {
      control: 'text',
      defaultValue: 'https://via.placeholder.com/150',
    },
    alt: {
      control: 'text',
      defaultValue: 'Placeholder Image',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'rounded', 'circle', 'thumbnail'],
      defaultValue: 'default',
    },
    class: {
      control: 'text',
      defaultValue: '',
    },
  },
};

const Template = (args) => ({
  components: { Image },
  setup() {
    return { args };
  },
  template: '<Image v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Default Image',
  variant: 'default',
};

export const Rounded = Template.bind({});
Rounded.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Rounded Image',
  variant: 'rounded',
};

export const Circle = Template.bind({});
Circle.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Circle Image',
  variant: 'circle',
};

export const Thumbnail = Template.bind({});
Thumbnail.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Thumbnail Image',
  variant: 'thumbnail',
};
