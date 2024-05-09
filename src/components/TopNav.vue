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
                <DesktopIcons />
                <!-- mobile icons -->
                <MobileIcons />
            </div>
            <!-- location -->
            <div class="h-full flex items-center">
                <div class="flex h-full items-center text-xs before:content-['|'] md:before:mr-1 md:before:ml-4">
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
import GlobeIcon from '../ui/icons/GlobeIcon.vue';
import DesktopIcons from './top-nav/DesktopIcons.vue';
import MobileIcons from './top-nav/MobileIcons.vue';

</script>

