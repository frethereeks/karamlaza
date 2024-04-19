<template>
    <main class="flex-1 flex flex-col">
        <BreadCrumb :key="8250698" />
        <section class="py-20 md:py-32 px-4 relative bg-backdrop">
            <div class="container mx-auto flex flex-col gap-8 lg:gap-12">
                <div class="flex-1 flex flex-col justify-center gap-2 md:max-w-xl mx-auto text-center">
                    <h2 class="text-2xl md:text-3xl text-secondary font-semibold font-serif">Our Inspirational Articles
                    </h2>
                    <p style="line-height: 2"
                        class="text-sm md:text-base text-dark/80 font-normal leading-loose font-sans">Immerse yoursle in
                        inspiration and expert insights with our blog section, offering a deep dive into trends and tips
                        for elevating your living spaces</p>
                </div>
                <div
                    class="grid grid-cols-2 md:grid-cols-3 md:justify-center auto-rows-fr gap-2 sm:gap-4 lg:gap-6 py-10">
                    <NuxtLink :to="`/blog/${blog.slug}`" v-for="blog in blogItems" :key="blog.id"
                        class="relative flex-1 flex flex-col gap-4 group min-w-36 max-w-80 w-full">
                        <figure class="relative rounded-lg overflow-hidden h-40 sm:h-40 md:h-40">
                            <img :src="`/images/${blog.images[0]}`" :alt="blog.title"
                                class="absolute left-0 top-0 w-full h-full object-cover group-hover:-rotate-2 group-hover:scale-105 group-hover:grayscale-[50%]">
                        </figure>
                        <div class="flex-1 flex flex-col gap-2 px-2">
                            <p class="text-[.65rem] md:text-[.7rem] text-dark/40 font-normal uppercase tracking-wider">{{ blog.category }}</p>
                            <h3 class="text-lg lg:text-xl text-dark font-medium mb-5 leading-none truncate line-clamp-2 whitespace-pre-wrap"> {{ blog.title }}</h3>
                            <button class="w-max mt-auto text-sm md:text-base text-dark italic font-normal pb-2 tracking-tight relative before:absolute before:left-0 before:bottom-1 before:bg-grey before:w-full before:h-[1.5px] after:absolute after:left-0 after:bottom-1 after:bg-primary after:w-1/2 group-hover:after:w-full after:h-[1.5px]">
                                Read More</button>
                        </div>
                    </NuxtLink>
                </div>
            </div>
            <div class="container mx-auto p-4 flex justify-center items-center gap-2">
                <button
                    class="w-5 h-5 md:w-7 md:h-7 flex justify-center items-center border border-grey bg-gray hover:bg-dark text-dark/60 hover:text-backdrop text-xs sm:text-sm rounded-md cursor-pointer">
                    <Icon name="ion:chevron-back" size="15" />
                </button>
                <button v-for="num in 8"
                    class="w-6 h-6 md:w-8 md:h-8 flex justify-center items-center border border-grey text-xs sm:text-sm rounded-md cursor-pointer"
                    :class="num == 1 ? 'hover:bg-gray bg-dark hover:text-dark/60 text-backdrop' : 'bg-gray hover:bg-dark text-dark/60 hover:text-backdrop'">{{
                    num }}</button>
                <button
                    class="w-5 h-5 md:w-7 md:h-7 flex justify-center items-center border border-grey bg-gray hover:bg-dark text-dark/60 hover:text-backdrop text-xs sm:text-sm rounded-md cursor-pointer">
                    <Icon name="ion:chevron-forward" size="15" />
                </button>

            </div>
        </section>
    </main>
</template>

<script lang="ts" setup>
    const blogItems = useBlogState()
    definePageMeta({
        name: "Blog"
    })
    useSeoMeta({
        title: `Karamlaza :: Blog`,
        description: 'Karamlaza provides you with timeless and eternal, self-announcing touch of opulence, exclusive and custom-made artifacts to beautify the interior of your edifice all of which can be delivered to your house just from one simple order',
        ogTitle: `Karamlaza :: Blog`,
        ogDescription: 'Karamlaza provides you with timeless and eternal, self-announcing touch of opulence, exclusive and custom-made artifacts to beautify the interior of your edifice all of which can be delivered to your house just from one simple order',
        ogImage: '/willow_patio_chair.jpg',
        ogUrl: `https://karamlaza.vercel.app/shop`,
        twitterTitle: `Karamlaza :: Blog`,
        twitterDescription: 'Karamlaza provides you with timeless and eternal, self-announcing touch of opulence, exclusive and custom-made artifacts to beautify the interior of your edifice all of which can be delivered to your house just from one simple order',
        twitterImage: '/willow_patio_chair.jpg',
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
