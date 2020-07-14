<template>
    <div class="simple-drag-first">
        <vuedraggable v-model="personList" :options="options">
            <div slot="header" class="explain">表头</div>
            <div class="first-item" :class="{ignore:item.age===18 || item.age===21}" v-for="(item,index) in personList" :key="index">{{item}}</div>
            <div slot="footer" class="explain">表尾</div>
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
            personList: [
                {
                    name: '夏梦龙',
                    age: 23,
                },
                {
                    name: '靳洪刚',
                    age: 18,
                    disable: true,

                },
                {
                    name: '李欣',
                    age: 20,
                },
                {
                    name: '张潇潇',
                    age: 21,
                    disable: true,
                },
                {
                    name: '滴滴滴',
                    age: 16,
                },
            ],
            options: {
                group: 'test',
                animation: 150,
                draggable: '.first-item',
                chosenClass: 'chosen', // 被选中元素class
                dragClass: 'drag', // 拖动元素class
                scrollSpeed: 50, // 拖动速度
            },
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
        // text-align: center;
        padding-left: vw(40);
        line-height: vh(60);
        cursor: pointer;
    }
    .explain {
        width: 100%;
        height: vh(50);
        line-height: vh(50);
        text-align: center;
        border: 1px solid $theme-shadow;
    }
    .chosen {
        background: aquamarine;
    }
    .drag {
        background: bisque;
    }
}
</style>
