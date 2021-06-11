<template>
<div>
    <h2>{{username}}</h2>
    <ComponentC />
</div>
</template>

<script>
import ComponentC from './ComponentC.vue';

export default {
    name: 'App',
    data(){
        return {
            username: 'Rakesh'
        }
    },
    components:{
        ComponentC,
    },
    // provide: {
    //     username: 'Rakesh'
    // }
    provide(){
        return {
            username: this.username
        }
    }
}
</script>

<style scoped>

</style>