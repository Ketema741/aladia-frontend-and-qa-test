<template>
    <nav data-test="home-nav-bar" class="flex items-center justify-end px-6 pt-2 pb-4 bg-black">
      <div class="flex items-center gap-96">
        <SearchBar />
        <JoinUsButton @open-modal="$emit('open-modal')" />
      </div>
    </nav>
  </template>
  
  <script>
  import SearchBar from '../../components/molecules/SearchBar.vue';
  import JoinUsButton from '../../components/molecules/JoinUsButton.vue';
  
  export default {
    components: {
      SearchBar,
      JoinUsButton,
    },
  };
  </script>
  