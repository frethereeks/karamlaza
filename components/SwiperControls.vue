<script setup lang="ts">
    const swiper = useSwiper()
</script>

<template>
    <button @click="swiper.slideNext()"><Icon name="ion:chevron-forward"/></button>
    <button @click="swiper.slidePrev()"><Icon name="ion:chevron-back"/></button>
</template>
