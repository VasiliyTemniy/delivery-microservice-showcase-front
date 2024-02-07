<script setup lang="ts">
import { useOrderTrackingStore } from '@/stores/orderTracking';


const orderTrackingStore = useOrderTrackingStore();

const populateBackend = () => {
  orderTrackingStore.dispatchPopulateBackendTestData();
};

const deleteTestData = () => {
  orderTrackingStore.dispatchRemoveAllBackendTestData();
};

</script>

<template>
  <div class="flex gap-6 p-4">
    <button @click="populateBackend" class="bg-blue-400 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition-colors duration-200">
      Заполнить тестовые данные
    </button>
    <button @click="deleteTestData" class="bg-red-400 hover:bg-red-600 text-white px-6 py-2 rounded-md transition-colors duration-200">
      Удалить все данные
    </button>
  </div>
</template>