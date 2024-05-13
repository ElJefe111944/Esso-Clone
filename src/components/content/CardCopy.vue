<template>
    <div class="basis-1/3 flex flex-col justify-around gap-0">
        <img class="w-full h-auto" :src="topImg" alt="Esso Card">
        <h3 class="text-[20px] pt-2 font-sans">{{ title }}</h3>
        <p class="text-[14px] font-sans">{{ info }}</p>
        <p>
            <a class="text-primaryBlue font-semibold flex items-center underline" href="#">
                {{ ctaText }}
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="rgb(14, 70, 155)"
                    class="bi bi-chevron-right underline" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                </svg>
            </a>
        </p>
    </div>
</template>

<script setup>
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