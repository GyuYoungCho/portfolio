<template>
  <div class="project">
    <span class="title" id="project">Project</span>
    <div id="project-container">
      <div id="project-carousel">
          
        <div
          v-for="(item, index) in items"
          :key="index"
          class="carousel__face"
          :style="{
            transform: `rotateY(  ${51 * index}deg) translateZ(350px)`,
            
          }"
          @click="$router.push(`project/${item.id}`)">
          <span class="carousel__title">{{item.title}}</span>
          <img :src="require(`@/assets/image/projectCard/${item.filepath}`)">
        </div>
        
      </div>
      
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    data(){
        return{
            
        }
    },
    computed:{
        ...mapState(['items'])
    },
    mounted(){
    }
}
</script>

<style>

</style>