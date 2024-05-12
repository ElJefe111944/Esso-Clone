<template>
    <div>
        <div class="relative">
            <picture>
                <source media="(min-width:768px)" srcset="https://www.esso.co.uk/-/media/eame/uk/images/promotion/esso-red/esso-red-screen-xl.jpg">
                <img class="w-full" src="https://www.esso.co.uk/-/media/eame/uk/images/promotion/esso-red/esso-red-fs-xs.jpg" alt="">
            </picture>
        </div>
        <div>
            <h1>Looking for fuel nearby?</h1>
            <p>We can help you find your nearest service station and even give you directions.</p>
            <p>
                <BaseButton>
                    <a class="no-underline text-white text-base capitalize font-bold tracking-normal font-sans" href="#">Find a service station</a>
                </BaseButton>
            </p>
        </div>
    </div>
</template>

<script setup>
import BaseButton from '../../ui/slots/BaseButton.vue';

</script>