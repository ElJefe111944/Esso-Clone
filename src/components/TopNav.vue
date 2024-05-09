<template>
    <div class="flex bg-secondaryGray h-10 justify-between">
        <div class="flex text-xs items-center">
            <TopNavLink>Business lines</TopNavLink>
            <TopNavLink>Global brands</TopNavLink>
        </div>
        <div class="flex items-center">
            <!-- social -->
            <div class="flex text-xs">
                <!-- desktop icons -->
                <div class="hidden lg:flex md:flex items-center gap-4">
                    <a href="#">
                        <FacebookIcon />
                    </a>
                    <a href="#">
                        <TwitterIcon />
                    </a>
                    <a href="#">
                        <YoutubeIcon />
                    </a>
                </div>
                <!-- mobile icons -->
                <div class="items-center lg:hidden md:hidden relative">
                    <a class="md:pt-3 md:pb-3 md:px-4 px-1 pt-1 pb-1 text-[10px] font-medium hover:bg-hoverGray" @click="isOpen = !isOpen"
                        href="#">Social</a>
                    <!-- dropdown -->
                    <Transition>
                        <div v-show="isOpen"
                            class="absolute flex right-3 mt-3 gap-4 p-2 bg-black rounded-md after:w-0 after:h-0 after:border-l-[8px] after:border-r-[8px] after:border-l-transparent after:border-r-transparent after:border-b-[16px] after:absolute md:after:right-4 after:right-1 after:-top-2 after:font-black after:border-black">
                            <a href="#">
                                <FacebookIcon />
                            </a>
                            <a href="#">
                                <TwitterIcon />
                            </a>
                            <a href="#">
                                <YoutubeIcon />
                            </a>
                        </div>
                    </Transition>
                </div>
            </div>
            <!-- location -->
            <div>
                <div class="flex items-center text-xs before:content-['|'] md:before:mr-1 md:before:ml-4">
                    <TopNavLink class="flex gap-2 items-center">
                        <GlobeIcon /> Select a location
                    </TopNavLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import TopNavLink from '../ui/slots/TopNavLink.vue';
import FacebookIcon from '../ui/icons/FacebookIcon.vue';
import TwitterIcon from '../ui/icons/TwitterIcon.vue';
import YoutubeIcon from '../ui/icons/YoutubeIcon.vue';
import GlobeIcon from '../ui/icons/GlobeIcon.vue';
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