<template>
    <div class="qx-header" :class="{'fixed':fixed}">
        <div class="qx-header-left">
            <slot name="left"></slot>
        </div>
        <span>{{title}}</span>
        <div class="qx-header-right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'qx-header',
    props:[
        'title',
        'fixed'
    ],
    methods:{
    }
}
</script>

<style lang="less">
.qx-header{
    height: .88rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 0;
    padding: 0 .2rem;
    position: sticky;
    top: 0;
    span{
        font-size: .4rem;
    }
    .qx-header-left,.qx-header-right,h1{
        flex: 1;
    }
}
.fixed{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
}
</style>
