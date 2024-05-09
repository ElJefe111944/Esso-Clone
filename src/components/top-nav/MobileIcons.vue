<template>
    <div class="items-center lg:hidden md:hidden relative">
        <a class="md:pt-3 md:pb-3 md:px-4 px-1 pt-1 pb-1 text-[10px] font-medium hover:bg-hoverGray"
            @click="isOpen = !isOpen" href="#">Social</a>
        <!-- dropdown -->
        <Transition>
            <div v-show="isOpen"
                class="absolute flex right-3 mt-3 gap-4 p-2 bg-black rounded-md after:w-0 after:h-0 after:border-l-[8px] after:border-r-[8px] after:border-l-transparent after:border-r-transparent after:border-b-[16px] after:absolute md:after:right-4 after:right-1 after:-top-2 after:font-black after:border-black">
                <a href="#">
                    <FacebookIcon colour="rgb(255,255,255)" />
                </a>
                <a href="#">
                    <TwitterIcon colour="rgb(255,255,255)" />
                </a>
                <a href="#">
                    <YoutubeIcon colour="rgb(255,255,255)" />
                </a>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

</script>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>