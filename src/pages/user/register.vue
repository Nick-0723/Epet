<template>
  <div class="register">
    <div class="registerWrapper">
      <div class="reg">
        <span class="s1"></span>
        <input type="text" placeholder="手机号/邮箱/用户名">
      </div>
      <div class="button">下一步</div>
    </div>
    <div class="next">
      <ul class="inputnumber">
        <li>
          <span class="s3"></span>
          <input type="text" placeholder="请输入手机号或邮箱">
        </li>
        <li>
          <span class="s2"></span>
          <input type="text" placeholder="图片验证">
          <a><img src="./seccode.png" alt=""></a>
        </li>
        <li>
          <span class="s2"></span>
          <input type="text" placeholder="验证码">
          <span class="right">获取动态密码</span>
        </li>
        <li>
          <span class="s2"></span>
          <input type="text" placeholdet="你的用户/昵称">
        </li>
        <li>
          <span class="s2"></span>
          <input type="text" placeholdet="设置密码">
        </li>
        <li>
          <span class="s2"></span>
          <input type="text" placeholder="确认密码">
        </li>
      </ul>
      <div class="button">下一步</div>
    </div>
  </div>
</template>

<script>
  import {Toast} from 'mint-ui';
  import {mapStart} from 'vuex';
  import  axios from 'axios';
  export default {
     data() {
        return {

        }
     },
     methods: {

     }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
