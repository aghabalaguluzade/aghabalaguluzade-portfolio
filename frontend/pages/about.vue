<template>
    <Head>
        <Title>{{ title }}</Title>
        <Meta name="description" :content="title" />
    </Head>
     <!-- about page contant start -->
     <div>
                    <div class="container lg:rounded-2xl bg-white dark:bg-[#111111] px-4 sm:px-5 md:px-10 lg:px-20">
                        <div data-aos="fade" class="aos-init aos-animate">
                            <div class="py-12">
                                <!-- about page title -->
                                <h2 class="after-effect after:left-52 mt-12 lg:mt-0"> Haqqımda </h2>
                                <div class="grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] ">
                                    <div class="col-span-12 md:col-span-4">
                                        <!-- about me image -->
                                        <img class="w-full md:w-[330px] md:h-[400px] object-cover overflow-hidden rounded-[35px] mb-3 md:mb-0"
                                            src="images/about/avatar.jpg" alt="about image" />
                                    </div>
                                    <div class="col-span-12 md:col-span-8 space-y-2.5">
                                        <!-- who am i content  -->
                                        <div class="md:mr-12 xl:mr-16">
                                            <h3 class="text-4xl font-medium dark:text-white mb-2.5"> Mən kiməm ? </h3>
                                            <p class="text-gray-lite dark:text-color-910 leading-7"> Mən Laravel, VueJS (Nuxt) və Node.js-də təcrübəsi olan veb tərtibatçısıyam. Mən real dünya problemlərini həll edən yüksək keyfiyyətli veb proqramlar yaratmaqda həvəsliyəm. Front-end və back-end texnologiyaları haqqında güclü anlayışım var mən həmişə daha çox öyrənməyə çalışıram. </p>
                                            <p class="text-gray-lite leading-7 mt-2.5 dark:text-color-910"> Laravel-də, modulyar paketləmə sistemi, routinq, middleware və ORM istifadə edərək real layihələr qurmaqda təcrübəm var. Mən təmiz, oxuna bilən və təhlükəsiz kod yazmağda bacarıqlıyam və həmişə tətbiqlərimin performansını optimallaşdırmağa çalışıram. </p>
                                            <p class="text-gray-lite leading-7 mt-2.5 dark:text-color-910"> VueJS (Nuxt) responsiv və interaktiv istifadəçi interfeysləri inşa etməkdə bacarıqlıyam. Komponent əsaslı arxitektura, state management və reaktiv proqramlaşdırmada güclü bir anlayışa malikəm. Bu framework-lərlə işləməkdən həzz alıram, çünki onlar mənə asanlıqla mürəkkəb tətbiqlər inşa etməyə imkan verir. </p>
                                            <p class="text-gray-lite leading-7 mt-2.5 dark:text-color-910"> Node.js-də, server-tərəfli tətbiqlər və RESTful API-lərin yaradılmasında təcrübəm var. Express.js, MongoDB və digər əlaqəli texnologiyalardan istifadə etməkdə bacarıqlıyam. Mən həmçinin Node.js inkişafındakı ən son tendensiyalar və ən yaxşı proqram strukturları ilə tanışam. </p>
                                            <p class="text-gray-lite leading-7 mt-2.5 dark:text-color-910"> Ümumilikdə, mən həmişə yeni çətinlikərin öhdəsindən gəlməyə və qabaqcıl tətbiqlər yaratmağa çalışan yüksək motivasiyalı, məhsuldar bir tərtibatçıyam.</p>
                                        </div>

                                        <!-- personal info -->
                                        <div>
                                            <h3 class="text-4xl font-medium my-5 dark:text-white"> Şəxsi məlumatlar </h3>
                                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                <div class="flex">
                                                    <span
                                                        class="text-oriange dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                                                        <i class="fa-solid fa-mobile-screen-button"></i>
                                                    </span>
                                                    <div class="space-y-1">
                                                        <p class="text-xs text-gray-lite dark:text-color-910"> Phone
                                                        </p>
                                                        <h6 class="font-medium dark:text-white"> +994 50 494 66 84 </h6>
                                                    </div>
                                                </div>

                                                <div class="flex">
                                                    <span
                                                        class="text-oriange-lite dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                                                        <i class="fa-solid fa-location-dot"></i>
                                                    </span>
                                                    <div class="space-y-1">
                                                        <p class="text-xs text-gray-lite dark:text-color-910"> Məkan
                                                        </p>
                                                        <h6 class="font-medium dark:text-white"> Bakı </h6>
                                                    </div>
                                                </div>

                                                <div class="flex">
                                                    <span
                                                        class="text-green dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                                                        <i class="fa-solid fa-envelope-open-text"></i>
                                                    </span>
                                                    <div class="space-y-1">
                                                        <p class="text-xs text-gray-lite dark:text-color-910"> E-Poçt
                                                        </p>
                                                        <h6 class="font-medium dark:text-white"> aghabalaguluzade@mail.com </h6>
                                                    </div>
                                                </div>

                                                <div class="flex">
                                                    <span
                                                        class="text-color-50 dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                                                        <i class="fa-solid fa-calendar-days"></i>
                                                    </span>
                                                    <div class="space-y-1">
                                                        <p class="text-xs text-gray-lite dark:text-color-910">  Doğum günü
                                                        </p>
                                                        <h6 class="font-medium dark:text-white"> 16 Yanvar, 2002 </h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- whai i do contain -->
                            <div class="pb-12">
                                <h3 class="text-[35px] dark:text-white font-medium pb-5"> Mən nə edirəm ! </h3>
                                <div class="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                                    <div class="about-box dark:bg-transparent bg-[#f3faff]">
                                        <img class="w-10 h-10 object-contain block" src="images/icons/icon5.svg"
                                            alt="icon" />
                                        <div class="space-y-2">
                                            <h3 class="dark:text-white text-2xl font-semibold"> Web sistemlərin və səhifələrin hazırlanması</h3>
                                            <p class="leading-8 text-gray-lite dark:text-[#A6A6A6]"> Cəlb edici və muasir xüsusiyyətlərə malik sistemlərin və səhifələrin hazırlanması. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- what i do contain end -->
                            <div>
                                <div class="bg-[#F8FBFB] dark:bg-[#0D0D0D] max-w-full h-auto py-10 rounded-xl">
                                    <h3 class="text-center dark:text-white text-6xl mb-3 font-semibold">Clients</h3>
                                    <!-- slider and slider items start -->
                                    <div class="slickTwo px-2 pt-8 slick-initialized slick-slider">  
                                    <div class="slick-list draggable"><div class="slick-track" style="opacity: 1; width: 2831px; transform: translate3d(-1639px, 0px, 0px);"><div class="slick-slide slick-cloned" tabindex="-1" style="width: 149px;" data-slick-index="-5" id="" aria-hidden="true">
                                            <img class="overflow-hidden brand-img" src="images/slider/brand2.png" alt="brand">
                                        </div><div class="slick-slide slick-cloned" tabindex="-1" style="width: 149px;" data-slick-index="-4" id="" aria-hidden="true">
                                            <img class="overflow-hidden brand-img" src="images/slider/brand3.png" alt="brand">
                                        </div><div class="slick-slide slick-cloned" tabindex="-1" style="width: 149px;" data-slick-index="-3" id="" aria-hidden="true">
                                            <img class="overflow-hidden brand-img" src="images/slider/brand4.png" alt="brand">
                                        </div><div class="slick-slide slick-cloned" tabindex="-1" style="width: 149px;" data-slick-index="-2" id="" aria-hidden="true">
                                            <img class="overflow-hidden brand-img" src="images/slider/brand1.png" alt="brand">
                                        </div><div class="slick-slide slick-cloned" tabindex="-1" style="width: 149px;" data-slick-index="-1" id="" aria-hidden="true">
                                            <img class="overflow-hidden brand-img" src="images/slider/brand1.png" alt="brand">
                                        </div><div class="slick-slide" tabindex="-1" style="width: 149px;" data-slick-index="0" aria-hidden="true">
                                            <img class="overflow-hidden brand-img" src="images/slider/brand.png" alt="brand">
                                        </div><div class="slick-slide" tabindex="-1" style="width: 149px;" data-slick-index="1" aria-hidden="true">
                                            <img class="overflow-hidden brand-img" src="images/slider/brand1.png" alt="brand">
                                        </div><div class="slick-slide" tabindex="-1" style="width: 149px;" data-slick-index="2" aria-hidden="true">
                                            <img class="overflow-hidden brand-img" src="images/slider/brand2.png" alt="brand">
                                        </div><div class="slick-slide" tabindex="-1" style="width: 149px;" data-slick-index="3" aria-hidden="true">
                                            <img class="overflow-hidden brand-img" src="images/slider/brand3.png" alt="brand">
                                        </div><div class="slick-slide" tabindex="-1" style="width: 149px;" data-slick-index="4" aria-hidden="true">
                                            <img class="overflow-hidden brand-img" src="images/slider/brand4.png" alt="brand">
                                        </div><div class="slick-slide" tabindex="-1" style="width: 149px;" data-slick-index="5" aria-hidden="true">
                                            <img class="overflow-hidden brand-img" src="images/slider/brand1.png" alt="brand">
                                        </div><div class="slick-slide slick-current slick-active" tabindex="0" style="width: 149px;" data-slick-index="6" aria-hidden="false">
                                            <img class="overflow-hidden brand-img" src="images/slider/brand1.png" alt="brand">
                                        </div><div class="slick-slide slick-cloned slick-active" tabindex="-1" style="width: 149px;" data-slick-index="7" id="" aria-hidden="false">
                                            <img class="overflow-hidden brand-img" src="images/slider/brand.png" alt="brand">
                                        </div><div class="slick-slide slick-cloned slick-active" tabindex="-1" style="width: 149px;" data-slick-index="8" id="" aria-hidden="false">
                                            <img class="overflow-hidden brand-img" src="images/slider/brand1.png" alt="brand">
                                        </div><div class="slick-slide slick-cloned slick-active" tabindex="-1" style="width: 149px;" data-slick-index="9" id="" aria-hidden="false">
                                            <img class="overflow-hidden brand-img" src="images/slider/brand2.png" alt="brand">
                                        </div><div class="slick-slide slick-cloned slick-active" tabindex="-1" style="width: 149px;" data-slick-index="10" id="" aria-hidden="false">
                                            <img class="overflow-hidden brand-img" src="images/slider/brand3.png" alt="brand">
                                        </div><div class="slick-slide slick-cloned" tabindex="-1" style="width: 149px;" data-slick-index="11" id="" aria-hidden="true">
                                            <img class="overflow-hidden brand-img" src="images/slider/brand4.png" alt="brand">
                                        </div><div class="slick-slide slick-cloned" tabindex="-1" style="width: 149px;" data-slick-index="12" id="" aria-hidden="true">
                                            <img class="overflow-hidden brand-img" src="images/slider/brand1.png" alt="brand">
                                        </div><div class="slick-slide slick-cloned" tabindex="-1" style="width: 149px;" data-slick-index="13" id="" aria-hidden="true">
                                            <img class="overflow-hidden brand-img" src="images/slider/brand1.png" alt="brand">
                                        </div></div></div></div>
                                    <!-- slider and slider items end -->
                                </div>
                            </div>

                            <AppFooter/>
                        </div>
                    </div>
                </div>
                <!-- about section end  -->
</template>

<script setup>
import AppFooter from '~/components/AppFooter.vue';

    const title = ref('Aghabala Guluzade | Haqqında');
</script>