<template>
    <div class="reactive">
      <h2>reactive</h2>
      <hr>
       普通取值:{{ testData.name }}--{{testData.age}}
      <a-input v-model:value="testData.name"></a-input>
    </div>
</template>

<script setup>
import {reactive} from "vue";
let testData = reactive({
      name:'sad',
      age:16
    })


// export default {
//   name: "index",
//   setup(){
//     let testData = reactive({
//       name:'sad',
//       age:16
//     })
//     return{
//       testData
//     }
//   }
// }
</script>

<style scoped>

</style>
