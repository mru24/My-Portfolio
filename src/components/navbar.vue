<template>
  <div>
    <nav>
      <transition name='navbar'>
        <div class="navbar" v-if="showNav">
          <ul>
            <li @click="toggleStage">
              <router-link :to="'/'">HOME</router-link>
            </li>
            <li @click="toggleStage">
              <router-link :to="'/work'">MY WORK</router-link>
            </li>
            <li @click="toggleStage">
              <router-link :to="'/contact'">CONTACT</router-link>
            </li>
          </ul>
        </div>
      </transition>
      <div class="hamburger">
        <div :class="classObject" @mouseenter="hoverOn" @mouseleave="hoverOff" @click="toggleStage">
          <i></i>
          <i></i>
          <i></i>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showNav: false,
      classObject: {
        'burger': true,
        'st1': false,
        'st2': false,
        'hover': false
      }
    }
  },
  methods: {
    hoverOn () {
      this.classObject.hover = true
    },
    hoverOff () {
      this.classObject.hover = false
    },
    toggleStage () {
      this.showNav = !this.showNav
      if (this.classObject.st2) {
        this.classObject.st2 = false
      }
      this.classObject.hover = false
      this.classObject.st1 = !this.classObject.st1
      if (this.classObject.st1) {
        setTimeout(() => {
          this.classObject.st2 = !this.classObject.st2
        }, 1000)
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@import 'config'
nav
  .navbar
    position: fixed
    z-index: 9998
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: rgba($bgColor, 0.95)
    ul
      li
        $height: 30vh
        width: 100%
        height: $height
        line-height: $height
        text-align: center
        position: relative
        a
          color: $bgColor + 120
          font-size: 8vh
          font-weight: 300
          transition: .6s
          &:hover
            color: $bgColor + 200

.navbar-enter-active
  animation: slideIn 1s
.navbar-leave-active
  animation: slideIn .3s reverse

@keyframes slideIn
  from
    top: -100%
  to
    top: 0

// Burger styling
.hamburger
  $pos: 40px
  $size: 80px
  position: fixed
  z-index: 9999
  top: $pos
  right: $pos
  width: $size
  height: $size
  @include bp-mobileSM
    width: $size - 20px
    top: $pos - 40px
    right: $pos - 20px
  .burger
    position: relative
    top: 0
    left: 0
    z-index: 9999
    width: 100%
    height: 100%
    cursor: pointer
    i
      display: block
      width: 100%
      height: 1px
      background: #999
      position: absolute
      transition: .3s
      &:nth-child(1)
        bottom: 80%
      &:nth-child(2)
        top: 50%
      &:nth-child(3)
        bottom: 20%

$rotate1: 135deg
$rotate3: 45deg

.st1
  i
    &:nth-child(2)
      opacity: 0
    &:nth-child(1)
      transform: rotate(176deg)
      top: 48%
    &:nth-child(3)
      transform: rotate(-176deg)
      top: 52%

.st2
  i
    &:nth-child(2)
      opacity: 0
    &:nth-child(1)
      transform: rotate($rotate1)
      top: 50%
    &:nth-child(3)
      transform: rotate($rotate3)
      top: 50%

.hover
  i
    &:nth-child(1)
      transform: translate3d(0, -6px, 0)
    &:nth-child(3)
      transform: translate3d(0, 6px, 0)

.burger.st1.st2.hover
  i
    &:nth-child(1)
      transform: rotate($rotate1 - 5)
    &:nth-child(3)
      transform: rotate($rotate3 + 5)

</style>
