<template>
  <main class="flex-1 flex flex-col">
    <section class="py-10 sm:py-20 px-4 relative bg-grey">
      <div class="container mx-auto flex flex-col lg:flex-row-reverse gap-8 lg:gap-12">
        <div class="flex-1 min-h-40">
          <img src="@/assets/images/carraviggio_curved_chair.jpg" alt="essence_accent_chair"
            class="object-cover min-h-40 w-full rounded-sm">
        </div>
        <div class="flex-1 flex min-h-40">
          <div class="flex-1 flex flex-col justify-center gap-4 md:max-w-2xl">
            <h2 class="text-2xl md:text-3xl xl:text-4xl text-secondary font-semibold font-serif">Furnish your Dreams
              Timeless Living
              for Inspired Living</h2>
            <p style="line-height: 2"
              class="text-sm md:text-base lg:text-lg text-dark/80 text-justify font-normal leading-loose font-sans">At
              Karamlaza,
              we provide you with timeless and eternal, self-announcing touch of opulence, exclusive and custom-made
              artifacts to beautify the interior of your edifice all of which can be delivered to your house just from
              one simple order</p>
            <MainButton to="/shop">Shop Now</MainButton>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-backrop py-20 sm:py-32 px-4">
      <div class="container mx-auto flex flex-col gap-6 lg:gap-10">
        <div class="flex-1 flex flex-col justify-center gap-2 md:max-w-xl mx-auto text-center">
          <h2 class="text-2xl md:text-3xl text-secondary font-semibold font-serif">Our Top Categories</h2>
          <p style="line-height: 2" class="text-sm md:text-base text-dark/80 font-normal leading-loose font-sans">
            Karamlaza
            provides some top quality, top-drawer state-of-the-art products which we hope will tug at your interest.
            Check them out</p>
        </div>
        <!-- <div class="grid grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4"> -->
        <div class="grid grid-cols-2 md:grid-cols-3 auto-rows-[200px] md:auto-rows-[300px] gap-2 md:gap-4">
          <div
            class="relative before:absolute before:w-full before:h-full before:left-0 before:top-0 before:bg-gradient-to-t before:from-slate-600 before:via-transparent to-transparent flex-1 min-h-40 overflow-hidden rounded-sm md:row-span-2">
            <img src="@/assets/images/nova_naving_sidetables.jpg" alt="essence_accent_chair"
              class="object-cover object-left h-full w-full relative">
          </div>
          <div
            class="relative before:absolute before:w-full before:h-full before:left-0 before:top-0 before:bg-gradient-to-t before:from-slate-600 before:via-transparent to-transparent flex-1 min-h-40 overflow-hidden rounded-sm md:col-span-2">
            <img src="@/assets/images/large_lagoon_lounge.jpg" alt="essence_accent_chair"
              class="object-cover object-center h-full w-full relative">
          </div>
          <div
            class="relative before:absolute before:w-full before:h-full before:left-0 before:top-0 before:bg-gradient-to-t before:from-slate-600 before:via-transparent to-transparent flex-1 min-h-40 overflow-hidden rounded-sm">
            <img src="@/assets/images/lagoon_patio_chair.jpg" alt="essence_accent_chair"
              class="object-cover object-center h-full w-full relative">
          </div>
          <div
            class="relative before:absolute before:w-full before:h-full before:left-0 before:top-0 before:bg-gradient-to-t before:from-slate-600 before:via-transparent to-transparent flex-1 min-h-40 overflow-hidden rounded-sm">
            <img src="@/assets/images/white_accent_chair.jpg" alt="essence_accent_chair"
              class="object-cover object-center h-full w-full relative">
          </div>
        </div>
      </div>
      <!-- <aside class="bg-light-grey flex flex-col relative hover:-translate-y-3 overflow-hidden">
      </aside> -->
    </section>
    <section class="bg-primary/30 py-20 sm:py-32 px-4">
      <div class="container mx-auto relative flex flex-col sm:flex-row gap-4 lg:gap-8">
        <div class="flex-1 relative rounded-sm overflow-hidden min-h-80 md:min-h-96">
          <img src="@/assets/images/carravio_night_chair.jpg" alt="Carravio Night Chair"
            class="absolute top-0 left-0 w-full h-full object-cover sm:object-fill md:object-cover object-bottom lg:object-bottom">
        </div>
        <div class="flex-1 flex flex-col gap-3 py-10">
          <p
            class="text-xs lg:text-sm uppercase relative pl-8 before:absolute before:w-6 before:h-[.8px] before:bg-secondary before:left-0 before:top-1/2 before:-translate-y-1/2">
            Our Approach</p>
          <h3 class="text-2xl md:text-3xl text-secondary font-semibold font-serif capitalize -translate-y-2">Interior
            Design</h3>
          <aside v-for="approach in approachList" :key="approach.id"
            class="pt-5 flex flex-col gap-2 text-justify text-dark">
            <h4 class="text-lg lg:text-xl font-medium">{{ approach.title }}</h4>
            <p class="text-sm lg:text-[.95rem] opacity-85">{{ approach.text }}</p>
          </aside>
        </div>
      </div>
    </section>
    <section class="bg-backrop py-20 sm:py-32 px-4">
      <div class="container mx-auto flex flex-col gap-6 lg:gap-10">
        <div class="flex-1 flex flex-col justify-center gap-2 md:max-w-xl mx-auto text-center">
          <h2 class="text-2xl md:text-3xl text-secondary font-semibold font-serif">Featured Products</h2>
          <p style="line-height: 2" class="text-sm md:text-base text-dark/80 font-normal leading-loose font-sans">
            Below are the list of the products we believe would awaken your inquisition and appeal to your aesthetic
            conception of quality</p>
        </div>
        <!-- <div class="grid grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4"> -->
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-auto gap-2 md:gap-4">
          <ProductCard v-for="product in products" :key="product.id" :id="product.id" :title="product.title"
            :image="product.image" :category="product.category" :price="product.price"
            :description="product.description" />
        </div>
      </div>
      <aside class="bg-light-grey flex flex-col relative hover:-translate-y-3 overflow-hidden">
      </aside>
    </section>
  </main>
</template>

<script lang="ts" setup>
  const products = useProductState().value.filter(el => el.featured === true).slice(0, 4)

  const slides = ref(Array.from({ length: 10 }, () => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    // Figure out contrast color for font
    const contrast = r * 0.299 + g * 0.587 + b * 0.114 > 186 ? 'black' : 'white'

    return { bg: `rgb(${r}, ${g}, ${b})`, color: contrast }
  }))

  const approachList = ref<ApproachProp[]>([
    {
      id: "8025620",
      title: "Individuality",
      text: "We create all furniture indivually according to your needs. We take into account all the wishes and features, which makes our design always looks unique."
    },
    {
      id: "8025621",
      title: "High quality",
      text: "We create all furniture indivually according to your needs. We take into account all the wishes and features, which makes our design always looks unique."
    },
    {
      id: "8025622",
      title: "Stylish design",
      text: "We create all furniture indivually according to your needs. We take into account all the wishes and features, which makes our design always looks unique."
    },
  ])
  definePageMeta({
    name: "Home"
  })
</script>

<style scoped>
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    height: 20vh;
    font-size: 4rem;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
  }

  .swiper-wrapper {
    min-width: 100vh;
    width: 100vh;
  }

  .swiper-cards {
    width: 240px;
    height: 240px;
  }

  .swiper-cards .swiper-slide {
    border-radius: 6px;
    border: 1px solid black;
  }
</style>