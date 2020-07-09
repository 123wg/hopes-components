<template>
    <div class="simple-drag-first">
        <vuedraggable v-model="list">
            <div class="first-item" v-for="item in list" :key="item">{{item}}</div>
        </vuedraggable>
    </div>
</template>

<script>
import vuedraggable from 'vuedraggable';

export default {
    components: {
        vuedraggable,
    },
    data() {
        return {
            list: [
                1, 2, 3, 4, 5,
            ],
        };
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    destroyed() {},
    methods: {
    },
};
</script>
<style lang='scss' scoped>
.simple-drag-first {
    width: 100%;
    height: vh(500);
    .first-item {
        width: 100%;
        height: vh(60);
        background: cadetblue;
        margin: vh(5) 0;
        text-align: center;
        line-height: vh(60);
        cursor: pointer;
    }
}
</style>
