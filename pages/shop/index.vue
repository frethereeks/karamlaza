<template>
    <main class="flex-1 flex flex-col">
        <BreadCrumb :extra="false" :key="8250698" />
        <section class="bg-backrop py-20 sm:py-32 px-4">
            <div class="container mx-auto flex flex-col gap-6 lg:gap-10">
                <div class="flex-1 flex flex-col justify-center gap-2 md:max-w-xl mx-auto text-center">
                    <h2 class="text-2xl md:text-3xl text-secondary font-semibold font-serif">Our <span class="capitalize">{{ selectedCategory === "All" ? 'Products' : selectedCategory }}</span> Catalogue</h2>
                    <p style="line-height: 2"
                        class="text-sm md:text-base text-dark/80 font-normal leading-loose font-sans">
                        Explore our stream of incredible and amazing product showcase, guaranteed to blow your mind</p>
                </div>
                <div class="flex flex-wrap justify-center items-center gap-4 py-2">
                    <button
                        class="w-max whitespace-nowrap py-2 px-4 flex justify-center items-center border border-grey text-xs sm:text-sm rounded-md cursor-pointer"
                        :class="selectedCategory === 'All' ? 'hover:bg-gray bg-dark text-backdrop' : 'bg-gray hover:bg-dark text-dark/60 hover:text-backdrop'"
                        @click="selectedCategory = 'All'">All</button>
                    <button v-for=" category in categories"
                        class="w-max whitespace-nowrap py-2 px-4 flex justify-center items-center border border-grey text-xs sm:text-sm rounded-md cursor-pointer"
                        :class="selectedCategory === category ? 'hover:bg-gray bg-dark text-backdrop' : 'bg-gray hover:bg-dark text-dark/60 hover:text-backdrop'"
                        @click="selectedCategory = category">{{
                        category }}</button>
                </div>
                <!-- <div class="grid grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4"> -->
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-auto gap-2 md:gap-4">
                    <ProductCard v-for="product in selectedProducts" :key="product.id" :id="product.id"
                        :title="product.title" :image="product.image" :category="product.category"
                        :price="product.price" :description="product.description" />
                </div>
            </div>
            <div class="container mx-auto pt-10 px-4 flex justify-center items-center gap-2">
                <button
                    class="w-5 h-5 md:w-7 md:h-7 flex justify-center items-center border border-grey bg-gray hover:bg-dark text-dark/60 hover:text-backdrop text-xs sm:text-sm rounded-md cursor-pointer">
                    <Icon name="ion:chevron-back" size="15" />
                </button>
                <button v-for="num in 8"
                    class="w-6 h-6 md:w-8 md:h-8 flex justify-center items-center border border-grey text-xs sm:text-sm rounded-md cursor-pointer"
                    :class="num == 1 ? 'hover:bg-gray bg-dark text-backdrop' : 'bg-gray hover:bg-dark text-dark/60 hover:text-backdrop'">{{
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
    const route = useRoute();
    const products = useProductState()
    const selectedCategory = ref<string>(route.query?.category?.toString() ?? 'All')
    const selectedProducts = reactive({...products})
    const uniqueFilter = (items: any[], target:string) => {
        let uniqueMap = new Map()
        items.map(el => {
            uniqueMap.set(el[target as keyof typeof el], (uniqueMap.get(el[target as keyof typeof el]) || 0) + 1)
        })
        return Array.from(uniqueMap.entries()).map(([field, total]) => field)
    }
    const categories = uniqueFilter([...products.value], 'category')
    
    definePageMeta({
        name: "Shop"
    })
    console.log({ routeQuery: route.query, routeParams: route.params })
    watchEffect(() => {
        selectedCategory.value
        if (selectedCategory.value === "All") selectedProducts.value = products.value
        else selectedProducts.value = products.value.filter(el => el.category.toLowerCase() === selectedCategory.value.toLowerCase())
    })
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
