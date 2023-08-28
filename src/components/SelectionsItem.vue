<template>
    <v-card
    class="mx-auto mb-2"
    max-width="500"
    variant="outlined"
  >
    <div class="px-2 pt-2">
        <h3 class="mb-2">Type of device: {{ selection.type }}</h3>
        <h4 class="text-caption">Drincs number: {{ selection.drincs }}</h4>
    </div>

    <v-card-actions>
      <v-btn size="small" variant="outlined" @click="increment">
        +
      </v-btn>
      <v-btn class="me-2" size="small" variant="outlined" @click="decrement">
        -
      </v-btn>
      <h4>Quantity: {{ count }}</h4>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { ref } from 'vue';

    const props = defineProps({
        selection: {
            type: Object,
            default: ()=>{}
        }
    })

    const count = ref(0)

    function increment() {
        count.value++
    }
    function decrement() {
        count.value--
    }
</script>