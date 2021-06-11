<template>
<div>
    <h2>Popup Example</h2>
    <button @click="display=true">open</button>
    <Popup v-show="display" @close="closePopUp"/>

<!-- v-model on component -->
<hr/>
    <Input v-model="value" v-model:nextvalue="nextvalue"  />
</div>
</template>

<script>
import Popup from './Popup.vue';
 import Input from './Input.vue';

export default {
    name: 'App',
    data(){
        return {
            display: false,
            name:'',
            value:'',
            nextvalue:''
        }
    },
    components:{
        Popup,Input
    },
    methods:{
        closePopUp(name){
            this.display=false;
            console.log(name);
        }
    }
}
</script>

<style scoped>

</style>