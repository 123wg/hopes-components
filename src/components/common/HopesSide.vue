<template>
    <div class="hopes-side" :class="{spread:!iscollapse}">
        <el-menu
            :default-active="$route.path"
            :collapse="iscollapse"
            class="el-menu-vertical-demo"
            :router = "true"
            background-color="#042236"
            text-color="#ffffff"
            :unique-opened="true"
            active-text-color="#ffffff"
            mode="vertical"
        >
            <hopes-slider :routes="$router.options.routes" :basePath="'/'"></hopes-slider>
        </el-menu>
    </div>
</template>

<script>
import HopesSlider from '@/components/common/HopesSlider.vue';

export default {
    components: {
        HopesSlider,
    },
    data() {
        return {
            iscollapse: false,
        };
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {
    },
    destroyed() {},
    methods: {},
};
</script>
<style lang="scss">
.hopes-side {
    .el-menu {
        border-right: 0 !important;
    }
    // .el-menu-item.is-active {
    //         background: $theme-select !important;
    // }
    .el-menu-item:focus, .el-menu-item:hover{
        background: $theme-text-hs !important;
    }
    .el-submenu__title:hover{
        background: $theme-text-hs!important;
    }
}

</style>
<style lang='scss' scoped>
.hopes-side {
    width: auto;
    height: 100%;
    background: $theme-bg;
}
.spread {
    width: vw(240);
}
</style>
