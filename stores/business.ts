import { defineStore } from 'pinia'

export const useBusinessStore = defineStore('business', () => {
    const selectedBusiness = ref({
        id: 0,
        name: '',
        owner_id: 0,
        address: '',
        type: ''
    });
    const allBusinessess = ref([]);

    // Get All Bussinesses
    // Set Current Business

  
    return { 
        selectedBusiness,
        allBusinessess
    }
  })