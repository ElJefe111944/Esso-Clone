<template>
    <div class="flex bg-secondaryGray h-11 sm:pt-1 md:pt-0 ld:pt-0 gap-0 md:justify-between flex-col md:flex-row">
        <div class="flex text-xs items-center">
            <TopNavLink>Business lines</TopNavLink>
            <TopNavLink>Global brands</TopNavLink>
        </div>
        <div class="flex items-center justify-end bg-secondaryGray">
            <!-- social -->
            <div class="flex text-xs">
                <!-- desktop icons -->
                <DesktopIcons />
                <!-- mobile icons -->
                <MobileIcons />
            </div>
            <!-- location -->
            <div class="h-full flex items-center">
                <div class="flex h-full items-center text-xs before:content-['|'] md:before:mr-0 md:before:ml-4">
                    <TopNavLink class="flex gap-2 items-center lg:">
                        <GlobeIcon /> Select a location
                    </TopNavLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import TopNavLink from '../ui/slots/TopNavLink.vue';
import GlobeIcon from '../ui/icons/GlobeIcon.vue';
import DesktopIcons from './top-nav/DesktopIcons.vue';
import MobileIcons from './top-nav/MobileIcons.vue';

</script>

