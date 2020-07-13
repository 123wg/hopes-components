<template>
    <div class="hopes-simple-drag">
        <el-scrollbar style="height: 100%;" wrapStyle="overflow-x: hidden;">
            <div class="drag-content">
                <div class="content-item">
                    <hopes-title :title="title.title1"></hopes-title>
                    <HopesSimpleDrag1></HopesSimpleDrag1>
                </div>
                <div class="content-item">
                    <hopes-title :title="title.title2"></hopes-title>
                    <HopesSimpleDrag2></HopesSimpleDrag2>
                </div>
                <div class="content-item">
                    <hopes-title :title="title.title3"></hopes-title>
                    <HopesSimpleDrag3></HopesSimpleDrag3>
                </div>
                <div class="content-item">
                    <hopes-title :title="title.title4"></hopes-title>
                    <HopesSimpleDrag4></HopesSimpleDrag4>
                </div>
                <div class="content-item">
                    <hopes-title :title="title.title5"></hopes-title>
                    <HopesSimpleDrag5></HopesSimpleDrag5>
                </div>
            </div>
        </el-scrollbar>
    </div>
</template>

<script>
import HopesTitle from '@/components/common/HopesTitle.vue';
import HopesSimpleDrag1 from '@/components/drag/hopesSimpleDrag/HopesSimpleDrag1.vue';
import HopesSimpleDrag2 from '@/components/drag/hopesSimpleDrag/HopesSimpleDrag2.vue';
import HopesSimpleDrag3 from '@/components/drag/hopesSimpleDrag/HopesSimpleDrag3.vue';
import HopesSimpleDrag4 from '@/components/drag/hopesSimpleDrag/HopesSimpleDrag4.vue';
import HopesSimpleDrag5 from '@/components/drag/hopesSimpleDrag/HopesSimpleDrag5.vue';

export default {
    components: {
        HopesTitle,
        HopesSimpleDrag1,
        HopesSimpleDrag2,
        HopesSimpleDrag3,
        HopesSimpleDrag4,
        HopesSimpleDrag5,
    },
    data() {
        return {
            title: {
                title1: {
                    name: '基础拖拽',
                    position: 'HopesSimpleDrag/HopesSimpleDrag1',
                },
                title2: {
                    name: '动画拖拽',
                    position: 'HopesSimpleDrag/HopesSimpleDrag2',
                },
                title3: {
                    name: '穿梭框',
                    position: 'HopesSimpleDrag/HopesSimpleDrag3',
                },
                title4: {
                    name: '克隆拖拽',
                    position: 'HopesSimpleDrag/HopesSimpleDrag4',
                },
                title5: {
                    name: '带插槽的拖动',
                    position: 'HopesSimpleDrag/HopesSimpleDrag5',
                },
            },
        };
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    destroyed() {},
    methods: {},
};
</script>
<style lang='scss' scoped>
.hopes-simple-drag {
    width: 100%;
    height: 100%;

    .drag-content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .content-item {
            width: 49.5%;
            min-height: vh(500);
            &:nth-child(3) {
                width: 100%;
            }
        }
    }

}
</style>
