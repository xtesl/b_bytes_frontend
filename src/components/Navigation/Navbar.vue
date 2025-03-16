<template>
    <nav class="sticky top-0 bg-white shadow-md z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <a href="/" class="text-xl font-bold text-teal-500">TechGadgets</a>
          </div>
  
          <!-- Mobile menu button -->
          <div class="flex md:hidden">
            <button @click="toggleMobileMenu" class="text-gray-700 hover:text-teal-500 focus:outline-none">
              <svg v-if="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
  
          <!-- Desktop Navigation -->
          <div class="hidden md:flex md:items-center md:space-x-8">
            <!-- Desktop Nav Links -->
            <div class="hidden md:block">
              <div class="flex items-center space-x-6">
                <a href="/" class="text-gray-700 hover:text-teal-500 px-3 py-2 font-medium">Home</a>
                <a href="/products" class="text-gray-700 hover:text-teal-500 px-3 py-2 font-medium">Products</a>
                <a href="/deals" class="text-gray-700 hover:text-teal-500 px-3 py-2 font-medium">Deals</a>
                <a href="/support" class="text-gray-700 hover:text-teal-500 px-3 py-2 font-medium">Support</a>
              </div>
            </div>
  
            <!-- Search Bar (Desktop) -->
            <div class="relative w-64 lg:w-96">
              <input type="text" placeholder="Search for products..." class="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent">
              <button class="absolute inset-y-0 right-0 flex items-center px-3 text-teal-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
  
            <!-- Cart Icon -->
            <div class="relative">
              <a href="/cart" class="text-gray-700 hover:text-teal-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span class="absolute -top-2 -right-2 bg-teal-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">0</span>
              </a>
            </div>
          </div>
        </div>
  
        <!-- Mobile Search Bar (always visible on mobile) -->
        <div class="md:hidden my-3">
          <div class="relative">
            <input type="text" placeholder="Search for products..." class="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent">
            <button class="absolute inset-y-0 right-0 flex items-center px-3 text-teal-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
  
      <!-- Mobile Navigation Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
          <a href="/" class="block px-3 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-500 font-medium">Home</a>
          <a href="/products" class="block px-3 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-500 font-medium">Products</a>
          <a href="/deals" class="block px-3 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-500 font-medium">Deals</a>
          <a href="/support" class="block px-3 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-500 font-medium">Support</a>
        </div>
        <!-- Mobile Cart (visible only when menu is open) -->
        <div class="px-5 py-3 border-t border-gray-200">
          <a href="/cart" class="flex items-center text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>Cart (0)</span>
          </a>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const mobileMenuOpen = ref(false);
  
  const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value;
  };
  </script>