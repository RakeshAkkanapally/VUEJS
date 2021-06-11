<template>
    <div>
        <h2>This is a v-model on component example</h2>
        <input type="text" :value="modelValue" @input="$emit('update:modelValue',$event.target.value)"/>
        <input type="text" :value="nextvalue" @input="$emit('update:nextvalue',$event.target.value)"/>
    </div>
</template>

<script>

export default {
    name: 'Input',
    props:{
        modelValue: String,
        nextvalue: String
    }
}

</script>

<style scoped>

</style>