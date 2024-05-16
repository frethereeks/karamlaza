<template>
    <main class="flex-1 flex flex-col">
        <BreadCrumb :extra="false" :key="8250698" />
        <section class="py-20 md:py-20 px-4 relative bg-backdrop">
            <div class="container mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12">
                <aside class="flex-1 min-h-64 max-h-24 md:max-h-full relative">
                    <img src="@/assets/images/willow_lounge_chair.jpg" alt="willow_lounge_chair"
                        class="h-full w-full object-cover object-bottom rounded-sm absolute left-0 top-0">
                </aside>
                <aside class="flex-1 min-h-64 relative py-10">
                    <form @submit.prevent="handleSubmit" class="flex-1 flex flex-col gap-5 md:gap-8 w-full md:max-w-xl mx-auto">
                        <div class="flex-1 flex flex-col justify-center md:max-w-xl mx-auto text-center">
                            <h2 data-maz-aos="scale-out" class="text-2xl md:text-3xl text-secondary font-semibold font-serif">Create a Blog Post
                            </h2>
                            <p style="line-height: 2" class="text-sm md:text-base text-dark/80 font-normal leading-loose font-sans">Enter the details of the post and it would be posted and updated on the site</p>
                        </div>
                        <div class="flex-1 flex flex-col gap-4 border border-grey border-solid p-4 md:p-6 rounded-sm">
                            <label for="image" class="text-secondary h-40 md:h-60 rounded-md border-2 border-secondary border-dotted grid place-items-center text-sm md:text-base bg-white hover:bg-primary/25 cursor-pointer">
                                <input type="file" hidden="" id="image">
                                <span class="text-secondary">Upload Image</span>
                            </label>
                            <div class="flex flex-col text-secondary">
                                <label for="title" class="text-secondary text-sm md:text-base">Title</label>
                                <div
                                    class="flex-1 flex items-center gap-3 border-b-[1.5px] border-primary/60 hover:border-primary valid:border-primary p-2 pr-4 relative w-full">
                                    <Icon name="ion:book-outline" size="16" class="opacity-70" />
                                    <input type="text" name="title" id="title" v-model="title"
                                        placeholder="Enter your Full Name...*" required minlength="6"
                                        class="flex-1 outline-none text-secondary text-sm md:text-base bg-transparent placeholder:text-secondary/60 placeholder:text-sm">
                                </div>
                            </div>
                            <div class="flex flex-col text-secondary">
                                <label for="category" class="text-secondary text-sm md:text-base">Category</label>
                                <div
                                    class="flex-1 flex items-center gap-3 border-b-[1.5px] border-primary/60 hover:border-primary valid:border-primary p-2 pr-4 relative w-full">
                                    <Icon name="ion:folder-outline" size="16" class="opacity-70" />
                                    <select @change="handleChange"
                                        class="py-2 px-2 w-full min-h-8 rounded-md border border-transparent cursor-pointer text-sm bg-transparent">
                                        <option value="Home Decor" class="bg-grey text-dark p-2 text-sm font-sans">Home Decor</option>
                                        <option value="Collection" class="bg-grey text-dark p-2 text-sm font-sans">Collection</option>
                                        <option value="Inspiration" class="bg-grey text-dark p-2 text-sm font-sans">Inspiration</option>
                                    </select>
                                </div>
                            </div>
                            <div class="flex flex-col text-secondary">
                                <label for="text" class="text-secondary text-sm md:text-base">Blog Text</label>
                                <div
                                    class="flex-1 flex items-center gap-3 border-b-[1.5px] border-primary/60 hover:border-primary valid:border-primary py-2 px-4 relative w-full">
                                    <textarea name="text" id="text" cols="30" rows="10" v-model="text"
                                        placeholder="Enter your Message Here...*" required minlength="6"
                                        class="flex-1 outline-none text-secondary text-sm md:text-base bg-transparent placeholder:text-secondary/60 placeholder:text-sm"></textarea>
                                </div>
                            </div>
                            <PrimaryButton type="submit" class="uppercase">Create Post</PrimaryButton>
                        </div>
                    </form>
                </aside>
            </div>
        </section>

    </main>
</template>

<script lang="ts" setup>
    const selectedCategory = ref<string>("Home Decor")
    const handleChange = (e: any) => {
        selectedCategory.value = e.target.value
        console.log(selectedCategory.value)
    }
    const toast = useToast()
    const title = ref<string>(""), category = ref<string>(""), text = ref<string>("")
    const handleSubmit = async () => {
        const payload = { title: title.value, category: category.value, text: text.value, }
        try {
            const data = await $fetch("/api/contact/edit", {
                body: JSON.stringify(payload),
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST",
            })
            console.log({ data })
            toast.success("Success! Your Message has been sent Successfully")
        } catch (error) {
            console.log({ error })
            toast.error("Unable to send Message...something went wrong")
        }
    }

    definePageMeta({
        name: "Create Blog"
    })
    useSeoMeta({
        title: `Karamlaza :: Create Blog`,
        description: 'Karamlaza provides you with timeless and eternal, self-announcing touch of opulence, exclusive and custom-made artifacts to beautify the interior of your edifice all of which can be delivered to your house just from one simple order',
        ogTitle: `Karamlaza :: Create Blog`,
        ogDescription: 'Karamlaza provides you with timeless and eternal, self-announcing touch of opulence, exclusive and custom-made artifacts to beautify the interior of your edifice all of which can be delivered to your house just from one simple order',
        ogImage: '/images/willow_lounge_chair.jpg',
        ogUrl: `https://karamlaza.vercel.app/blog/create`,
        twitterTitle: `Karamlaza :: Create Blog`,
        twitterDescription: 'Karamlaza provides you with timeless and eternal, self-announcing touch of opulence, exclusive and custom-made artifacts to beautify the interior of your edifice all of which can be delivered to your house just from one simple order',
        twitterImage: '/images/willow_lounge_chair.jpg',
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
