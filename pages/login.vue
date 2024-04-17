<template>
    <main class="flex-1 flex flex-col">
        <BreadCrumb :extra="false" :key="8250698" />
        <section class="py-20 md:py-20 px-4 relative bg-backdrop">
            <div class="container mx-auto flex flex-col lg:flex-row gap-8 lg:gap-4">
                <aside class="flex-1 flex flex-col justify-between gap-6 max-h-40  md:min-h-64 lg:max-h-full relative">
                    <div class="flex-1 flex gap-2">
                        <div class="flex-1 rounded-tl-3xl relative overflow-hidden min-h-40">
                            <img src="@/assets/images/nova_nest_armchair.jpg" alt="nova_nest_armchair"
                                class="h-full w-full object-cover object-bottom rounded-sm absolute left-0 top-0">
                        </div>
                        <div class="flex-1 rounded-tr-3xl relative overflow-hidden min-h-40">
                            <img src="@/assets/images/large_lagoon_lounge.jpg" alt="willow_lounge_chair"
                                class="h-full w-full object-cover object-bottom rounded-sm absolute left-0 top-0">
                        </div>
                    </div>
                    <div class="flex-1 rounded-bl-3xl rounded-br-3xl relative overflow-hidden min-h-36 hidden lg:flex">
                        <img src="@/assets/images/keegan_checks_chairs.jpg" alt="keegan_checks_chairs"
                            class="h-full w-full object-cover object-bottom rounded-sm absolute left-0 top-0">
                    </div>
                </aside>
                <aside class="flex-1 min-h-64 relative py-10">
                    <form v-show="showLoginForm" @submit.prevent="handleSubmit"
                        class="flex-1 flex-col gap-5 md:gap-8 w-full md:max-w-xl mx-auto" :class="showLoginForm ? 'flex' : 'hidden'">
                        <div class="flex-1 flex flex-col justify-center md:max-w-xl mx-auto text-center">
                            <h2 class="text-2xl md:text-3xl text-primary font-semibold font-serif">Let's go make
                                Purchases</h2>
                            <p style="line-height: 2"
                                class="text-sm md:text-base text-dark/80 font-normal leading-loose font-sans">Creating
                                an account gives you tremendous access to more!</p>
                        </div>
                        <div class="flex-1 flex flex-col gap-4 border border-grey border-solid p-4 md:p-6 rounded-sm">
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
                                <label for="password" class="text-secondary text-sm md:text-base">Password</label>
                                <div
                                    class="flex-1 flex items-center gap-3 border-b-[1.5px] border-primary/60 hover:border-primary valid:border-primary p-2 pr-4 relative w-full">
                                    <Icon name="ion:key-outline" size="16" class="opacity-70" />
                                    <input :type="showPassword ? 'text' : 'password'" name="password" id="password"
                                        v-model="password" placeholder="********" required minlength="8"
                                        class="flex-1 outline-none text-secondary text-sm md:text-base bg-transparent border-transparent placeholder:text-secondary/60 placeholder:text-sm pr-3.5">
                                    <span class="opacity-70 cursor-pointer absolute top-1/2 -translate-y-1/2 right-2"
                                        @click="showPassword = !showPassword">
                                        <Icon :name="showPassword ? 'ion:eye-off-outline' : 'ion:eye-outline'"
                                            size="16" />
                                    </span>
                                </div>
                            </div>
                            <button type="button" @click="showLoginForm = false" class="-my-2 text-xs md:text-sm text-primary">Forgot
                                Password? Reset</button>
                            <PrimaryButton type="submit"
                                class="before:bg-secondary uppercase border-secondary hover:text-secondary">Grant Access
                            </PrimaryButton>
                        </div>
                    </form>
                    <form @submit.prevent="handlePasswordReset"
                        class="flex-1 flex flex-col gap-5 md:gap-8 w-full md:max-w-xl mx-auto"
                        :class="showLoginForm ? 'hidden' : 'flex'">
                        <div class="flex-1 flex flex-col justify-center md:max-w-xl mx-auto text-center">
                            <h2 class="text-2xl md:text-3xl text-primary font-semibold font-serif">Need a Password Reset?</h2>
                            <p style="line-height: 2"
                                class="text-sm md:text-base text-dark/80 font-normal leading-loose font-sans">We've all been there. Enter your mail to get a reset link</p>
                        </div>
                        <div class="flex-1 flex flex-col gap-4 border border-grey border-solid p-4 md:p-6 rounded-sm">
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
                            <button type="button" @click="showLoginForm = true" class="-my-2 text-xs md:text-sm text-primary">Go back to the Login Page</button>
                            <PrimaryButton type="submit"
                                class="before:bg-secondary uppercase border-secondary hover:text-secondary">Send Reset Link
                            </PrimaryButton>
                        </div>
                    </form>
                </aside>
            </div>
        </section>

    </main>
</template>

<script lang="ts" setup>
    const password = ref<string>(""), email = ref<string>(""), showPassword = ref<boolean>(false), showLoginForm = ref<boolean>(true)
    const handleSubmit = async () => {
        const payload = { password, email }

    }
    const handlePasswordReset = async () => {
        
    }

    definePageMeta({
        name: "Login"
    })
    useSeoMeta({
        title: `Karamlaza :: Login`,
        description: 'Karamlaza provides you with timeless and eternal, self-announcing touch of opulence, exclusive and custom-made artifacts to beautify the interior of your edifice all of which can be delivered to your house just from one simple order',
        ogTitle: `Karamlaza :: Login`,
        ogDescription: 'Karamlaza provides you with timeless and eternal, self-announcing touch of opulence, exclusive and custom-made artifacts to beautify the interior of your edifice all of which can be delivered to your house just from one simple order',
        ogImage: '/images/carraviggio_curved_chair.jpg',
        ogUrl: `https://karamlaza.vercel.app/login`,
        twitterTitle: `Karamlaza :: Login`,
        twitterDescription: 'Karamlaza provides you with timeless and eternal, self-announcing touch of opulence, exclusive and custom-made artifacts to beautify the interior of your edifice all of which can be delivered to your house just from one simple order',
        twitterImage: '/images/carraviggio_curved_chair.jpg',
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
