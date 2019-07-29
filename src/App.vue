<template>
  <div id="app">
    <h1></h1>
    <van-button type="danger">危险按钮</van-button>
    <router-view/>
  </div>
</template>

<style lang="less">
#app{
  width:375px;
  height:100px;
  background:green;
}
</style>
