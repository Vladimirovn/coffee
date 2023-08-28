<template>
    <div>
        <div class="d-flex justify-center mb-4">
            <h2>Your Selections</h2>
        </div>
        <SelectionsItem v-for="selection of selections" :key="selection.id" :selection="selection"/>
    </div>
</template>

<script setup>
    import { computed } from 'vue';
    import SelectionsItem from './SelectionsItem.vue';
    import { useConfigStore } from '@/stores/ConfigStore'

    const ConfigStore = useConfigStore()

    const selections = computed(() => ConfigStore.selections)
    
</script>