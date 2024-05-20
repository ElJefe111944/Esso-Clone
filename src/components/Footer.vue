<template>
    <div>
        <!-- links -->
        <div class="flex bg-footerGray lg:flex-row flex-col w-full p-4 justify-between items-center">
            <div class="flex w-2/3 text-white gap-3">
                <a class="text-white no-underline whitespace-nowrap text-sm font-medium" href="#">Contact Us</a>
                <a class="text-white no-underline whitespace-nowrap text-sm font-medium" href="#">Mobile</a>
                <a class="text-white no-underline whitespace-nowrap text-sm font-medium" href="#">Commercial customers</a>
                <a class="text-white no-underline whitespace-nowrap text-sm font-medium" href="#">Fuels F&Qs</a>
                <a class="text-white no-underline whitespace-nowrap text-sm font-medium" href="#">Esso App F&Qs</a>
                <a class="text-white no-underline whitespace-nowrap text-sm font-medium" href="#">Tesco clubcard F&Qs</a>
            </div>
            <div class="flex items-center relative">
                <input class="flex bg-footerBlack h-11 px-2 w-[300px] md:w-[350px] placeholder:text-sm placeholder:font-sans placeholder:font-semibold" placeholder="Search" type="text">
                <SearchIcon class="absolute right-2" />
            </div>
        </div>
        <!-- affilated copnaies -->
        <div></div>

    </div>
</template>

<script setup>
import SearchIcon from '../ui/icons/SearchIcon.vue';
</script>

<style scoped>

</style>