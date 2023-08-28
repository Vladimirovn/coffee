<template>
    <div>
        <div class="d-flex justify-space-between mb-4">
            <h2>Choose your configuration</h2>
            <div class="d-flex">
                <p class="me-2">Device size: {{ select.type }}</p>
                <p>Drinks number: {{ select.drincs }}</p>
            </div>
        </div>
        <div class="mb-3">
            <h3 class="mb-2">device size</h3>
            <div>
                <v-btn class="me-2" @click="getTypeSt">Standart</v-btn>
                <v-btn @click="getTypeLg">Large</v-btn>
            </div>
        </div>
        <div class="mb-1">
            <h3 class="mb-2">number of drinks</h3>
            <div>
                <v-btn class="me-2" @click="select.drincs = 'six'">six</v-btn>
                <v-btn class="me-2" @click="select.drincs = 'eight'">eight</v-btn>
                <v-btn @click="select.drincs = 'twelve'">twelve</v-btn>
            </div>
        </div>
        <div class="images_block d-flex justify-center mb-1">
            <img v-if="show === 1" class="mini" src="@/assets/img/min.png" alt="coffemachine">
            <img v-if="show === 2" class="maxi" src="@/assets/img/max.png" alt="coffemachine">
        </div>
        <div class="d-flex justify-center">
            <v-btn @click="showResult">Save Selections</v-btn>
        </div>
    </div>
</template>

<script setup>
    import { useConfigStore } from '@/stores/ConfigStore'
    import { ref } from 'vue';

    const ConfigStore = useConfigStore()

    const show = ref(0)
    const select = ref({
        type: '',
        drincs: ''
    })

    function getTypeSt() {
        show.value = 1
        select.value.type = 'standart'
    }
    function getTypeLg() {
        show.value = 2
        select.value.type = 'large'
    }

    const showResult = () => {
        ConfigStore.addSelect(select.value)
    }
</script>

<style lang="scss" scoped>
    img {
        height: 400px;
    }
    .images_block {
        height: 400px;
    }
</style>