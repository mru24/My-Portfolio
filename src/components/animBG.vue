<template>
  <div class="animContainer">
    <div class="animBackground">
      <div class="sphere sphere01">
        <div class="planet"></div>
      </div>
      <div class="sphere sphere02">
        <div class="planet"></div>
      </div>
      <div class="sphere sphere03">
        <div class="planet"></div>
      </div>
      <div class="sphere sphere04">
        <div class="planet"></div>
      </div>
      <div class="sphere sphere05">
        <div class="planet"></div>
      </div>
      <div class="sphere sphere06">
        <div class="planet"></div>
      </div>
      <div class="sphere sphere07">
        <div class="planet"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
@import 'config'
.animContainer
  .animBackground
    height: auto
    min-height: 100vh
    overflow: hidden
    position: relative
    .sphere
      position: absolute
      border-radius: 50%
      overflow: hidden
    .sphere01
      $size: 40vh
      top: 10%
      left: 10%
      width: $size
      height: $size
    .sphere02
      $size: 50vh
      top: 15%
      left: 15%
      width: $size
      height: $size
    .sphere03
      $size: 30vh
      top: 25%
      left: 15%
      width: $size
      height: $size
    .sphere04
      $size: 100vh
      top: 10%
      left: 25%
      width: $size
      height: $size
    .sphere05
      $size: 10vh
      top: 40%
      left: 55%
      width: $size
      height: $size
    .sphere06
      $size: 80vh
      top: 50%
      left: 50%
      width: $size
      height: $size
    .sphere07
      background: rgba($bgColor + 4, 0.5)
      $size: 220vh
      top: 25%
      left: 45%
      width: $size
      height: $size

.planet
  width: 100%
  height: 100%
  border-radius: 50%
  position: relative
  animation: circle 25s linear infinite
  &:before
    $sizeBefore: 15%
    width: $sizeBefore
    height: $sizeBefore
    border-radius: 50%
    background: rgba(#11113e, 0.6)
    content: ''
    position: absolute
    top: 2%
    left: 50%

@keyframes circle
  from
    transform: rotate(0deg)
  to
    transform: rotate(360deg)

</style>
