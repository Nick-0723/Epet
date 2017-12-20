<template>
  <div class="shopCart">
    <div class="header">
      <div class="headerTop">
        <div class="comeBack">
          <router-link to="/classify/tab1">
            <img src="./triangleicon.png">
          </router-link>
        </div>
        <span class="text">购物车</span>
        <div class="showShop" @click="isShowDiv">
          <img src="./menuicon.png">
        </div>
      </div>
      <div class="headerShow" v-show="isShow">
        <ul class="list">
          <li>
            <a href="javascript:">
              <div></div>
              <span>首页</span>
            </a>
          </li>
          <li>商品分类</li>
          <li>购物车</li>
          <li>我的e宠</li>
        </ul>
      </div>
    </div>
    <div class="shopCartContent" >
      <div class="shopCartIcon"></div>
      <div class="btnWrap">
        <router-link to="/home" class="toHome">
          <mt-button type="default" class="btn1">
            去逛逛
           </mt-button>
        </router-link>
        <router-link to="/home" class="toHome">
          <mt-button type="default" class="btn2">我的收藏</mt-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        isShow: false
      }
    },
    methods:{
      isShowDiv(){
        this.isShow = !this.isShow
        console.log ( 'isShow:'+ this.isShow )
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .shopCart
    background-color #f3f4f5
    .header
      .headerTop
        line-height 50px
        height 50px
        background-color white
        .comeBack
          position absolute
          display inline-block
          width 50px
          a
            margin-left 10px
            display inline-block
            img
              width 50%
              height 50%
        .text
          position absolute
          left 50%
          transform translateX(-50%)
          margin 0 auto
          font-size 18px
        .showShop
          position absolute
          right 0
          img
            width 50%
            height 50%

      .headerShow
        height 75px
        background-color white
        overflow hidden
        border 1px solid #f3f4f5
        .list
          li
            width 25%
            float left
            text-align center
            line-height 75px

    .shopCartContent
      position relative
      overflow hidden
      background-color white
      min-height 298px
      border 1px solid #f3f4f5
      width 100%
      .shopCartIcon
        width 150px
        height 150px
        margin 0 auto
        background url("icon.png") no-repeat
        background-size 600%
        background-position -635px -300px

      .btnWrap
        position absolute
        overflow hidden
        width 100%
        bottom 50px
        margin 0 auto
        left 21%
        .toHome
          a
            color #999
          .btn1, .btn2
          //display inline-block
            width 100px
            height 40px
            line-height 40px
            margin 0 4px
            border 1px solid #999
            border-radius 8px
            font-size 16px
            color #999
            background-color white

</style>
