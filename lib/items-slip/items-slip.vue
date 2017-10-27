<template>
    <div class="items-slip">
		<div class="content" :style="{'transform': `translate3d(${leftX}, 0, 0)`}" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
			<slot></slot>
		</div>
		<div class="menu-btn">
			<div class="btn-wrap del" @click="del(index)"><span>删除</span></div>
		</div>
    </div>
</template>

<script>
export default {
    name: 'qx-items-slip',
    data () {
        return {
			leftX: 0,
            startX:0,
            moveX: 0
        }
	},
	props: ['index'],
    methods:{
		touchstart(e){
			this.startX = e.touches[0].clientX / 100;
			this.leftX = 0;
			this.moveX = 0;
        },
        touchmove(e){
            e.preventDefault();
            this.moveX = this.startX - e.touches[0].clientX / 100;
            if( this.moveX < 1 ){
				this.leftX = '-' + this.moveX + 'rem';
			}
        },
        touchend(e){
            if( this.moveX < .5 ){
                this.leftX = 0;
            }else{
                this.leftX = '-1rem';
            }
		},
		del(index){
			this.leftX = 0;
			this.moveX = 0;
			this.$emit('delItem',index);
		}
    }
}
</script>

<style lang="less">
.items-slip{
	height: .88rem;
	overflow: hidden;
	position: relative;
	.content{
		height: .88rem;
		background: #ccc;
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		transition:transform 350ms cubic-bezier(.165,.84,.44,1);
	}
	.menu-btn{
		height: .88rem;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-end;
		.btn-wrap{
			height: .88rem;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
		}
		span{
			font-size: .28rem;
			color: #fff;
		}
		.del{
			width: 1rem;
			background: #fc3b30;
		}
	}
}
</style>

