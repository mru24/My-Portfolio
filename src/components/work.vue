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
              <a :href="project.link" target="_blank" rel="noreferrer nofollow noopener">
                <div class="project" @mouseenter="project.showTags=true" @mouseleave="project.showTags=false"
                :style="{backgroundImage: 'url(static/Images/work/' +  project.image + ')'}">
                  <h6 class="title">
                    {{ project.name }}
                  </h6>
                  <div :class="[project.showTags ? projectHover : projectInner]"></div>
                  <div class="tags">
                    <transition name="tagsIn">
                      <ul v-if="project.showTags">
                        <li v-for="(tag, index) in project.tags" :key="index" :class="{tagClass}">
                          {{ tag }}
                        </li>
                      </ul>
                    </transition>
                  </div>
                  <a class="footer" :href="project.github" target="_blank" rel="nofollow noreferrer noopener">
                    <img :src="githubIcon" alt="Github Icon" width="30">
                  </a>
                </div>
              </a>
            </li>
            <li v-else-if="projectsToShow == 'all'">
              <a :href="project.link" target="_blank" rel="noreferrer nofollow noopener">
                <div class="project" @mouseenter="project.showTags=true" @mouseleave="project.showTags=false"
                :style="{backgroundImage: 'url(static/Images/work/' +  project.image + ')'}">
                  <h6 class="title">
                    {{ project.name }}
                  </h6>
                  <div :class="[project.showTags ? projectHover : projectInner]"></div>
                  <div class="tags">
                    <transition name="tagsIn">
                      <ul v-if="project.showTags">
                        <li v-for="(tag, index) in project.tags" :key="index" :class="{tagClass}">
                          {{ tag }}
                        </li>
                      </ul>
                    </transition>
                  </div>
                  <a class="footer" :href="project.github" target="_blank" rel="nofollow noreferrer noopener">
                    <img :src="githubIcon" alt="Github Icon" width="30">
                  </a>
                </div>
              </a>
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
      githubIcon: 'static/Images/Social/gh.png',
      projectInner: 'projectInner',
      projectHover: 'projectHover',
      tagClass: 'tagClass',
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
          id: 9,
          name: 'Weather Widget',
          info: 'Simple Vue JS weather app with openweathermap API',
          link: 'https://laughing-shirley-059b51.netlify.com',
          github: 'https://github.com/mru24/weather-widget',
          image: 'weatherWidget.jpg',
          tags: ['Vue JS', 'Axios', 'HTML', 'Bootstrap', 'SASS'],
          showTags: false,
          category: 'js'
        },
        {
          id: 8,
          name: 'The City',
          info: 'Responsive HTML, CSS, SASS web page',
          link: 'https://heuristic-snyder-80745a.netlify.com/',
          github: 'https://github.com/mru24/The-City',
          image: 'theCity.jpg',
          tags: ['HTML', 'SASS'],
          showTags: false,
          category: 'resp'
        },
        {
          id: 7,
          name: 'Kat FMWorld UK',
          info: 'My first commercial project',
          link: 'https://eager-franklin-097a07.netlify.com',
          github: 'https://github.com/mru24/FM_World_UK',
          image: 'fmworlduk.jpg',
          tags: ['HTML', 'VUE JS', 'SASS', 'Bootstrap'],
          showTags: false,
          category: 'js'
        },
        {
          id: 6,
          name: 'My Portfolio',
          info: 'This Portfolio',
          link: 'https://vigilant-shirley-59d618.netlify.com',
          github: 'https://github.com/mru24/Yet-another-Portfolio',
          image: 'portfolio.jpg',
          tags: ['HTML', 'VUE JS', 'SASS', 'Firebase'],
          showTags: false,
          category: 'js'
        },
        {
          id: 5,
          name: 'PropertiesHaven',
          info: '',
          link: 'https://nifty-bardeen-3df8c6.netlify.com/',
          github: 'https://github.com/mru24/PropertiesHaven',
          image: 'propertiesHaven.jpg',
          tags: ['HTML', 'SCSS', 'jQUERY'],
          showTags: false,
          category: 'resp'
        },
        {
          id: 4,
          name: 'Profile Widget',
          info: '',
          link: 'https://jolly-fermi-d95467.netlify.com/',
          github: 'https://github.com/mru24/Portfolio-Widget',
          image: 'profileWidget.jpg',
          tags: ['HTML', 'SCSS', 'Bootstrap', 'jQUERY'],
          showTags: false,
          category: 'resp'
        },
        {
          id: 3,
          name: 'School',
          info: '',
          link: 'https://musing-hermann-a64cac.netlify.com/',
          github: 'https://github.com/mru24/School',
          image: 'school.jpg',
          tags: ['HTML', 'SCSS', 'Bootstrap', 'jQUERY'],
          showTags: false,
          category: 'resp'
        },
        {
          id: 2,
          name: 'Ping - JS Game',
          info: '',
          link: 'https://pensive-carson-b3e5e8.netlify.com/',
          github: 'https://github.com/mru24/Ping_JS_Game',
          image: 'Ping.jpg',
          tags: ['JavaScript', 'HTML', 'SASS'],
          showTags: false,
          category: 'js'
        },
        {
          id: 1,
          name: 'Rossmann Properties',
          info: 'New Vue JS project. Not finished yet',
          link: 'https://nifty-curie-9f3992.netlify.com/',
          github: 'https://github.com/mru24/RossmannProperties',
          image: 'rossmann.jpg',
          tags: ['HTML', 'Vue JS', 'SASS'],
          showTags: false,
          category: 'js'
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
        justify-content: flex-start
        align-items: flex-start
      li
        text-transform: capitalize
        cursor: pointer
  .workContainer
    height: auto
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
            background-size: cover
            background-repeat: no-repeat
            background-position: top center
            width: 300px
            height: 340px
            border: $borderLt
            margin: 10px
            overflow: hidden
            position: relative
            // @include bp-mobile
            //   width: 170px
            //   height: 250px
            //   margin: 5px
            .projectInner
              position: absolute
              top: -100%
              left: 0
              width: 100%
              height: calc(100% - 40px)
              content: ''
              transition: .3s
            .projectHover
              position: absolute
              z-index: 1
              top: 30px
              left: 0
              width: 100%
              height: calc(100% - 30px)
              content: ''
              background: rgba(#333333, 0.7)
              transition: .3s
            .title
              position: relative
              z-index: 2
              font-size: 18px
              font-weight: bold
              height: 30px
              line-height: 40px
              text-align: center
              background: #eee
              color: #555
            .tags
              position: absolute
              z-index: 10
              top: 50%
              left: 0
              width: 100%
              display: flex
              align-items: center
              opacity: .8
              ul
                width: 100%
                display: flex
                flex-direction: row
                flex-wrap: wrap
                justify-content: center
                li
                  border: $borderLt
                  background: #fff
                  padding: 2px 5px
                  font-size: 12px
                  font-weight: bold
                  color: black
                  margin: 2px
            .footer
              position: absolute
              z-index: 999
              bottom: 10px
              left: 10px
              display: flex
              flex-direction: row
              align-items: center
              border-radius: 50%
              box-shadow: 2px 2px 10px #666
              transition: .4s
              &:hover
                transform: scale(1.4)
              .title
                margin-left: 10px

.tagsIn-enter-active, .tagsIn-leave-active
  transition: all .5s easy-in-out
.tagsIn-enter, .tagsIn-leave-to
  transform: translateY(20px)
  opacity: 0

</style>
