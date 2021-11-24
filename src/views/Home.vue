<template>
  <div>
      <Slogan />
      <About />
      <Project />
      <Skills />
      <Experience/>
  </div>
</template>

<script>
import Slogan from "@/components/Slogan.vue";
import About from "@/components/About.vue";
import Skills from "@/components/Skills.vue";
import Project from "@/components/Project.vue";
import Experience from "@/components/Experience.vue";
export default {
    components:{
        Slogan,
        About,
        Skills,
        Project,
        Experience
    }
}
</script>

<style>

</style>