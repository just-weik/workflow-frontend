<script setup>
    import Application from '@/layouts/Application.vue';
</script>

<template>
    <Application>
        <template #content>
            <div class="w-full h-full flex flex-col gap-2">
                <div class="text-xl font-bold">Workflow</div>
                <div>Version: 1.0.0</div>
                <div>Build date: Wednesday, 10 September 2025</div>
                <div>Copyright &copy; just-weik, 2025</div>
            </div>

            <div class="mt-4">
                <div class="text-lg font-bold">Need support?</div>
                <div class="flex items-center">
                    <n-icon size="18">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                    </n-icon>
                    <a href="mailto:weike.ap@gmail.com" class="underline text-blue-500 pl-1">Weike Alen Phinjaya</a>
                </div>
            </div>

            <div class="mt-4">
                <div class="text-lg font-bold">Updates:</div>
                <ul class="list-disc list-inside">
                    <li>Initial release of Workflow application.</li>
                    <li>Added user authentication and profile management.</li>
                    <li>Implemented responsive design for mobile and desktop.</li>
                    <li>Integrated Vuex for state management.</li>
                    <li>Set up routing with Vue Router.</li>
                    <li>Created reusable components for header, sidebar, and footer.</li>
                    <li>Optimized performance and fixed bugs.</li>
                </ul>
            </div>
        </template>
    </Application>
</template>

<style scoped>
</style>
