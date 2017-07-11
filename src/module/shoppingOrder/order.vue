<template>
    <div class="shopping-order-container">
        <h1>{{ msg }}</h1>
        <shopping-banner></shopping-banner>
    </div>
</template>

<script>
    import ShoppingBanner from '../../components/shopping/shopping-banner.vue'
    import Calendar from '../../js/lib/calendar/calendar'

    require('js/lib/calendar/calendar.less');

    export default {
        data () {
            return {
                msg: 'order page'
            }
        },

        components: {
            'shopping-banner': ShoppingBanner
        }
    }
</script>
