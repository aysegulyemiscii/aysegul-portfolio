<script setup>
defineProps({
  title: String,
  desc: String,
})
</script>

<template>
  <div class="rounded-2xl border border-slate-200 p-5">
    <p class="text-sm font-semibold">{{ title }}</p>
    <p class="mt-2 text-sm text-slate-600">{{ desc }}</p>
  </div>
</template>
