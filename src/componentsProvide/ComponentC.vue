<template>
    <div>
        <h2>ComponentC</h2>
        <ComponentD />
    </div>
</template>

<script>
import ComponentD from './ComponentD.vue';

export default {
    name: 'ComponentC',
    components:{
        ComponentD,
    }
   
}

</script>

<style scoped>

</style>