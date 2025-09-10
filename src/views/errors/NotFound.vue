<script setup>
    import Application from '@/layouts/Application.vue';
</script>

<template>
    <Application>
        <template #content>
            <div class="flex flex-col items-center justify-center w-full h-[calc(100vh-100px)] gap-2">
                <h1 class="text-9xl font-bold">404</h1>
                <p class="text-2xl">Page not found</p>
                <router-link to="/" class="text-blue-500">Go Home</router-link>
            </div>
        </template>
    </Application>
</template>