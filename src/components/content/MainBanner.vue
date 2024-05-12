<template>
    <div>
        <div class="lg:relative">
            <div>
                <picture>
                    <source media="(min-width:768px)"
                        srcset="https://www.esso.co.uk/-/media/eame/uk/images/promotion/esso-red/esso-red-screen-xl.jpg">
                    <img class="w-full"
                        src="https://www.esso.co.uk/-/media/eame/uk/images/promotion/esso-red/esso-red-fs-xs.jpg"
                        alt="">
                </picture>
            </div>
            <div class="lg:absolute lg:top-3 lg:left-3 lg:py-5 lg:px-4 bg-white lg:max-w-[40%] py-3">
                <h1 class="lg:text-5xl font-thin text-primaryGrayIcons font-sans md:text-3xl text-2xl">Looking for fuel nearby?</h1>
                <p class="lg:text-base font-sans font-thin text-sm">We can help you find your nearest service station and even give you directions.</p>
                <p>
                    <BaseButton>
                        <a class="no-underline text-white text-base capitalize font-bold tracking-normal font-sans"
                            href="#">Find a service station</a>
                    </BaseButton>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import BaseButton from '../../ui/slots/BaseButton.vue';

</script>