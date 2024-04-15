<template>
  <button :to="type" :class="class" class="overflow-hidden relative before:bg-secondary before:absolute before:z-0 before:top-0 before:left-0 before:w-full before:h-full before:scale-0 hover:before:scale-100 hover:text-backdrop before:transition-all before:duration-300 before:origin-bottom-left text-secondary text-sm md:text-base py-2 px-6 md:px-8 border border-solid border-secondary w-max cursor-pointer rounded-sm">
    <span class="relative z-10">
        <slot />
    </span>
  </button>
</template>

<script lang="ts" setup>

</script>

<script>
export default {
    props: ["type", "class"]
}
</script>