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
                            <h2 data-maz-aos="scale-out" class="text-2xl md:text-3xl text-secondary font-semibold font-serif">Reach Out to Us
                            </h2>
                            <p style="line-height: 2"
                                class="text-sm md:text-base text-dark/80 font-normal leading-loose font-sans">
                                Let's get in touch to make it happen</p>
                        </div>
                        <div class="flex-1 flex flex-col gap-4 border border-grey border-solid p-4 md:p-6 rounded-sm">
                            <div class="flex flex-col text-secondary">
                                <label for="fullname" class="text-secondary text-sm md:text-base">Full Name</label>
                                <div
                                    class="flex-1 flex items-center gap-3 border-b-[1.5px] border-primary/60 hover:border-primary valid:border-primary p-2 pr-4 relative w-full">
                                    <Icon name="ion:person-outline" size="16" class="opacity-70" />
                                    <input type="text" name="fullname" id="fullname" v-model="fullname"
                                        placeholder="Enter your Full Name...*" required minlength="6"
                                        class="flex-1 outline-none text-secondary text-sm md:text-base bg-transparent placeholder:text-secondary/60 placeholder:text-sm">
                                </div>
                            </div>
                            <div class="flex flex-col text-secondary">
                                <label for="email" class="text-secondary text-sm md:text-base">Email Address</label>
                                <div
                                    class="flex-1 flex items-center gap-3 border-b-[1.5px] border-primary/60 hover:border-primary valid:border-primary p-2 pr-4 relative w-full">
                                    <Icon name="ion:mail-open-outline" size="16" class="opacity-70" />
                                    <input type="email" name="email" id="email" v-model="email"
                                        placeholder="Youremail@mail.com*" required minlength="6"
                                        class="flex-1 outline-none text-secondary text-sm md:text-base bg-transparent placeholder:text-secondary/60 placeholder:text-sm">
                                </div>
                            </div>
                            <div class="flex flex-col text-secondary">
                                <label for="message" class="text-secondary text-sm md:text-base">Message</label>
                                <div
                                    class="flex-1 flex items-center gap-3 border-b-[1.5px] border-primary/60 hover:border-primary valid:border-primary py-2 px-4 relative w-full">
                                    <textarea name="message" id="message" cols="30" rows="10" v-model="message"
                                        placeholder="Enter your Message Here...*" required minlength="6"
                                        class="flex-1 outline-none text-secondary text-sm md:text-base bg-transparent placeholder:text-secondary/60 placeholder:text-sm"></textarea>
                                </div>
                            </div>
                            <PrimaryButton type="submit" class="uppercase">Send</PrimaryButton>
                        </div>
                    </form>
                </aside>
            </div>
        </section>

    </main>
</template>

<script lang="ts" setup>
    const toast = useToast()
    const fullname = ref<string>(""), email = ref<string>(""), message = ref<string>("")
    const handleSubmit = async () => {
        const payload = { fullname: fullname.value, email: email.value, message: message.value, }
        try {
            const data = await $fetch("/api/contact/create", {
                body: JSON.stringify(payload),
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST",
            })
            console.log({data})
            toast.success("Success! Your Message has been sent Successfully")
        } catch (error) {
            console.log({error})
            toast.error("Unable to send Message...something went wrong")
        }
    }

    definePageMeta({
        name: "Contact"
    })
    useSeoMeta({
        title: `Karamlaza :: Contact`,
        description: 'Karamlaza provides you with timeless and eternal, self-announcing touch of opulence, exclusive and custom-made artifacts to beautify the interior of your edifice all of which can be delivered to your house just from one simple order',
        ogTitle: `Karamlaza :: Contact`,
        ogDescription: 'Karamlaza provides you with timeless and eternal, self-announcing touch of opulence, exclusive and custom-made artifacts to beautify the interior of your edifice all of which can be delivered to your house just from one simple order',
        ogImage: '/images/willow_lounge_chair.jpg',
        ogUrl: `https://karamlaza.vercel.app/contact`,
        twitterTitle: `Karamlaza :: Contact`,
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
