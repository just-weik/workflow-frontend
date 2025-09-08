import { createStore, createLogger } from 'vuex'
import base_app from './modules/app'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    base_app
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})