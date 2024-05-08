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
                <div class="hidden lg:flex items-center">
                    <a class="pt-3 pb-3 px-4 font-medium hover:bg-hoverGray" href="#">
                        <FacebookIcon />
                    </a>
                </div>
                <!-- mobile icons -->
                <div class="items-center lg:hidden">
                    <TopNavLink>Social</TopNavLink>
                </div>
            </div>
            <!-- location -->
            <div>
                <div class="flex items-center text-xs">
                    <TopNavLink>Select location</TopNavLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import TopNavLink from '../ui/slots/TopNavLink.vue';
import FacebookIcon from '../ui/icons/FacebookIcon.vue';

</script>