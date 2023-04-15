// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
     app : {
          head : {
               title : 'Aghabala Guluzade Portfolio Səhifəsi',
               meta : [
                    { charset : 'utf-8' },
                    { name : 'viewport', content : 'width=device-width, initial-scale=1' },
                    { hid : 'description', name : 'description', content : 'Portfolio' },
                    { name : 'format-detection', content : 'telephone=no' },
                    { name : 'msapplication-TileColor', content : '#2d89ef' },
                    { name : 'theme-color', content : '#ffffff' },
                    { name : 'apple-mobile-web-app-capable', content : 'yes' },
                    { name : 'apple-mobile-web-app-title', content : 'Portfolio' },
                    { name : 'mobile-web-app-capable', content : 'yes' },
                    { name : 'msapplication-tooltip', content : 'Portfolio' },
                    { name : 'msapplication-starturl', content : '/' },
                    { name : 'author', content : 'Aghabala Guluzade' }
               ],
               link : [
                    { rel : 'shortcut icon', type : 'images/icons/aghabala-guluzade-website-favicon-color.png', href : 'image/x-icon' },
                    { rel : 'stylesheet', href : 'assets/fontaswesome/css/all.min.css' },
                    { rel : 'stylesheet', href : 'assets/fontaswesome/css/fontawesome.min.css' },
                    { rel : 'preconnect', href : 'https://fonts.googleapis.com' },
                    { rel : 'preconnect', href : 'https://fonts.gstatic.com'},
                    { rel : 'stylesheet', href : 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,400;1,500;1,600&amp;family=Roboto+Slab:wght@300;400;500;600;700&amp;display=swap' },
                    { rel : 'stylesheet', href : 'css/vendor/jquery.modal.min.css' },
                    { rel : 'stylesheet', href : 'css/vendor/slick.css' },
                    { rel : 'stylesheet', href : 'css/tailwind.css' },
                    { rel : 'stylesheet', href : 'css/custom.css' },

               ],
               script : [
                    { hid: 'dark-mode-script', innerHTML : `
                    if (localStorage.getItem("color-theme") === "dark" || (!("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
                        document.documentElement.classList.add("dark");
                    } else {
                        document.documentElement.classList.remove("dark");
                    }` },
                    { src : 'js/vendor/jquary.min.js', body : "true"  },
                    { src : 'js/vendor/jquery.modal.min.js', body : "true" },
                    { src : 'js/vendor/isotope.pkgd.min.js', body : "true" },
                    { src : 'js/vendor/slick.js', body : "true" },
                    { src : 'js/main.js',  body : "true"  }
               ]
          }
     }
})
