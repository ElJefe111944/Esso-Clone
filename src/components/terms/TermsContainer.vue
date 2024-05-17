<template>
    <div class="rounded-none" v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }">
        <Accordion class="rounded-none" :expandIcon="biPlusIcon" :collapseIcon="biMinusIcon">
            <AccordionTab v-for="(tab, index) in tabs" :key="index" class="tab">
                <template #header>
                    <span class="header-tab flex justify-between gap-2 w-full items-center">
                        <span class="font-bold white-space-nowrap no-underline text-sm">{{ tab.title }}</span>
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

// icons
const biPlusIcon = 'bi bi-plus-circle text-[24px] text-blue-500';
const biMinusIcon = 'bi bi-dash-circle text-[24px] text-red-500';

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