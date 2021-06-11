

<template>
<div>
  <pre>{{JSON.stringify(fname+','+lname+','+age)}}</pre>
  <div>{{getFName()}}</div>
  <div>{{getFlName}}</div> 
  <button @click="fname='Batman'">Change Name</button> 
  <button @click="age+=1">Change Age</button> 
  <input type="text" v-model="country"/>  
  <!-- when change in binded country value, all methods will render again except computed methods -->

  <!--  we can use computed properties for filtering -->
      <template v-for="item in list">
        <div v-if="item!==1" :key=item>{{item}}</div>
      </template>

        <template v-for="item in expensiveItems">
        {{item}}
      </template>
</div>
</template>

<script>
export default {
  name: 'Computed',
  data(){
    return {
      
        fname: 'Rakesh',
        lname: 'A',
        age:30,
        country:'India',
        list: [1,2,3,4]
      
    }
  },
  methods: {
   getFName(){
     console.log('methods');
     return this.fname+' '+this.lname;
   }
  },
   computed: {
     getFlName: function(){
       console.log('computed');
        return this.fname+' '+this.lname;
     }
     ,
     expensiveItems: function(){
       return this.list.filter(item=>item!==1);
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
