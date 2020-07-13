<template>
    <div class="simple-drag-first">
        <vuedraggable v-model="personList" :options="options"
                      @clone="clone"
                      :group="{ name: 'person', pull: 'clone' }">
            <div class="first-item"  v-for="(item,index) in firstList" :key="index">{{item}}</div>
        </vuedraggable>
        <vuedraggable v-model="personList" :options="options"
                      :group="{ name: 'person', pull: false}">
            <div class="first-item" v-for="(item,index) in secondList" :key="index">{{item}}</div>
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
            firstList: [
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
            secondList: [
                {
                    name: '梁丽丽',
                    age: 23,
                },
            ],
            options: {
                animation: 150,
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
        clone(options) {
            console.log(options.oldIndex);
        },
    },
};
</script>
<style lang='scss' scoped>
.simple-drag-first {
    width: 100%;
    height: vh(500);
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    div {
        width: 49.5%;
         .first-item {
             width: 100%;
            background: cadetblue;
            margin: vh(5) 0;
            height: vh(60);
            line-height: vh(60);
            font-size: vw(14);
            cursor: pointer;
        }
        .chosen {
            background: aquamarine;
        }
        .drag {
            background: bisque;
        }
    }

}
</style>
