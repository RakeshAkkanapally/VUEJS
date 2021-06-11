<template>
    <div>
        <h2>ComponentD</h2>
        <ComponentE />
    </div>
</template>

<script>
import ComponentE from './ComponentE.vue';

export default {
    name: 'ComponentD',
    components:{
        ComponentE,
    }
   
}

</script>

<style scoped>

</style>