<template>
    <div>
        <Hello name="Bruce"/>
        <Hello name="Diana"/>
        <Hello name="Clark"/>
        <Hello name="Clark" :age="50"/>
    </div>
</template>

<script>
import Hello from './Hello.vue';

export default {
    name: 'App',
    components:{
        Hello,
    }
}
</script>

<style scoped>

</style>