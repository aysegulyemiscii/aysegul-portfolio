<script setup lang="ts">
const props = defineProps<{ lang?: "tr" | "en" }>()
const isEn = props.lang === "en"
</script>

<template>
  <section id="contact" class="space-y-3">
    <h2 class="text-xl font-semibold">{{ isEn ? "Contact" : "İletişim" }}</h2>
    <p class="text-slate-600">
      {{ isEn ? "Feel free to reach out:" : "Görüşmek istersen bana buradan ulaşabilirsin:" }}
    </p>

    <ul class="space-y-2 text-sm">
      <li>
        <a class="underline decoration-slate-300 underline-offset-4 hover:text-slate-900"
           href="mailto:aysegullyemisci@gmail.com">
          aysegullyemisci@gmail.com
        </a>
      </li>
      <li>
        <a class="underline decoration-slate-300 underline-offset-4 hover:text-slate-900"
           href="https://www.linkedin.com/in/aysegul-yemisci/"
           target="_blank"
           rel="noreferrer">
          LinkedIn
        </a>
      </li>
      <li>
        <a class="underline decoration-slate-300 underline-offset-4 hover:text-slate-900"
           href="https://github.com/aysegulyemiscii"
           target="_blank"
           rel="noreferrer">
          GitHub
        </a>
      </li>
    </ul>
  </section>
</template>
