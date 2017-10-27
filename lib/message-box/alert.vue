<template>
    <div class="alert">
        <div class="content">
            <h2>{{data.title || '提示'}}</h2>
            <p>{{data.text}}</p>
            <div class="btn-wrap">
                <div class="btn" @click="cancle(false)">
                    <span>{{data.confirm || '确定'}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'qx-alert',
    props: ['data'],
    methods: {
        cancle(flag) {
            this.$emit('Cancle',flag);
        }
    }
}
</script>

<style lang="less">
.alert{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,.6);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    z-index: 999;
    .content{
        width: 5rem;
        background: #fff;
        height: auto;
        border-radius: .1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        animation: fadeIn .3s;
        h2{
            font-size: .34rem;
            padding: .2rem;
            color: #333;
        }
        p{
            font-size: .3rem;
            padding: .1rem .2rem;
            color: #999;
        }
        .btn-wrap{
            height: .7rem;
            margin-top: .3rem;
            border-top: 1px solid #ddd;
            display: flex;
            width: 100%;
            font-size: 0;
            .btn{
                height: .64rem;
                display: flex;
                flex: 1;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                span{
                    font-size: .3rem;
                    color: #26a2ff;
                }
            }
        }
    }
}
@keyframes fadeIn {
    0%{transform:scale(.7)}
    45%{transform:scale(1.05)}
    80%{transform:scale(.95)}
    100%{transform:scale(1)}
}
</style>

