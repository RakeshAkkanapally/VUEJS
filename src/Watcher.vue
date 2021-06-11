<template>
<div>
    <div>{{counter}}</div>
    <button @click="counter+=2">Increment</button>
    <button @click="counter-=2">Decrement</button>
    <input type="text" v-model="movie"/>
    <input type="text" v-model="movieInfo.title"/>
</div>
</template>

<script>
export default {
  name: 'Watcher',
  data(){
    return {
      counter: 0,
      movie:'batman',
      movieInfo: {
        title:'',
        actor:''
      }
    }
  },
  methods: {},
  computed: {},
  watch: {
    counter(newvalue,oldvalue){
      if(newvalue>oldvalue && newvalue>10){
      alert('High volume causes ear damage');
     }
    },
    movie:{
      handler(){
              console.log('An api is invoked');
      },
      immediate:true,
    },
    movieInfo:{
      handler(newvalue){
              console.log(`An api is invoked${newvalue.title}, ${newvalue.actor}`);
      },
      deep:true,
    }
  }
}
</script>

<style scoped>
#app{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>