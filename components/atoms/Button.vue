<template>
  <button @click="handleClick" :data-test="dataTest" :class="computedButtonClasses">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    clickHandler: {
      type: Function,
      required: false,
    },
    dataTest: {
      type: String,
      default: "default-button",
    },
    buttonClasses: {
      type: [String, Array, Object],
      default: () => "flex items-center justify-center w-full py-3 rounded-lg transition-all focus:outline-none",
    },
    variant: {
      type: String,
      default: "primary",
      validator: (value) => ["primary", "outline", "link", "destructive"].includes(value),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick() {
      if (!this.disabled && this.clickHandler) {
        this.clickHandler();
      }
    },
  },
  computed: {
    computedButtonClasses() {
      let baseClasses = this.buttonClasses;

      if (this.disabled) {
        return `${baseClasses} bg-gray-400 text-gray-100 cursor-not-allowed`;
      }

      switch (this.variant) {
        case "outline":
          return `${baseClasses} border border-black bg-white text-black`;
        case "link":
          return `${baseClasses} text-black underline bg-transparent`;
        case "destructive":
          return `${baseClasses} bg-red-600 text-white hover:bg-red-700`;
        case "primary":
        default:
          return `${baseClasses} bg-black text-white border border-gray-800 hover:bg-neutral-900`;
      }
    },
  },
};
</script>
