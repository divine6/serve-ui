<template>
    <transition name="qy-alert-fade">
        <div class="qy-alert"
             :class="[typeClass, center ? 'is-center' : '', 'is-' + effect]"
             v-show="visible"
             role="alert">
            <qy-icon :name="iconClass"
                     class="qy-alert__icon"
                     :class="[isBigIcon ]"
                     v-if="showIcon"></qy-icon>
            <div class="qy-alert__content">
                <span class="qy-alert__title"
                      :class="[ isBoldTitle ]"
                      v-if="title || $slots.title">
                    <slot name="title">{{ title }}</slot>
                </span>
                <p class="qy-alert__description"
                   v-if="$slots.default && !description">
                    <slot></slot>
                </p>
                <p class="qy-alert__description"
                   v-if="description && !$slots.default">{{ description }}</p>
                <span class="qy-alert__closebtn"
                      @click="close">
                    <qy-icon v-show="closable"
                             name="ios-close-circle"
                             :class="{ 'is-customed': closeText !== '',}"></qy-icon>
                    {{closeText}}
                </span>

            </div>
        </div>
    </transition>
</template>

<script>
    const TYPE_CLASSES_MAP = {
        'success': 'ios-checkmark-circle',
        'warning': 'ios-alert ',
        'error': 'ios-close-circle'
    };
    export default {
        name: 'Alert',

        props: {
            title: {
                type: String,
                default: ''
            },
            description: {
                type: String,
                default: ''
            },
            type: {
                type: String,
                default: 'info'
            },
            closable: {
                type: Boolean,
                default: true
            },
            closeText: {
                type: String,
                default: ''
            },
            showIcon: Boolean,
            center: Boolean,
            effect: {
                type: String,
                default: 'linear',
                validator: (value) => {
                    return ['light', 'dark', 'linear'].includes(value);
                }
            }
        },

        data() {
            return {
                visible: true
            };
        },

        methods: {
            close() {
                this.visible = false;
                this.$emit('close');
            }
        },

        computed: {
            typeClass() {
                return `qy-alert--${this.type}`;
            },

            iconClass() {
                return TYPE_CLASSES_MAP[this.type] || 'ios-information-circle';
            },

            isBigIcon() {
                return this.description || this.$slots.default ? 'is-big' : '';
            },

            isBoldTitle() {
                return this.description || this.$slots.default ? 'is-bold' : '';
            }
        }
    };
</script>
<style lang="less" scoped>
    .qy-alert {
        width: 100%;
        padding: 8px 16px;
        margin: 0;
        box-sizing: border-box;
        border-radius: 4px;
        position: relative;
        background-color: #fff;
        overflow: hidden;
        opacity: 1;
        color: #53664a;
        border: 1px solid #ccc;
        display: flex;
        align-items: center;
        transition: opacity 0.2s;
        &.is-dark {
            .qy-alert__closebtn {
                color: #c0c4cc;
            }
            .qy-alert__description {
                color: #fff;
            }
        }
        &.is-center {
            justify-content: center;
        }
        // 消息
        &--info {
            &.is-light {
                background-color: #eff4fe;
                color: #3b688c;
                border-color: #d7e4fe;
                .qy-alert__description {
                    color: #3b688c;
                }
                .qy-alert__closebtn {
                    color: #333;
                }
            }
            &.is-dark {
                background-color: #3b688c;
                color: #fff;
            }
            &.is-linear {
                color: #fff;
                background: linear-gradient(
                    to right,
                    #2db7f5 0%,
                    #2dc7d1 80%,
                    #2dd7d1 100%
                );
            }
        }
        // 成功
        &--success {
            &.is-light {
                border-color: #b8f0d1;
                background-color: #e3f9ed;
                color: #53664a;
                .qy-alert__description {
                    color: #53664a;
                }
                .qy-alert__closebtn {
                    color: #53664a;
                }
            }
            &.is-dark {
                background-color: #67c23a;
                color: #fff;
            }
            &.is-linear {
                color: #fff;
                background: linear-gradient(
                    to right,
                    #44ea76 0%,
                    #39fad7 80%,
                    #39fad7 100%
                );
            }
        }
        // 警告
        &--warning {
            &.is-light {
                color: #7f6128;
                border-color: #ffefc0;
                background-color: #fff8e6;
                .qy-alert__description {
                    color: #7f6128;
                }
                .qy-alert__closebtn {
                    color: #7f6128;
                }
            }
            &.is-dark {
                background-color: #e6a23c;
                color: #fff;
            }
            &.is-linear {
                color: #fff;
                background: linear-gradient(
                    to right,
                    #e9d45f 0%,
                    #ffe865 60%,
                    #fa6c9f 100%
                );
            }
        }
        // 错误
        &--error {
            &.is-light {
                border-color: #ffc8c8;
                background-color: #ffe9e9;
                color: #ad3430;
                .qy-alert__description {
                    color: #ad3430;
                }
                .qy-alert__closebtn {
                    color: #ad3430;
                }
            }
            &.is-dark {
                background-color: #f56c6c;
                color: #fff;
            }
            &.is-linear {
                color: #fff;
                background: linear-gradient(
                    left,
                    #fa6c9f 0%,
                    #ed4014 80%,
                    #ed4014 100%
                );
            }
        }
        &__content {
            display: table-cell;
            padding: 0 8px;
        }
        &__icon {
            font-size: 16px;
            width: 16px;
        }
        &__icon.is-big {
            font-size: 28px;
            width: 28px;
        }
        &__title {
            font-size: 13px;
            line-height: 18px;
        }
        &__title.is-bold {
            font-weight: 700;
        }
        &__description {
            font-size: 12px;
            margin: 5px 0 0;
        }
        &__closebtn {
            font-size: 12px;
            opacity: 1;
            position: absolute;
            top: 12px;
            right: 15px;
            cursor: pointer;
        }
        &__closebtn.is-customed {
            font-style: normal;
            font-size: 13px;
            top: 9px;
        }
    }
    .qy-alert-fade-enter,
    .qy-alert-fade-leave-active {
        opacity: 0;
    }
</style>
