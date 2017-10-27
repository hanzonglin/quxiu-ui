<template>
    <div class="tabbar">
        <div v-for="(item,index) in tabbar.item" class="tab-items" :key="index" @click="selectItem(index)">
            <div class="icon">
                <i class="iconfont" v-if="index==selected" :style="{color:tabbar.selectColor}">{{item.icon}}</i>
                <i class="iconfont" v-if="index!=selected">{{item.icon}}</i>
            </div>
            <div class="title" v-if="index==selected" :style="{color:tabbar.selectColor}">{{item.title}}</div>
            <div class="title" v-if="index!=selected">{{item.title}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'qx-tabbar',
    data() {
        return {
            selected: this.value
        }
    },
    props:[
        'tabbar',
        'value'
    ],
    methods:{
        selectItem(index){
            this.selected = index;
            this.$emit("selectTab",index);
        }
    }
}
</script>

<style lang="less">
.tabbar{
    height: .88rem;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #fff;
    border-top: 1px solid #c9c9cb;
    .tab-items{
        height: .88rem;
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .icon{
            width: .5rem;
            height: .5rem;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            .iconfont{
                font-size: .2rem;
            }
        }
        .title{
            font-size: .14rem;
        }
    }
}
</style>
