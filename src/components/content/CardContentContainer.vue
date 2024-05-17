<template>
    <div class="flex flex-col md:flex-row py-11 gap-4" v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }">
        <!-- card -->
        <CardCopy v-for="card in cards" :key="card.id" :card="card" />
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import CardCopy from './CardCopy.vue';

const props = defineProps(['cards']);

const cards = reactive(props.cards);


</script>

<style scoped>
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