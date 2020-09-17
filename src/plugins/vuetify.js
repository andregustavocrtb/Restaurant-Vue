import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
    iconfont: 'mdi',
  },
  theme: {
      themes: {
        light: {
          primary: '#C72828',
          secondary: '#252525',
          success: '#39b100',
          error: '#ff595e',
        },
      },
    },
});
