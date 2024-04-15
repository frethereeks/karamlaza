<template>
    <main class="flex-1 flex flex-col">
        <BreadCrumb :extra="false" :key="8250698" />
        <section class="py-20 md:py-32 px-4 relative bg-backdrop">
            <div class="container mx-auto flex flex-col lg:flex-row-reverse gap-8 lg:gap-12">
                <aside class="flex-1 min-h-64 max-h-24 relative">
                    <img src="@/assets/images/willow_lounge_chair.jpg" alt="willow_lounge_chair"
                        class="h-full w-full object-cover rounded-sm absolute left-0 top-0">
                </aside>
                <aside class="flex-1 min-h-64 relative">
                    <form action="" class="flex-1 flex flex-col gap-5 md:gap-8 w-full md:max-w-xl lg:max-w-md mx-auto">
                        <div class="flex-1 flex flex-col justify-center md:max-w-xl mx-auto text-center">
                            <h2 class="text-2xl md:text-3xl text-dark font-semibold font-serif">Reach Out to Us
                            </h2>
                            <p style="line-height: 2"
                                class="text-sm md:text-base text-dark/80 font-normal leading-loose font-sans">
                                Let's get in touch to make it happen</p>
                        </div>
                        <div class="flex-1 flex flex-col gap-4 border border-grey border-solid p-4 md:p-6 rounded-sm">
                            <div class="flex flex-col text-secondary">
                                <label for="fullname" class="text-secondary text-sm md:text-base">Full Name</label>
                                <div
                                    class="flex-1 flex items-center gap-3 border-b-[1.5px] border-secondary/60 hover:border-primary valid:border-primary p-2 pr-4 relative w-full">
                                    <Icon name="ion:person-outline" size="16" class="opacity-70" />
                                    <input type="text" name="fullname" id="fullname" v-model="fullname"
                                        placeholder="Enter your Full Name...*" required minlength="6"
                                        class="flex-1 outline-none text-secondary text-sm md:text-base bg-transparent placeholder:text-secondary/60 placeholder:text-sm">
                                </div>
                            </div>
                            <div class="flex flex-col text-secondary">
                                <label for="email" class="text-secondary text-sm md:text-base">Email Address</label>
                                <div
                                    class="flex-1 flex items-center gap-3 border-b-[1.5px] border-secondary/60 hover:border-primary valid:border-primary p-2 pr-4 relative w-full">
                                    <Icon name="ion:mail-open-outline" size="16" class="opacity-70" />
                                    <input type="email" name="email" id="email" v-model="email"
                                        placeholder="Youremail@mail.com*" required minlength="6"
                                        class="flex-1 outline-none text-secondary text-sm md:text-base bg-transparent placeholder:text-secondary/60 placeholder:text-sm">
                                </div>
                            </div>
                            <div class="flex flex-col text-secondary">
                                <label for="message" class="text-secondary text-sm md:text-base">Email Address</label>
                                <div
                                    class="flex-1 flex items-center gap-3 border-b-[1.5px] border-secondary/60 hover:border-primary valid:border-primary py-2 px-4 relative w-full">
                                    <textarea name="message" id="message" cols="30" rows="10" v-model="message"
                                        placeholder="Enter your Message Here...*" required minlength="6"
                                        class="flex-1 outline-none text-secondary text-sm md:text-base bg-transparent placeholder:text-secondary/60 placeholder:text-sm"></textarea>
                                </div>
                            </div>
                            <button type="submit"
                                class="overflow-hidden relative before:bg-primary before:absolute before:z-0 before:top-0 before:left-0 before:w-full before:h-full hover:before:scale-0 before:scale-100 before:transition-all before:duration-300 before:origin-bottom-left text-backdrop hover:text-primary text-sm md:text-base py-2 px-6 md:px-8 border border-solid border-primary w-full cursor-pointer rounded-sm"> <span class="relative">Send</span></button>
                        </div>
                    </form>
                </aside>
            </div>
        </section>

    </main>
</template>

<script lang="ts" setup>
    const fullname = ref<string>(""), email = ref<string>(""), message = ref<string>("")

    definePageMeta({
        name: "Contact"
    })
    useSeoMeta({
        title: `Karamlaza :: Contact`,
        description: 'Karamlaza provides you with timeless and eternal, self-announcing touch of opulence, exclusive and custom-made artifacts to beautify the interior of your edifice all of which can be delivered to your house just from one simple order',
        ogTitle: `Karamlaza :: Contact`,
        ogDescription: 'Karamlaza provides you with timeless and eternal, self-announcing touch of opulence, exclusive and custom-made artifacts to beautify the interior of your edifice all of which can be delivered to your house just from one simple order',
        ogImage: '/willow_patio_chair.jpg',
        ogUrl: `https://karamlaza.vercel.app/shop`,
        twitterTitle: `Karamlaza :: Contact`,
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
