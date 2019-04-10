<template>
  <div>
    <div class="container">
      <div class="workNav">
        <ul>
          <li class="navItem" v-for="(nav, index) in workNav" :key="index" @click="changeCat(nav.data)">
            {{ nav.name }}
          </li>
        </ul>
      </div>
      <div class="workContainer">
        <transition-group>
          <ul v-for="project in sortProjects(projects)" :key="project.id">
            <li v-if="projectsToShow == project.category">
              <a :href="project.link" target="_blank" rel="noreferrer nofollow noopener">

                <div class="project" @mouseenter="project.showTags=true" @mouseleave="project.showTags=false">
                  <img :src="'static/Images/work/' + project.image" alt="">
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
                  <div class="footer">

                    <a :href="project.github" target="_blank" rel="nofollow noreferrer noopener">
                      <img :src="githubIcon" alt="Github Icon">
                    </a>
                    <p class="title">
                      {{ project.name }}
                    </p>

                  </div>
                </div>
              </a>
            </li>
            <li v-else-if="projectsToShow == 'all'">
              <a :href="project.link" target="_blank" rel="noreferrer nofollow noopener">

                <div class="project" @mouseenter="project.showTags=true" @mouseleave="project.showTags=false">
                  <img :src="'static/Images/work/' + project.image" alt="">

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
                  <div class="footer">

                    <a :href="project.github" target="_blank" rel="nofollow noreferrer noopener">
                      <img :src="githubIcon" alt="Github Icon">
                    </a>
                    <p class="title">
                      {{ project.name }}
                    </p>

                  </div>
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
        return b.id - a.id
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
        color: #bbb
        padding: 10px 15px
        margin-bottom: 12px
        border-radius: 5px
        cursor: pointer
        transition: .4s
        &:hover
          background: #222
          color: #fff
  .workContainer
    height: auto
    margin-bottom: 90px
    span
      display: flex
      flex-direction: row
      flex-wrap: wrap
      justify-content: center
      ul
        transition: .5s
        li
          .project
            width: 400px
            height: 234px
            border: $borderLt
            margin: 8px
            overflow: hidden
            position: relative
            @include bp-mobile
              width: 322px
              height: 196px
            img
              width: 100%
            .projectInner
              position: absolute
              top: -100%
              left: 0
              width: 100%
              height: 100%
              content: ''
              transition: .3s
            .projectHover
              position: absolute
              z-index: 1
              top: 0
              left: 0
              width: 100%
              height: 100%
              content: ''
              background: rgba(#333333, 0.7)
              transition: .3s
            .tags
              position: absolute
              z-index: 10
              top: 40%
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
              bottom: 0
              left: 0
              width: 100%
              height: 40px
              background: #eee
              display: flex
              flex-direction: row
              align-items: center
              a
                width: 30px
                height: 30px
                margin-left: 10px
                margin-right: 10px
                border-radius: 50%
                box-shadow: 2px 2px 10px #666
                transition: .4s
                img
                  width: 100%
                &:hover
                  transform: scale(1.4)
              .title
                color: #222
                font-weight: bold

.tagsIn-enter-active, .tagsIn-leave-active
  transition: all .5s easy-in-out
.tagsIn-enter, .tagsIn-leave-to
  transform: translateY(20px)
  opacity: 0

</style>
