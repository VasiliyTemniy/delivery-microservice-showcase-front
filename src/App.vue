<script setup lang="ts">
import { RouterView } from 'vue-router';
import AppHeader from './components/AppHeader.vue';
</script>

<template>
  <div class="app-wrapper flex justify-center bg-cyan-50">
    <div class="grow bg-gradient-to-b from-green-200 to-white h-screen max-w-[1280px] shadow border">
      <AppHeader />

      <RouterView />
    </div>
  </div>
</template>