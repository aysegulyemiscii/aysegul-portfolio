<script setup lang="ts">
const props = defineProps<{ lang?: "tr" | "en" }>()
const isEn = props.lang === "en"
</script>

<template>
  <section id="experience">
    <h2 class="text-xl font-semibold">{{ isEn ? "Experience" : "Deneyim" }}</h2>
    <p class="mt-2 text-slate-600">
      {{ isEn ? "Highlights from recent roles." : "Son deneyimlerimden öne çıkanlar." }}
    </p>

    <div class="mt-6 space-y-4">
      <div class="rounded-2xl border border-slate-200 p-5">
        <div class="flex flex-wrap items-baseline justify-between gap-2">
          <h3 class="font-semibold">Senior Full Stack Developer — ByNoGame</h3>
          <span class="text-xs text-slate-400">2021 – 2024</span>
        </div>

        <ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
          <li>
            {{ isEn ? "Built and maintained enterprise systems with PHP and Vue.js." : "PHP ve Vue.js ile kurumsal sistem geliştirme." }}
          </li>
          <li>
            {{ isEn ? "Worked on SEO improvements and 3rd-party integrations (e.g., Insider)." : "SEO ve 3. parti entegrasyonlar (Insider vb.)." }}
          </li>
          <li>
            {{ isEn ? "Provided technical leadership in a 3+ person team." : "3+ kişilik ekipte teknik liderlik." }}
          </li>
        </ul>
      </div>

      <div class="rounded-2xl border border-slate-200 p-5">
        <div class="flex flex-wrap items-baseline justify-between gap-2">
          <h3 class="font-semibold">{{ isEn ? "PHP Software Specialist — Newo" : "PHP Yazılım Uzmanı — Newo" }}</h3>
          <span class="text-xs text-slate-400">2020 – 2021</span>
        </div>

        <ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
          <li>
            {{ isEn ? "Developed dynamic web applications with Laravel." : "Laravel ile dinamik web uygulamaları." }}
          </li>
          <li>
            {{ isEn ? "Focused on code quality and maintainability." : "Kod kalitesi ve sürdürülebilirlik odaklı geliştirme." }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
