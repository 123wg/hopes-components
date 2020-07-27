<template>
    <div class="home">
        <hopes-header></hopes-header>
        <div class="home-main">
            <el-container>
                <el-aside>
                    <hopes-side></hopes-side>
                </el-aside>
                <el-main>
                    <hopes-content></hopes-content>
                </el-main>
            </el-container>
        </div>
    </div>
</template>

<script>
import HopesHeader from '@/components/common/HopesHeader.vue';
import HopesSide from '@/components/common/HopesSide.vue';
import HopesContent from '@/components/common/HopesContent.vue';

export default {
    name: 'Home',
    components: {
        HopesHeader,
        HopesSide,
        HopesContent,
    },
};
</script>
<style lang="scss" scoped>
.home {
    width: 100%;
    height: 100%;
    .home-main {
        width: 100%;
        height: vh(1010);
        color: #000;
        font-family: Arial, Helvetica, sans-serif;
        .el-container {
            width: 100%;
            height: 100%;
            .el-aside {
                width: auto !important;
            }
            .el-main {
                padding: vw(10);
            }
        }
    }
}
</style>
