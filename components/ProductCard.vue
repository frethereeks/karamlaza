<template>
    <aside
        class="productCard relative bg-gray flex flex-col group my-4 h-full">
        <div class="relative flex-shrink-0 flex-1 h-24 sm:h-32 md:h-56 overflow-hidden">
            <img :src="`/images/${image}`" :alt="title"
                class="object-cover object-center h-full w-full absolute left-0 top-0">
            <div
                class="relative w-full h-full bg-gradient-to-t from-slate-600 via-transparent to-transparent p-2 sm:p-4 flex flex-col justify-between left-0">
                <span
                    class="bg-primary text-white text-[.65rem] md:text-xs p-1 sm:px-2 rounded-sm w-max">{{ Math.random().toString().slice(3, 5) }}%</span>
                <div class="flex flex-col items-end gap-4 relative left-0 top-full group-hover:top-0">
                    <button @click="console.log(id)"
                        class="border border-primary border-solid bg-backdrop hover:bg-primary text-primary hover:text-white flex justify-center items-center h-7 w-7 md:w-7 md:h-7 rounded-full cursor-pointer">
                        <Icon name="ion:heart-outline" />
                    </button>
                    <PrimaryButton @click="console.log(`Product ${id} added to Card!`)" type="button"
                        class="bg-primary/50 hover:bg-primary hover:text-white py-1 text-xs md:text-sm">Add to Cart
                    </PrimaryButton>
                </div>
            </div>
        </div>
        <div class="relative bg-white p-3 pt-2 flex flex-col">
            <p class="text-[.65rem] md:text-[.7rem] text-dark/40 font-medium capitalize tracking-wider">{{
                category }}</p>
            <h4
                class="text-sm sm:text-lg lg:text-xl text-dark font-bold leading-none truncate line-clamp-2 whitespace-pre-wrap py-1">
                {{ title }}</h4>
            <p class="text-[.65rem] md:text-[.7rem] text-dark/40 font-normal capitalize tracking-wider mb-2">{{
                description }}</p>
            <h6 class="w-max mt-auto text-sm md:text-base text-primary font-bold pb-1 tracking-tight">
                &#8358;{{ price.toLocaleString() }}</h6>
        </div>
    </aside>
</template>

<script lang="ts" setup>
    defineProps(['id', 'image', 'title', 'category', 'description', 'price',])
</script>

<style>

</style>