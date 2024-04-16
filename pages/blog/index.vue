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
                            <img :src="`/images/blog/${blog.images[0]}`" :alt="blog.title"
                                class="absolute left-0 top-0 w-full h-full object-cover group-hover:-rotate-2 group-hover:scale-105 group-hover:grayscale-[50%]">
                        </figure>
                        <div class="flex-1 flex flex-col gap-2 px-2">
                            <p class="text-[.65rem] md:text-[.7rem] text-dark/40 font-normal uppercase tracking-wider">{{
                                blog.category
                                }}</p>
                            <h3
                                class="text-lg lg:text-xl text-dark font-medium mb-5 leading-none truncate line-clamp-2 whitespace-pre-wrap">
                                {{
                                blog.title }}</h3>
                            <NuxtLink
                                class="w-max mt-auto text-sm md:text-base text-dark italic font-normal pb-2 tracking-tight relative before:absolute before:left-0 before:bottom-1 before:bg-grey before:w-full before:h-[1.5px] after:absolute after:left-0 after:bottom-1 after:bg-primary after:w-1/2 group-hover:after:w-full after:h-[1.5px]">
                                Read More</NuxtLink>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </section>

    </main>
</template>

<script lang="ts" setup>
    const blogItems = ref<BlogItemProp[]>([
        {
            id: "8025620",
            title: "The Ultimate Furniture Guide for 2024",
            slug: "the-ultimate-furniture-guide-for-2024",
            category: "Collection",
            images: ["keegan_checks_chairs.jpg", "carravio_slim_chair.jpg", "nova_naving_sidetables.jpg"],
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum est modi minima quis molestias animi veritatis mollitia tenetur libero provident eum, doloremque culpa totam dolores inventore perferendis! Eius quos praesentium modi ullam blanditiis dolor nemo sapiente voluptatum nam cumque nostrum officiis aspernatur eos optio beatae quibusdam voluptates illum, mollitia iure.",
            author: {
                id: "38025602",
                firstname: "Frederick",
                lastname: "Jones",
                image: "willow_lounge_chairs.jpg",
            },
            createdAt: new Date("4/14/2024"),
        },
        {
            id: "8025621",
            title: "Designing Dreams: Unraveling the Art of Furniture Colors",
            slug: "designing-dreams-unraveling-the-art-of-furniture-colors",
            category: "Home Decor",
            images: ["essence_accent_chair.jpg", "carravio_slim_chair.jpg", "willow_lounge_chairs.jpg"],
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum est modi minima quis molestias animi veritatis mollitia tenetur libero provident eum, doloremque culpa totam dolores inventore perferendis! Eius quos praesentium modi ullam blanditiis dolor nemo sapiente voluptatum nam cumque nostrum officiis aspernatur eos optio beatae quibusdam voluptates illum, mollitia iure.",
            author: {
                id: "38025621",
                firstname: "Godstime",
                lastname: "John",
                image: "keegan_checks_chairs.jpg",
            },
            createdAt: new Date("4/9/2024"),
        },
        {
            id: "8025622",
            title: "Elevate your Home: Get Ready for Karam-Revolution",
            slug: "elevate-your-home-get-ready-for-karam-revolution",
            category: "Inspiration",
            images: ["large_lagoon_lounge.jpg", "willow_lounge_chairs.jpg", "keegan_checks_chairs.jpg"],
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum est modi minima quis molestias animi veritatis mollitia tenetur libero provident eum, doloremque culpa totam dolores inventore perferendis! Eius quos praesentium modi ullam blanditiis dolor nemo sapiente voluptatum nam cumque nostrum officiis aspernatur eos optio beatae quibusdam voluptates illum, mollitia iure.",
            author: {
                id: "38025622",
                firstname: "Esther",
                lastname: "Obama",
                image: "carravio_slim_chair.jpg",
            },
            createdAt: new Date("3/25/2024"),
        },
        {
            id: "8025623",
            title: "Discover the Perfect Combination to Spice up your Private Rooms",
            slug: "discover-the-perfect-combination-to-spice-up-your-private-rooms",
            category: "Home Decor",
            images: ["nova_nest_armchair.jpg", "nova_rest_slimchair.jpg", "essence_accent_chair.jpg"],
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum est modi minima quis molestias animi veritatis mollitia tenetur libero provident eum, doloremque culpa totam dolores inventore perferendis! Eius quos praesentium modi ullam blanditiis dolor nemo sapiente voluptatum nam cumque nostrum officiis aspernatur eos optio beatae quibusdam voluptates illum, mollitia iure.",
            author: {
                id: "38025623",
                firstname: "Angela",
                lastname: "Banks",
                image: "large_lagoon_lounge.jpg",
            },
            createdAt: new Date("3/3/2024"),
        },
    ])
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
