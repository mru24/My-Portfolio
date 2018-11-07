<template>
  <div>
    <div class="container">
      <div class="about">
        <transition>
          <div class="mainTitle" v-if="el1">
            <div class="image">
              <img src="static/Images/Waldi.jpg" alt="My photo">
            </div>
            <h1>
              Val Wroblewski
            </h1>
          </div>
        </transition>
        <transition>
          <h6 v-if="el2">
            Web Developer.
          </h6>
        </transition>
        <transition>
          <div class="info" v-if="el3">
            <p>
              "Turning passion into career. My expertise is in the area of responsive design. I strive to make the web a nice and pleasant place."
            </p>
          </div>
        </transition>
        <div class="arrow">
          <router-link :to="'/work'">
            <img :src="arrowDown" alt="arrowDown">
          </router-link>
        </div>
      </div>
      <transition>
        <div class="socialLinks" v-if="el4">
          <social />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
// import work from './work'
import social from './social'
export default {
  components: {
    social
  },
  data () {
    return {
      el1: false,
      el2: false,
      el3: false,
      el4: false,
      show: true,
      arrowDown: 'static/Images/arrow-down.png'
    }
  },
  created () {
    var vm = this
    var time = 500
    setTimeout(function () {
      vm.el1 = true
    }, time)
    setTimeout(function () {
      vm.el2 = true
    }, time + 2000)
    setTimeout(function () {
      vm.el3 = true
    }, time + 3000)
    setTimeout(function () {
      vm.el4 = true
    }, time + 6000)
  }
}
</script>

<style lang="sass" scoped>
@import 'config'

.container
  .about
    width: 100%
    height: 100vh
    position: relative
    padding-top: 20%
    @include bp-mobileSM
      padding-top: 10px
      height: auto
    h1, h6
      font-weight: 200
    .mainTitle
      display: flex
      flex-direction: row
      align-items: center
      .image
        width: 80px
        height: 80px
        border-radius: 50%
        margin-right: 30px
        overflow: hidden
        img
          width: 115%
        @include bp-mobileSM
          width: 40px
          height: 40px
          margin-right: 10px
      h1
        font-size: 60px
        @include bp-mobile
          font-size: 40px
        @include bp-mobileSM
          margin-top: 10px
          font-size: 26px
    h6
      margin-left: 10px
      font-size: 20px
      @include bp-mobile
        font-size: 16px
      @include bp-mobileSM
        font-size: 14px
        margin-bottom: 100px
    .info
      margin-top: 90px
      margin-left: 90px
      @include bp-mobileSM
        margin-top: 30px
        margin-left: 20px
      p
        color: $bgColor + 180
        font-size: 24px
        font-weight: 300
        letter-spacing: 4px
        @include bp-mobileSM
          margin: 10px
          font-size: 16px
    .arrow
      position: fixed
      bottom: 20%
      left: 50%
      transform: translateX(-50%)
      width: 100px
      text-align: center
      cursor: pointer
      transition: .5s
      @include bp-mobileSM
        margin: auto
        width: 60px
      img
        width: 100%
  .skills
    width: 100%
    margin-top: 5%
  .socialLinks
    position: fixed
    bottom: 2%
    left: 50%
    transform: translateX(-50%)

.v-enter-active, .v-leave-active
  transition: all 1s
.v-enter, .v-leave-to
  opacity: 0
  transform: translateY(40px)

</style>
