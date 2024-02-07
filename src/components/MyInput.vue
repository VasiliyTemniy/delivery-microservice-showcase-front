<!-- <script setup lang="ts">
defineProps<{
  inputValue?: string,
  label?: string,
  placeholder?: string,
  type?: 'text' | 'file' | 'color' | 'checkbox'
}>();
</script>


<template>
  <label v-if="!!label" :for="label">{{ label }}</label>
  <input class="input"
      :id="label"
      :name="label"
      :placeholder="placeholder"
      :type="type"
      :value="inputValue"
      @input="$emit('update:inputValue', ($event.target as HTMLInputElement).value)"
  >
</template> -->