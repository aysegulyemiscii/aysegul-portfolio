<script setup lang="ts">
const props = defineProps<{ lang?: "tr" | "en" }>()
const isEn = props.lang === "en"

const labels = {
  about: isEn ? "About" : "Hakkımda",
  experience: isEn ? "Experience" : "Deneyim",
  projects: isEn ? "Projects" : "Projeler",
  contact: isEn ? "Contact" : "İletişim",
  switch: isEn ? "TR" : "EN",
  switchHref: isEn ? "/" : "/en",
}
</script>

<template>
  <header class="flex items-center justify-between">
    <a
      href="#top"
      class="flex h-8 w-8 items-center justify-center rounded-full
             bg-slate-900 text-xs font-semibold tracking-wide text-white
             hover:bg-slate-800 transition"
    >
      AY
    </a>

    <div class="flex items-center gap-4">
      <nav class="flex items-center gap-4 text-sm text-slate-600">
        <a class="hover:text-slate-900" href="#about">{{ labels.about }}</a>
        <a class="hover:text-slate-900" href="#experience">{{ labels.experience }}</a>
        <a class="hover:text-slate-900" href="#projects">{{ labels.projects }}</a>
        <a class="hover:text-slate-900" href="#contact">{{ labels.contact }}</a>
      </nav>

      <a
        class="rounded-xl border border-slate-200 px-3 py-1 text-xs text-slate-600 hover:bg-slate-50"
        :href="labels.switchHref"
      >
        {{ labels.switch }}
      </a>
    </div>
  </header>
</template>
