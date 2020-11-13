<template>
    <div class="qy-btn-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        computed: {

        },
        methods: {

        }
    }
</script>

<style lang="less" scoped>
    @primary-color: #2d8cf0; // z主色调
    @info-color: #2db7f5; // 辅色调
    @success-color: #19be6b; // 成功
    @warning-color: #ff9900; // 警告
    @error-color: #ed4014; // 错误
    @normal-color: #f2f2f2; // 正常
    .qy-btn-group {
        position: relative;
        display: inline-block;
        vertical-align: middle;
        > .qy-btn {
            float: left;
            margin-left: -1px;
            &:first-child {
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
            }
            &:last-child {
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
                margin-left: -1px;
            }
            &:not(:first-child):not(:last-child) {
                border-radius: 0;
                margin-left: -1px;
            }
        }
    }
</style>
