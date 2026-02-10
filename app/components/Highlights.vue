<script setup>
const items = [
  { title: "Currently", desc: "Go fundamentals + mini projects" },
  { title: "Next", desc: ".NET (ASP.NET Core Web API)" },
  { title: "Focus", desc: "REST APIs, clean code, maintainable backends" },
  { title: "Open to", desc: "Remote / hybrid opportunities" },
]
</script>

<template>
  <section class="space-y-4">
    <h2 class="text-lg font-semibold">Quick Summary</h2>

    <div class="space-y-3">
      <div v-for="i in items" :key="i.title" class="rounded-2xl bg-slate-50 p-4">
        <p class="text-sm font-semibold text-slate-900">{{ i.title }}</p>
        <p class="mt-1 text-sm text-slate-600">{{ i.desc }}</p>
      </div>
    </div>

    <div class="pt-2">
      <a
        href="mailto:aysegullyemisci@gmail.com"
        class="inline-flex w-full items-center justify-center rounded-2xl bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-800"
      >
        Let’s talk
      </a>
    </div>
  </section>
</template>
