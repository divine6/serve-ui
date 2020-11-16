<template>
    <div class="qy-card"
         :class="classes">
        <div class="qy-card-header"
             v-if="$slots.header || header">
            <div class="left-flag"></div>
            <div class="slot-wrap">
                <slot name="header">{{ header }}</slot>
            </div>
        </div>
        <div class="qy-card-body"
             :style="bodyStyle">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Card",
        props: {
            header: String,
            bodyStyle: Object,
            shadow: {
                type: String,
                default: 'always'
            },
            linear: {
                type: String,
                default: 'info'
            }

        },
        computed: {
            classes() {
                return [
                    `is-${this.shadow}-shadow`,
                    `is-linear-${this.linear}`
                ]
            }
        }
    }
</script>
<style lang="less" scoped>
    .qy-card {
        border-radius: 4px;
        border: 1px solid #ebeef5;
        background-color: #fff;
        overflow: hidden;
        color: #303133;
        transition: 0.3s;
        &.is-linear-info {
            color: #fff;
            background: linear-gradient(
                to right,
                #2db7f5 0%,
                #2dc7d1 80%,
                #2dd7d1 100%
            );
        }
        &.is-linear-success {
            color: #fff;
            background: linear-gradient(
                to right,
                #44ea76 0%,
                #39fad7 80%,
                #39fad7 100%
            );
        }
        &.is-linear-warning {
            color: #fff;
            background: linear-gradient(
                to right,
                #e9d45f 0%,
                #ffe865 60%,
                #fa6c9f 100%
            );
        }
        &.is-linear-error {
            color: #fff;
            background: linear-gradient(
                left,
                #fa6c9f 0%,
                #ed4014 80%,
                #ed4014 100%
            );
        }
        &.is-always-shadow,
        &.is-hover-shadow:focus,
        &.is-hover-shadow:hover {
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        }
        &-header {
            padding: 18px 20px;
            position: relative;
            border-bottom: 1px solid #ebeef5;
            box-sizing: border-box;
            .left-flag {
                width: 4px;
                height: 16px;
                margin-right: 12px;
                display: inline-block;
                background-color: #4e83fd;
                position: relative;
                transform: translateY(10%);
            }
            .slot-wrap {
                display: inline-block;
            }
        }
        &-body {
            padding: 20px;
        }
    }
</style>
