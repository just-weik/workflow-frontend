<script setup>
    import { h, ref, computed } from "vue";
    import { useStore } from 'vuex';

    const store = useStore();
    const { commit, getters } = store;

    const inverted = computed(() => getters['base_app/get_inverted']);
    const collapsed = computed(() => getters['base_app/get_collapsed']);
    const mobile_slide_menu = computed(() => getters['base_app/get_mobile_slide_menu']);
    const is_mobile = computed(() => getters['base_app/get_is_mobile']);
    
    const sidebar_width = computed(() => store.state.base_app.sidebar_width);
    const sidebar_width_collapsed = computed(() => store.state.base_app.sidebar_width_collapsed);

    // Method untuk render icon dari string SVG
    function renderIcon(svg) {
        return svg
            ? () => h('span', { innerHTML: svg, style: 'display:inline-flex;align-items:center;' })
            : undefined;
    }

    const menuOptions = ref([
        {
            label: "Home",
            key: "home",
            icon: renderIcon(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" /></svg>`),
        },
        {
            label: "Pinball 1973",
            key: "pinball-1973",
            icon: renderIcon(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" /></svg>`),
            disabled: true,
            children: [
                {
                    label: "Rat",
                    key: "rat"
                }
            ]
        },
        {
            label: "A Wild Sheep Chase",
            key: "a-wild-sheep-chase",
            disabled: true,
            icon: renderIcon(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" /></svg>`),
        },
        {
            label: "Dance Dance Dance",
            key: "Dance Dance Dance",
            icon: renderIcon(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" /></svg>`),
            children: [
                {
                    type: "group",
                    label: "People",
                    key: "people",
                    children: [
                        {
                            label: "Narrator",
                            key: "narrator",
                            icon: renderIcon(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>`),
                        },
                        {
                            label: "Sheep Man",
                            key: "sheep-man",
                            icon: renderIcon(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>`),
                        }
                    ]
                },
                {
                    label: "Beverage",
                    key: "beverage",
                    icon: renderIcon(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008Z" /></svg>`),
                    children: [
                        {
                            label: "Whisky",
                            key: "whisky"
                        }
                    ]
                },
                {
                    label: "Food",
                    key: "food",
                    children: [
                        {
                            label: "Sandwich",
                            key: "sandwich"
                        }
                    ]
                },
                {
                    label: "The past increases. The future recedes.",
                    key: "the-past-increases-the-future-recedes"
                }
            ],
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
