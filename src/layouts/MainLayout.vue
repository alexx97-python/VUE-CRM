<template>
    <div class="app-main-layout">

      <Navbar
      @toggle-sidebar="isSidebarOpen = !isSidebarOpen"/>

      <Sidebar v-model="isSidebarOpen"/>

    <main class="app-content" :class="{full: !isSidebarOpen}">
        <div class="app-page">
            <router-view />
        </div>
    </main>

    <div class="fixed-action-btn">
        <a class="btn-floating btn-large blue" href="#">
            <i class="large material-icons">add</i>
        </a>
    </div>
</div>
</template>

<script>
import Sidebar from '@/components/app/Sidebar.vue'
import Navbar from '@/components/app/Navbar.vue'

export default {
  name: 'main-alyout',
  data: () => ({
    isSidebarOpen: true
  }),
  components:{
    Sidebar,
    Navbar
  }
}
</script>
