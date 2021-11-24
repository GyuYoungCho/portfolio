<template>
  <section class="navbar">
    <nav class="fixed-top">
        <router-link class="title" :to="{ name: 'Home' }">GyuYoung</router-link>
        <div class="menus" v-if="$route.name=='Home'">
          <ul>
              <li>
                  <a href="#about">About</a>
              </li>
              <li>
                  <a href="#project">Project</a>
              </li>
              <li>
                  <a href="#skill">Skills</a>
              </li>
              <li>
                  <a href="#experience">Experience</a>
              </li>
          </ul>
        </div>
        <div class="menus" v-if="$route.name=='ProjectDetail'">
          <ul>
              <li>
                  <a href="#text">Text</a>
              </li>
              <li>
                  <a href="#architecture">Architecture</a>
              </li>
              <li>
                  <a href="#implement">Implement</a>
              </li>
              <li>
                  <a href="#issue">Issue</a>
              </li>
          </ul>
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