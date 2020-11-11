<template>
    <i :class="classes"
       :style="styles"
       @click="handleClick"></i>
</template>
<script>
    const prefixCls = 'qy-icon';

    export default {
        name: 'qy-icon',
        props: {
            name: {
                type: String,
                default: 'md-add'
            },
            size: [Number, String],
            color: String,
            custom: {
                type: String,
                default: ''
            }
        },
        computed: {
            classes() {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-${this.name}`]: this.name !== '',
                        [`${this.custom}`]: this.custom !== '',
                    }
                ];
            },
            styles() {
                let style = {};

                if (this.size) {
                    style['font-size'] = `${this.size}px`;
                }

                if (this.color) {
                    style.color = this.color;
                }

                return style;
            }
        },
        methods: {
            handleClick(event) {
                this.$emit('click', event);
            }
        }
    };
</script>
