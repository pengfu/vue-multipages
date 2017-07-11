/**
 * @Author: le
 * @Date: 2016/11/2
 */

import { Vue } from '../../js/base'
import HeaderNav from '../../components/common/header.vue'
import Order from './order.vue'

require('less/shopping/shopping.less')

var orderVue = new Vue({
    el: '#shopping-order',
    template: '<div><header-nav></header-nav><div class="container"><order></order></div></div>',
    components: {
        'header-nav': HeaderNav,
        'order': Order
    }
})
