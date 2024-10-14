<template>
  <!-- Search Input Field -->
  <div class="relative">
    <input
      data-test="search-input-native"
      type="text"
      placeholder="Search courses..."
      class="bg-transparent text-white py-2 pl-4 pr-4 border-0 focus:outline-none transition-all duration-300 ease-in-out"
    />
    <div class="absolute inset-x-0 bottom-0 h-0.1 bg-gradient-to-r from-black via-white to-black w-full"></div>
  </div>  
</template>
  
  <script>
  
  export default {
    components: {
    },
  };
  </script>
  