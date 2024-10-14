<template>
    <div class="space-y-3">
      <SocialButton text="Continue with Google" :iconViewBox="'0 0 48 48'">
        <template #icon>
          <path fill="#4285F4" d="M47.5 24.5c0-1.4-.1-2.8-.3-4.2H24v8.5h13.3c-.6 3-2.4 5.5-4.9 7.1v5.9h7.9c4.6-4.2 7.2-10.4 7.2-17.3z" />
          <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.8-5.7l-7.9-5.9c-2.2 1.5-5 2.4-7.9 2.4-6.1 0-11.3-4.1-13.2-9.7H4.9v6.1C8.8 43.2 15.9 48 24 48z" />
          <path fill="#FBBC05" d="M10.8 28.1c-.5-1.5-.8-3-.8-4.6s.3-3.1.8-4.6V13.7H4.9C3.2 17 2 20.7 2 24.5s1.2 7.5 2.9 10.8l5.9-7.2z" />
          <path fill="#EA4335" d="M24 9.5c3.5 0 6.7 1.2 9.1 3.6l6.8-6.8C35.9 2.5 30.5 0 24 0 15.9 0 8.8 4.8 4.9 12l5.9 7.2c1.9-5.6 7.1-9.7 13.2-9.7z" />
        </template>
      </SocialButton>
  
      <SocialButton text="Continue with Facebook" :iconViewBox="'0 0 48 48'">
        <template #icon>
          <path fill="#1877F2" d="M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24 24-10.7 24-24S37.3 0 24 0z" />
          <path fill="#fff" d="M26.7 48V29h6l.9-7.1h-6.9v-4.4c0-2 .6-3.3 3.4-3.3h3.6v-6c-.6-.1-2.6-.3-5.4-.3-5.3 0-8.9 3.2-8.9 9v5h-6v7.1h6V48h7.3z" />
        </template>
      </SocialButton>
  
      <SocialButton text="Continue with Apple" :iconViewBox="'0 0 48 48'">
        <template #icon>
          <path d="M32.3 10.4c-1.1 1.2-2.9 2.1-4.3 2-0.2-1.6.5-3.3 1.5-4.4 1.1-1.3 2.9-2.2 4.4-2 0.1 1.6-0.5 3.2-1.6 4.4zM34.8 15.5c-2.4-0.1-4.6 1.3-5.8 1.3-1.3 0-3-1.3-5-1.3-2.6 0-5 1.5-6.3 3.8-2.7 4.7-0.7 11.6 1.9 15.4 1.3 1.8 2.9 3.8 4.9 3.7 1.9 0 2.6-1.2 4.9-1.3 2.3-0.1 2.9 1.3 4.9 1.3 2.1-0.1 3.4-1.8 4.6-3.5 1.5-2.1 2.2-4.2 2.2-4.4-0.1-0.1-4.2-1.6-4.2-6.2 0-3.9 3.1-5.7 3.3-5.9-1.8-2.7-4.7-3-5.7-3z" />
          <path d="M28.3 8.1c0.8 1.1 1.4 2.6 1.3 4.1-1.3 0-2.9-0.9-3.8-2-0.8-1-1.5-2.5-1.4-4 1.4 0.1 2.9 1 3.9 1.9z" />
        </template>
      </SocialButton>
    </div>
  </template>
  
  <script>
  import SocialButton from '../../components/molecules/SocialMediaLoginButton.vue';
  
  export default {
    components: {
      SocialButton,
    },
  };
  </script>
  