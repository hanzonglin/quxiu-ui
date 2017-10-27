<template>
    <div class="qx-container">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'qx-tab-container',
    data(){
        return {

        }
    },
}
</script>

<style lang="less">
.container{
    margin: 0 0 .88rem 0;
    /*overflow:auto;
    -webkit-overflow-scrolling: touch;*/
}
</style>
