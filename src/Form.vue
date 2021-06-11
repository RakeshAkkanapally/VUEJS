<template>
<div>
  <pre>{{JSON.stringify(formValues)}}</pre>
  <form @submit.prevent>
    
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" v-model.trim.lazy="formValues.name"/> 
    </div>

    <div>
      <label for="country">Country</label>
      <select id="country" multiple v-model="formValues.country">
        <option value="">Select a Country</option>
        <option value="India">India</option>
        <option value="China">China</option>
        <option value="USA">USA</option>
      </select>
    </div>

    <div>
      <label for="remoteWork"> Willing to work remotely?</label>
      <input type="checkbox" id="remoteWork" v-model="formValues.remoteWork" true-value="yes" false-value="no"/>
    </div>

    <div>
      <label> SkillSet</label>
      <label for="HTML"> HTML</label>
      <input type="checkbox" id="HTML" value="HTML" v-model="formValues.SkillSet" />
      <label for="CSS"> CSS</label>
      <input type="checkbox" id="CSS" value="CSS" v-model="formValues.SkillSet" />
    </div>

      <div>
      <label> Experience</label>
      <label for="0-2"> 0-2</label>
      <input type="radio" id="0-2" value="0-2" v-model="formValues.Experience" />
      <label for="2-5"> 0-5</label>
      <input type="radio" id="2-5" value="2-5" v-model="formValues.Experience" />
       <label for="5-8"> 5-8</label>
      <input type="radio" id="5-8" value="5-8" v-model="formValues.Experience" />
    </div>

    <div>
      <label for="age">Age</label>
      <input type="number" id="age" @keyup.enter="submitForm" v-model.number="formValues.age"/>      
    </div>

    <!-- <div>
      <button >Submit</button>
    </div> -->

    <div v-pre>
      {{name}}
    </div>
<span v-pre>{{ this will not be compiled }}</span>
  </form>
</div>
</template>

<script>
export default {
  name: 'Form',
  data(){
    return {
      formValues: {
        name: '',
        country:[],
        remoteWork:'',
        SkillSet:[],
        Experience:'',
        age:null
      }
    }
  },
  methods: {
    submitForm(){
    //  e.preventDefault();
      console.log(this.formValues);
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
