<template>
    <div>
        <!-- links -->
        <div class="flex bg-footerGray lg:flex-row md:flex-col flex-col w-full p-4 justify-between items-center gap-3">
            <div class="flex w-full md:w-2/3 text-white gap-4 flex-wrap">
                <a class="text-white no-underline whitespace-nowrap text-sm font-medium" href="#">Contact Us</a>
                <a class="text-white no-underline whitespace-nowrap text-sm font-medium" href="#">Mobile</a>
                <a class="text-white no-underline whitespace-nowrap text-sm font-medium" href="#">Commercial
                    customers</a>
                <a class="text-white no-underline whitespace-nowrap text-sm font-medium" href="#">Fuels F&Qs</a>
                <a class="text-white no-underline whitespace-nowrap text-sm font-medium" href="#">Esso App F&Qs</a>
                <a class="text-white no-underline whitespace-nowrap text-sm font-medium" href="#">Tesco clubcard
                    F&Qs</a>
            </div>
            <div class="flex items-center relative w-full md:w-auto">
                <input
                    class="flex bg-footerBlack h-11 px-2 w-full md:w-[350px] placeholder:text-sm placeholder:font-sans placeholder:font-semibold"
                    placeholder="Search" type="text">
                <SearchIcon class="absolute right-2" />
            </div>
        </div>
        <!-- affilated copnaies -->
        <div class="bg-footerBlack p-4 flex flex-col gap-3 md:flex-row md:justify-between">
            <div class="flex flex-col gap-3 md:flex-row md:items-center">
                <div>
                    <a href="#" class="block">
                        <img class="w-[122px] h-[25px] mr-8" src="../assets/footer-logos.png" alt="footer logos">
                    </a>
                </div>
                <div class="flex gap-2">
                    <a href="#">
                        <img class="w-auto h-[17px]" src="https://www.esso.co.uk/-/media/mobil_grey.png"
                            alt="footer logos">
                    </a>
                    <a href="#">
                        <img class="w-auto h-[17px]" src="https://www.esso.co.uk/-/media/esso_grey.png"
                            alt="footer logos">
                    </a>
                </div>
            </div>
            <div>
                <div class="md:text-center">
                    <ul class="flex gap-2 justify-start p-0 md:text-center">
                        <li>
                            <a class="text-white font-sans text-[12px] font-semibold no-underline" href="#">Manage my
                                cookies</a>
                        </li>
                        <li>
                            <a class="text-white font-sans text-[12px] font-semibold no-underline" href="#">Terms and
                                conditions</a>
                        </li>
                        <li>
                            <a class="text-white font-sans text-[12px] font-semibold no-underline" href="#">Privacy
                                policy</a>
                        </li>
                    </ul>
                </div>
                <div class="text-white font-sans text-[12px] font-semibold md:justify-center text-left md:text-center">
                    &copy; This landing page is a replica of the official Essos website as at May 2024
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import SearchIcon from '../ui/icons/SearchIcon.vue';
</script>

<style scoped>

</style>