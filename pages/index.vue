<template>
  <main class="flex-1 flex flex-col">
    <section class="py-20 px-4 relative bg-grey">
      <div class="container mx-auto flex flex-col lg:flex-row-reverse gap-8 lg:gap-12">
        <div class="flex-1 min-h-40">
          <img src="@/assets/images/carraviggio_curved_chair.jpg" alt="essence_accent_chair" class="object-cover min-h-40 w-full">
        </div>
        <div class="flex-1 flex min-h-40">
          <div class="flex-1 flex flex-col justify-center gap-4 md:max-w-lg">
              <h2 class="text-2xl md:text-3xl text-secondary font-semibold font-serif">Furnish your Dreams Timeless Living for Inspired Living</h2>
              <p style="lineHeight: 2" class="text-sm md:text-base text-dark/60 text-justify font-medium leading-loose font-serif">At Karamlaza, we provide you with timeless and eternal, self-announcing touch of opulence, exclusive and custom-made artifacts to beautify the interior of your edifice all of which can be delivered to your house just from one simple order</p>
              <MainButton to="/">Learn More</MainButton>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-backrop py-20 px-4">
      <div class="container mx-auto flex flex-col gap-6 lg:gap-10">
        <div class="flex-1 flex flex-col justify-center gap-4 md:max-w-xl mx-auto text-center">
              <h2 class="text-xl md:text-2xl text-secondary font-semibold font-serif">Our Top Categories</h2>
              <p class="text-sm md:text-base text-dark/60 font-medium leading-loose font-serif">Karamlaza provides some top quality, top-drawer state-of-the-art products which we hope will tug at your interest. Check them out</p>
          </div>
          <!-- <div class="grid grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4"> -->
          <div class="grid grid-cols-2 md:grid-cols-3 auto-rows-[300px] gap-4">
            <div class="flex-1 min-h-40 overflow-hidden rounded-sm row-span-2">
              <img src="@/assets/images/nova_naving_sidetables.jpg" alt="essence_accent_chair" class="object-cover object-left h-full w-full">
            </div>
            <div class="flex-1 min-h-40 overflow-hidden rounded-sm md:col-span-2">
              <img src="@/assets/images/large_lagoon_lounge.jpg" alt="essence_accent_chair" class="object-cover object-center h-full w-full">
            </div>
            <div class="flex-1 min-h-40 overflow-hidden rounded-sm">
              <img src="@/assets/images/lagoon_patio_chair.jpg" alt="essence_accent_chair" class="object-cover object-center h-full w-full">
            </div>
            <div class="flex-1 min-h-40 overflow-hidden rounded-sm">
              <img src="@/assets/images/white_accent_chair.jpg" alt="essence_accent_chair" class="object-cover object-center h-full w-full">
            </div>
          </div>
      </div>
      <aside class="bg-light-grey flex flex-col relative hover:-translate-y-3 overflow-hidden">
    
  </aside>
    </section>
  </main>
</template>

<script lang="ts" setup>
import MainButton from '~/components/MainButton.vue';

</script>

<script>
</script>