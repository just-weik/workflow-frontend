<script setup>
    import { computed } from "vue";
    import { useStore } from 'vuex';

    const store = useStore();
    const { commit, getters } = store;

    // Perbaiki akses state module
    // const inverted = computed(() => store.state.base_app.inverted);
    const inverted = computed(() => getters['base_app/get_inverted']);
    const collapsed = computed(() => getters['base_app/get_collapsed']);
    const is_mobile = computed(() => getters['base_app/get_is_mobile']);
</script>

<template>
    <!-- Start::Header -->
    <n-layout-header 
        :inverted="inverted" 
        bordered
        :class="[
            collapsed ? 'lg:pl-[var(--sidebar-width-collapsed)]' : 'lg:pl-[var(--sidebar-width)]'
        ]"
        class="p-2 h-[60px] flex items-center justify-between transition-all duration-300"
    >
        <div class="flex items-center min-w-6">
            <n-icon v-if="is_mobile" size="24" @click="commit('base_app/set_mobile_slide_menu', true)">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </n-icon>
        </div>
        <div class="flex items-center min-w-9">
            <a href="javascript:void(0)" class="rounded-full bg-gray-300 w-9 h-9 flex justify-center items-center font-bold">JD</a>
        </div>
    </n-layout-header>
    <!-- End::Header -->
</template>

<style scoped>

</style>