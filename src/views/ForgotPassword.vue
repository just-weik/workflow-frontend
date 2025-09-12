<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import Blank from '@/layouts/Blank.vue';
    import Footer from '@/components/Footer.vue';

    const router = useRouter();
    const forgotPasswordRequestSent = ref(false);

    const doForgotPassword = (event) => {
        event.preventDefault();
        // Implement login logic here
        forgotPasswordRequestSent.value = true;
        setTimeout(() => {
            forgotPasswordRequestSent.value = false;
            router.push('/login'); // Redirect to home after "login"
        }, 3000); // Simulate a network request delay
    };
</script>

<template>
    <Blank>
        <template #content>
            <div class="min-h-screen flex flex-col lg:flex-row">
                <!-- Left section (only visible on lg and above) -->
                <div class="hidden lg:flex lg:w-1/2 bg-blue-600 items-center justify-center text-white">
                    <div class="text-center px-10">
                        <h1 class="text-4xl font-bold mb-4">Welcome Back!</h1>
                        <p class="text-lg opacity-80">Please log in to continue</p>
                    </div>
                </div>

                <!-- Right section (Login form) -->
                <div class="flex flex-1 items-center justify-center p-6">
                    <div class="w-full max-w-md">
                        <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center lg:text-left">
                            Forgot Password
                        </h2>
                        <form class="space-y-4" id="forgot-password-form">
                            <!-- Email -->
                            <div>
                                <label for="email" class="block font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    :disabled="forgotPasswordRequestSent"
                                    id="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>

                            <!-- Button -->
                            <n-button
                                attr-type="submit"
                                type="primary"
                                :loading="forgotPasswordRequestSent"
                                :disabled="forgotPasswordRequestSent"
                                :class="['w-full flex justify-center items-center']"
                                @click="doForgotPassword"
                            >
                                <template #icon>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                    </svg>
                                </template>
                                Send Email
                            </n-button>
                        </form>

                        <!-- Footer -->
                        <Footer layout-type='blank' />
                    </div>
                </div>
            </div>
        </template>
    </Blank>
</template>

<style scoped>

</style>