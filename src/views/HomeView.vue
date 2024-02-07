<script setup lang="ts">
</script>

<template>
  <main>
    <h1 class="p-1 text-lg font-bold">
      Имитатор фронтенда для delivery-microservice
    </h1>
    <p class="p-1 text-lg">
      Описание страниц:
    </p>
    <ul class="p-1 text-lg">
      <li>
        Контроль - страница для создания и удаления тестовых данных на backend
      </li>
      <li>
        Отслеживание - страница для просмотра объектов orderTracking, которые представляют собой данные о перемещениях заказа
      </li>
      <li>
        Доставка - страница для запроса api на расчёт метаданных доставки - стоимости и примерного времени доставки из пункта в пункт
      </li>
    </ul>
  </main>
</template>