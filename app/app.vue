<script setup lang="ts">
useHead({
  title: "Ayşe Gül YEMİŞCİ | Backend Odaklı Full Stack Geliştirici",
  meta: [
    {
      name: "description",
      content:
        "PHP/Laravel ile kurumsal projelerde full stack geliştirme deneyimi. API entegrasyonları, performans/SEO iyileştirmeleri ve canlıya çıkış süreçleri. Go öğreniyor, sırada .NET.",
    },
    { name: "viewport", content: "width=device-width, initial-scale=1" },

    // Open Graph
    { property: "og:type", content: "website" },
    { property: "og:title", content: "Ayşe Gül YEMİŞCİ | Portfolio" },
    {
      property: "og:description",
      content:
        "PHP/Laravel • Vue.js • MySQL • Go (learning) • .NET (next)",
    },
    { property: "og:locale", content: "tr_TR" },

    // Twitter
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: "Ayşe Gül YEMİŞCİ | Portfolio" },
    {
      name: "twitter:description",
      content:
        "PHP/Laravel • Vue.js • MySQL • Go (learning) • .NET (next)",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "SITE_URL_BURAYA",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Ayşe Gül YEMİŞCİ",
        jobTitle: "Backend-focused Full Stack Developer",
        url: "SITE_URL_BURAYA",
        sameAs: [
          "https://www.linkedin.com/in/aysegul-yemisci/",
          "https://github.com/aysegulyemiscii",
        ],
      }),
    },
  ],
})
</script>

<template>
  <NuxtPage />
</template>
