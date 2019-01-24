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
            <router-link :to="'/work'">
            <p>
              "Turning passion into career. My expertise is in the area of responsive design. I strive to make the web a nice and pleasant place."
            </p>
            <span>click to see my work</span>
            </router-link>
          </div>
        </transition>
      </div>
    <transition>
      <div class="socialLinks" v-if="el5">
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
      el5: false,
      show: true,
      arrowDown: 'static/Images/arrow-down.png'
    }
  },
  created () {
    var vm = this
    var time = 1000
    setTimeout(function () {
      vm.el1 = true
    }, time)
    setTimeout(function () {
      vm.el2 = true
    }, time + 1500)
    setTimeout(function () {
      vm.el3 = true
    }, time + 3000)
    setTimeout(function () {
      vm.el4 = true
    }, time + 4000)
    setTimeout(function () {
      vm.el5 = true
    }, time + 6000)
  }
}
</script>

<style lang="sass" scoped>
@import 'config'

.container
  display: flex
  justify-content: center
  align-items: center
  .about
    width: 100%
    height: 60vh
    position: relative
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
        @include bp-mobile
          width: 60px
          height: 60px
      h1
        font-size: 40px
        @include bp-mobile
          font-size: 30px
    h6
      margin-left: 10px
      font-size: 20px
      @include bp-mobile
        font-size: 16px
    .info
      margin-top: 90px
      margin-left: 90px
      position: relative
      @include bp-mobile
        margin-top: 90px
      p
        color: $bgColor + 180
        font-size: 3vh
        font-weight: 300
        letter-spacing: 4px
        @include bp-mobile
          font-size: 18px
      span
        position: absolute
        top: 30px
        // display: none
        opacity: 0
        right: 150px
        transition: .5s
        @include bp-mobile
          right: 0
      p:hover ~ span
        opacity: 1
        top: -30px
  .skills
    width: 100%
    margin-top: 5%
  .socialLinks
    position: fixed
    bottom: 2%
    left: 50%
    transform: translateX(-50%)

@include bp-mobileSM
  .container
    .about
      display: flex
      flex-direction: column
      justify-content: center
      padding-top: 20%
      height: auto
      h1, h6
        text-align: center
      .mainTitle
        display: flex
        flex-direction: column
        justify-content: center
        .image
          width: 140px
          height: 140px
          margin: auto
          img
        h1
          margin-top: 10px
          font-size: 26px
      h6
        font-size: 14px
      .info
        margin: auto
        margin-top: 30px
        p
          margin: 10px
          font-size: 16px
        span
          color: yellow
          font-size: 14px
        p:hover ~ span
          top: -20px
    .skills
      width: 100%
      margin-top: 5%
    .socialLinks
      position: fixed
      top: 2%
      left: 25%

.v-enter-active, .v-leave-active
  transition: all 1s
.v-enter, .v-leave-to
  opacity: 0
  transform: translateY(40px)

</style>
