<template>
<div>
    <Card>Card Content</Card>
    <Card>Card Content2</Card>
    <Card>
        <img src="https://via.placeholder.com/150" />
    </Card>

    <!-- Named slots -->
    <hr/>
    <Card2>
        <template v-slot:header>
            <h3>card content slot header</h3>
        </template>
</Card2>
        <Card2>
        <template v-slot:default>
            card content slot default
        </template>
        </Card2>
        <Card2>
        <template v-slot:footer>
            card content slot footer
            <button>Cool</button>
        </template>
    </Card2>

<!-- Slots Props -->

    <Card3>
        <template v-slot:default="slotProps">
            <h3>{{slotProps.firstname}} {{slotProps.lastname}}</h3>
        </template>

    </Card3>

     <Card3>
        <template v-slot:default="slotProps">
            <h3>{{slotProps.lastname}} {{slotProps.firstname}}</h3>
        </template>

    </Card3>
</div>
</template>

<script>
import Card from './Card.vue';
import Card2 from './Card2.vue';
import Card3 from './Card3.vue';

export default {
    name: 'App',
    data(){
     

    },
    components:{
        Card,
        Card2,
        Card3
    }
}
</script>

<style scoped>

</style>
