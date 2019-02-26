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
          <ul v-for="project in sortProjects(projects)" :key="project.id">
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
import db from './firebaseInit'

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
      projects: []
    }
  },
  methods: {
    sortProjects: function (el) {
      return el.slice().sort(function (a, b) {
        return a.id - b.id
      })
    },
    changeCat: function (data) {
      this.projectsToShow = data
    }
  },
  created () {
    db.collection('Project').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        const data = {
          'name': doc.data().name,
          'info': doc.data().info,
          'link': doc.data().link,
          'github': doc.data().github,
          'image': doc.data().image,
          'tags': doc.data().item.tag,
          'showTags': doc.data().showTags,
          'category': doc.data().category,
          'id': doc.data().id
        }
        this.projects.push(data)
      })
    })
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
      @include bp-mobile
        flex-direction: column
        justify-content: flex-start
        align-items: flex-start
      li
        text-transform: capitalize
        font-size: 1.4em
        font-weight: bold
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
            background-position: top
            width: 450px
            // height: 340px
            border: $borderLt
            margin: 3px
            overflow: hidden
            position: relative
            @include bp-mobile
              width: 320px
              // height: 280px
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
