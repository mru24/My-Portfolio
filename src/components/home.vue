<template>
  <div>
    <div class="container">
      <div class="about">
        <h1 class="title">
          Val Wroblewski
          <br><span>Web Designer and Developer.</span>
        </h1>
        <p>
          Turning passion into career. My expertise is in the area of responsive design. I strive to make the web a nice and pleasant place.
        </p>
        <div class="arrow">
          <router-link :to="'/work'">Check out my work</router-link>
        </div>
      </div>
      <div class="socialLinks">
        <social />
      </div>
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
      show: true
    }
  }
}
</script>

<style lang="sass" scoped>
@import 'config'

.container
  .about
    width: 100%
    height: 90vh
    display: flex
    flex-direction: column
    justify-content: center
    @include bp-mobileSM
      display: block
      height: auto
    .title
      font-size: 60px
      margin-bottom: 50px
      @include bp-mobile
        font-size: 40px
      @include bp-mobileSM
        margin-top: 50px
        font-size: 26px
      span
        font-size: 30px
        @include bp-mobile
          font-size: 16px
    p
      color: $bgColor + 120
      font-size: 20px
      font-weight: 300
      @include bp-mobileSM
        font-size: 16px
    .arrow
      margin: 90px auto 0 auto
      width: 120px
      text-align: center
      cursor: pointer
      @include bp-mobileSM
        margin: 30px auto
  .skills
    width: 100%
    margin-top: 5%
  .socialLinks
    position: fixed
    bottom: 2%
    left: 50%
    transform: translateX(-50%)

</style>
