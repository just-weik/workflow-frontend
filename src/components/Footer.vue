<script setup>
    import { computed } from "vue";
    import { useStore } from 'vuex';

    const store = useStore();

    // Perbaiki akses state module
    const inverted = computed(() => store.state.base_app.inverted);
</script>

<template>
    <n-layout-footer 
        :inverted="inverted" 
        bordered
        class="p-2 text-center text-[12px] h-[40px]"
    >
        Copyright © 2025 justweik. All rights reserved.
    </n-layout-footer>
</template>

<style scoped>

</style>