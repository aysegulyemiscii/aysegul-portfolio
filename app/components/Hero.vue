<script setup lang="ts">
const props = defineProps<{ lang?: "tr" | "en" }>()
const isEn = props.lang === "en"

const t = {
  role: isEn ? "Backend-focused Full Stack Developer" : "Backend Odaklı Full Stack Geliştirici",
  location: isEn ? "İzmir, Türkiye • Remote / Hybrid" : "İzmir, Türkiye • Uzaktan / Hibrit Çalışma",
  p1: isEn
    ? "I have full-stack experience in enterprise projects with PHP/Laravel. I worked on API integrations, performance & SEO improvements, and production releases. I prioritize clean, maintainable code."
    : "PHP/Laravel ile kurumsal projelerde full stack geliştirme deneyimine sahibim. API entegrasyonları, performans/SEO iyileştirmeleri ve canlıya çıkış süreçlerinde aktif rol aldım. Sürdürülebilir ve okunabilir kod yazmayı önceliklendiririm.",
  p2: isEn
    ? "Currently I’m focusing on Go, and next I plan to strengthen my backend stack with .NET (ASP.NET Core)."
    : "Backend tarafında Go ile kendimi geliştiriyor, ardından .NET (ASP.NET Core) ile backend yetkinliğimi güçlendirmeyi hedefliyorum.",
}
</script>

<template>
  <section id="top" class="space-y-4">
    <p class="text-sm font-medium text-indigo-600">
      {{ t.role }}
    </p>

    <h1 class="text-4xl font-bold tracking-tight sm:text-5xl">
      Ayşe Gül
      <span class="font-semibold tracking-wide text-slate-400">YEMİŞCİ</span>
    </h1>

    <p class="mt-2 text-sm text-slate-500">
      {{ t.location }}
    </p>

    <div id="about" class="max-w-3xl space-y-3 text-lg leading-relaxed text-slate-700">
      <p>{{ t.p1 }}</p>
      <p>{{ t.p2 }}</p>
    </div>

    <div class="flex flex-wrap gap-3 pt-2">
      <a
        class="rounded-xl border border-slate-300 px-4 py-2 text-sm hover:bg-slate-50"
        href="https://github.com/aysegulyemiscii"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>

      <a
        class="rounded-xl border border-slate-300 px-4 py-2 text-sm hover:bg-slate-50"
        href="https://www.linkedin.com/in/aysegul-yemisci/"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>

      <a
        class="rounded-xl bg-indigo-600 px-4 py-2 text-sm text-white hover:bg-indigo-500"
        href="mailto:aysegullyemisci@gmail.com"
      >
        Email
      </a>
    </div>

    <div class="flex flex-wrap gap-2 pt-4">
      <span class="rounded-full bg-slate-100 px-3 py-1 text-[11px]">PHP (Laravel)</span>
      <span class="rounded-full bg-slate-100 px-3 py-1 text-[11px]">Vue.js</span>
      <span class="rounded-full bg-slate-100 px-3 py-1 text-[11px]">JavaScript</span>
      <span class="rounded-full bg-slate-100 px-3 py-1 text-[11px]">HTML/CSS</span>
      <span class="rounded-full bg-slate-100 px-3 py-1 text-[11px]">MySQL</span>
      <span class="rounded-full bg-slate-100 px-3 py-1 text-[11px]">Git</span>
      <span class="rounded-full bg-slate-100 px-3 py-1 text-[11px]">Docker (learning)</span>
      <span class="rounded-full bg-slate-100 px-3 py-1 text-[11px]">Go (learning)</span>
      <span class="rounded-full bg-slate-100 px-3 py-1 text-[11px]">.NET (next)</span>
    </div>
  </section>
</template>
