/**
 *  Vue Component - grid
 *  ---------------------------------------------
 *  Author : IndexXuan(https://github.com/IndexXuan)
 *  Date   : Fri 25 Mar 2016 03:06:34 PM CST
 */

Vue.component('data-grid', {
    template: '#grid-template',
    props: {
        data: Array,
        columns: Array,
        filterKey: String
    },
    data: function() {
        var sortOrders = {}
        this.columns.forEach(function(key) {
            sortOrders[key] = 1
        })
        return {
            sortKey: '',
            sortOrders: sortOrders
        }
    },
    methods: {
        sortBy: function(key) {
            this.sortKey = key
            if (this.sortOrders[key] == null) {
                this.sortOrders[key] = -1;
            } else {
                this.sortOrders[key] = this.sortOrders[key] * -1 // toggle order
            }
        }
    }
})
