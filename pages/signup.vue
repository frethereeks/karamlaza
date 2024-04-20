<template>
    <main class="flex-1 flex flex-col">
        <BreadCrumb :extra="false" :key="8250698" />
        <section class="py-20 md:py-20 px-4 relative bg-backdrop">
            <div class="container mx-auto flex flex-col lg:flex-row-reverse gap-8 lg:gap-4">
                <aside class="flex-1 flex flex-col justify-between gap-6 max-h-40  md:min-h-64 lg:max-h-full relative">
                            <img src="@/assets/images/moonlit_muse_chair.jpg" alt="nova_nest_armchair"
                                class="h-full w-full object-cover object-bottom rounded-sm absolute left-0 top-0">
                </aside>
                <aside class="flex-1 min-h-64 relative py-10">
                    <form @submit.prevent="handleSubmit"
                        class="flex-1 flex flex-col gap-5 md:gap-8 w-full md:max-w-xl mx-auto">
                        <div class="flex-1 flex flex-col justify-center md:max-w-xl mx-auto text-center">
                            <h2 class="text-2xl md:text-3xl text-primary font-semibold font-serif">Become an Exclusive
                                Member</h2>
                            <p style="line-height: 2"
                                class="text-sm md:text-base text-dark/80 font-normal leading-loose font-sans">Creating
                                an account gives you tremendous access to more!</p>
                        </div>
                        <div class="flex-1 flex flex-col gap-4 border border-grey border-solid p-4 md:p-6 rounded-sm">
                            <div class="flex flex-col text-secondary">
                                <label for="firstname" class="text-secondary text-sm md:text-base">First Name</label>
                                <div
                                    class="flex-1 flex items-center gap-3 border-b-[1.5px] border-primary/60 hover:border-primary valid:border-primary p-2 pr-4 relative w-full">
                                    <Icon name="ion:person-outline" size="16" class="opacity-70" />
                                    <input type="text" name="firstname" id="firstname" v-model="inputs.firstname"
                                        placeholder="Someone*" required minlength="6"
                                        class="flex-1 outline-none text-secondary text-sm md:text-base bg-transparent placeholder:text-secondary/60 placeholder:text-sm">
                                </div>
                            </div>
                            <div class="flex flex-col text-secondary">
                                <label for="lastname" class="text-secondary text-sm md:text-base">Last Name</label>
                                <div
                                    class="flex-1 flex items-center gap-3 border-b-[1.5px] border-primary/60 hover:border-primary valid:border-primary p-2 pr-4 relative w-full">
                                    <Icon name="ion:person-add-outline" size="16" class="opacity-70" />
                                    <input type="text" name="lastname" id="lastname" v-model="inputs.lastname"
                                        placeholder="Somebody*" required minlength="6"
                                        class="flex-1 outline-none text-secondary text-sm md:text-base bg-transparent placeholder:text-secondary/60 placeholder:text-sm">
                                </div>
                            </div>
                            <div class="flex flex-col text-secondary">
                                <label for="email" class="text-secondary text-sm md:text-base">Email Address</label>
                                <div
                                    class="flex-1 flex items-center gap-3 border-b-[1.5px] border-primary/60 hover:border-primary valid:border-primary p-2 pr-4 relative w-full">
                                    <Icon name="ion:mail-open-outline" size="16" class="opacity-70" />
                                    <input type="email" name="email" id="email" v-model="inputs.email"
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
                                        v-model="inputs.password" placeholder="********" required minlength="8"
                                        class="flex-1 outline-none text-secondary text-sm md:text-base bg-transparent border-transparent placeholder:text-secondary/60 placeholder:text-sm pr-3.5">
                                    <span class="opacity-70 cursor-pointer absolute top-1/2 -translate-y-1/2 right-2"
                                        @click="showPassword = !showPassword">
                                        <Icon :name="showPassword ? 'ion:eye-outline' : 'ion:eye-off-outline'"
                                            size="16" />
                                    </span>
                                </div>
                            </div>
                            <div class="flex flex-col text-secondary">
                                <label for="confPassword" class="text-secondary text-sm md:text-base">Confirm
                                    Password</label>
                                <div
                                    class="flex-1 flex items-center gap-3 border-b-[1.5px] border-primary/60 hover:border-primary valid:border-primary p-2 pr-4 relative w-full">
                                    <Icon name="ion:key-outline" size="16" class="opacity-70" />
                                    <input :type="showConfPassword ? 'text' : 'password'" name="confPassword"
                                        id="confPassword" v-model="inputs.confPassword" placeholder="********" required
                                        minlength="8"
                                        class="flex-1 outline-none text-secondary text-sm md:text-base bg-transparent border-transparent placeholder:text-secondary/60 placeholder:text-sm pr-3.5">
                                    <span class="opacity-70 cursor-pointer absolute top-1/2 -translate-y-1/2 right-2"
                                        @click="showConfPassword = !showConfPassword">
                                        <Icon :name="showConfPassword ? 'ion:eye-outline' : 'ion:eye-off-outline'"
                                            size="16" />
                                    </span>
                                </div>
                            </div>
                            <label @click="acceptTerms = !acceptTerms"
                                class="flex items-center gap-2 -my-1 text-sm md:text-base text-primary">
                                <div class="h-4 w-4 flex justify-center items-center rounded-sm overflow-hidden border border-solid"
                                    :class="acceptTerms ? 'border-secondary bg-secondary/80 text-white' : 'border-primary bg-grey/50 text-transparent'">
                                    <Icon name="ion:checkmark-done-sharp" size="10" />
                                </div>
                                I accept Karamlaza Terms and Conditions
                            </label>
                            <PrimaryButton type="submit"
                                class="before:bg-secondary uppercase border-secondary hover:text-secondary font-semibold">
                                Become a Member </PrimaryButton>
                            <NuxtLink to="/login"
                                class="-my-2 text-xs md:text-sm text-dark/80 hover:text-dark/60 text-center">Already a
                                Member? Login</NuxtLink>
                        </div>
                    </form>
                </aside>
            </div>
        </section>

    </main>
