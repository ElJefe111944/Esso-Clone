<template>
    <div class="flex md:mt-8 lg:flex-row flex-col sm:mt-2 gap-3">
        <div class="flex-1">
            <picture>
                <source media="(min-width:768px)"
                    srcset="https://www.esso.co.uk/-/media/eame/uk/images/promotion/esso-red/esso-red-screen-xl.jpg">
                <img class="w-full"
                    src="https://www.esso.co.uk/-/media/eame/uk/images/promotion/esso-red/esso-red-fs-xs.jpg" alt="">
            </picture>
        </div>
        <div class="bg-white lg:px-4 flex-1">
            <h2 class="lg:text-3xl font-thin text-primaryGrayIcons font-sans md:text-xl text-xl">3x cleaner engine
                with new Esso Synergy Supreme</h2>
            <p class="lg:text-base font-sans font-thin text-sm">+ 99 triple cleans and protects your engine to give you
                more miles per tank. Try it now and get 3x Nectar or Clubcard points.*</p>
            <p>
                <BaseButton>
                    <a class="no-underline text-white text-sm capitalize font-bold tracking-normal font-sans"
                        href="#">Find out more about Esso fuels</a>
                </BaseButton>
            </p>
        </div>
    </div>
</template>

<script setup>
import BaseButton from '../../ui/slots/BaseButton.vue';
</script>