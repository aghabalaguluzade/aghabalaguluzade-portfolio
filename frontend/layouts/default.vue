<template>
     <div class="bg-homeBg min-h-screen dark:bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
          <div class="z-50">
               <!-- container start -->
               <div class="container">
                    <AppHeader></AppHeader>
                    <slot/>
               </div>
          </div>
     </div>
</template>

<style scoped>
    .router-link-exact-active {
        margin-left: 0.625rem;
        margin-right: 0.625rem;
        display: flex;
        cursor: pointer;
        align-items: center;
        border-radius: 0.375rem;
        --tw-bg-opacity: 1;
        background-color: rgb(255 255 255 / var(--tw-bg-opacity));
        background-image: linear-gradient(to right, var(--tw-gradient-stops));
        --tw-gradient-from: #FA5252;
        --tw-gradient-to: rgb(250 82 82 / 0);
        --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
        --tw-gradient-to: #DD2476;
        padding-top: 0.625rem;
        padding-bottom: 0.625rem;
        font-family: Poppins, sans-serif;
        font-size: .8125rem;
        font-weight: 500;
        --tw-text-opacity: 1;
        color: rgb(255 255 255 / var(--tw-text-opacity));
        transition-property: all;
        transition-duration: 300ms;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
</style>

<script>
     import AppHeader from '~/components/AppHeader.vue';
     
     export default {
          components : AppHeader
     }
</script>