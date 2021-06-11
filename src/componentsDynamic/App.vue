<template>
    <button @click="display='TabA'" >Tab A</button>
    <button @click="display='TabB'" >Tab B</button>
    <button @click="display='TabC'" >Tab C</button>

    <keep-alive>
    <component :is="display" />
    </keep-alive>
<!-- <TabA v-show="showTab('A')"/>
<TabB v-show="showTab('B')"/>
<TabC v-show="showTab('C')"/> -->
</template>

<script>
import TabA from './TabA.vue';
import TabB from './TabB.vue';
import TabC from './TabC.vue';

export default {
    name: 'App',
    components: {
        TabA,
        TabC,
        TabB
    },
    data(){
        return {
            display: ''
        }
    }    
}
</script>

<style lang="scss" scoped>

</style>