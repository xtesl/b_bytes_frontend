<template>
      <section class="bg-gray-50">
    <!-- Hero Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Main Hero Banner - Improved Mobile Responsiveness -->
      <div class="relative overflow-hidden rounded-lg shadow-lg mb-8">
        <div class="relative">
          <!-- More responsive aspect ratio that works better on mobile -->
          <div class="aspect-[16/9] sm:aspect-[21/9]">
            <img 
              v-show="currentSlide === 0"
              src="https://i.dell.com/sites/csimages/App-Merchandizing_Images/all/dbcs-371801-notebook-inspiron-16-5630-14-7430-1920x1440.png"
              alt="Special offers" 
              class="w-full h-full object-cover transition-opacity duration-500"
              :class="currentSlide === 0 ? 'opacity-100' : 'opacity-0 absolute inset-0'"
            />
            <img 
              v-show="currentSlide === 1"
              src="https://i.pinimg.com/736x/3b/e5/d2/3be5d2c91c64dc240bef81e339c40d8f.jpg"
              alt="New arrivals" 
              class="w-full h-full object-cover transition-opacity duration-500"
              :class="currentSlide === 1 ? 'opacity-100' : 'opacity-0 absolute inset-0'"
            />
          </div>
            
          <!-- Banner Content - Repositioned for better mobile experience -->
          <div class="absolute inset-0 flex items-center">
            <!-- Gradient optimized to show more of the image on mobile -->
            <div class="w-full h-full absolute bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
            <div class="relative w-full md:w-1/2 p-6 md:p-12">
              <h1 class="text-3xl md:text-5xl font-bold text-white">
                Next-Gen Tech <br /><span class="text-yellow-300">At Your Fingertips</span>
              </h1>
              <p class="mt-3 md:mt-4 text-base md:text-lg text-white max-w-xl">
                Discover the latest electronic devices with cutting-edge technology and premium quality.
              </p>
              <div class="mt-4 md:mt-6 flex gap-3 md:gap-4">
                <a href="/products" class="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 md:px-6 py-2 md:py-3 rounded-md transition-colors duration-300 text-sm md:text-base">
                  Shop Now
                </a>
                <a href="/deals" class="bg-white hover:bg-gray-100 text-blue-600 font-medium px-4 md:px-6 py-2 md:py-3 rounded-md transition-colors duration-300 text-sm md:text-base">
                  View Deals
                </a>
              </div>
            </div>
          </div>
        </div>
          
        <!-- Carousel Indicators -->
        <div class="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          <button 
            v-for="(_, index) in 2" 
            :key="index"
            @click="currentSlide = index"
            class="w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors duration-300"
            :class="currentSlide === index ? 'bg-blue-600' : 'bg-white hover:bg-blue-200'"
            aria-label="Go to slide"
          ></button>
        </div>
      </div>
        
      <!-- Enhanced Featured Categories Grid with Images and Better Text -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8">
        <!-- Category 1 - Enhanced with Image -->
        <div class="group relative overflow-hidden rounded-lg bg-white shadow hover:shadow-lg transition-all duration-300">
          <div class="flex flex-col md:flex-row">
            <!-- Category Image -->
            <div class="relative w-full md:w-1/3 h-full md:h-auto overflow-hidden">
              <img 
                src="https://mobileshark.co.uk/blog/wp-content/uploads/ADBS_227624472-1-1024x640.jpeg" 
                alt="Smartphones" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <!-- Optional Overlay with Icon -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end md:items-center justify-center p-4 md:p-0">
                <div class="bg-blue-600 bg-opacity-90 rounded-full p-3 md:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            
            <!-- Category Content -->
            <div class="p-4 md:p-6 md:w-2/3 flex flex-col justify-center">
              <div class="hidden md:flex bg-blue-100 p-3 rounded-full w-14 h-14 items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                </svg>
              </div>
              <h3 class="text-lg md:text-xl font-medium text-gray-800">Smartphones</h3>
              <p class="mt-2 text-gray-600 text-sm md:text-base">The latest smartphones with cutting-edge features and exceptional camera quality.</p>
              <div class="mt-3">
                <span class="inline-flex items-center text-blue-600 font-medium text-sm md:text-base hover:text-blue-700">
                  Browse Smartphones
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <a href="/category/smartphones" class="absolute inset-0" aria-label="View smartphones"></a>
        </div>
          
        <!-- Category 2 - Enhanced with Image -->
        <div class="group relative overflow-hidden rounded-lg bg-white shadow hover:shadow-lg transition-all duration-300">
          <div class="flex flex-col md:flex-row">
            <!-- Category Image -->
            <div class="relative w-full md:w-1/3 h-w md:h-auto overflow-hidden">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxYYFl8_FfG2NhrlfNYBQook5NSeQ3Vnen1w&s" 
                alt="Laptops" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <!-- Optional Overlay with Icon -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end md:items-center justify-center p-4 md:p-0">
                <div class="bg-purple-600 bg-opacity-90 rounded-full p-3 md:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H9.771l-.592.236-.197.786-.197.786-.591-.236z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            
            <!-- Category Content -->
            <div class="p-4 md:p-6 md:w-2/3 flex flex-col justify-center">
              <div class="hidden md:flex bg-purple-100 p-3 rounded-full w-14 h-14 items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H9.771l-.592.236-.197.786-.197.786-.591-.236z" clip-rule="evenodd" />
                </svg>
              </div>
              <h3 class="text-lg md:text-xl font-medium text-gray-800">Laptops</h3>
              <p class="mt-2 text-gray-600 text-sm md:text-base">Powerful laptops for work, gaming, and everything in between with exceptional performance.</p>
              <div class="mt-3">
                <span class="inline-flex items-center text-purple-600 font-medium text-sm md:text-base hover:text-purple-700">
                  Browse Laptops
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <a href="/category/laptops" class="absolute inset-0" aria-label="View laptops"></a>
        </div>
      </div>
        
        <!-- Featured Products Grid -->
        <div class="mb-8">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl font-bold text-gray-800">Featured Products</h2>
            <a href="/products" class="text-blue-600 hover:text-blue-700 font-medium flex items-center">
              View All
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </a>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <!-- Product 1 -->
            <div class="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div class="aspect-square relative">
                <img src="https://images-cdn.ubuy.ae/6564d7b11d2faf30337e879b-wireless-earbuds-2023-bluetooth.jpg" alt="Product" class="w-full h-full object-cover" />
                <div class="absolute top-2 right-2">
                  <button class="bg-white rounded-full p-1.5 shadow hover:bg-gray-100" @click="toggleFavorite(0)">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" :class="favorites[0] ? 'text-red-500' : 'text-gray-600'" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                    </svg>
                  </button>
                </div>
                <div class="absolute top-2 left-2">
                  <span class="bg-yellow-400 text-yellow-800 text-xs font-medium px-2 py-1 rounded-md">SALE</span>
                </div>
              </div>
              <div class="p-4">
                <h3 class="font-medium text-gray-800 mb-1">Wireless Earbuds</h3>
                <p class="text-sm text-gray-500 mb-2">Premium sound quality</p>
                <div class="flex justify-between items-center">
                  <div>
                    <span class="text-blue-600 font-bold">$99.99</span>
                    <span class="text-gray-400 text-sm line-through ml-2">$129.99</span>
                  </div>
                  <button class="bg-blue-600 text-white p-1.5 rounded-md hover:bg-blue-700" @click="addToCart(0)">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            <!-- Product 2 -->
            <div class="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div class="aspect-square relative">
                <img src='https://ololoexpress.com/wp-content/uploads/classified-listing/2023/01/T100-Plus-Smart-Watch.webp' alt="Product" class="w-full h-full object-cover" />
                <div class="absolute top-2 right-2">
                  <button class="bg-white rounded-full p-1.5 shadow hover:bg-gray-100" @click="toggleFavorite(1)">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" :class="favorites[1] ? 'text-red-500' : 'text-gray-600'" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                    </svg>
                  </button>
                </div>
                <div class="absolute top-2 left-2">
                  <span class="bg-green-400 text-green-800 text-xs font-medium px-2 py-1 rounded-md">NEW</span>
                </div>
              </div>
              <div class="p-4">
                <h3 class="font-medium text-gray-800 mb-1">Smart Watch</h3>
                <p class="text-sm text-gray-500 mb-2">Health & fitness tracking</p>
                <div class="flex justify-between items-center">
                  <span class="text-blue-600 font-bold">$149.99</span>
                  <button class="bg-blue-600 text-white p-1.5 rounded-md hover:bg-blue-700" @click="addToCart(1)">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'EcommerceHomepage',
    data() {
      return {
        currentSlide: 0,
        slideInterval: null,
        favorites: [false, false],
        cart: [],
        products: [
          {
            id: 1,
            name: 'Wireless Earbuds',
            description: 'Premium sound quality',
            price: 99.99,
            originalPrice: 129.99,
            badge: 'SALE',
            badgeColor: 'yellow',
            image: ''
          },
          {
            id: 2,
            name: 'Smart Watch',
            description: 'Health & fitness tracking',
            price: 149.99,
            badge: 'NEW',
            badgeColor: 'green',
            image: 'https://ololoexpress.com/wp-content/uploads/classified-listing/2023/01/T100-Plus-Smart-Watch.webp'
          }
        ]
      }
    },
    mounted() {
      this.startSlideshow();
    },
    beforeUnmount() {
      this.stopSlideshow();
    },
    methods: {
      startSlideshow() {
        this.slideInterval = setInterval(() => {
          this.currentSlide = (this.currentSlide + 1) % 2;
        }, 5000);
      },
      stopSlideshow() {
        clearInterval(this.slideInterval);
      },
      toggleFavorite(index) {
        this.favorites[index] = !this.favorites[index];
        // In a real app, you'd make an API call to save this state
        if (this.favorites[index]) {
          this.$emit('add-to-favorites', this.products[index]);
        } else {
          this.$emit('remove-from-favorites', this.products[index]);
        }
      },
      addToCart(index) {
        this.cart.push(this.products[index]);
        // In a real app, you'd make an API call to update the cart
        this.$emit('add-to-cart', this.products[index]);
      }
    }
  }
  </script>