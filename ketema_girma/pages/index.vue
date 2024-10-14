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
        <Button 
          :click-handler="openEmailModal" 
          :dataTest="'go-to-marketplace-button'" 
          buttonClasses="flex flex-row gap-4 bg-black text-white border border-white py-1 px-2 rounded-lg hover:bg-gray-800 transition">
          Go to Marketplace
        </Button>
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
      :email="email"
      @close-modal="closeSignupModal"
      @signup-success="handleSignupSuccess"
    />

  </div>
</template>

<script>
import Navbar from '@/components/organisms/Navbar.vue';
import Heading from '@/components/atoms/Heading.vue';
import Button from '@/components/atoms/Button.vue';
import EmailModal from '@/components/organisms/EmailModal.vue';
import SignupModal from '@/components/organisms/SignupModal.vue';
import ThankYouModal from '@/components/organisms/ThankYouModal.vue'; // Import the Thank You modal

export default {
  components: {
    Navbar,
    Heading,
    Button,
    EmailModal,
    SignupModal,
    ThankYouModal, // Register the Thank You modal
  },
  data() {
    return {
      isEmailModalOpen: false,
      isSignupModalOpen: false,
      isThankYouModalOpen: false,
      email: '',
      emailError: '',
      name: '', // Store the name for Thank You modal
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
    openThankYouModal() {
      this.isThankYouModalOpen = true;
    },
    closeThankYouModal() {
      this.isThankYouModalOpen = false;
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

        // Open the Signup modal and pass the email
        this.openSignupModal();
      } else {
        this.emailError = 'Please enter a valid email address.';
      }
    },
    handleSignupSuccess(name) {
      // Capture the name from the signup form and pass it to the Thank You modal
      this.name = name;
      this.closeSignupModal();
      this.openThankYouModal();
    },
  },
};
</script>
