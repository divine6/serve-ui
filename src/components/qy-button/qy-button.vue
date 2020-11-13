<template>
    <button :class="classes">
        <slot></slot>
    </button>
</template>

<script>
    const prefixCls = 'qy-btn';
    export default {
        data() {
            return {

            }
        },
        props: {
            type: {
                type: String,
                default: 'default'
            },
            linear: {
                type: Boolean,
                default: false
            },
            soul: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            classes() {
                return [
                    `${prefixCls}`,
                    `${this.type}`,
                    this.linear ? `linear-${this.type}` : '',
                    this.soul ? `soul-${this.type}` : ''
                ]
            }
        }
    }
</script>
<style lang="less" scoped>
    // Color
    @primary-color: #2d8cf0; // z主色调
    @info-color: #2db7f5; // 辅色调
    @success-color: #19be6b; // 成功
    @warning-color: #ff9900; // 警告
    @error-color: #ed4014; // 错误
    @normal-color: #f2f2f2; // 正常
    .qy-btn {
        line-height: 1.5;
        position: relative;
        display: inline-block;
        font-weight: 400;
        white-space: nowrap;
        text-align: center;
        background-image: none;
        box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        user-select: none;
        touch-action: manipulation;
        height: 32px;
        padding: 0 15px;
        font-size: 14px;
        border-radius: 4px;
        border: 1px solid #d9d9d9;
        &:active,
        &:focus {
            outline: 0;
        }
        // 默认
        &.default {
            .typeStyle(#fff, #515a6e);
            &:hover,
            &:active {
                border: 1px solid @primary-color;
                color: @primary-color;
            }
        }
        &.dashed {
            border: 1px dashed #ccc;
            .typeStyle(#fff, #515a6e);
            &:hover,
            &:active {
                border: 1px dashed @primary-color;
                color: @primary-color;
            }
        }
        &.text {
            border: none;
            .typeStyle(transparent, #515a6e);
            color: @primary-color;
        }
        &.primary {
            .typeStyle(@primary-color, #fff);
        }
        &.info {
            .typeStyle(@info-color, #fff);
        }
        &.success {
            .typeStyle(@success-color, #fff);
        }
        &.warning {
            .typeStyle(@warning-color, #fff);
        }
        &.error {
            .typeStyle(@error-color, #fff);
        }
        // 渐变
        &.linear-primary {
            color: #fff;
            background: linear-gradient(
                left,
                #2d8cf0 0%,
                #00e2fa 80%,
                #00e2fa 100%
            );
        }
        &.linear-info {
            color: #fff;
            background: linear-gradient(
                to right,
                #2db7f5 0%,
                #2dc7d1 80%,
                #2dd7d1 100%
            );
        }
        &.linear-success {
            color: #fff;
            background: linear-gradient(
                to right,
                #44ea76 0%,
                #39fad7 80%,
                #39fad7 100%
            );
        }
        &.linear-warning {
            color: #fff;
            background: linear-gradient(
                left,
                #fa6c9f 0%,
                #ffe140 80%,
                #ffe140 100%
            );
        }
        &.linear-error {
            color: #fff;
            background: linear-gradient(
                left,
                #fa6c9f 0%,
                #ff9100 30%,
                #ed4014 100%
            );
        }
        &.linear-dashed {
            border: 1px dashed transparent;
            border-color: linear-gradient(
                left,
                #2d8cf0 0%,
                #00e2fa 80%,
                #00e2fa 100%
            );
            .typeStyle(#fff, #515a6e);
            &:hover,
            &:active {
                border: 1px dashed @primary-color;
                color: @primary-color;
            }
        }
        // 灵魂
        &.soul-primary {
            background: #fff;
            color: @primary-color;
            border: 1px solid @primary-color;
        }
        &.soul-info {
            background: #fff;
            color: @info-color;
            border: 1px solid @info-color;
        }
        &.soul-success {
            background: #fff;
            color: @success-color;
            border: 1px solid @success-color;
        }
        &.soul-warning {
            background: #fff;
            color: @warning-color;
            border: 1px solid @warning-color;
        }
        &.soul-error {
            background: #fff;
            color: @error-color;
            border: 1px solid @error-color;
        }
        // 样式函数
        .typeStyle(@bg,@color) {
            background: @bg;
            color: @color;
            &:hover {
                opacity: 0.8;
            }
            &:active {
                opacity: 1;
            }
        }
    }
</style>
