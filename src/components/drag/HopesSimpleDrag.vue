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
                    <HopesSimpleDrag1></HopesSimpleDrag1>
                </div>
                <div class="content-item">
                    <hopes-title :title="title.title4"></hopes-title>
                    <HopesSimpleDrag1></HopesSimpleDrag1>
                </div>
            </div>
        </el-scrollbar>
    </div>
</template>

<script>
import HopesTitle from '@/components/common/HopesTitle.vue';
import HopesSimpleDrag1 from '@/components/drag/hopesSimpleDrag/HopesSimpleDrag1.vue';
import HopesSimpleDrag2 from '@/components/drag/hopesSimpleDrag/HopesSimpleDrag2.vue';

export default {
    components: {
        HopesTitle,
        HopesSimpleDrag1,
        HopesSimpleDrag2,
    },
    data() {
        return {
            title: {
                title1: {
                    name: '拖拽排序',
                    position: 'HopesSimpleDrag/HopesSimpleDrag1',
                },
                title2: {
                    name: '基础拖拽',
                    position: 'HopesSimpleDrag/HopesSimpleDrag1',
                },
                title3: {
                    name: '带禁用项拖拽',
                    position: 'HopesSimpleDrag/HopesSimpleDrag1',
                },
                title4: {
                    name: '交叉拖拽',
                    position: 'HopesSimpleDrag/HopesSimpleDrag1',
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
            height: vh(500);
        }
    }

}
</style>
