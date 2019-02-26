<template>
  <footer @click="showFooter">
    <div class="header"><span>^</span></div>
    <div class="copyrights">
      WW Project Studio &copy;2019
    </div>
    <div class="adminLogin">
      <a href="https://focused-edison-6deac0.netlify.com/" target="_blank" rel="noreferrer nofollow noopener">Admin Login</a>
    </div>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      footerActive: false
    }
  },
  methods: {
    showFooter () {
      if (!this.footerActive) {
        document.querySelector('footer').classList.add('show')
        setTimeout(() => {
          document.querySelector('.header').innerHTML = 'Click to hide'
        }, 1500)
        this.footerActive = true
      } else {
        document.querySelector('.header').innerHTML = 'Hiding'
        document.querySelector('footer').style.pointerEvents = 'none'
        setTimeout(() => {
          document.querySelector('footer').classList.remove('show')
          document.querySelector('.header').innerHTML = '<span>^</span>'
          document.querySelector('footer').style.pointerEvents = 'all'
        }, 1500)
        this.footerActive = false
      }
    },
    hideFooter () {
      document.querySelector('.header').innerHTML = 'Hiding'
      document.querySelector('footer').style.pointerEvents = 'none'
      setTimeout(() => {
        document.querySelector('footer').classList.remove('show')
        document.querySelector('.header').innerHTML = '<span>^</span>'
        document.querySelector('footer').style.pointerEvents = 'all'
      }, 1500)
    }
  }
}
</script>

<style lang="sass">
@import 'config'

footer
  position: fixed
  z-index: 9999
  bottom: -115px
  // bottom: 0
  left: 0
  width: 100%
  height: 140px
  background: rgba(#3b3b3b, 0.75)
  color: #bbb
  transition: .8s
  cursor: pointer
  display: grid
  grid-gap: 20px
  grid-template-areas: 'header header header header header' '. copyrights copyrights . adminLogin'
  @include bp-mobile
    grid-template-areas: 'header' 'copyrights' 'adminLogin'
    text-align: center
  .header
    height: 30px
    grid-area: header
    text-align: center
    pointer-events: none
    span
      font-size: 1.4em
      font-weight: bold
  .copyrights
    grid-area: copyrights
    font-size: 1.2em
    font-weight: bold
    pointer-events: none
  .adminLogin
    grid-area: adminLogin

.show
  bottom: 0

</style>
