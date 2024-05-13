<template>
    <div class="basis-1/3 flex flex-col justify-around gap-0">
        <img class="w-full h-auto" :src="topImg" alt="Esso Card">
        <h3 class="text-[20px] pt-2 font-sans">{{ title }}</h3>
        <p class="text-[14px] font-sans">{{ info }}</p>
        <p>
            <a class="text-primaryBlue font-semibold flex items-center underline" href="#">
                {{ ctaText }}
                <ChevronIcon />
            </a>
        </p>
    </div>
</template>

<script setup>
import ChevronIcon from '../../ui/icons/ChevronIcon.vue';

const props = defineProps({
    card: {
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
        topImg: {
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
    topImg 
} = props.card;
</script>