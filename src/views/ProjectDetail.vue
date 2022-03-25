<template>
  <div class="project-detail">
    <div class="project__card" 
       :style="cardStyle">
      <div class="image__wrapper">
        <img :src="require(`@/assets/image/mainImage/${imageUrl}`)" class="project__image" />
      </div>
      <div class="title"><pre>{{ title }}</pre></div>
      <div class="description">{{ description }}</div>
      
    </div>
    <hr id="info">
    <div class="text_info">
      <h2> Info </h2>
      <div class="od">기간 : {{duration}}</div>
      <div class="od">인원 : {{people}}</div>
      
      <div class="od">Stack : {{stacks}}</div>
      <div class="od">Github : <a :href="github">{{github}}</a></div>
    </div>
    <hr id="architecture" v-if="is_arch()">
    <div class="arch_info" v-if="is_arch()">
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
          <pre>{{stage.info}}</pre>
        </div>
      </div>
    </div>

    <hr id="Content">
    <div class="content_info">
      <h2> Content </h2>
        <div class="role__wrapper">
          <h3> 역할 </h3>
          <div class="comment" v-for="(r, index) in role" :key="index">
            <pre><i class="fas fa-thumbtack"></i>&nbsp;{{r}}</pre>
          </div>
        </div>
        <div class="gg__wrapper">
          <h3 v-if="gg"> 좋았던 점 및 성과 </h3>
          <div class="comment" v-for="(g, index) in gg" :key="index">
            <pre><i class="fas fa-medal"></i> &nbsp;{{g}}</pre>
          </div>
          
        </div>
        <div class="bb__wrapper">
          <h3 v-if="bb"> 아쉬운 점 및 발전 방향 </h3>
          <div class="comment" v-for="(b, index) in bb" :key="index">
            <pre><i class="fas fa-highlighter"></i> &nbsp;{{b}}</pre>
          </div>
        </div>
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
          if(this.items[this.pro_id-1].subtitle){
            return this.items[this.pro_id-1].title + `\n`+ this.items[this.pro_id-1].subtitle
          }
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
        stacks(){
          return this.items[this.pro_id-1].stacks
        },
        stages(){
          return this.items[this.pro_id-1].stages
        },
        gg(){
          return this.items[this.pro_id-1].gg
        },
        bb(){
          return this.items[this.pro_id-1].bb
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
        is_arch(){
          let a
          try{
            a = require(`@/assets/image/architecture/${this.imageUrl}`)
              
          } catch(e){
            return false
          }
          if(a) return true 
          else false
        }
    },
}
</script>

<style>

</style>