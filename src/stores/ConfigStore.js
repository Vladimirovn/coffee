import { defineStore, setActivePinia } from 'pinia'
import { ref } from 'vue'

export const useConfigStore = defineStore('configStore', () => {
    const selections = ref([])

    const addSelect = (data) => {
        data['id'] = Math.floor(Math.random() * 100)
        selections.value.push(data)
        console.log(selections.value);
    }

    return {selections, addSelect}
})