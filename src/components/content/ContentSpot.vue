<template>
    <div class="flex md:mt-8 md:flex-row flex-col sm:mt-2 gap-3" :class="{ 'md:flex-row-reverse': isEven }" v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }">
        <div class="flex-1">
            <picture>
                <source media="(min-width:768px)"
                    :srcset="desktopImg">
                <img class="w-full"
                    :src="mobileImg" :alt="title">
            </picture>
        </div>
        <div class="bg-white lg:px-4 flex-1">
            <h2 class="lg:text-3xl font-thin text-primaryGrayIcons font-sans md:text-xl text-xl">{{ title }}</h2>
            <p class="lg:text-base font-sans font-thin text-sm">{{ info }}</p>
            <p>
                <BaseButton>
                    <a class="no-underline text-white flex-wrap md:text-sm text-[11px] capitalize font-bold tracking-normal font-sans"
                        href="#">{{ ctaText }}</a>
                </BaseButton>
            </p>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import BaseButton from '../../ui/slots/BaseButton.vue';

const props = defineProps({
    content: {
        id: {
            type: Number,
            required: true,
        },
        title: {
            type: String,
            required: true
        },
        info: {
            type: String,
            required: true
        },
        ctaText: {
            type: String,
            required: true
        },
        mobileImg: {
            type: String,
            required: true
        },
        desktopImg: {
            type: String,
            required: true
        }
    }
})

const { 
    id, 
    title,
    info,
    ctaText,
    mobileImg,
    desktopImg 
} = props.content;

const isEven = computed(() => {
    return id % 2 === 0;
});


</script>

<style scoped>
.flex-row-reverse {
  flex-direction: row-reverse;
}
/* animations */
.fadein {
    animation: fadeInAnimation 1s forwards;
}

.fadeout {
    animation: fadeOutAnimation 1s forwards;
}

@keyframes fadeInAnimation {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes fadeOutAnimation {
    from { opacity: 1; }
    to { opacity: 0; }
}
</style>