<template>
  <div>
    <div class="bg-slate-100 fixed top-0 left-0 -z-10 w-full h-screen"></div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
  const route = useRoute();
  useSeoMeta({
    title: `Karamlaza :: ${String(route.name)}`,
    description: 'Karamlaza provides you with timeless and eternal, self-announcing touch of opulence, exclusive and custom-made artifacts to beautify the interior of your edifice all of which can be delivered to your house just from one simple order',
    ogTitle: `Karamlaza :: ${String(route.name)}`,
    ogDescription: 'Karamlaza provides you with timeless and eternal, self-announcing touch of opulence, exclusive and custom-made artifacts to beautify the interior of your edifice all of which can be delivered to your house just from one simple order',
    ogImage: '/images/carraviggio_curved_chair.jpg',
    ogUrl: `https://karamlaza.vercel.app${String(route?.path)}` || "https://karamlazara.vercel.app",
    twitterTitle: `Karamlaza :: ${String(route.name)}`,
    twitterDescription: 'Karamlaza provides you with timeless and eternal, self-announcing touch of opulence, exclusive and custom-made artifacts to beautify the interior of your edifice all of which can be delivered to your house just from one simple order',
    twitterImage: '/images/carraviggio_curved_chair.jpg',
    twitterCard: 'summary'
  })

  useHead({
    htmlAttrs: {
      lang: 'en'
    },
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon.png'
      }
    ]
  })
</script>