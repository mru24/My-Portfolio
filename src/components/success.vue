<template>
  <div>
    <div class="container">
      <div class="success">
        <h4>
          Your message has been sent.<br>
          Thank you.
        </h4>
      </div>
      <router-link :to="'/'">Back to Main Page</router-link>
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
    .success
      padding: 30px
      border: 3px solid green
      border-radius: 15px
      margin-bottom: 60px
</style>
