<template>
    <section class="skills">
        <span class="title" id="skill">Career</span>
        <div class="section-content">
            
            <div class="col-md-2" v-for="(skill, index) in this.skills" :key="index">
                
                <div class="skill">
                    <img class="mx-auto" :src="getImgUrl(skill.img)" :alt="skill.title"/>
                    <div class="altCaption text-center">{{skill.title}}</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex';
export default {
    data(){
        return{
    
        }
    },
    computed:{
        ...mapState(['skills'])
    },
    methods: {
        getImgUrl(img) {
            return require('../assets/image/stack/'+img);
        },
    },
}
</script>

<style>
</style>