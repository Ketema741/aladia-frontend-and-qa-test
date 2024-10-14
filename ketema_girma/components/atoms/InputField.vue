<template>
  <input
    :type="type"
    :id="id"
    :placeholder="placeholder"
    :class="computedClasses"
    v-model="inputValue"
    @input="validateInput"
  />
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    inputClasses: {
      type: [String, Array, Object],
      default: () => "w-full py-2 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500",
    },
  },
  data() {
    return {
      inputValue: "",
      error: false,
      errorMessage: "",
    };
  },
  methods: {
    validateInput() {
      if (this.type === "email") {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(this.inputValue)) {
          this.error = true;
          this.errorMessage = "Please enter a valid email address.";
        } else {
          this.error = false;
          this.errorMessage = "";
        }
      }
    },
  },
  computed: {
    computedClasses() {
      return this.inputClasses;
    },
  },
};
</script>
