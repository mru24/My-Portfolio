<template>
  <div>
    <div class="container">
      <h1 class="title">CONTACT ME</h1>
      <div class="contactInfo">
        <div class="imageContainer">
          <img :src="image" alt="">
        </div>
        <div class="infoContainer">
          <ul>
            <li>Name: {{ name }}</li>
          </ul>
          <ul>
            <li>Email: {{ email }}</li>
          </ul>
          <ul>
            <li>Website: {{ web }}</li>
          </ul>
          <ul>
            <li>Mobile: {{ tel }}</li>
          </ul>
        </div>
      </div>
      <form @submit.prevent="sendMessage">
        <div class="form-control">
          <label>Your Name</label>
          <input type="text" v-model="message.name" required>
        </div>
        <div class="form-control">
          <label>Your Email</label>
          <input type="email" v-model="message.email" required>
        </div>
        <div class="form-control">
          <label>Your Message</label>
          <textarea v-model="message.message" required></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  </div>
</template>

<script>
import db from './firebaseInit'

export default {
  data () {
    return {
      name: 'Val Wroblewski',
      image: 'static/Images/Waldi.jpg',
      email: 'mru24@yahoo.com',
      web: 'wwproject.eu',
      tel: '07599384805',
      message: {
        name: null,
        email: null,
        message: null
      }
    }
  },
  methods: {
    sendMessage: function () {
      db.collection('Messages').add({
        name: this.message.name,
        email: this.message.email,
        message: this.message.message
      }).then(docRef => {
        console.log('Message sent:', docRef.id)
        this.$router.push('/success')
      }).catch(error => {
        console.error('Error sending message: ', error)
      })
    }
  }
}
</script>

<style lang="sass" scoped>
@import 'config'
$formBgColor: #cccccc
.container
  margin-top: 30px
  .contactInfo
    border: 2px solid $bgColor + 30
    border-radius: $radiusSm
    display: flex
    flex-direction: row
    align-items: center
    background: rgba(#fff, 0.1)
    @include bp-mobile
      flex-direction: column
    .imageContainer
      padding: 10px
      img
        display: block
        height: 200px
        border-radius: $radiusSm
    .infoContainer
      margin-left: 40px
      li
        margin-bottom: 10px
        font-size: 20px
        @include bp-mobileSM
          font-size: 16px
  form
    width: 100%
    // margin: 30px auto
    margin-bottom: 10px
    border: 2px solid $bgColor + 30
    border-radius: $radiusLg
    padding: 20px
    label, input, textarea
      width: 100%
      margin-bottom: 10px
      border: 1px solid $bgColor + 10
      border-radius: $radiusSm
    input
      height: 40px
      font-size: 26px
      padding-left: 10px
      background-color: $formBgColor
      transition: .5s
      &:focus
        background-color: white
    textarea
      background-color: $formBgColor
      height: 150px
      resize: none
      font-size: 18px
      padding: 10px
      transition: .5s
      &:focus
        background-color: white
    button
      display: block
      margin: 20px auto
      padding: 15px 30px
      cursor: pointer
      border: none
      border-radius: $radiusSm
      background: #e3620f
      font-size: 22px
      color: #bbb
      transition: .5s
      &:hover
        background: #08ba0f
        color: white
</style>
