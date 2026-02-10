<template>
  <div class="min-h-screen bg-white text-slate-900">
    <div class="mx-auto max-w-5xl px-5 py-10">
      <SiteNav lang="tr" />

      <main class="mt-10 space-y-12">
        <Hero lang="tr" />

        <div class="grid gap-4 sm:grid-cols-3">
         
          <MiniCard
            title="Deneyim"
            desc="8+ yıl • Full Stack • 3+ kişilik ekip liderliği"
            />

            <MiniCard
            title="Odak"
            desc="REST API’ler • entegrasyonlar • sürdürülebilir kod"
            />

            <MiniCard
            title="Güncel"
            desc="Go temelleri • sırada: .NET Web API"
            />

        </div>

        <Projects lang="tr" />
        <ExperienceMini lang="tr" />
        <Contact lang="tr" />
        
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
