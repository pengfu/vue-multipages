/**
 * @Author: le
 * @Date: 2016/11/2
 */

import { Vue } from '../../js/base'
import HeaderNav from '../../components/common/header.vue'
import Index from './index.vue'

require('less/home/home.less')

var homeVue = new Vue({
    el: '#home',
    template: '<div><header-nav></header-nav> <div class="container"><index></index></div></div> ',
    components: {
        'header-nav': HeaderNav,
        'index': Index
    }
})
