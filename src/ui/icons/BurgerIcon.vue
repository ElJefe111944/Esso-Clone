<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="props.width" :height="props.height" :style="{ fill: props.colour }" class="bi bi-list"
        viewBox="0 0 16 16">
        <path fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
    </svg>
</template>

<script setup>
const props = defineProps({
    colour: {
        type: String,
        required: false,
        default: 'rgb(12, 71, 157)'
    },
    height: {
        type: String,
        required: false,
        default: 16
    },
    width: {
        type: String,
        required: false,
        default: 16
    }
})
</script>