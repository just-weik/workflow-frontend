<script setup>
    import Blank from '@/layouts/Blank.vue';
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
                            Login to Your Account
                        </h2>
                        <form class="space-y-4">
                            <!-- Email -->
                            <div>
                                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>

                            <!-- Password -->
                            <div>
                                <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="••••••••"
                                    class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>

                            <!-- Remember me + Forgot password -->
                            <div class="flex items-center justify-between text-sm">
                                <label class="flex items-center">
                                    <input type="checkbox" class="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                                    <span class="ml-2 text-gray-600">Remember me</span>
                                </label>
                                <a href="#" class="text-blue-600 hover:underline">Forgot password?</a>
                            </div>

                            <!-- Button -->
                            <button
                                type="submit"
                                class="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                            >
                                Login
                            </button>
                        </form>

                        <!-- Footer -->
                        <p class="mt-6 text-center text-sm text-gray-600">
                            Don’t have an account?
                            <a href="#" class="text-blue-600 hover:underline">Sign up</a>
                        </p>
                    </div>
                </div>
            </div>
        </template>
    </Blank>
</template>

<style scoped>

</style>