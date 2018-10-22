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
              <div class="project">
                <h4>{{ project.name }}</h4>
              </div>
            </li>
            <li v-else-if="projectsToShow == 'all'">
              <div class="project">
                <h4>{{ project.name }}</h4>
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
          name: 'project 1',
          info: 'this is my project 1',
          link: '',
          github: '',
          category: 'resp'
        },
        {
          name: 'project 2',
          info: 'this is my project 2',
          link: '',
          github: '',
          category: 'js'
        },
        {
          name: 'project 3',
          info: 'this is my project 3',
          link: '',
          github: '',
          category: 'resp'
        },
        {
          name: 'project 4',
          info: 'this is my project 4',
          link: '',
          github: '',
          category: 'js'
        },
        {
          name: 'project 5',
          info: 'this is my project 5',
          link: '',
          github: '',
          category: 'js'
        },
        {
          name: 'project 6',
          info: 'this is my project 6',
          link: '',
          github: '',
          category: 'php'
        },
        {
          name: 'project 7',
          info: 'this is my project 7',
          link: '',
          github: '',
          category: 'php'
        },
        {
          name: 'project 8',
          info: 'this is my project 8',
          link: '',
          github: '',
          category: 'resp'
        }
      ]
    }
  },
  methods: {
    changeCat: function (data) {
      this.projectsToShow = data
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
            @include bp-mobile
              width: 150px
              height: 200px
              margin: 5px


</style>
