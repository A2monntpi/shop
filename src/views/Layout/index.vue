<script setup>
import LayoutNav from '@/views/Layout/compoents/LayoutNav.vue'
import LayoutHeader from '@/views/Layout/compoents/LatoutHeader.vue'
import LayoutFooter from '@/views/Layout/compoents/LayoutFooter.vue'
</script>

<template>
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>