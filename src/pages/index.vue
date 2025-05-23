<template>
  <pre>{{ data }}</pre>
</template>

<script setup lang="ts">
  const { data } = await useFetch("http://localhost:3000/api/ui");
</script>
