<template>
    <div>
        <BreadCrumb :extra="['/blog', 'Blog', $route.params.slug]" :key="8250698" />
        <h3>Welcome to {{ $route.params.slug }}</h3>
    </div>
</template>

<script lang="ts" setup>
    const route = useRoute();
    // console.log({route, router})
    useSeoMeta({
        title: `Karamlaza :: ${route.params.slug.toString().replaceAll("-", " ").toUpperCase()}`,
        description: 'Karamlaza provides you with timeless and eternal, self-announcing touch of opulence, exclusive and custom-made artifacts to beautify the interior of your edifice all of which can be delivered to your house just from one simple order',
        ogTitle: `Karamlaza :: ${route.params.slug.toString().replaceAll("-", " ").toUpperCase()}`,
        ogDescription: 'Karamlaza provides you with timeless and eternal, self-announcing touch of opulence, exclusive and custom-made artifacts to beautify the interior of your edifice all of which can be delivered to your house just from one simple order',
        ogImage: '/willow_patio_chair.jpg',
        ogUrl: `https://karamlaza.vercel.app/shop/${route.params.slug}`,
        twitterTitle: `Karamlaza :: ${route.params.slug.toString().replaceAll("-", " ").toUpperCase()}`,
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