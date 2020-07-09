<template>
    <div class="hopes-title">
        <span>{{title.name}}</span>
        <span class="position">{{title.position}}</span>
    </div>
</template>

<script>
export default {
    props: ['title'],
    components: {},
    data() {
        return {

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
.hopes-title {
    width: 100%;
    height: vh(40);
    background: $theme-bg;
    line-height: vh(40);
    font-size: vw(18);
    padding: 0 vw(15);
    box-sizing: border-box;
    border-left: vw(2) solid $theme-text-hs;
    display: flex;
    justify-content: space-between;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
   margin-bottom: vh(15);
    .position {
        margin-left: vw(15);
        font-size: vw(14);
        color: $theme-shadow;
                &:hover {
            color: $theme-text-bs;
        }
    }
}
</style>
