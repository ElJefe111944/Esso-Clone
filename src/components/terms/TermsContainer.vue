<template>
    <div class="rounded-none">
        <Accordion class="rounded-none">
            <AccordionTab v-for="(tab, index) in tabs" :key="index" @tab-open="openTab(index)">
                <template #header>
                    <span class="flex justify-between gap-2 w-full">
                        <span class="font-bold white-space-nowrap">{{ tab.title }}</span>
                        <span><i class="bi bi-plus-circle"></i><i class="bi bi-dash-circle"></i></span>
                    </span>
                </template>
                <p class="m-0">
                    {{ tab.content }}
                </p>
            </AccordionTab>
        </Accordion>
    </div>
</template>


<script setup>
import { ref } from 'vue';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';


const tabs = ref([
    {
        title: 'General Terms and Conditions',
        content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque \
                    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto \
                    beatae vitae dicta sunt explicabo. Nemo enim \
                    ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni\
                    dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non \
                    numquam eius modi.',
        isOpen: false
    },
    {
        title: 'Nectar Issuance Terms and Conditions',
        content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque \
                    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto \
                    beatae vitae dicta sunt explicabo. Nemo enim \
                    ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni\
                    dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non \
                    numquam eius modi.',
        isOpen: false
    },
]);

function openTab(index){
    tabs.value[index].isOpen = true;
}

function closeTab(index){
    tabs.value[index].isOpen = false;
}
</script>

<style scoped>
.p-icon {
    display: none;
}
</style>