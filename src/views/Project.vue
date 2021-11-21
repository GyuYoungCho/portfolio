<template>
  <div class="project">
    <span>My Project</span>
    <div class="container">
      <div class="carousel">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="carousel__face"
          :style="{
            transform: `rotateY(  ${30 * index}deg) translateZ(430px)`,
          }">
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            items:['삼성','삼성','삼성','삼성','삼성','삼성','삼성','삼성','삼성','삼성','삼성','삼성',]
        }
    }
}
</script>

<style>

</style>