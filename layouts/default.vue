<template>
    <main class="flex flex-col justify-between min-h-screen w-full">
        <header class="relative p-4 bg-white">
            <div class="relative container mx-auto flex justify-between items-center bg-white">
              <NuxtLink to='/' class="text-primary text-2xl font-bold relative pl-6 before:bg-secondary before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[14px] before:h-10 before:z-10 after:bg-primary after:absolute after:left-[4px] after:top-1/2 after:-translate-y-1/2 after:rotate-12 after:w-[14px] after:h-9" :class="navShow ? 'bg-secondary' : 'bg-white'">Karam<span class="text-secondary">Laza</span></NuxtLink>
              <nav class="flex-1 fixed z-50 w-full h-screen md:w-max md:h-max md:static top-0 left-0 bg-primary md:bg-transparent flex-col md:flex-row justify-center md:justify-end" :class="navShow ? 'flex' : 'hidden md:flex'">
                <div @click="navShow = !navShow" class="w-5 h-5 rounded-full flex md:hidden justify-center items-center bg-slate-50 text-primary cursor-pointer font-extralight fixed right-2 top-2">&#10007;</div>
                <NuxtLink v-for="link in navLinks" :key="link.id" :to="link.url" class="text-dark hover:text-dark/90 text-sm md:text-sm py-2 px-6 border-b-2 border-b-transparent md:hover:border-b-dark uppercase">{{ link.title }}</NuxtLink>    
            </nav>
            <div class="flex items-center gap-2">
                <form @submit.prevent="handleSubmit" @click.stop="searchShow = !searchShow" v-show="searchShow" class="flex-1 fixed z-50 w-full h-screen top-0 left-0 bg-primary/70 backdrop-blur-sm flex-col py-10 md:py-20">
                    <div @click.stop="searchShow = true" class="flex items-center gap-3 bg-white border-b-[1.5px] border-slate-400 hover:border-secondary active:border-secondary valid:border-secondary py-2 px-4 md:px-8 relative max-w-md mx-auto">
                            <div class="w-8 h-5 border border-solid border-secondary/50 cursor-pointer rounded-sm"></div>
                            <input type="search"  name="searchTerm" id="searchTerm" v-model="searchTerm" placeholder="Search for anything...*" required minlength="3" class="flex-1 outline-none text-slate-600 text-sm md:text-lg placeholder:text-secondary placeholder:text-sm">
                            <button type="submit" class="w-8 h-5 border border-solid border-secondary/50 cursor-pointer rounded-sm"></button>
                        </div>
                </form>
                <div @click="searchShow = !searchShow" class="w-8 h-5 border border-solid border-secondary/50 cursor-pointer rounded-sm"></div>
                <div @click="navShow = !navShow" class="w-8 h-5 border border-solid border-secondary/50 cursor-pointer rounded-sm"></div>
                <div @click="navShow = !navShow" class="w-8 h-5 border border-solid border-secondary/50 cursor-pointer rounded-sm"></div>
                <div @click="navShow = !navShow" class="w-8 h-5 border border-solid border-secondary/50 cursor-pointer rounded-sm"></div>
            </div>
            <div @click="navShow = !navShow" class="w-5 h-5 bg-secondary cursor-pointer rounded-sm md:hidden"></div>
            </div>
        </header>
        <slot />
        <footer class="bg-primary text-white p-4"></footer>
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
    const router = useRouter()
    const handleSubmit = async() => {
        const searchPhrase = searchTerm.value
        console.log({searchPhrase})
    }

</script>
