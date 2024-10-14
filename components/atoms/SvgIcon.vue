<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :class="computedClass"
    :viewBox="viewBox"
    :fill="fill"
    :stroke="stroke"
    :aria-hidden="ariaHidden"
  >
    <slot></slot>
  </svg>
</template>

<script>
export default {
  props: {
    viewBox: {
      type: String,
      default: "0 0 48 48",
    },
    fill: {
      type: String,
      default: "none",
    },
    stroke: {
      type: String,
      default: "currentColor",
    },
    ariaHidden: {
      type: String,
      default: "false",
    },
    class: {
      type: [String, Array, Object],
      default: () => "w-5 h-5 mr-2",
    },
    variant: {
      type: String,
      default: "default",
      validator: (value) => ["default", "solid", "outline", "filled"].includes(value),
    },
  },
  computed: {
    computedClass() {
      switch (this.variant) {
        case "solid":
          return `${this.class} fill-current text-black`;
        case "outline":
          return `${this.class} stroke-current text-gray-500`;
        case "filled":
          return `${this.class} fill-current text-blue-500`;
        case "default":
        default:
          return `${this.class}`;
      }
    },
  },
};
</script>
