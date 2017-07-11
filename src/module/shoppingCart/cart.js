/**
 * @Author: le
 * @Date: 2016/11/2
 */

import { Vue } from '../../js/base'
import HeaderNav from '../../components/common/header.vue'
import Cart from './cart.vue'

require('less/shopping/shopping.less')

var cartVue = new Vue({
    el: '#shopping-cart',
    template: '<div><header-nav></header-nav><div class="container"><cart></cart></div></div>',
    components: {
        'header-nav': HeaderNav,
        'cart': Cart
    }
})
