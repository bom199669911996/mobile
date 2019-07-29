<template>
    <div class="loginContainer">
        <!-- 导航栏部分 -->
        <van-nav-bar title="登录"/>
        <!-- 输入框 -->
        <form action="/">
            <van-cell-group>
            <van-field
                v-model="user.mobile"
                label="用户名"
                placeholder="请输入用户名"
                required
                clearable
            />
            <van-field
             v-model="user.code"
              type="password"
              label="密码"
              placeholder="请输入密码"
               required/>
            </van-cell-group>
         </form>
        <van-button type="info" block @click="handlelogins">登录</van-button>
    </div>
</template>

<script>
// 原始发送
// import axios from 'axios'
// 封装了request
// import request from '../../utils/request.js'
// 封装了api请求模块
import { login } from '@/api/user.js'
// 封装了token
import { mapMutations } from 'vuex'
export default {
  name: 'loginIndex',
  data () {
    return {
      user: {
        mobile: '18801185985',
        code: '246810'
      }
    }
  },
  methods: {
    ...mapMutations[' setuser'],
    async handlelogins () {
      // 点击按钮发送请求
      try {
        const data = await login(this.user)
        console.log(data)
        // 成功后记录token
        // setuser(data.token)
        this.$store.commit('setuser', data)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.van-nav-bar {
  background-color: #4789FA;
  .van-nav-bar__title {
      color: #fff;
  }
}
</style>
