<template>
  <div class="min-h-screen bg-white text-slate-900">
    <div class="mx-auto max-w-5xl px-5 py-10">
      <SiteNav lang="en" />

      <main class="mt-10 space-y-12">
        <Hero lang="en" />

        <div class="grid gap-4 sm:grid-cols-3">
          <MiniCard title="Experience" desc="8+ years • Full Stack • Team leadership (3+)" />
          <MiniCard title="Focus" desc="REST APIs • integrations • maintainable code" />
          <MiniCard title="Current" desc="Go fundamentals • next: .NET Web API" />
        </div>

        <Projects lang="en" />
        <ExperienceMini lang="en" />
        <Contact lang="en" />
      </main>

      <footer class="mt-12 text-sm text-slate-500 flex items-center gap-2">
        <span class="flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-[10px] text-white">
          AY
        </span>
        © {{ new Date().getFullYear() }} Ayşe Gül YEMİŞCİ
      </footer>
    </div>
  </div>
</template>
