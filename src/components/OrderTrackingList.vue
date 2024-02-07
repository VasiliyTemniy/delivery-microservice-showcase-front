<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useOrderTrackingStore } from '@/stores/orderTracking';


const orderTrackingStore = useOrderTrackingStore();

const orderTrackings = storeToRefs(orderTrackingStore).orderTrackings;

const formatDate = (date?: Date): string => {
  if (!date) return '';

  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();

  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year} в ${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
};

</script>

<template>
  <div class="table-wrapper px-4 self-center w-full">
    <div class="rounded-lg border text-card-foreground bg-white bg-opacity-60 backdrop-blur-lg shadow-lg">
      <div class="relative w-full overflow-auto">
        <table class="w-full caption-bottom text-sm">
          <thead class="[&amp;_tr]:border-b">
            <tr class="h-12 border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
              <th class="px-4 text-left align-middle font-medium text-muted-foreground w-[100px]">
                Order ID
              </th>
              <th class="px-4 text-left align-middle font-medium text-muted-foreground">
                № точки
              </th>
              <th class="px-4 text-left align-middle font-medium text-muted-foreground">
                Статус
              </th>
              <th class="px-4 text-left align-middle font-medium text-muted-foreground">
                ID отправителя
              </th>
              <th class="px-4 text-left align-middle font-medium text-muted-foreground">
                ID получателя
              </th>
              <th class="px-4 text-left align-middle font-medium text-muted-foreground">
                Ожидается
              </th>
            </tr>
          </thead>
          <tbody class="[&amp;_tr:last-child]:border-0">
            <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
              v-for="orderTracking in orderTrackings"
              :key="orderTracking.orderId + String(orderTracking.pointNumber)"
            >
              <td class="p-4 align-middle font-medium">{{ orderTracking.orderId }}</td>
              <td class="p-4 align-middle">{{ orderTracking.pointNumber }}</td>
              <td class="p-4 align-middle">{{ orderTracking.status }}</td>
              <td class="p-4 align-middle">{{ orderTracking.fromFacilityId }}</td>
              <td class="p-4 align-middle">{{ orderTracking.destinationId }}</td>
              <td class="p-4 align-middle">{{ formatDate(orderTracking.estimatedDeliveryAt) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>