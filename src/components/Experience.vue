<template>
<div class="experience">
	<span class="title" id="experience">Edu & Exp</span>
    
    <div class="container">
    <div class="timeline">
    <ul>
      <li v-for="(item, index) in events" :key="index">
        <div class="timeline-content">
          <h3 class="date">{{item.date}}</h3>
          <pre>{{item.content}}</pre>
        </div>
      </li>
    </ul>
    
  </div>
    </div>
</div>
</template>

<script>


export default {
    
    data() {
        return {
            events: [
                {date: '2015.03 ~ 2021.02', content: `인하대학교 \n 전공 - 컴퓨터공학 \n 복수전공 - 통계학`},
                {date: '2020.07 ~ 2020.08', content: '빅데이터 청년인재'},
                {date: '2020.09 ~ 2020.11', content: 'AI Innovation 고급시각반'},
                {date: '2021.01 ~ 2021.12', content: '삼성 청년 SW 아카데미 5기'},
            ],
        }
    }
}
</script>

<style>

</style>