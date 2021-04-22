<template>
<div>
    <Loader v-if="loading"/>
    <div v-else class="app-main-layout">

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
</div>
</template>

<script>
import Sidebar from '@/components/app/Sidebar.vue'
import Navbar from '@/components/app/Navbar.vue'
import Loader from '../components/app/Loader.vue'

export default {
  name: 'main-alyout',
  data: () => ({
    isSidebarOpen: true,
    loading: true
  }),
  async mounted() {
    if (!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch('fetchInfo')
    }

    this.loading = false
  },
  components:{
    Sidebar,
    Navbar,
    Loader
  }
}
</script>
