<template>
    <div class="qx-sideslip transition" :style="{'transform': `translate3d(${leftX}, 0, 0)`}" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
        <div class="sideslip-left">
            <slot name="left"></slot>
        </div>
        <div class="sideslip-right">
            <slot name="right"></slot>
            
            <button @click="open">{{moveX}}</button>
        </div>
        <div class="mask" v-if="maskState" @click="cancle" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend"></div>
    </div>
</template>

<script>
export default {
    name: 'qx-sideslip',
    data(){
        return{
            leftX: '-5.5rem',
            flag: false,
            startX:0,
            moveX: 0,
            moveState: false,
            maskState: false
        }
    },
    methods:{
        open(){
            this.flag = !this.flag;
            if( this.flag ){
                this.leftX = 0;
            }else{
                this.leftX = '-5.5rem';
            }
        },
        touchstart(e){
            this.startX = e.touches[0].clientX / 100;
        },
        touchmove(e){
            e.preventDefault();
            this.moveX = this.startX - e.touches[0].clientX / 100;
            this.moveState = true;
            if( this.moveX < 0 ){
                if( +parseFloat(this.leftX) != 0 ){
                    this.leftX = '-' + ( 5.5 + (+this.moveX) ) + 'rem';
                }
            }else{
                if( parseFloat(this.leftX) > -5.5 ){
                    this.maskState = false;
                    this.leftX = '-' + ( parseFloat(this.leftX) + this.moveX ) + 'rem';
                }
            }
        },
        touchend(e){
            if( this.moveX < -2.5 ){
                this.leftX = '-0rem';
                this.maskState = true;
            }else if( this.moveX > -2.5 ){
                if( this.moveX > 2.5 ){
                    this.leftX = '-5.5rem';
                    this.maskState = false;
                }else{
                    this.leftX = '-0rem';
                    this.maskState = true;
                }
            }
        },
        cancle(){
            this.leftX = '-5.5rem';
            this.moveX = 0;
            this.maskState = false;
        }
    }
}
</script>

<style lang="less">
html,body{
    height: 100%;
}
#app{
    height: 100%;
}
.qx-sideslip{
    height: 100%;
    position: relative;
    width: 13rem;
    display: flex;
    flex-direction: row;
    //transition: left .3s linear;
    .sideslip-left{
        width: 5.5rem;
    }
    .sideslip-right{
        flex: 1;
        background: #ccc;
    }
    .mask{
        position: absolute;
        left: 5.5rem;
        top: 0;
        bottom: 0;
        width: 2rem;
        background: rgba(0,0,0,.4);
    }
}
.transition{
    transition:transform 350ms cubic-bezier(.165,.84,.44,1);
}
</style>
