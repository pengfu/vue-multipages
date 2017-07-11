<template>
    <div class="shopping-cart-container">
        <h1>{{ msg }}</h1>
        <shopping-banner></shopping-banner>
        <hr>
        <cart-list></cart-list>
    </div>
</template>

<script>
    import ShoppingBanner from '../../components/shopping/shopping-banner.vue'
    import CartList from '../../components/shopping/cart-list.vue'

    export default {
        data () {
            return {
                msg: 'cart page'
            }
        },

        components: {
            'shopping-banner': ShoppingBanner,
            'cart-list': CartList
        }
    }
</script>