<template>
    <div>
        
    <h3>Parent content.</h3> 

    <div class="container">
        This is a container
    </div>

    <Child>
        <h3>This is slot from parent to child</h3>
    </Child>

   </div>
</template>

<script>
import Child from './Child.vue';

export default {
    components: {
        Child,
    },        
    }
</script>

<style scoped>
h3 {
    color: blue;
}

.container {
    color: yellow;
}

</style>