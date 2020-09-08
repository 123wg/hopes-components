/**
* @Description: 自定义富文本
* @Author: wanggang
* @Date: 2020-09-08 22:27:42
**/
<template>
    <vue-editor v-model="content" :editor-toolbar="customToolbar" :editor-options="editorSettings"/>
</template>

<script>
// Basic Use - Covers most scenarios
import { VueEditor, Quill } from 'vue2-editor';

// Advanced Use - Hook into Quill's API for Custom Functionality
import { ImageDrop } from 'quill-image-drop-module';
import ImageResize from 'quill-image-resize-module';

Quill.register('modules/imageDrop', ImageDrop);
Quill.register('modules/imageResize', ImageResize);
export default {
    components: {
        VueEditor,
    },
    data() {
        return {
            content: '',
            customToolbar: [
                ['bold', 'italic', 'underline'],
                [{ list: 'ordered' }, { list: 'bullet' }],
                ['image', 'code-block'],
            ],
            editorSettings: {
                modules: {
                    imageDrop: true,
                    imageResize: {},
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
<style lang="scss">
@import "~vue2-editor/dist/vue2-editor.css";
@import '~quill/dist/quill.core.css';
@import '~quill/dist/quill.bubble.css';
@import '~quill/dist/quill.snow.css';
</style>
