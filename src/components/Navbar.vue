<template>
  <section class="nav">
    <nav class="fixed-top">
        <router-link class="title" :to="{ name: 'Home' }">GyuYoung</router-link>
        <div class="menus">
        <router-link
            :class="[page === 'About' ? 'current' : '', 'menu-item']"
            :to="{ name: 'About' }"
            >About</router-link
        >
        <router-link
            :class="[page === 'Project' ? 'current' : '', 'menu-item']"
            :to="{ name: 'Project' }"
            >Project</router-link
        >
        <router-link 
            :class="[page === 'Code' ? 'current': '', 'menu-item']"
            :to="{ name: 'Code' }"
        >Works</router-link>
        </div>
    </nav>
  </section>
</template>

<script>
export default {
    computed: {
        page() {
            return this.$route.name;
        },
  },
}
</script>

<style>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 2rem;
}
nav .title {
  font-family: Roboto;
  font-style: italic;
  font-weight: bold;
  font-size: 1.5rem;
  text-decoration: none;
  cursor: pointer;
  color: inherit;
}
.menus {
  display: flex;
  gap: 1rem;
  padding: 0.25rem 1rem;
}
.menu-item {
  font-weight: 300;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}
.current {
  font-weight: 500;
}
</style>