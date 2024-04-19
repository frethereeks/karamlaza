<template>
    <section class="py-20 md:py-32 px-4 relative bg-grey">
        <div class="container mx-auto flex flex-col lg:flex-row-reverse gap-8 lg:gap-12">
            <div class="flex-1 flex flex-col gap-2">
                <h2 class="text-dark text-xl md:text-3xl lg:text-4xl uppercase font-semibold font-serif">
                    {{ $route.name }}</h2>
                <div class="flex-1 flex items-center">
                    <NuxtLink
                        class="text-dark/90 hover:text-dark/60 py-2 pr-3 text-sm md:text-sm uppercase font-semibold"
                        to="/">Home</NuxtLink>
                    <!-- <IconCSS name="ion:chevron-right" /> -->
                    <svg xmlns="http://www.w3.org/2000/svg" style="margin-top: .25rem;" width=".75rem" height=".75rem"
                        viewBox="0 0 512 512">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="48" d="m184 112l144 144l-144 144" />
                    </svg>
                    <div v-if="extra" class="flex-1 flex items-center">
                        <NuxtLink
                            class="text-dark/90 hover:text-dark/60 py-2 px-3 text-sm md:text-sm uppercase font-semibold"
                            :to="extra[0]">
                            {{ extra[1] }}</NuxtLink>
                        <svg xmlns="http://www.w3.org/2000/svg" style="margin-top: .25rem;" width=".75rem"
                            height=".75rem" viewBox="0 0 512 512">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="48" d="m184 112l144 144l-144 144" />
                        </svg>
                        <h3 class="py-2 px-3 text-dark/60 text-sm md:text-sm uppercase font-semibold">
                            {{ extra[2] }}</h3>
                    </div>
                    <h3 v-else class="py-2 px-3 text-dark/60 text-sm md:text-sm uppercase font-semibold">
                        {{ $route.name }}</h3>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
    defineProps(['extra'])
</script>
