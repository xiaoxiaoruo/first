import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/views/movie/movie.vue'
import Music from '@/views/music/music.vue'
import Book from '@/views/book/book.vue'
import Photo from '@/views/photo/photo.vue'
import Musiclist from '@/views/music/musiclist.vue'
import MovieDetail from '@/views/movie/MovieDetail.vue'
import Slide from '@/components/Slide.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      redirect:'/movie'
    },
    {
      path: '/movie',
      name: 'movie',
      component: Movie
    },
    {
      path: '/music',
      name: 'music',
      component: Music
    },
    {
      path: '/book',
      name: 'book',
      component: Book
    },
    {
      path: '/photo',
      name: 'photo',
      component: Photo
    },
    {
      path: '/musiclist',
      name: 'musiclist',
      component: Musiclist
    },
    {
      path:'/moviedetail/:movieid',
      name:'moviedetail',
      component:MovieDetail
    },
    {
      path:'/Slide',
      name:'Slide',
      component:Slide
    }
  ]
})
