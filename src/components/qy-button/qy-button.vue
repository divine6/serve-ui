<template>
    <button :class="classes"
            :disabled="disabled"
            @click="handleClickLink">
        <qy-icon class="loading-loop"
                 name="ios-loading"
                 v-if="loading"></qy-icon>
        <qy-icon :name="icon"
                 v-if="icon && !loading"></qy-icon>
        <span v-if="showSlot">
            <slot></slot>
        </span>
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
            },
            loading: {
                type: Boolean,
                default: false
            },
            long: {
                type: Boolean,
                default: false
            },
            cicle: {
                type: Boolean,
                default: false
            },
            icon: {
                type: String,
                default: ''
            },
            size: {
                type: String,
                default: 'default'
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            showSlot() {
                return !!this.$slots.default
            },
            classes() {
                return [
                    `${prefixCls}`,
                    `${this.type}`,
                    this.long ? `${prefixCls}-long` : '',
                    this.cicle ? `${prefixCls}-cicle` : '',
                    this.size !== 'default' ? `${prefixCls}-${this.size}` : `${prefixCls}-default`,
                    this.cicle ? `${prefixCls}-only-icon` : '',
                    this.linear ? `linear-${this.type}` : '',
                    this.soul ? `soul-${this.type}` : '',
                    this.disabled ? `${prefixCls}-disabled` : '',
                    !this.showSlot && (!!this.icon || this.loading) ? 'qy-icon-only' : '',
                ]
            }
        },
        methods: {
            handleClickLink(event) {
                this.$emit('click', event);
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
    @keyframes ani-load-loop {
        from {
            transform: rotate(0deg);
        }
        50% {
            transform: rotate(180deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    .loading-loop {
        // Loading for loop
        animation: ani-load-loop 1s linear infinite;
    }
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
        border: 1px solid transparent;
        &:active,
        &:focus {
            outline: 0;
        }
        &-samll {
            height: 24px;
            padding: 0 7px;
            font-size: 14px;
            border-radius: 3px;
        }
        &-large {
            height: 40px;
            padding: 0 20px;
            font-size: 16px;
            border-radius: 4px;
        }
        // 默认
        &.default {
            .typeStyle(#fff, #515a6e);
            border: 1px solid #dcdee2;
            &:hover,
            &:active {
                border: 1px solid @primary-color;
                color: @primary-color;
            }
            &:disabled {
                color: #c5c8ce;
                border-color: #dcdee2;
                background-color: #f7f7f7;
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
                #ed4014 80%,
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
            background: transparent;
            color: @primary-color;
            border: 1px solid @primary-color;
            &:hover {
                background: #fff;
            }
        }
        &.soul-info {
            background: transparent;
            color: @info-color;
            border: 1px solid @info-color;
            &:hover {
                background: #fff;
            }
        }
        &.soul-success {
            background: transparent;
            color: @success-color;
            border: 1px solid @success-color;
            &:hover {
                background: #fff;
            }
        }
        &.soul-warning {
            background: transparent;
            color: @warning-color;
            border: 1px solid @warning-color;
            &:hover {
                background: #fff;
            }
        }
        &.soul-error {
            background: transparent;
            color: @error-color;
            border: 1px solid @error-color;
            &:hover {
                background: #fff;
            }
        }
        // 长按钮
        &.qy-btn-long {
            width: 100%;
        }
        // 圆形按钮
        &.qy-btn-cicle {
            border-radius: 32px;
        }
        &.qy-btn-icon-only {
            width: 32px;
            height: 32px;
            padding: 0;
            font-size: 16px;
            border-radius: 50%;
        }
        // 样式函数
        .typeStyle(@bg,@color) {
            background: @bg;
            color: @color;
            &:active,
            &:hover {
                opacity: 0.8;
            }
        }
        // 规格函数
        .sizeStyle(@height; @padding; @font-size; @border-radius) {
            height: @height;
            padding: @padding;
            font-size: @font-size;
            border-radius: @border-radius;
        }
        &-disabled {
            cursor: not-allowed;
            color: #c5c8ce;
            border-color: #dcdee2;
            > * {
                pointer-events: none;
            }
        }
    }
</style>
