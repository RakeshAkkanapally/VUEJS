<template>
    <div>
        <h2>This is a popup</h2>
        <input type="text" v-model="name" />
        <button @click="$emit('close',name)">close</button>
    </div>
</template>

<script>

export default {
    name: 'Popup',
    // emits: ['close']
    emits:{ //validation
        close(name){
            if(!name){
                console.log('name is blank');
            }else{
                return true
            }
        }
    },
    data(){
        return{
            name:''
        }
    }
   
}

</script>

<style scoped>

</style>