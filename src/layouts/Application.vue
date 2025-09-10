<script setup>
    import { onMounted, onBeforeUnmount, computed } from "vue";
    import { useStore } from 'vuex';
    import Header from "@/components/Header.vue";
    import Sidebar from "@/components/Sidebar.vue";
    import Footer from "@/components/Footer.vue";

    const store = useStore();
    const { getters, dispatch } = store;

    // Perbaiki akses state module
    // const collapsed = computed(() => store.state.base_app.collapsed);
    const collapsed = computed(() => getters['base_app/get_collapsed']);
    const sidebar_width = computed(() => getters['base_app/get_sidebar_width']);
    const sidebar_width_collapsed = computed(() => getters['base_app/get_sidebar_width_collapsed']);

    console.log({ 
        sidebar_width: sidebar_width.value, 
        sidebar_width_collapsed: sidebar_width_collapsed.value, 
    });
    
    function handleResize() {
        dispatch('base_app/handle_resize');
    }

    onMounted(() => {
        // set CSS variable globally (on :root)
        document.documentElement.style.setProperty('--sidebar-width', sidebar_width.value);
        document.documentElement.style.setProperty('--sidebar-width-collapsed', sidebar_width_collapsed.value);
        
        window.addEventListener('resize', handleResize);
        // Inisialisasi awal
        handleResize();
    });

    onBeforeUnmount(() => {
        window.removeEventListener('resize', handleResize);
    });
</script>

<template>
    <n-space vertical>
        <n-layout>
            <!-- Start::Header -->
            <Header />
            <!-- End::Header -->

            <!-- Start::Sidebar -->
            <Sidebar />
            <!-- End::Sidebar -->

            <!-- Start::Page View -->
            <div
                :class="[
                    collapsed ? 'lg:pl-[var(--sidebar-width-collapsed)]' : 'lg:pl-[var(--sidebar-width)]'
                ]"
                class="h-[calc(100vh-100px)] transition-all duration-300"
            >
                <div class="py-2 px-4">
                    <slot name="content" />
                </div>
            </div>
            <!-- End::Page View -->

            <!-- Start::Footer -->
            <Footer />
            <!-- End::Footer -->
        </n-layout>
    </n-space>
</template>

<style scoped>

</style>
