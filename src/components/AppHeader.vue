<script setup lang="ts">
import SearchIcon from "./icons/IconSearch.vue";
import LogoIcon from "./icons/IconLogo.vue";
import { RouterLink } from 'vue-router';
</script>


<template>
  <header class="flex flex-row justify-between h-16 py-4 px-6 border-b">
    <nav class="flex flex-row hidden gap-6 text-lg font-medium md:flex md:items-center md:gap-5 lg:gap-6">
      <RouterLink to="/">
        <LogoIcon />
      </RouterLink>
      <RouterLink to="/dashboard" class="text-gray-500 dark:text-gray-300 transition ease-in-out delay-150 hover:text-gray-800">
        Дашборд
      </RouterLink>
      <RouterLink to="/tracking" class="text-gray-500 dark:text-gray-300 transition ease-in-out delay-150 hover:text-gray-800">
        Отслеживание
      </RouterLink>
      <RouterLink to="/delivery" class="text-gray-500 dark:text-gray-300 transition ease-in-out delay-150 hover:text-gray-800">
        Доставка
      </RouterLink>
    </nav>
    <div class="relative">
      <SearchIcon class="absolute left-1 top-1/2 transform -translate-y-1/2 z-10" />
      <input
        type="search"
        class="flex h-8 rounded-md border border-input bg-background p-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition ease-in-out delay-150 disabled:cursor-not-allowed disabled:opacity-50 pl-8 md:w-60 lg:w-72 bg-white bg-opacity-60 backdrop-blur-lg shadow-lg"
        placeholder="Поиск по номеру заказа..."
      />
    </div>
  </header>
</template>