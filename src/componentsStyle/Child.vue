<template>
    <div>        
        <h3>This is child.</h3>
    
    <div class="container">
        This is a container
    </div>

    <slot></slot>
    </div>
</template>

<script>
    export default {
        name:"Child"
    }
</script>

<style>
h3 {
    color: red;
}

.container {
    color:green;
}

</style>