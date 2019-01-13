<template>
  <div id="app">
    <Navbar/>
    <div class="mainContainer">
      <AnimBackground/>
      <!-- <transition mode="out-in"> -->
        <router-view/>
      <!-- </transition> -->
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/navbar'
import AnimBackground from './components/animBG'
import Footer from '@/components/footer'

export default {
  components: {
    Navbar,
    AnimBackground,
    Footer
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="sass">
@import './components/config'
*
  margin: 0
  padding: 0
  box-sizing: border-box
body, html
  height: auto
  min-height: 100vh
body
  .mainContainer
    position: relative
    .container
      position: absolute
      top: 0
      left: 15%
      width: 70%
      height: 100%
      @include bp-mobile
        height: auto
      @include bp-mobileSM
        height: auto
        left: 4%
        width: 92%

// .v-enter-active, .v-leave-active
//   transition: all .4s
// .v-enter
//   transform: translateX(100%)
//   opacity: 0
// .v-leave-to
//   transform: translateX(-100%)
//   opacity: 0

// @keyframes fadeIn
//   from
//     opacity: 0
//   to
//     opacity: 1
</style>
