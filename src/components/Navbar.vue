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
                  <a href="#experience">Edu & Exp</a>
              </li>
              <li>
                  <a href="#skill">Skills</a>
              </li>
              <li>
                  <a href="#project">Project</a>
              </li>
          </ul>
        </div>
        <div class="menus" v-if="$route.name=='ProjectDetail'">
          <ul>
              <li>
                  <a href="#info">Info</a>
              </li>
              <li>
                  <a href="#architecture">Architecture</a>
              </li>
              <li>
                  <a href="#implement">Implement</a>
              </li>
              <li>
                  <a href="#content">Content</a>
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
