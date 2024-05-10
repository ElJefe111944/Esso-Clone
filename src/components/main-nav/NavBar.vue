<template>
  <nav class="navbar bg-body-tertiary p-0">
    <div class="container-fluid h-20 lg:px-0">
      <a class="navbar-brand lg:pl-4" href="#">
        <img class="md:w-full w-30 h-auto max-w-full" :src="Logo" alt="Esso Logo">
      </a>
      <button class="navbar-toggler block md:block lg:hidden" type="button" data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <ul class="hidden lg:flex justify-items-end gap-x-0 items-center p-0 m-0 h-full">
        <MainNavItem>
          Station Finder
        </MainNavItem>
        <MainNavItem>
          Loyalty & Payments
        </MainNavItem>
        <MainNavItem>
          Fuels
        </MainNavItem>
        <MainNavItem>
          Contact
        </MainNavItem>
        <li @click="searchDropdownOpen = !searchDropdownOpen"
          class="hover:bg-hoverGray hover:border-t-4 border-t-4 border-transparent hover:border-primaryBlue h-full px-4">
          <a class="items-center text-sm no-underline text-primaryBlack hover:text-primaryBlue my-auto font-medium text-nowrap flex h-full"
            href="">
            <SearchIcon />
          </a>
        </li>
      </ul>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <MobileNav />
      </div>
    </div>
  </nav>
  <!-- search dropdown -->
  <div v-show="searchDropdownOpen">
    test
  </div>
</template>

<script setup>
import { ref } from "vue";
import Logo from "../../assets/logo.png";
import MainNavItem from '../../ui/slots/MainNavItem.vue';
import SearchIcon from "../../ui/icons/SearchIcon.vue";
import MobileNav from "./MobileNav.vue";


const searchDropdownOpen = ref(false);

</script>

<style scoped>
.collapse {
  visibility: visible;
}

.container-fluid.h-20.lg\:px-0 {
  padding: 0px;
}

@media(max-width: 1024px) {
  .container-fluid.h-20.lg\:px-0 {
    padding: 0px 20px;
  }
}
</style>