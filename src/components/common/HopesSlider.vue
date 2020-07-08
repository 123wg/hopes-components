<template>
    <fragment>
        <div v-for="(item,index) in routes" :key="index">
            <template v-if="item.children">
                <el-submenu v-if="item.meta" :index="handlePath(item.path,'menu')">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>{{item.meta.title}}</span>
                    </template>
                    <hopes-slider  :routes="item.children" :basePath="item.path+'/'"></hopes-slider>
                </el-submenu>
                <el-menu-item v-else :index="handlePath(item.children[0].path)">
                    <i class="el-icon-document"></i>
                    <span slot="title">{{item.children[0].meta.title}}</span>
                </el-menu-item>
            </template>
            <el-menu-item v-else :index="handlePath(item.path)">
                <i class="el-icon-document"></i>
                <span slot="title">{{item.meta.title}}</span>
            </el-menu-item>
        </div>
    </fragment>
</template>

<script>

export default {
    name: 'HopesSlider',
    components: {
    },
    props: ['routes', 'basePath'],
    data() {
        return {

        };
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {
        // this.$router.options.routes.forEach((item) => {
        //     console.log(item);
        // });
    },
    destroyed() {},
    methods: {
        handlePath(path, type) {
            if (type !== 'menu') {
                return this.basePath + path;
            }
            return path;
        },
    },
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>
