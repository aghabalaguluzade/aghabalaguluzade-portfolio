<template>
     <div>
          <!-- PRELOADER -->
    <div id="preloader">
        <div class="loader_line"></div>
    </div>
    <!-- /PRELOADER -->
          <!-- header start for large screens -->
          <header class="flex justify-between items-center fixed top-0 left-0 w-full lg:static z-[1111111111]">
                    <div class="flex justify-between w-full px-4 lg:px-0 bg-[#F3F6F6] lg:bg-transparent dark:bg-black">
                        <div class="flex justify-between w-full items-center space-x-4 lg:my-8 my-5">
                            <!-- website logo -->
                            <NuxtLink class="font-semibold" style="padding: 10px; color : white; font-size: 23px;">
                                Aghabala Guluzade 
                            </NuxtLink>
                            <div class="flex items-center">
                                <!-- light and dark mode button -->
                                <button id="theme-toggle-mobile" type="button"
                                    class="dark-light-btn lg:hidden w-[44px] h-[44px] ml-2">
                                    <i id="theme-toggle-dark-icon-mobile" class="fa-solid text-xl fa-moon hidden"></i>
                                    <i id="theme-toggle-light-icon-mobile" class="fa-solid fa-sun text-xl hidden"></i>
                                </button>
                                <!-- mobile toggle button -->
                                <button id="menu-toggle" type="button" class="menu-toggle-btn">
                                    <i id="menu-toggle-open-icon" class="fa-solid fa-bars text-xl "></i>
                                    <i id="menu-toggle-close-icon" class="fa-solid fa-xmark text-xl hidden  "></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- header items two for large screens -->
                    <nav class="hidden lg:block">
                        <ul class="flex my-12">
                            <li>
                                <NuxtLink to="/" class="menu-item-two">
                                    <span class="mr-2 text-base">
                                        <i class="fa-solid fa-house"></i>
                                    </span> Ana Səhifə
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/about" class="menu-item-two">
                                    <span class="mr-2 text-base">
                                        <i class="fa-regular fa-user"></i>
                                    </span> Haqqında 
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/resume" class="menu-item-two">
                                    <span class="mr-2 text-base">
                                        <i class="fa-regular fa-file-lines"></i>
                                    </span> Xülasə 
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/works" class="menu-item-two">
                                    <span class="mr-2 text-base">
                                        <i class="fas fa-briefcase"></i>
                                    </span> Portfolio  
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/blogs" class="menu-item-two">
                                    <span class="mr-2 text-base">
                                        <i class="fa-brands fa-blogger"></i>
                                    </span> Məqalələr
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/contact" class="menu-item-two">
                                    <span class="mr-2 text-base">
                                        <i class="fa-solid fa-address-book"></i>
                                    </span> Əlaqə 
                                </NuxtLink>
                            </li>
                            <li>
                                <!-- light and dark mode button -->
                                <button id="theme-toggle" type="button" class="dark-light-btn w-[44px] h-[44px] ml-2">
                                    <i id="theme-toggle-dark-icon" class="fa-solid text-xl fa-moon hidden"></i>
                                    <i id="theme-toggle-light-icon" class="fa-solid fa-sun text-xl hidden"></i>
                                </button>
                            </li>
                        </ul>
                    </nav>

                    <!-- mobile menu start -->
                    <nav id="navbar" class="hidden lg:hidden">
                        <ul
                            class="block rounded-b-[20px] shadow-md absolute left-0 top-20 z-[22222222222222] w-full bg-white dark:bg-[#1d1d1d]">
                            <li>
                                <NuxtLink to="/" class="mobile-menu-items">
                                    <span class="mr-2 text-xl">
                                        <i class="fa-solid fa-house"></i>
                                    </span> Ana Səhifə 
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/about" class="mobile-menu-items">
                                    <span class="mr-2 text-xl">
                                        <i class="fa-regular fa-user"></i>
                                    </span> Haqqında
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/resume" class="mobile-menu-items">
                                    <span class="mr-2 text-xl">
                                        <i class="fa-regular fa-file-lines"></i>
                                    </span> Xülasə 
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="mobile-menu-items">
                                    <span class="mr-2 text-xl">
                                        <i class="fas fa-briefcase"></i>
                                    </span> Portfolio 
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/blogs" class="mobile-menu-items">
                                    <span class="mr-2 text-xl">
                                        <i class="fa-brands fa-blogger"></i>
                                    </span> Məqalələr 
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/contact" class="mobile-menu-items">
                                    <span class="mr-2 text-xl">
                                        <i class="fa-solid fa-address-book"></i>
                                    </span> Əlaqə 
                                </NuxtLink>
                            </li>
                        </ul>
                    </nav>
                    <!-- mobile menu end -->
                </header>
                <!-- header  end -->         
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