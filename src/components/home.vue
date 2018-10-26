<template>
  <div>
    <div class="container">
      <div class="about">
        <h1>
          Val Wroblewski
        </h1>
        <h6>
          Web Designer and Developer.
        </h6>
        <div class="info">
          <p>
            "Turning passion into career. My expertise is in the area of responsive design. I strive to make the web a nice and pleasant place."
          </p>
        </div>
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
    h1, h6
      font-weight: 200
    h1
      font-size: 60px
      @include bp-mobile
        font-size: 40px
      @include bp-mobileSM
        margin-top: 10px
        font-size: 26px
    h6
      margin-left: 10px
      font-size: 17px
      @include bp-mobile
        font-size: 16px
      @include bp-mobileSM
        font-size: 14px
        margin-bottom: 100px
    .info
      margin-top: 90px
      margin-left: 90px
      p
        color: $bgColor + 120
        font-size: 20px
        font-weight: 300
        @include bp-mobileSM
          margin: 20px
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
