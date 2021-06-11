<template>
<div>
  {{count}}
  <button v-on:click="increment">Increment</button>
  <button @click="decrement, decrement($event)">Decrement</button>
</div>
</template>

<script>
export default {
  name: 'Methods',
  data(){
    return {
      count: 0
    }
  },
  methods: {
    increment(){
      return this.count+=1;
    },
    decrement(event){
      console.log(event);
      return this.count-=1;
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
