<template>
  <div>
    <div class="bg-slate-100 fixed top-0 left-0 -z-10 w-full h-screen"></div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <figure class="fixed z-50 left-4 bottom-4 w-full max-w-[22rem] rounded-lg bg-backdrop shadow-md shadow-secondary/10" :class="consentShow ? 'flex' : 'hidden'">
      <div class="relative w-full h-full flex flex-col gap-4 items-center p-4">
        <div class="w-full flex gap-2">
          <p class="text-dark/80 text-sm text-center flex-1 leading-snug pr-4 pt-2">Our site uses cookies to improve your experience, analyze
            site usage, and assist in our marketing efforts. <NuxtLink class="underline underline-offset-auto">Our Privacy Policy</NuxtLink>
          </p>
          <button @click="consentShow = !consentShow" class="text-dark p-1.5 rounded-md font-thin absolute top-2 right-2">
            <!-- <Icon name="ion:close-outline" /> --> &#10007;
          </button>
        </div>
        <NuxtLink class="text-dark text-sm flex-1 leading-snug underline">Our Privacy Policy</NuxtLink>
        <div class="flex gap-2">
          <button class="flex-1 bg-secondary text-white border border-secondary w-full px-6 md:px-10 py-1 rounded-md font-medium">Accept</button>
          <button class="flex-1 text-secondary border border-secondary w-full px-6 md:px-10 py-1 rounded-md font-medium">Decline</button>
        </div>
      </div>
    </figure>
  </div>
</template>

<script lang="ts" setup>
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import "swiper/css/scrollbar";
  // import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
  // import { Swiper, SwiperSlide } from "swiper/vue";

  const consentShow = ref(true)
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