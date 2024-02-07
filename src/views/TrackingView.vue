<script setup lang="ts">
import OrderTrackingList from '@/components/OrderTrackingList.vue';
import TrackingInputGroup from '@/components/TrackingInputGroup.vue';
</script>

<template>
  <main class="flex flex-col gap-2">
    <h1 class="p-1 text-lg font-bold">Страница отслеживания заказов</h1>
    <TrackingInputGroup/>
    <OrderTrackingList/>
  </main>
</template>