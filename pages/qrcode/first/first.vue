<template>
	<view class="wrap">
		<view class="bottom-btn">
			<u-button type="primary" class="btn" @click="login">登录</u-button>
			<u-button type="primary" class="btn" @click="register">注册</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		name: "first",
		data() {
			return {
				index: 0
			}
		},
		methods: {
			login(){
				uni.navigateTo({
					url: '/pages/login/login'
				})
			},
			register(){
				uni.navigateTo({
					url: '/pages/register/register'
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
	.wrap {
		width: 100%;
		height: 100vh;
		position: relative;
		background: url(../../static/login-register/first.jpg) no-repeat top left;
		background-size: 100% 100%;
		.bottom-btn{
			width: 100%;
			text-align: center;
			position: absolute;
			left: 50%;
			bottom: 10%;
			transform: translateX(-50%);
			.btn{
				display: inline-block;
				width: 200rpx;
				margin: 0 40rpx;
				color: #444146;
				border-color: #bedae0;
				background-color: #bedae0;
				&:first-child{
					color: #FFFFFF;
					background-color: #ffb600;
					border-color: #ffb600;
				}
			}
		}
	}
</style>
