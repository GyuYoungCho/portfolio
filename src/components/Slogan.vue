<template>
  <div class="slogan">
      <transition name="slide">
      <span class="slo_title" v-if="show">안녕하세요!<br>
        <span class="slo_key">Trendy</span>
        
        한 개발자 조규영입니다!</span> 
      </transition>
  </div>
</template>

<script>
export default {
  data(){
    return{
      show : false,
    }
  },
  mounted(){
    this.show = true;
  }
}
</script>
