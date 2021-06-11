<template>
  <div>
    <button>Post</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PostLists",
  data(){ 
      return {
          posts: []
      }
  },
  methods: {
      getPosts(){
          return axios.get("https://jsonplaceholder.typicode.com/posts");
      }
  }
};
</script>

<style scoped></style>
