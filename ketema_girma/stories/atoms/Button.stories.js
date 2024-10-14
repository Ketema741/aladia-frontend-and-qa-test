import Button from "../../components/atoms/Button.vue" 

export default {
  title: 'Components/Atoms/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'outline', 'link', 'destructive'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    clickHandler: { action: 'clicked' },
  },
};

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args">Click me</Button>',
});

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  disabled: false,
  buttonClasses: 'flex items-center justify-center w-full py-3',
};

export const Outline = Template.bind({});
Outline.args = {
  variant: 'outline',
  disabled: false,
  buttonClasses: 'flex items-center justify-center w-full py-3',
};

export const Link = Template.bind({});
Link.args = {
  variant: 'link',
  disabled: false,
  buttonClasses: 'flex items-center justify-center w-full py-3',
};

export const Destructive = Template.bind({});
Destructive.args = {
  variant: 'destructive',
  disabled: false,
  buttonClasses: 'flex items-center justify-center w-full py-3',
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'primary',
  disabled: true,
  buttonClasses: 'flex items-center justify-center w-full py-3',
};
