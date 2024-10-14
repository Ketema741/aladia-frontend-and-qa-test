import NavBar from "../../components/organisms/Navbar.vue" 

export default {
  title: 'Components/organisms/NavBar',
  component: NavBar,
  argTypes: {
    onOpenModal: { action: 'open-modal' }, // Define action for the 'open-modal' event
  },
};

const Template = (args, { argTypes }) => ({
  components: { NavBar },
  props: Object.keys(argTypes),
  template: `
    <NavBar @open-modal="onOpenModal" />
  `,
});

export const DefaultNavBar = Template.bind({});
DefaultNavBar.args = {};
