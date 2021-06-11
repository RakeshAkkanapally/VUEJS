<template>
<div class="card">
    <h3 v-for="item in items" :key="item.name">
      <slot :firstname="item.firstname" :lastname="item.lastname"></slot>
    </h3>
</div>
</template>

<script>

export default {
    name: 'Card3',
    data(){
      return {
        items: [{
              firstname:'Feed a cat',
              lastname: 'Buy milk'
            },
              {firstname:'Feed a dog',
              lastname: 'Buy bread'
            }
            ]
      }
    }
    
}

</script>

<style scoped>

.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  margin-bottom: 20px;
  padding: 16px;
  width:200px
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
</style>