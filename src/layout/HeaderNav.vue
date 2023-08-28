<template>
    <header class="header d-flex justify-space-between px-2">
        <h1>CoffeeMashine configuration tools</h1>
        <div class="ma-2">
            <v-btn 
                size="small" 
                class="me-2"
                @click="router.push({name: 'one'})"
                >
                configure
            </v-btn>
            <v-btn 
                size="small"
                @click="router.push({name: 'two'})"
                >
                Selections
            </v-btn>
        </div>
    </header>
</template>

<script setup>
    import { useRouter } from 'vue-router'

    const router = useRouter()
</script>

<style lang="scss" scoped>
    .header{
        height: 50px;
        background: #fff;
        border-bottom: 1px solid;
    }
</style>