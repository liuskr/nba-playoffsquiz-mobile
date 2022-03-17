<template>
  <div class="container">{{ text }}</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const text = ref('111')
</script>
<style lang="scss" scoped>
.container {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}
</style>
