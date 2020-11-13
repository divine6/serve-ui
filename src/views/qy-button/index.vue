<template>
    <div class="wrap">
        <!-- 默认 -->
        <h1 style="text-align:center">按钮组件</h1>
        <h3>默认</h3>
        <qy-button type="primary">primary</qy-button>
        <qy-button type="info">info</qy-button>
        <qy-button type="success">success</qy-button>
        <qy-button type="warning">warning</qy-button>
        <qy-button type="error">error</qy-button>
        <qy-button type="text">text</qy-button>
        <qy-button type="dashed">dashed</qy-button>
        <qy-button type="primary"
                   cicle
                   icon="md-search"></qy-button>
        <qy-button type="primary"
                   cicle>primary</qy-button>
        <qy-button type="primary"
                   size="large">大按钮</qy-button>
        <qy-button type="primary"
                   size="small">小按钮</qy-button>
        <h3>禁用按钮</h3>
        <qy-button type="primary"
                   disabled>禁用按钮</qy-button>
        <qy-button disabled>禁用按钮</qy-button>
        <h3>长按钮</h3>
        <div style="width:400px">
            <qy-button type="primary"
                       long>长按钮</qy-button>
            <qy-button type="primary"
                       linear
                       long>长按钮</qy-button>
            <qy-button type="success"
                       linear
                       long>长按钮</qy-button>
            <qy-button type="warning"
                       linear
                       long>长按钮</qy-button>
        </div>
        <h3>渐变</h3>
        <qy-button type="primary"
                   linear>primary</qy-button>
        <qy-button type="info"
                   linear>info</qy-button>
        <qy-button type="success"
                   linear>success</qy-button>
        <qy-button type="warning"
                   linear>warning</qy-button>
        <qy-button type="error"
                   linear>error</qy-button>
        <h3>加载中</h3>
        <qy-button type="primary"
                   loading>加载中</qy-button>
        <qy-button type="primary"
                   loading></qy-button>
        <!-- 灵魂 -->
        <h3>灵魂</h3>
        <div style="background:#222;height:60px;padding-top:20px">
            <qy-button type="primary"
                       icon="md-search"
                       soul>primary</qy-button>
            <qy-button type="info"
                       soul>info</qy-button>
            <qy-button type="success"
                       soul>success</qy-button>
            <qy-button type="warning"
                       soul>warning</qy-button>
            <qy-button type="error"
                       soul>error</qy-button>
            <qy-button type="text"
                       soul>text</qy-button>
        </div>
        <h3>按钮组</h3>
        <qy-btn-group>
            <qy-button>按钮组</qy-button>
            <qy-button>按钮组</qy-button>
            <qy-button>按钮组</qy-button>
            <qy-button>按钮组</qy-button>
            <qy-button>按钮组</qy-button>
        </qy-btn-group>
        <qy-btn-group>
            <qy-button type="warning"
                       size="large">按钮组</qy-button>
            <qy-button type="warning"
                       size="large">按钮组</qy-button>
            <qy-button type="warning"
                       size="large">按钮组</qy-button>
            <qy-button type="warning"
                       size="large">按钮组</qy-button>
        </qy-btn-group>
        <qy-btn-group>
            <qy-button type="primary">按钮组</qy-button>
            <qy-button type="primary">按钮组</qy-button>
            <qy-button type="primary">按钮组</qy-button>
            <qy-button type="primary">按钮组</qy-button>
        </qy-btn-group>
        <qy-btn-group>
            <qy-button type="success"
                       size="small">按钮组</qy-button>
            <qy-button type="success"
                       size="small">按钮组</qy-button>
            <qy-button type="success"
                       size="small">按钮组</qy-button>
            <qy-button type="success"
                       size="small">按钮组</qy-button>
        </qy-btn-group>
        <qy-btn-group>
            <qy-button type="primary"
                       linear>按钮组</qy-button>
            <qy-button type="info"
                       linear>按钮组</qy-button>
            <qy-button type="success"
                       linear>按钮组</qy-button>
            <qy-button type="warning"
                       linear>按钮组</qy-button>
            <qy-button type="error"
                       linear>按钮组</qy-button>
        </qy-btn-group>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="less" scoped>
    .wrap {
        width: 1200px;
        margin: 50px auto;
    }
</style>
