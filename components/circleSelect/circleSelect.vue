<template>
	<view class="circle_select_wrap">
		<image src="./image/select.png" class="select" v-if="select"></image>
		<image src="./image/no_select.png" class="select" v-if="!select"></image>
	</view>
</template>

<script>
	export default {
		name:"circleSelect",
		props:{
			select:{
				type: Boolean,
				default: false
			}
		},
	}
</script>

<style lang="scss" scoped>
	.circle_select_wrap{
		display: flex;
		justify-content: center;
		align-items: center;
		.select{
			width: 28rpx;
			height: 28rpx;
		}
	}
</style>
