<template>
  <div>
    <transition>
      <div class="title" v-if="show">
        <h2>Follow Me:</h2>
      </div>
    </transition>
    <ul @mouseenter="show=true" @mouseleave="show=false">
      <li v-for='(link, index) in socialLinks' :key='index'>
        <a :href="link.link" target="_blank" rel="noreferrer nofollow noopener">
          <div class="imageContainer">
            <img :src="link.image" :alt="link.name">
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      socialLinks: [
        {
          name: 'Facebook',
          link: 'https://facebook.com/val.wroblewski',
          image: 'static/Images/Social/fb.png'
        },
        {
          name: 'github',
          link: 'https://github.com/mru24',
          image: 'static/Images/Social/gh.png'
        },
        {
          name: 'LinkedIn',
          link: 'https://LinkedIn.com/in/val-wroblewski-278724139/',
          image: 'static/Images/Social/li.png'
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
@import 'config'
$size: 60px

ul
  width: 350px
  margin: auto
  display: flex
  flex-direction: row
  justify-content: space-around
  align-items: center
  @include bp-mobileSM
    width: 200px
  li
    a
      .imageContainer
        img
          width: $size
          height: $size
          transition: .5s
          opacity: .6
          @include bp-mobileSM
            width: $size/1.4
            height: $size/1.4
          &:hover
            opacity: 1

.title
  position: absolute
  width: 100%
  top: -70px
  text-align: center
  h2
    color: #b0b0b0

.v-enter-active
  animation: slide .7s
.v-leave-active
  animation: slide .7s reverse

@keyframes slide
  0%
    transform: scale(0)
  70%
    transform: scale(1.2)
  100%
    transform: scale(1)

</style>
