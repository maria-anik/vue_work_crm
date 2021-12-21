<template>
  <ul class="sidenav app-sidenav " :class="{open: sidenavOpen}">
    <router-link
      v-for="link in links"
      :key = "link.url"
      tag="li"
      active-class="active"
      :to = "link.url"
      :exact="link.exact"
      >
      <a href="#" class="waves-effect waves-orange pointer">{{link.title}}</a>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: 'Sidenav',
  props: ['sidenavOpen'],
  data: () => ({
    links: [
      {
        title: 'Счет',
        url: '/',
        exact: true
      },
      {
        title: 'История',
        url: '/history'
      },
      {
        title: 'Планирование',
        url: '/planning'
      },
      {
        title: 'Новая запись',
        url: '/record'
      },
      {
        title: 'Категории',
        url: '/categories'
      }
    ]
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
