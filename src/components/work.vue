<template>
  <div>
    <div class="container">
      <div class="workNav">
        <ul>
          <li v-for="(nav, index) in workNav" :key="index" @click="changeCat(nav.data)">
            {{ nav.name }}
          </li>
        </ul>
      </div>
      <div class="workContainer">
        <transition-group>
          <ul v-for="(project, index) in projects" :key="index">
            <li v-if="projectsToShow == project.category">
              <div class="project" @mouseenter="showTags" @mouseleave="hideTags">
                <h4><a :href="project.link" target="_blank" rel="noreferrer nofollow noopener">{{ project.name }}</a></h4>
                <div class="tags" v-if="project.showTags">
                  <transition name="tagsIn">
                    <ul v-if="project.showTags">
                      <li v-for="(tag, index) in project.tags" :key="index">
                        {{ tag }}
                      </li>
                    </ul>
                  </transition>
                </div>
              </div>
            </li>
            <li v-else-if="projectsToShow == 'all'">
              <div class="project">
                <h4><a :href="project.link" target="_blank" rel="noreferrer nofollow noopener">{{ project.name }}</a></h4>
                <div class="tags" @mouseenter="project.showTags=true" @mouseleave="project.showTags=false">
                  <transition name="tagsIn">
                    <ul v-if="project.showTags">
                      <li v-for="(tag, index) in project.tags" :key="index">
                        {{ tag }}
                      </li>
                    </ul>
                  </transition>
                </div>
              </div>
            </li>
          </ul>
      </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      projectsToShow: 'all',
      workNav: [
        {
          name: 'all',
          info: '',
          data: 'all'
        },
        {
          name: 'responsive design',
          info: '',
          data: 'resp'
        },
        {
          name: 'java script',
          info: '',
          data: 'js'
        },
        {
          name: 'php',
          info: '',
          data: 'php'
        }
      ],
      projects: [
        {
          name: 'Kat FMWorld UK',
          info: 'My first commercial project',
          link: 'https://eager-franklin-097a07.netlify.com',
          github: 'https://github.com/mru24/FM_World_UK',
          tags: ['HTML', 'VUE JS', 'SASS', 'Bootstrap'],
          showTags: false,
          category: 'js'
        },
        {
          name: 'My Portfolio',
          info: 'This Portfolio',
          link: 'https://vigilant-shirley-59d618.netlify.com',
          github: 'https://github.com/mru24/Yet-another-Portfolio',
          tags: ['HTML', 'VUE JS', 'SASS', 'Firebase'],
          showTags: false,
          category: 'js'
        }
      ]
    }
  },
  methods: {
    changeCat: function (data) {
      this.projectsToShow = data
    },
    showTags: function () {
      this.projects.showTags = true
      console.log('showTags')
    },
    hideTags: function () {
      this.projects.showTags = false
      console.log('hideTags')
    }
  }
}
</script>

<style lang="sass" scoped>
@import 'config'

.container
  height: auto
  min-height: 100vh
  .workNav
    width: 80%
    margin: 30px auto
    border-bottom: $borderLt
    ul
      display: flex
      flex-direction: row
      justify-content: space-around
      @include bp-mobileSM
        flex-direction: column
        justify-content: flex-start
        align-items: flex-start
      li
        text-transform: capitalize
        cursor: pointer
  .workContainer
    span
      display: flex
      flex-direction: row
      flex-wrap: wrap
      justify-content: center
      ul
        transition: .5s
        li
          .project
            background: rgba($bgColor, 0.8)
            width: 200px
            height: 260px
            border: $borderLt
            padding: 5px
            margin: 10px
            text-transform: uppercase
            overflow: hidden
            position: relative
            @include bp-mobile
              width: 170px
              height: 250px
              margin: 5px
            .tags
              position: absolute
              top: 0
              left: 0
              width: 100%
              height: 100%
              display: flex
              align-items: center
              ul
                width: 100%
                display: flex
                flex-direction: row
                flex-wrap: wrap
                justify-content: center
                li
                  border: $borderLt
                  padding: 2px 5px
                  font-size: 10px
                  margin: 4px

.tagsIn-enter-active
  animation: slideIn .5s
.tagsIn-leave-active
  animation: slideIn .5s reverse

@keyframes slideIn
  from
    max-height: 0
  to
    max-height: 100%

</style>