</template>

<script lang="ts" setup>
    const toast = useToast()
    // toast.info('Passwords do NOT match!', {action: {func: () => handleSubmit(), text: "Are you sure?", closeToast: true}})
    const inputs = reactive<{ firstname: string, lastname: string, phone: string, email: string, password: string, confPassword: string }>({ firstname: "", lastname: "", phone: "", email: "", password: "", confPassword: "" }), showPassword = ref<boolean>(false), showConfPassword = ref<boolean>(true), acceptTerms = ref<boolean>(false)
    const handleSubmit = async () => {
        const { firstname, lastname, phone, email, password, confPassword } = toRef(inputs).value
        if(password !== confPassword) toast.warning('Passwords do NOT match!')
        else if (!acceptTerms.value) toast.warning('You must accept Karamlaza terms and conditions to continue')
        else {
            const payload = { firstname, lastname, phone, email, password }
            toast.success(`A Fake Account created Successfully`)
        }
    }

    definePageMeta({
        name: "Signup"
    })
    useSeoMeta({
        title: `Karamlaza :: Signup`,
        description: 'Karamlaza provides you with timeless and eternal, self-announcing touch of opulence, exclusive and custom-made artifacts to beautify the interior of your edifice all of which can be delivered to your house just from one simple order',
        ogTitle: `Karamlaza :: Signup`,
        ogDescription: 'Karamlaza provides you with timeless and eternal, self-announcing touch of opulence, exclusive and custom-made artifacts to beautify the interior of your edifice all of which can be delivered to your house just from one simple order',
        ogImage: '/images/moonlit_muse_chair.jpg',
        ogUrl: `https://karamlaza.vercel.app/signup`,
        twitterTitle: `Karamlaza :: Signup`,
        twitterDescription: 'Karamlaza provides you with timeless and eternal, self-announcing touch of opulence, exclusive and custom-made artifacts to beautify the interior of your edifice all of which can be delivered to your house just from one simple order',
        twitterImage: '/images/moonlit_muse_chair.jpg',
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
