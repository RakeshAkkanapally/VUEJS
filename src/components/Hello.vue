<template>
    <h2>Hello {{name}} {{age}}</h2>
</template>

<script>
export default {
    name: 'Hello',
    props: {
        name : {
            type: String,
            required: true,
            default: 'Mr'
        },
        age :{
            type: Number
        }
    },
    data(){
        return{

        }
    }
}

</script>

<style scoped>

</style>