<template>
    <div>
        <qy-card linear="info">
            <div v-for="o in 4"
                 :key="o"
                 class="text item">
                {{'消息面板 ' + o }}
            </div>
        </qy-card>
        <qy-card linear="success">
            <div v-for="o in 4"
                 :key="o"
                 class="text item">
                {{'列表内容 ' + o }}
            </div>
        </qy-card>
        <qy-card linear="warning">
            <div v-for="o in 4"
                 :key="o"
                 class="text item">
                {{'列表内容 ' + o }}
            </div>
        </qy-card>
        <qy-card linear="error">
            <div v-for="o in 4"
                 :key="o"
                 class="text item">
                {{'列表内容 ' + o }}
            </div>
        </qy-card>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>
</style>
