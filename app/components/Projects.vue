<script setup lang="ts">
type Lang = "tr" | "en"

const props = defineProps<{ lang?: Lang }>()
const isEn = props.lang === "en"

type Project = {
  title: string
  desc_tr: string
  desc_en: string
  tags: string[]
  repoUrl?: string
  liveUrl?: string
  wip?: boolean
  next_tr?: string
  next_en?: string
}

const projects: Project[] = [
  {
    title: "League Simulator (Laravel)",
    desc_tr: "Takım puanları ve maç sonuçları üzerinden lig simülasyonu yapan Laravel uygulaması.",
    desc_en: "A Laravel app that simulates a league based on match results and points.",
    tags: ["Laravel", "PHP"],
    repoUrl: "https://github.com/aysegulyemiscii/league-simulator",
    // liveUrl: "https://..."
  },
  {
    title: "Portfolio (Nuxt 3 + Tailwind)",
    desc_tr: "Nuxt 3 ve Tailwind ile geliştirilmiş tek sayfa portföy sitesi.",
    desc_en: "Single-page portfolio website built with Nuxt 3 and Tailwind.",
    tags: ["Nuxt", "Tailwind"],
    repoUrl: "https://github.com/aysegulyemiscii/aysegul-portfolio",
    liveUrl: "https://aysegul-portfolio.vercel.app/" 
  {
    title: "Go CLI Notes (WIP)",
    desc_tr: "CLI üzerinden not ekleme/listeleme/tamamlama. JSON dosya kullanımı.",
    desc_en: "CLI app to add/list/complete notes. JSON file storage.",
    tags: ["Go", "CLI"],
    wip: true,
    next_tr: "Sırada: testler ve paketleme.",
    next_en: "Next: tests and packaging.",
    // repoUrl: "https://github.com/..."
  },
  {
    title: "Go Todo API (WIP)",
    desc_tr: "CRUD endpoint’leri içeren REST API.",
    desc_en: "REST API with CRUD endpoints.",
    tags: ["Go", "REST"],
    wip: true,
    next_tr: "Sırada: veritabanı, auth ve Docker.",
    next_en: "Next: database, auth, and Docker.",
    // repoUrl: "https://github.com/..."
  },
]

const t = {
  title: isEn ? "Projects" : "Projeler",
  subtitle: isEn
    ? "Selected work. New Go projects will be added regularly."
    : "Seçili çalışmalarım. Yeni Go projeleri düzenli olarak eklenecek.",
  repo: "Repo",
  live: isEn ? "Live" : "Canlı",
  comingSoon: isEn ? "Coming soon" : "Yakında",
  next: isEn ? "Next:" : "Sırada:",
}

function hasAnyLink(p: Project) {
  return Boolean(p.repoUrl || p.liveUrl)
}
</script>

<template>
  <section id="projects">
    <h2 class="text-xl font-semibold">{{ t.title }}</h2>
    <p class="mt-2 text-slate-600">{{ t.subtitle }}</p>

    <div class="mt-6 grid gap-4 lg:grid-cols-2">
      <div
        v-for="p in projects"
        :key="p.title"
        class="rounded-2xl border border-slate-200 p-5"
        :class="p.wip ? 'bg-white' : 'bg-white hover:bg-slate-50 transition'"
      >
        <div class="flex items-start justify-between gap-3">
          <h3 class="font-semibold">{{ p.title }}</h3>

          <span
            v-if="!p.wip && hasAnyLink(p)"
            class="text-slate-300"
            aria-hidden="true"
          >
            ↗
          </span>
        </div>

        <p class="mt-2 text-sm text-slate-600">
          {{ isEn ? p.desc_en : p.desc_tr }}
        </p>

        <p
          v-if="p.wip && (p.next_tr || p.next_en)"
          class="mt-2 text-sm text-slate-500"
        >
          <span class="font-medium text-slate-600">{{ t.next }}</span>
          {{ isEn ? p.next_en : p.next_tr }}
        </p>

        <div class="mt-4 flex flex-wrap gap-2">
          <span
            v-for="tag in p.tags"
            :key="tag"
            class="rounded-full bg-slate-100 px-3 py-1 text-xs"
          >
            {{ tag }}
          </span>

          <span
            v-if="p.wip"
            class="rounded-full bg-slate-200 px-3 py-1 text-xs text-slate-600"
          >
            {{ t.comingSoon }}
          </span>
        </div>

        <!-- Links row -->
        <div v-if="hasAnyLink(p)" class="mt-4 flex flex-wrap gap-3 text-sm">
          <a
            v-if="p.repoUrl"
            :href="p.repoUrl"
            target="_blank"
            rel="noreferrer"
            class="underline decoration-slate-300 underline-offset-4 hover:text-slate-900"
          >
            {{ t.repo }}
          </a>

          <a
            v-if="p.liveUrl"
            :href="p.liveUrl"
            target="_blank"
            rel="noreferrer"
            class="underline decoration-slate-300 underline-offset-4 hover:text-slate-900"
          >
            {{ t.live }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
