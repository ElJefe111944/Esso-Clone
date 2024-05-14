<template>
    <div class="rounded-none">
        <Accordion class="rounded-none">
            <AccordionTab>
                <template #header>
                    <span class="flex justify-between gap-2 w-full">
                        <span class="font-bold white-space-nowrap">Onyama Limba</span>
                        <span><i class="bi bi-plus-circle"></i><i class="bi bi-dash-circle"></i></span>
                    </span>
                </template>
                <p class="m-0">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                    beatae vitae dicta sunt explicabo. Nemo enim
                    ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                    dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non
                    numquam eius modi.
                </p>
            </AccordionTab>
            <AccordionTab>
                <template #header>
                    <span class="flex justify-between gap-2 w-full">
                        <span class="font-bold white-space-nowrap">Onyama Limba</span>
                        <span><i class="bi bi-plus-circle"></i><i class="bi bi-dash-circle"></i></span>
                    </span>
                </template>
                <p class="m-0">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                    beatae vitae dicta sunt explicabo. Nemo enim
                    ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                    dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non
                    numquam eius modi.
                </p>
            </AccordionTab>
        </Accordion>
    </div>
</template>


<script setup>
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';


</script>

<style scoped>
.p-icon {
    display: none;
}
</style>