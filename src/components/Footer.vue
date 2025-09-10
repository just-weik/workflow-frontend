<script setup>
    import { computed } from "vue";
    import { useStore } from 'vuex';

    const store = useStore();
    const message = "Copyright © 2025 justweik. All rights reserved.";

    defineProps({
        layoutType: {
            type: String,
            default: 'application',
            validator: (value, props) => {
                return ['application', 'blank'].includes(value);
            },
        },
    });

    // Perbaiki akses state module
    const inverted = computed(() => store.state.base_app.inverted);
</script>

<template>
    <n-layout-footer
        v-if="layoutType === 'application'"
        :inverted="inverted" 
        bordered
        class="p-2 text-center text-[12px] h-[40px]"
    >
        {{ message }}
    </n-layout-footer>

    <p v-if="layoutType === 'blank'" class="mt-6 text-center text-sm text-gray-600">
        {{ message}}
    </p>
</template>

<style scoped>

</style>