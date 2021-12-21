<template>
  <div class="app-main-layout">
    <Header @click="sidenavOpen = !sidenavOpen" />
    <Sidenav
    v-bind:sidenavOpen="sidenavOpen"
    />
    <main class="app-content" :class="{full: !sidenavOpen}">
      <div class="app-page">
        <router-view/>
      </div>
    </main>
    <div class="fixed-action-btn">
      <router-link to="/record" class="btn-floating btn-large blue">
        <i class="large material-icons">add</i>
      </router-link>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Sidenav from '@/components/Sidenav.vue'

export default {
  name: 'Home',
  data: () => ({
    sidenavOpen: true,
    title: 'Что-то',
    sidenav: {
      sidenavOpen: true,
      title: 'Что-то'
    }
  }),
  components: {
    Header, Sidenav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
