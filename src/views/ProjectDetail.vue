<template>
  <div class="project-detail">
    <div class="project__card" 
       :style="cardStyle">
      <div class="image__wrapper">
        <img :src="require(`@/assets/image/mainImage/${imageUrl}`)" class="project__image" />
      </div>
      <div class="title">{{ title }}</div>
      <div class="description">{{ description }}</div>
      
    </div>
    <hr id="text">
    <div class="text_info">
      <h2> Text </h2>
      <div class="od">기간 : {{duration}}</div>
      <div class="od">인원 : {{people}}</div>
      <div class="od">역할 : {{role}}</div>
      <div class="od">Github : <a :href="github">{{github}}</a></div>
    </div>
    <hr id="architecture">
    <div class="arch_info">
      <h2> Architecture </h2>
      <div class="img__wrapper">
        <img :src="require(`@/assets/image/architecture/${imageUrl}`)"  />
      </div>
    </div>
    <hr id="implement">
    <div class="impl_info">
      <h2> Implement </h2>
      <div class="stage"  v-for="(stage, index) in stages" :key="index">
        <div class="img__wrapper">
          <img :src="require(`@/assets/image/${stage.imgurl}`)"  />
        </div>
        <div class="info-wrapper">
          {{stage.info}}
        </div>
      </div>
    </div>

    <hr id="Issue">
    <div class="issue_info">
      <h2> Issue </h2>
      
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {

    computed: {
        ...mapState(['items']),
        cardStyle() {
            return {
                background: this.backgroundColor 
            };
        },
        listLinks() {
        return this.links || [];
        },
        linkStyle() {
        return {
            background: this.backgroundColor ,
            'box-shadow': `0 4px 15px -5px ${this.backgroundColor }`,
        };
        },
        listStacks() {
        return this.stacks || [];
        },
        title(){
          return this.items[this.pro_id-1].title
        },
        description(){
          return this.items[this.pro_id-1].description
        },
        imageUrl(){
          return this.items[this.pro_id-1].filepath
        },
        people(){
          return this.items[this.pro_id-1].people
        },
        role(){
          return this.items[this.pro_id-1].role
        },
        duration(){
          return this.items[this.pro_id-1].duration
        },
        github(){
          return this.items[this.pro_id-1].github
        },
        stages(){
          return this.items[this.pro_id-1].stages
        }
    },
    filters: {
        stackStyle(idx) {
        return {
            'transition-delay': `${idx / 30}s`,
        };
        },
    },
    data() {
        return {
        show: false,
        timeoutId: undefined,
        showDetail: false,
        pro_id : this.$route.params.id,
        detail : "hi",
        };
        
    },
    methods: {
        
    },
}
</script>

<style>

</style>