<template>
    <div class="jump">
        <div class="left">
            <div class="left-item" :class="{select:active===index}" @click="scrollTo(index)" v-for="(item,index) in menuList" :key="index" >
                {{item.label}}
            </div>
        </div>
        <div class="right">
            <el-scrollbar style="width:100%; height:100%;">
                <div class="right-item">content1</div>
                <div class="right-item">content2</div>
                <div class="right-item">content3</div>
                <div class="right-item">content4</div>
            </el-scrollbar>
        </div>
    </div>
</template>
<script>
export default {
    name: '',
    components: {},
    data() {
        return {
            active: 0,
            topArr: [],
            menuList: [
                {
                    label: '需求分析',
                },
                {
                    label: '任务拆分',
                },
                {
                    label: '正事迭代',
                },
                {
                    label: '测试验收',
                },
            ],
        };
    },

    computed: {
        scrollElement() {
            return document.querySelector('.el-scrollbar__wrap');
        },
    },
    watch: {},
    created() {},
    mounted() {
        this.scrollElement.addEventListener('scroll', this.onScroll, true);
    },
    destroyed() {},
    methods: {
        onScroll() {
            this.setTopArr();
            const scrollTop = this.scrollElement.scrollTop || document.documentElement.scrollTop || document.body.scrollTop;
            let navIndex = 0;
            this.topArr.forEach((item, index) => {
                if (scrollTop >= item) navIndex = index;
            });
            this.active = navIndex;
        },
        //  计算每个元素scrollTop()
        setTopArr() {
            //  获取所有元素距离页面顶部的距离
            const elements = document.querySelectorAll('.right-item');
            this.topArr = [];
            elements.forEach((item) => {
                this.topArr.push(item.offsetTop);
            });
        },
        //  点击定位方法
        scrollTo(index) {
            this.setTopArr();
            const targetScrollTop = this.topArr[index];
            const currentScrollTop = this.scrollElement.scrollTop;
            const step = 100;
            if (targetScrollTop >= currentScrollTop) {
                this.slideDown(currentScrollTop, targetScrollTop, step);
            } else {
                this.slideup(currentScrollTop, targetScrollTop, step);
            }
        },
        // 下滑
        slideDown(cur, tar, step) {
            let scrollTop = cur;
            if (tar - cur >= step) {
                scrollTop += step;
            } else {
                scrollTop = tar;
            }
            this.scrollElement.scrollTop = scrollTop;
            if (tar > scrollTop) {
                requestAnimationFrame(this.slideDown.bind(this, scrollTop, tar, step));
            }
        },
        // 上滑
        slideup(cur, tar, step) {
            let scrollTop = cur;
            if (cur - tar >= step) {
                scrollTop -= step;
            } else {
                scrollTop = tar;
            }
            this.scrollElement.scrollTop = scrollTop;
            if (cur > scrollTop) {
                requestAnimationFrame(this.slideup.bind(this, scrollTop, tar, step));
            }
        },
    },
};
</script>
<style lang="scss">
    .jump {
        .el-scrollbar__wrap {
            overflow-x: hidden;
        }
    }
</style>
<style lang="scss" scoped>
   .jump {
        display: flex;
        justify-content: space-between;
        width:100%;
        height:100%;
            .left{
                width:10%;
                border-right:vw(2) solid rgba(0,0,0,0.25);
                .left-item{
                    position: relative;
                    width: 100%;
                    height: vh(45);
                    margin-top: vh(2);
                    line-height: vh(45);
                    text-align: center;
                    transition: background 0.3s;
                    cursor: pointer;
                }
                .select {
                    color: #409eff;
                    &:before {
                        position: absolute;
                        background: #409eff;
                        content: ' ';
                        width: vw(2);
                        height: vh(45);
                        right: vw(-2);
                        transition:all .9s linear;
                        // box-sizing: border-box;
                    }
                }
        }

            .right{
                width: 90%;
                .right-item{
                    box-sizing:border-box;
                    height:vh(600);
                    border:1px solid #000;
                    margin:vw(10);
                }
            }
    }
</style>
