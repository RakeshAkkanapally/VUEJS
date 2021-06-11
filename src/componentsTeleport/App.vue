<template>
    <div>App
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ipsa necessitatibus itaque consequuntur in maxime sed dolorem adipisci eaque! Mollitia odio libero obcaecati ab quo voluptatibus vitae voluptate nobis cupiditate!
    </div>
        <button @click="modalOpen = true">
        Open full screen modal!
    </button>
    
    <teleport to="#portal-root">
        <Portal v-show="modalOpen" @close="modalOpen=false">
            This is text
        </Portal>
    </teleport>

</template>

<script>
import Portal from './Portal.vue';
export default {
    name:'App',
    components:{
        Portal,
    },
        data(){
        return {
            modalOpen: false,
        }
    }
}
</script>

<style scoped>

</style>