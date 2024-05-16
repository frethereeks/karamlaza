<template>
  <main class="flex-1 flex flex-col">
    <BreadCrumb :extra="['/shop', 'Product', data.title]" :key="8250698" />
    •
    <section class="py-10 px-4">
      <div class="container mx-auto py-10 flex flex-col sm:flex-row">
        <div class="flex-1 flex flex-col gap-4 lg:pr-8">
          <div class="min-h-56 h-72 md:h-full w-full relative rounded-md overflow-hidden bg-primary/20 py-20 group">
            <img :src="`/images/${data.image}`" alt="{{ data.title }}"
              class="absolute left-0 top-0 w-full h-full object-cover object-bottom">
            <div class="hidden gap-2 group-hover:flex relative">
              <button @click="console.log('Liked')"
                class="border border-primary border-solid bg-backdrop hover:bg-primary text-primary hover:text-white flex justify-center items-center h-7 w-7 md:w-8 md:h-8 rounded-full cursor-pointer">
                <Icon name="ion:share-social" />
              </button>
              <button @click="console.log('Liked')"
                class="border border-primary border-solid bg-backdrop hover:bg-primary text-primary hover:text-white flex justify-center items-center h-7 w-7 md:w-8 md:h-8 rounded-full cursor-pointer">
                <Icon name="ion:heart-outline" />
              </button>
            </div>
          </div>
        </div>
        <div class="flex-1 flex flex-col gap-1 py-10">
          <h2 class="text-2xl md:text-3xl text-secondary font-semibold font-serif">{{ data.title }}</h2>
          <p class="text-primary text-lg md:text-xl font-bold">&#8358;{{ data.price.toLocaleString() }}</p>
          <div class="flex items-center gap-4">
            <div class="flex gap-1 items-center">
              <span v-for="_ in Array(data.rating)" class="">
                <Icon name="ion:star" class="text-orange-500 text-lg" />
              </span>
              <p class="ml-4 mt-1 text-sm md:text-base text-dark/80">({{ data.reviews }} reviews)</p>
            </div>
          </div>
          <article
            v-html="`The section element represents a generic section of a document or application. A section, in this context, is a thematic grouping of content as a child of the section element ${data.description}`"
            style="line-height: 1.7;"
            class="article flex flex-col gap-4 text-dark/80 text-base lg:text-lg text-justify py-4"></article>
          <div class="divide-y divide-slate-300 w-max pb-4">
            <p class="text-base py-1 md:text-lg text-dark/80 flex"><span class="w-28 flex">Weight:</span> 14.09kg</p>
            <p class="text-base py-1 md:text-lg text-dark/80 flex"><span class="w-28 flex">Dimension:</span> 14.09kg</p>
            <p class="text-base py-1 md:text-lg text-dark/80 flex"><span class="w-28 flex">Made in:</span> 14.09kg</p>
          </div>
          <div class="flex gap-2 md:gap-5">
            <div class="flex border-2 border-dark/20 rounded-md w-max overflow-hidden bg-white">
              <button
                class="text-dark/80 cursor-pointer flex justify-center items-center text-base md:text-lg w-8 md:w-10 h-full bg-white hover:bg-dark/20">
                <Icon name="ion:minus" />
              </button>
              <div class="w-8 md:w-10 h-full overflow-hidden">
                <input type="number"
                  class="text-dark/80 cursor-pointer flex justify-center items-center text-base md:text-lg w-16 md:w-20 h-full p-2 pl-3 bg-white select-none marker:hidden"
                  placeholder="1" min="1" value="1" />
              </div>
              <button
                class="text-dark/80 cursor-pointer flex justify-center items-center text-base md:text-lg w-8 md:w-10 h-full bg-white hover:bg-dark/20">
                <Icon name="ion:plus" />
              </button>
            </div>
            <button
              class="flex-1 py-1 px-6 text-white cursor-pointer rounded-md text-base md:text-lg bg-dark hover:bg-dark/95">Add
              to
              Cart</button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
  const router = useRouter(), route = useRoute(), productItem = useProductState(), relatedCategory = ref<string>('Popular');
  let data = reactive<ProductProps>({ id: "", title: "", category: "", image: "", description: "", featured: false, inventory: 0, price: 0, rating: 0, reviews: 0 }), relatedProducts = reactive<ProductProps[]>([])

  watchEffect(() => {
    route.params
    const targetProduct = productItem.value.find(el => el.id === route.params.id)
    if (targetProduct) {
      data = { ...targetProduct }
    }
    else router.push("/shop")
  })

  watchEffect(() => {
    relatedCategory.value
    relatedProducts = productItem.value.filter(el => el.id !== data.id && el.category === data.category)
  })
  useSeoMeta({
    title: `${data.title}` || 'Karamlaza Product',
    description: data.description,
    ogTitle: `${data.title}` || 'Karamlaza Product',
    ogDescription: data.description,
    ogImage: `/images/${data.image}` || '/images/willow_patio_chair.jpg',
    ogUrl: `https://karamlaza.vercel.app/shop/${route.params.id}`,
    twitterTitle: `${data.title}` || 'Karamlaza Product',
    twitterDescription: data.description,
    twitterImage: `/images/${data.image}` || '/images/willow_patio_chair.jpg',
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