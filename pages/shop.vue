<template>
    <main class="flex-1 flex flex-col">
        <BreadCrumb :extra="false" :key="8250698" />
        <section class="py-20 md:py-32 px-4 relative bg-backdrop">
            <div class="container mx-auto flex flex-col lg:flex-row-reverse gap-8 lg:gap-12">

            </div>
        </section>

    </main>
</template>

<script lang="ts" setup>
    definePageMeta({
        name: "Shop"
    })
    const route = useRoute();
    useSeoMeta({
        title: `Karamlaza :: Shop`,
        description: 'Karamlaza provides you with timeless and eternal, self-announcing touch of opulence, exclusive and custom-made artifacts to beautify the interior of your edifice all of which can be delivered to your house just from one simple order',
        ogTitle: `Karamlaza :: Shop`,
        ogDescription: 'Karamlaza provides you with timeless and eternal, self-announcing touch of opulence, exclusive and custom-made artifacts to beautify the interior of your edifice all of which can be delivered to your house just from one simple order',
        ogImage: '/images/nova_naving_sidetables.jpg',
        ogUrl: `https://karamlaza.vercel.app/shop`,
        twitterTitle: `Karamlaza :: Shop`,
        twitterDescription: 'Karamlaza provides you with timeless and eternal, self-announcing touch of opulence, exclusive and custom-made artifacts to beautify the interior of your edifice all of which can be delivered to your house just from one simple order',
        twitterImage: '/images/nova_naving_sidetables.jpg',
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
