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
                <div class="hidden lg:flex items-center gap-4">
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
                <div class="items-center lg:hidden">
                    <TopNavLink>Social</TopNavLink>
                </div>
            </div>
            <!-- location -->
            <div>
                <div class="flex items-center text-xs before:content-['|'] before:mr-1 before:ml-4">
                    <TopNavLink class="flex gap-2 items-center"><GlobeIcon /> Select a location</TopNavLink>
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

</script>