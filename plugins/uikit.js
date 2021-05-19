import Vue from 'vue'

import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'

// loads the Icon plugin
UIkit.use(Icons)

// use it inside vue files as this.$uikit
Vue.prototype.$uikit = UIkit

