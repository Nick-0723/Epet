<template>
  <div class="categorybox">
     <div class="categoryHeader" v-show="isShow">
       <div class="sort nav-sort">
         <router-link to="/category/tab1">分类</router-link>
       </div>

       <div class="brand nav-sort">
         <router-link to="/category/tab2">品牌</router-link>
       </div>
     </div>
     <div class="showContent">
       <keep-alive>
         <router-view></router-view>
       </keep-alive>
     </div>
  </div>
</template>

<script>

  export default{
    data() {
      return {
        isShow: true
      }
    },
    methods: {
      Show () {
        this.isShow = !isShow
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
 .categorybox
   width 100%
   height 100%
   overflow hidden
   .categoryHeader
     z-index 10
     position absolute
     box-sizing border-box
     padding 0 15px
     width 100%
     height 40px
     display flex
     background-color white
     border-bottom: 1px solid #cbcbcb;
     .nav-sort
       width  50%;
       height  40px;
       line-height  40px
       box-sizing border-box
       & > a
         display inline-block
         width 40px
         height 40px
         font-weight 700
         &.active
           color red
     .sort
       text-align  right
       padding-right  5%
     .brand
       padding-left  5%

   .showContent
     width 100%
     height 100%
     box-sizing border-box
     padding-top 40px

   /* 品牌中点击小按钮显示字母排序的全部 */
   /*.mask
     position absolute
     z-index 1000
     top 0
     left 0
     bottom 0
     right 0
     background white
     .mask1
       height 100%
     .letter_a_z
       top 0
       bottom 0
       right 4px
       width 10px
       z-index 10
       position fixed
       text-align center
       .l-wrapper
         display table
         height 100%
         .menu
           display table-cell
           height 100%
           vertical-align middle
           span
             display block
             height 12px
             margin-top 2px
             font-size 12px
             &.on
               color: red
     .mask_header
       height 50px
       line-height 50px
       position relative
       padding 0 10px
       border-bottom 1px solid #f3f3f3
       text-align center
       .mask_back
         background url(footer.png) no-repeat
         background-size 234px 159px
         height 18px
         width 11px
         background-position -201px -10px
         position absolute
         margin-top 15px
         left 10px
       .pull_right
         background: url(footer.png) no-repeat;
         background-size: 234px 163px;
         height: 18px;
         width: 17px;
         background-position: -217px -10px;
         position: absolute;
         top: 15px;
         right: 10px;
         outline: 0
     .nav_box
       width 100%
       background #fff
       border-bottom 1px solid #d7d7d7
       overflow hidden
       padding 10px 0
       a
         display inline-block
         width 25%
         text-align center
         float left
         color #333
         font-size 14px
         span
           height 25px
           width 25px
           margin 0 auto
           display block
           background url(footer.png) no-repeat
           background-size 234px 163px
         .icon1
           background-size 234px 163px
           background-position -172px -7px
         .icon2
           background-position -172px -49px
         .icon3
           background-position -172px -90px
         .icon4
           background-position -172px -133px

     !* 全部小按钮的样式部分 *!
     .allbrand
       width 100%
       .brand_item
         .letter
           text-indent 15px
           line-height 24px
           font-size 12px
           color #999
           background-color #eee
         .brand_content
           padding 10px
           border-bottom 1px solid #f3f4f5
           margin-right 20px
           box-sizing border-box
           overflow hidden
           a
             display block
             overflow hidden
           .brand_1
             width 30%
             max-width 150px
             padding 8px 0
             border 1px solid #f3f4f5
             float left
             box-sizing border-box
             height 50px
             position relative
             img
               max-width 90%
               height 40px
               margin 5px auto
               position absolute
               top 0
               left 0
               right 0
           .brand_2
             float left
             margin 5px 0 5px 20px
             box-sizing border-box
             .brand_2_1
               font-size 14px
               color #333
               line-height 1.6
             .brand_2_2
               font-size 12px
               color #999*/
</style>
