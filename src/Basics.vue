<template>
<div>
  <div>Hello {{name}}</div>
  <div v-text="hero"></div>
  <div v-html="hero"></div>
  <div v-bind:id="headingId">Heading</div>
  <div v-bind:class="isPromoted && 'promoted'"> class </div>
  <div v-bind:class="{
    promoted: isPromoted }"> object class</div>
  <div v-bind:style="basicStyleObject">basicStyleObject</div>
  <div :style="[basicStyleObject,successStyleObject]">successStyleObject</div>
  <div :style="[basicStyleObject,failureStyleObject]">failureStyleObject</div>  
  <div v-if="num===0">Zero</div>
  <div v-else-if="num>0">Positive</div>
  <div v-else-if="num<0">Negative</div>
  <div v-else>not a number</div>
  <div v-show="dis">display:none or inline</div>
  <div v-bind:[someAttr]="someAttr">{{"dynamic Attribute"}}</div>

  <div v-for="movie in movies" :key="movie">
    {{movie}}
  </div>
  <h2 v-for="name in fullNames" :key="name">
    {{name.first}} {{name.last}}
    <div v-for="movie in name.movies" :key="movie">
      {{movie}}
    </div>
    <hr/>
  </h2>
  <template v-for="(value,name,index) in movies">
      {{value}}{{name}}{{index}}
    </template>
</div>
</template>

<script>

export default {
  name: 'Basics',
  data(){
    return {
      name: "Rakesh",
      hero: "<b>Batman</b>",
      headingId: 'id',
      isPromoted: true,
      basicStyleObject: {
        fontSize: 12+'px'
      },
      successStyleObject:{
        color: 'green'
      },
      failureStyleObject:{
        color: 'red'
      },
      num:'text',
      dis:true,
      someAttr: "dynamicAttri",
      movies: ['Batman begins','The Dark knight','The Dark knight rises'],
      fullNames:[
        {first: 'Christian', last: 'Bale', movies:['The Prestige','American Physco']},
        {first: 'Prince', last: 'Diana', movies:['Wonder woman', 'Wonder woman 1987']},
        {first: 'Clark', last: 'Kent', movies:['Superman','Superman vs Batman']}
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.promoted {
  color: red;
}
</style>
