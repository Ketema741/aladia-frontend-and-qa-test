<template>
  <component
    :is="headingTag"
    :class="headingClass"
  >
    {{ text }}
  </component>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    variant: {
      type: String,
      default: 'h1',
      validator: (value) => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(value),
    },
    size: {
      type: String,
      default: '6xl',
      validator: (value) => ['6xl', '5xl', '4xl', '3xl', '2xl', 'xl', 'lg'].includes(value),
    },
    class: {
      type: String,
      default: '',
    },
  },
  computed: {
    headingTag() {
      return this.variant;
    },
    headingClass() {
      return `text-${this.size} font-bold mb-4 ${this.class}`;
    },
  },
};
</script>
