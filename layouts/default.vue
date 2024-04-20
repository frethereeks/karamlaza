<template>
    <main class="flex flex-col justify-between min-h-screen w-full">
        <header class="relative p-4 bg-white">
            <div class="relative container mx-auto flex justify-between items-center bg-white">
                <NuxtLink to='/'
                    class="text-primary text-2xl font-bold relative pl-6 before:bg-secondary before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[14px] before:h-10 before:z-10 after:bg-primary after:absolute after:left-[4px] after:top-1/2 after:-translate-y-1/2 after:rotate-12 after:w-[14px] after:h-9">
                    Karam<span class="text-secondary">Laza</span>
                </NuxtLink>
                <nav class="flex-1 fixed z-50 w-full h-screen md:w-max md:h-max md:static top-0 left-0 bg-primary md:bg-transparent flex-col md:flex-row justify-center md:justify-end"
                    :class="navShow ? 'flex' : 'hidden md:flex'">
                    <div @click="navShow = !navShow"
                        class="w-5 h-5 rounded-full flex md:hidden justify-center items-center bg-slate-50 text-primary cursor-pointer font-extralight fixed right-2 top-2">
                        &#10007;</div>
                    <NuxtLink v-for="link in navLinks" :key="link.id" :to="link.url"
                        class="text-sm md:text-sm py-2 px-6 uppercase"
                        :class="$route.path === link.url ? 'text-secondary font-bold hover:text-secondary/90' : 'font-normal text-dark hover:text-dark/80'">
                        {{ link.title }}</NuxtLink>
                </nav>
                <div class="flex items-center sm:gap-2 text-secondary">
                    <form @submit.prevent="handleSubmit" @click.stop="searchShow = !searchShow" v-show="searchShow"
                        class="flex-1 fixed z-50 w-full h-screen top-0 left-0 bg-backdrop/70 backdrop-blur-sm flex-col py-10 md:py-20 px-4">
                        <div @click.stop="searchShow = true"
                            class="flex items-center gap-3 border-b-[1.5px] border-secondary hover:border-secondary active:border-secondary valid:border-secondary py-2 px-4 relative max-w-md mx-auto">
                            <input type="search" name="searchTerm" id="searchTerm" v-model="searchTerm"
                                placeholder="Search for anything...*" required minlength="3"
                                class="flex-1 outline-none text-secondary text-sm md:text-base bg-transparent placeholder:text-secondary placeholder:text-sm">
                            <button type="submit"
                                class="w-8 h-8 bg-transparent hover:-rotate-12 cursor-pointer rounded-sm flex justify-center items-center">
                                <!-- <Icon name="ion:search-outline" size="20" /> -->
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em"
                                    viewBox="0 0 512 512">
                                    <path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"
                                        d="M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64Z" />
                                    <path fill="none" stroke="currentColor" stroke-linecap="round"
                                        stroke-miterlimit="10" stroke-width="32" d="M338.29 338.29L448 448" />
                                </svg>
                            </button>
                        </div>
                    </form>
                    <div @click="searchShow = !searchShow"
                        class="w-8 h-8 bg-transparent hover:bg-backdrop cursor-pointer rounded-sm flex justify-center items-center">
                        <!-- <Icon name="ion:search-outline" size="20" /> -->
                        <!-- <Icon name="🚀" /> -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 512 512">
                            <path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"
                                d="M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64Z" />
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10"
                                stroke-width="32" d="M338.29 338.29L448 448" />
                        </svg>
                    </div>
                    <NuxtLink to="/"
                        class="w-8 h-8 bg-transparent hover:bg-backdrop cursor-pointer rounded-sm flex justify-center items-center">
                        <!-- <Icon name="ion:heart-outline" size="20" /> -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 512 512">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="32"
                                d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81c-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0 0 18 0c96.26-65.34 184.09-143.09 183-252.42c-.54-52.67-42.32-96.81-95.08-96.81" />
                        </svg>
                    </NuxtLink>
                    <div @click="navShow = !navShow"
                        class="relative w-8 h-8 bg-transparent hover:bg-backdrop cursor-pointer rounded-sm flex justify-center items-center">
                        <!-- <Icon name="ion:bag-handle-outline" size="20" /> -->
                        <span
                            class="absolute -top-0 right-0 w-4 h-4 bg-red-500 text-backdrop text-xs rounded-full flex justify-center items-center">0</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 512 512">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="32"
                                d="M80 176a16 16 0 0 0-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 0 0-16-16Zm80 0v-32a96 96 0 0 1 96-96h0a96 96 0 0 1 96 96v32" />
                        </svg>
                    </div>
                    <NuxtLink to="/login"
                        class="w-8 h-8 bg-transparent hover:bg-backdrop cursor-pointer rounded-sm flex justify-center items-center">
                        <!-- <Icon name="ion:person-outline" size="20" /> -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 512 512">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="32"
                                d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96" />
                            <path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"
                                d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304Z" />
                        </svg>
                    </NuxtLink>
                    <div @click="navShow = !navShow"
                        class="w-8 h-8 text-secondary hover:bg-backdrop cursor-pointer rounded-sm flex justify-center items-center md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 512 512">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="15"
                                stroke-width="32" d="M80 160h352M80 256h352M80 352h352" />
                        </svg>
                    </div>
                </div>
            </div>
        </header>
        <slot />
        <footer class="bg-primary text-white p-4">
            <div class="container mx-auto flex flex-col gap-4 xs:flex-row xs:justify-between xs:items-center">
                <small class="text-sm xs:text-base text-center xs:text-left">&copy;{{ new Date().getFullYear() }}. Karamlaza. All rights reserved.</small>
                <div class="flex gap-2 justify-center xs:justify-end items-center">
                    <NuxtLink target="_blank" rel="noopener noreferrer" to="https://www.instagram.com/karamlaza" class="hover:bg-backdrop/50 text-backdrop hover:text-secondary text-sm md:text-base w-6 h-6 rounded-sm flex justify-center items-center"><Icon name="ion:logo-instagram" /></NuxtLink>
                    <NuxtLink target="_blank" rel="noopener noreferrer" to="https://www.facebook.com/karamlaza" class="hover:bg-backdrop/50 text-backdrop hover:text-secondary text-sm md:text-base w-6 h-6 rounded-sm flex justify-center items-center"><Icon name="ion:logo-facebook" /></NuxtLink>
                    <NuxtLink target="_blank" rel="noopener noreferrer" to="https://www.twitter.com/karamlaza" class="hover:bg-backdrop/50 text-backdrop hover:text-secondary text-sm md:text-base w-6 h-6 rounded-sm flex justify-center items-center"><Icon name="ion:logo-twitter" /></NuxtLink>
                    <NuxtLink target="_blank" rel="noopener noreferrer" to="https://www.whatsapp.com/karamlaza" class="hover:bg-backdrop/50 text-backdrop hover:text-secondary text-sm md:text-base w-6 h-6 rounded-sm flex justify-center items-center"><Icon name="ion:logo-whatsapp" /></NuxtLink>
                </div>
            </div>
        </footer>
    </main>

</template>

<script lang="ts" setup>

    const searchTerm = ref<string>(""), searchShow = ref<boolean>(false), cartShow = ref<boolean>(false), navShow = ref<boolean>(false)
    const navLinks = ref([
        {
            id: "802560",
            title: "Home",
            url: "/",
        },
        {
            id: "802561",
            title: "Shop",
            url: "/shop",
        },
        {
            id: "802562",
            title: "Blog",
            url: "/blog",
        },
        {
            id: "802563",
            title: "Contact",
            url: "/contact",
        },
    ])
    const route = useRoute() 
    const handleSubmit = async () => {
        const searchPhrase = searchTerm.value
        console.log({ searchPhrase })
    }

    watchEffect(() => {
        route.params
        navShow.value = false
    })

</script>
