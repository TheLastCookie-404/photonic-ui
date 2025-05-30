<template>
  <pre>{{ data }}</pre>
</template>

<script setup lang="ts">
  const { data } = await useFetch("https://photonic-ui.netlify.app/api/ui");
</script>
