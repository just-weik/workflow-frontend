<script setup>
    import { h, ref, computed, getCurrentInstance } from "vue";
    import { useStore } from 'vuex';
    import { RouterLink } from "vue-router";

    const { proxy } = getCurrentInstance();

    const store = useStore();
    const { commit, getters } = store;

    const inverted = computed(() => getters['base_app/get_inverted']);
    const collapsed = computed(() => getters['base_app/get_collapsed']);
    const mobile_slide_menu = computed(() => getters['base_app/get_mobile_slide_menu']);
    const is_mobile = computed(() => getters['base_app/get_is_mobile']);
    
    const sidebar_width = computed(() => store.state.base_app.sidebar_width);
    const sidebar_width_collapsed = computed(() => store.state.base_app.sidebar_width_collapsed);

    const menuOptions = ref([
        {
            label: () => {
                return h(RouterLink, { to: { path: "/" } }, { default: () => "Home" });
            },
            key: "home",
            icon: proxy.$renderIcon('svg', `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>`),
        },
        // { // contoh buat submenu
        //     label: "Pinball 1973",
        //     key: "pinball-1973",
        //     icon: proxy.$renderIcon('svg', `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" /></svg>`),
        //     disabled: true,
        //     children: [
        //         {
        //             label: "Rat",
        //             key: "rat"
        //         }
        //     ]
        // },
        {
            label: () => {
                return h(RouterLink, { to: { path: "/document" } }, { default: () => "Document" });
            },
            key: "document",
            icon: proxy.$renderIcon('svg', `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>`),
        },
        {
            key: "divider-1",
            type: "divider",
        },
        {
            label: () => {
                return h(RouterLink, { to: { path: "/login" } }, { default: () => "Login Page" });
            },
            key: "document",
            icon: proxy.$renderIcon('svg', `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9" /></svg>`),
        },
    ]);
</script>

<template>
    <!-- Start::Sidebar -->
    <n-layout has-sider>
        <n-layout-sider
            bordered
            :show-trigger="!is_mobile"
            collapse-mode="width"
            :collapsed-width="sidebar_width_collapsed"
            :width="sidebar_width"
            :native-scrollbar="false"
            :collapsed="collapsed"
            @collapse="commit('base_app/set_collapsed', true)"
            @expand="commit('base_app/set_collapsed', false)"
            :inverted="inverted"
            :class="[
                mobile_slide_menu ? 'left-0' : `-left-[var(--sidebar-width)]`,
                'block fixed lg:left-0 top-0 h-[calc(100vh-40px)] bg-white transition-all duration-300',
            ]"
        >
            <div class="h-[60px] flex justify-center items-center relative border-b">
                <div class="font-bold text-lg">Workflow</div>
                <n-icon v-if="is_mobile" size="24" class="absolute right-[5px] top-[18px]" @click="commit('base_app/set_mobile_slide_menu', false)">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </n-icon>
            </div>
            <n-menu
                :inverted="inverted"
                :collapsed-width="64"
                :collapsed-icon-size="22"
                :options="menuOptions"
            />
        </n-layout-sider>
    </n-layout>
    
    <div 
    v-if="is_mobile"
    :class="[
        mobile_slide_menu ? 'w-screen h-screen' : 'w-0 h-0',
        'fixed top-0 left-0 bg-gray-400 opacity-5'
    ]"
    @click="commit('base_app/set_mobile_slide_menu', false)"
    >
    Test
    </div>
    <!-- End::Sidebar -->
</template>

<style scoped>

</style>
