import SvgIcon from '../../components/atoms/SvgIcon.vue'; // Import SvgIcon component

export default {
  title: 'Components/Atoms/SvgIcon',
  component: SvgIcon,
  argTypes: {
    viewBox: {
      control: 'text',
      defaultValue: '0 0 48 48',
    },
    fill: {
      control: 'color',
      defaultValue: 'none',
    },
    stroke: {
      control: 'color',
      defaultValue: 'currentColor',
    },
    ariaHidden: {
      control: 'boolean',
      defaultValue: false,
    },
    class: {
      control: 'text',
      defaultValue: 'w-5 h-5',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'solid', 'outline', 'filled'],
      defaultValue: 'default',
    },
  },
};

const Template = (args) => ({
  components: { SvgIcon },
  setup() {
    return { args };
  },
  template: `
    <SvgIcon v-bind="args">
      <path d="M24 4l8 16h-6v12h-4V20h-6l8-16z"/>
    </SvgIcon>
  `,
});

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
};

export const Solid = Template.bind({});
Solid.args = {
  variant: 'solid',
};

export const Outline = Template.bind({});
Outline.args = {
  variant: 'outline',
};

export const Filled = Template.bind({});
Filled.args = {
  variant: 'filled',
};
