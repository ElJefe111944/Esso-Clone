<template>
    <div class="flex flex-col md:flex-row py-11 gap-4">
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