<template>  
    <div class="personal">
        <h2>账号数量：<input type="text" v-model="name"> <br></h2>
        <hr>
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <h2>地址：{{ address }}</h2>    
        <button @click="changename">修改姓名</button>
        <button @click="changeage">修改年龄</button>
        <button @click="showTel">查看联系方式</button>
    </div>
</template>
<script lang="ts" setup name="userok">
    
</script>

<style scoped>
    .personal{
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius:  10px;
        padding: 20px;
    }
</style>