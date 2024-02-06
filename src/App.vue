<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue';
</script>

<template>
  <div class="app-wrapper bg-gradient-to-b from-green-100 to-white h-screen">
    <AppHeader />

    <RouterView />
  </div>
</template>