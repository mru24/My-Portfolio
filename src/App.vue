<template>
  <div id="app">
    <Navbar />
    <div class="mainContainer">
      <AnimBackground />
      <transition>
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
import Navbar from './components/navbar'
import AnimBackground from './components/animBG'
export default {
  components: {
    Navbar,
    AnimBackground
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
      @include bp-mobileSM
        left: 4%
        width: 92%

.v-enter-active
  animation: fadeIn .2s

@keyframes fadeIn
  from
    opacity: 0
  to
    opacity: 1
</style>
