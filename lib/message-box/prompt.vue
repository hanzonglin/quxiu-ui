<template>
    <div class="prompt">
        <div class="content">
            <h2>{{data.title || '提示'}}</h2>
            <div class="input-wrap">
                <input type="text" value="" placeholder="请输入..." ref="prompt" />
            </div>
            <div class="btn-wrap">
                <div class="btn left-btn" @click="cancle(false)">
                    <span>{{data.cancel || '取消'}}</span>
                </div>
                <div class="btn" @click="cancle(true)">
                    <span>{{data.confirm || '确定'}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'qx-prompt',
    props: ['data'],
    methods: {
        cancle(flag) {
            var text = this.$refs.prompt.value;
            this.$emit('Cancle',flag,text);
        }
    }
}
</script>

<style lang="less">
.prompt{
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
        .input-wrap{
            font-size: .3rem;
            padding: .1rem .2rem;
            input{
                border: 1px solid #ddd;
                padding: .1rem .2rem;
                width: 4rem;
                font-size: .28rem;
            }
        }
        .btn-wrap{
            height: .7rem;
            margin-top: .3rem;
            border-top: 1px solid #ddd;
            display: flex;
            width: 100%;
            font-size: 0;
            overflow: hidden;
            .btn{
                height: .7rem;
                display: flex;
                flex: 1;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                margin-top: -1px;
                span{
                    font-size: .3rem;
                    color: #26a2ff;
                }
            }
            .left-btn{
                border-right: 1px solid #ddd;
                span{
                    color: #666;
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

