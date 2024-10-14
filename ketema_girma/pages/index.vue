<template>
  <div class="min-h-screen bg-black text-white">
    <!-- Navbar -->
    <Navbar @open-modal="openEmailModal" />

    <!-- Main Content -->
    <div class="flex items-center justify-center h-full">
      <div class="container mx-auto px-6 py-6 text-center">
        <Heading text="E-learning Revolution 2" />
        <p class="text-lg text-gray-400 mb-8">
          We have worked to digitize our school and give the whole world the opportunity to do it with a new study platform designed for teachers.
        </p>
        <Button :click-handler="openEmailModal" :dataTest="'go-to-marketplace-button'" buttonClasses="flex flex-row gap-4 bg-black text-white border border-white py-1 px-2 rounded-lg  hover:bg-gray-800 transition">Go to Marketplace</Button>
      </div>
    </div>

    <!-- Email Modal -->
    <EmailModal
      :isOpen="isEmailModalOpen"
      :email="email"
      :emailError="emailError"
      @close-modal="closeEmailModal"
      @update-email="updateEmail"
      @submit-email="submitEmail"
    />

    <!-- Signup Modal -->
    <SignupModal 
      :isOpen="isSignupModalOpen" 
      @close-modal="closeSignupModal"
    />
   
  </div>
</template>

<script>
import Navbar from '@/components/organisms/Navbar.vue';
import Heading from '@/components/atoms/Heading.vue';
import Button from '@/components/atoms/Button.vue';
import EmailModal from '@/components/organisms/EmailModal.vue';
import SignupModal from '~/components/organisms/SignupModal.vue';


export default {
  components: {
    Navbar,
    Heading,
    Button,
    EmailModal,
    SignupModal,
  },
  data() {
    return {
      isEmailModalOpen: false,
      isSignupModalOpen: false,
      isLoginModalOpen: false,
      email: '',
      emailError: '',
    };
  },
  methods: {
    openEmailModal() {
      this.isEmailModalOpen = true;
    },
    closeEmailModal() {
      this.isEmailModalOpen = false;
    },
    openSignupModal() {
      this.isSignupModalOpen = true;
    },
    closeSignupModal() {
      this.isSignupModalOpen = false;
    },
    openLoginModal() {
      this.isLoginModalOpen = true;
    },
    closeLoginModal() {
      this.isLoginModalOpen = false;
    },
    updateEmail(newEmail) {
      this.email = newEmail;
    },
    validateEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    },
    submitEmail() {
      if (this.validateEmail(this.email)) {
        this.emailError = '';
        // Close the Email Modal
        this.closeEmailModal();
        
        // Here you can decide whether to open the Login or Signup modal
        // For example, based on some conditions, you can open one or the other.
        
        // Example: Open Signup modal
        this.openSignupModal();
        
        // Example: To open Login modal, use:
        // this.openLoginModal();
      } else {
        this.emailError = 'Please enter a valid email address.';
      }
    },
  },
};
</script>
