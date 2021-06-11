<template>
    <div>
        <h2>ComponentE</h2>
        <h3>Hello {{username}}</h3>
    </div>
</template>

<script>

export default {
    name: 'ComponentE',
    inject:['username']
   
}

</script>

<style scoped>

</style>