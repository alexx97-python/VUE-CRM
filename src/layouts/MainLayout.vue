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
        <router-link class="btn-floating btn-large blue" to="/record">
            <i class="large material-icons">add</i>
        </router-link>
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
  async mounted() {
    if (!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch('fetchInfo')
    }
  },
  components:{
    Sidebar,
    Navbar
  }
}
</script>
