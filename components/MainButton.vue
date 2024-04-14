<template>
  <NuxtLink :to="to" :class="class" class="overflow-hidden relative before:bg-secondary before:absolute before:z-0 before:top-0 before:left-full before:w-[200%] before:h-full hover:before:left-0 hover:text-backdrop before:transition-all before:duration-300 text-secondary text-sm md:text-base py-2 px-6 md:px-8 border border-solid border-secondary w-max cursor-pointer rounded-sm">
    <span class="relative z-10">
        <slot />
    </span>
  </NuxtLink>
</template>

<script lang="ts" setup>

</script>

<script>
export default {
    props: ["to", "class"]
}
</script>