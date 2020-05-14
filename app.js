
import EventError from './components/EventError.js'
import News from './components/news.js'
import router from './router/index.js'

Vue.component('news', News)
Vue.component('toast', EventError)

let app = new Vue({
    el: '#app',
    data: {
      message: 'Välj en radiokanal!'
    },
    router
  });
