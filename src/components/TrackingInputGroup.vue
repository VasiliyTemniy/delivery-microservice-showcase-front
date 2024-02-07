<script setup lang="ts">
import { ref, watch } from 'vue';
import { useOrderTrackingStore } from '@/stores/orderTracking';


const orderTrackingStore = useOrderTrackingStore();

const orderId = ref('');
const carrierId = ref('');
const pointNumber = ref('');

const pageSize = ref(5);

const onGetClick = () => {
  if (!carrierId.value) {
    if (!pointNumber.value) {
      if (!orderId.value) {
        console.log('no order id value; add some popup');
        return;
      }
      orderTrackingStore.dispatchGetPageOrderTrackingsByOrderId(orderId.value);
      return;
    }
    // Some find by order id and point number should be here; not yet
    orderTrackingStore.dispatchGetPageOrderTrackingsByOrderId(orderId.value);
    return;
  }
  orderTrackingStore.dispatchGetPageOrderTrackingsByCarrierId(carrierId.value);
};

const changePageSize = () => {
  if (!pageSize.value) return;
  orderTrackingStore.setSize(Number(pageSize.value));
};

watch(pageSize, changePageSize);

</script>


<template>
  <div class="p-4 flex flex-col gap-4">
    <div class="input-wrapper relative py-1">
      <label for="orderId" class="absolute -top-4 text-sm">Введите номер заказа *</label>
      <input class="input h-8 rounded-md border border-input bg-background text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition ease-in-out duration-300 delay-150 disabled:cursor-not-allowed disabled:opacity-50 pl-2 w-96 bg-white bg-opacity-60 backdrop-blur-lg shadow-lg"
          id="orderId"
          name="orderId"
          placeholder="Номер заказа..."
          type="text"
          v-model="orderId"
      >
    </div>
    <div class="input-wrapper relative py-1">
      <label for="pointNumber" class="absolute -top-4 text-sm">Введите номер точки отслеживания **</label>
      <input class="input h-8 rounded-md border border-input bg-background text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition ease-in-out duration-300 delay-150 disabled:cursor-not-allowed disabled:opacity-50 pl-2 w-96 bg-white bg-opacity-60 backdrop-blur-lg shadow-lg"
          id="pointNumber"
          name="pointNumber"
          placeholder="Номер точки..."
          type="text"
          v-model="pointNumber"
      >
    </div>
    <div class="input-wrapper relative py-1">
      <label for="carrierId" class="absolute -top-4 text-sm">Введите id доставщика *</label>
      <input class="input h-8 rounded-md border border-input bg-background text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition ease-in-out duration-300 delay-150 disabled:cursor-not-allowed disabled:opacity-50 pl-2 w-96 bg-white bg-opacity-60 backdrop-blur-lg shadow-lg"
          id="carrierId"
          name="carrierId"
          placeholder="id доставщика..."
          type="text"
          v-model="carrierId"
     >
    </div>
    <div class="text-sm max-w-md">
      * - Одно из полей обязательно
      <br>
      ** - При указании номера заказа и номера точки отслеживания, будет получен единственный результат (not yet implemented)
      <br>
      <br>
      (Временно) При указании всех полей, приоритет отдаётся номеру заказа с точкой отслеживания, затем всем orderTracking по номеру заказа, затем всем orderTracking по номеру доставщика
    </div>
    <button class="self-start bg-blue-400 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition-colors duration-200"
      @click="onGetClick"
    >
      Найти
    </button>
    <div class="input-wrapper relative top-2 py-1">
      <label for="pointNumber" class="absolute -top-4 text-sm">Введите количество запрошенных точек</label>
      <input class="input h-8 rounded-md border border-input bg-background text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition ease-in-out duration-300 delay-150 disabled:cursor-not-allowed disabled:opacity-50 pl-2 w-96 bg-white bg-opacity-60 backdrop-blur-lg shadow-lg"
          id="pointNumber"
          name="pointNumber"
          placeholder="Количество точек..."
          type="text"
          v-model="pageSize"
      >
    </div>
  </div>
</template>