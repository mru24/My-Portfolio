<template>
  <div>
    <div class="container">
      <div class="fail">
        <h4>
          Ooops. Something went wrong.<br>
          Please try again
        </h4>
      </div>
      <router-link :to="'/contact'">Return to Contact Page</router-link>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
  .container
    height: 100vh
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    .fail
      padding: 30px
      border: 3px solid red
      border-radius: 15px
      margin-bottom: 60px
</style>
