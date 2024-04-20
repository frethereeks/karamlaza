<template>
    <main class="flex-1 flex flex-col">
        <BreadCrumb :extra="['/blog', 'Blog', data.title]" :key="8250698" />
        <section class="py-10 px-4">
            <div class="container mx-auto py-10 flex flex-col lg:flex-row">
                <div class="lg:w-9/12 flex flex-col gap-4 lg:pr-8">
                    <div class="flex items-center gap-4 -my-3">
                        <p class="text-xs md:text-sm text-dark/70 font-medium capitalize tracking-wider"> {{
                            new Date(data.createdAt).toDateString() }}</p> •
                        <p class="text-xs md:text-sm text-dark/50 font-medium capitalize tracking-wider"> {{
                            data.category }}</p>
                    </div>
                    <h2 class="text-2xl md:text-3xl text-secondary font-semibold font-serif">{{ data.title }}</h2>
                    <div class="flex-1 flex rounded-lg relative overflow-hidden min-h-56 sm:min-h-72 md:min-h-96">
                        <img :src="`/images/${data.images[0]}`" alt="{{data.title}}"
                            class="h-full w-full object-covered object-fill rounded-sm absolute left-0 top-0">
                    </div>
                    <div class="flex justify-between items-center gap-4">
                        <div class="flex items-center gap-2">
                            <div
                                class="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-full relative overflow-hidden bg-secondary">
                                <img :src="`/images/${data.author?.image}`" alt="{{data.title}}"
                                    class="h-full w-full object-cover object-center rounded-sm absolute left-0 top-0">
                            </div>
                            <p
                                class="text-sm xs:text-sm md:text-[.95rem] text-dark/60 font-semibold capitalize tracking-wider">
                                {{ data.author?.firstname }} {{ data.author?.lastname }}</p>
                        </div>
                        <p class="flex gap-2">
                        <div
                            class="w-7 h-7 md:w-8 md:h-8 text-lg lg:text-xl text-primary hover:text-dark/70 bg-transparent hover:bg-dark/5 cursor-pointer rounded-full flex justify-center items-center">
                            <Icon name="ion:share-social" />
                        </div>
                        <button @click="console.log('Liked')"
                            class="border border-primary border-solid bg-backdrop hover:bg-primary text-primary hover:text-white flex justify-center items-center h-7 w-7 md:w-8 md:h-8 rounded-full cursor-pointer">
                            <Icon name="ion:heart-outline" />
                        </button>
                        </p>
                    </div>
                    <article v-html="data.text" style="line-height: 1.7;"
                        class="article flex flex-col gap-4 text-dark/80 text-base lg:text-lg text-justify pb-5">
                    </article>
                </div>
                <div class="lg:w-3/12 flex flex-col gap-3">
                    <div class="flex">
                        <button @click="relatedCategory = 'Popular'"
                            class="flex-1 uppercase max-w-[10rem] text-base md:text-base text-dark font-sans py-2 border-b-[3px] border-solid cursor-pointer"
                            :class="relatedCategory === 'Popular' ? 'border-dark font-semibold' : 'font-medium'">Popular</button>
                        <button @click="relatedCategory = 'Latest'"
                            class="flex-1 uppercase max-w-[10rem] text-base md:text-base text-dark font-sans py-2 border-b-[3px] border-solid cursor-pointer"
                            :class="relatedCategory === 'Latest' ? 'border-dark font-semibold' : 'font-medium'">Latest</button>
                    </div>
                    <div class="flex lg:flex-col flex-wrap gap-4 lg:divide-y-[1.025px] lg:divide-dark/15">
                        <NuxtLink v-for="related in relatedPost" :to="`/blog/${related.slug}`" :key="related.id"
                            class="flex-1 min-w-[200px] flex flex-col gap-2 text-dark py-3">
                            <div class="flex items-center gap-4">
                                <p
                                    class="text-[.65rem] md:text-[.7rem] text-dark/70 font-medium capitalize tracking-wider">
                                    {{ new Date(related.createdAt).toDateString() }}</p> •
                                <p
                                    class="text-[.65rem] md:text-[.7rem] text-dark/50 font-medium capitalize tracking-wider">
                                    {{ related.category }}</p>
                            </div>
                            <h5
                                class="text-lg md:text-xl text-secondary font-serif font-medium capitalize leading-snug">
                                {{ related.title }}</h5>
                            <p class="text-[.65rem] md:text-[.7rem] text-dark/50 font-medium capitalize tracking-wider">
                                {{ related.author?.firstname }} {{ related.author?.lastname }}</p>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script lang="ts" setup>
    const router = useRouter(), route = useRoute(), blogItems = useBlogState(), data = reactive<BlogItemProp>({ id: "", title: "", category: "", createdAt: "", images: [""], slug: "", text: "", author: { id: "", firstname: "", lastname: "", image: "" } }), relatedCategory = ref<string>('Popular');
    let relatedPost = reactive<BlogItemProp[]>([])

    watchEffect(() => {
        route.params
        const currentPost = blogItems.value.find(el => el.slug.toLowerCase() === route.params.slug)
        if (currentPost) {
            data.id = currentPost?.id
            data.title = currentPost?.title
            data.slug = currentPost?.slug
            data.category = currentPost?.category
            data.images = currentPost?.images
            data.text = currentPost?.text
            data.createdAt = currentPost?.createdAt
            data.author = currentPost?.author
        }
        else router.push("/blog")
    })

    watchEffect(() => {
        relatedCategory.value
        const availablePosts = blogItems.value.filter(el => el.id !== data.id)
        if (relatedCategory.value === "Popular") {
            relatedPost = availablePosts.slice(0, 2)
        }
        else {
            relatedPost = availablePosts.slice(2)
        }

    })
    useSeoMeta({
        title: `${data.title}` || 'Karamlaza Blog',
        description: data.text.slice(0, 100),
        ogTitle: `${data.title}` || 'Karamlaza Blog',
        ogDescription: data.text.slice(0, 100),
        ogImage: `/images/${data.images[0]}` || '/images/willow_patio_chair.jpg',
        ogUrl: `https://karamlaza.vercel.app/blog/${route.params.slug}`,
        twitterTitle: `${data.title}` || 'Karamlaza Blog',
        twitterDescription: data.text.slice(0, 100),
        twitterImage: `/images/${data.images[0]}` || '/images/willow_patio_chair.jpg',
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