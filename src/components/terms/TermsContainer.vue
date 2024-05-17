<template>
    <div class="rounded-none">
        <Accordion class="rounded-none" expandIcon="null" collapseIcon="null">
            <AccordionTab v-for="(tab, index) in tabs" :key="index">
                <template #header>
                    <span class="header-tab flex justify-between gap-2 bg-gray-100 w-full py-3 px-2 items-center border-b-4 border-white" @click="toggleTab(index)">
                        <span class="font-bold white-space-nowrap no-underline">{{ tab.title }}</span>
                        <span>
                            <i v-if="!tab.isOpen" class="bi bi-plus-circle text-[24px] text-blue-500"></i>
                            <i v-else class="bi bi-dash-circle text-[24px] text-red-500"></i>
                        </span>
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

const toggleTab = (index) => {
    tabs.value[index].isOpen = !tabs.value[index].isOpen;
}


</script>

<style scoped>
.p-accordion-tab-active .p-accordion-header .header-tab {
    background-color: white;
}
.header-tab {
    transition: background-color .35s ease;
}

.p-accordion-tab.p-accordion-tab-active {
    border-left: 2px solid blue;
}
</style>