<template>
	<view class="wrap">
		<u-navbar title="" title-color="#000000" title-size="32" :background="background" back-icon-size="40" 
		back-icon-color="#ffffff" back-icon-name="arrow-left" :border-bottom="false">
			<view class="navbar_right_btn" slot="right" @click="toRegister">免费注册</view>
		</u-navbar>

		<view class="box">
			<view class="title">密码登录</view>
			<u-form :model="form" ref="uForm">
					<u-form-item label="账号" prop="account"><u-input v-model="form.account" :border-bottom="false" /></u-form-item>
					<u-form-item label="密码" prop="password"><u-input v-model="form.password" :type="isOpen?'text':'password'" :border-bottom="false"/></u-form-item>
			</u-form>
			
			<view class="confirm" @click="login">登录</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					account: '',
					password: '',
				},
				isOpen: false,
				background: {
					backgroundColor: "#aaaaaa75"
				},
				rules: {
					account: [
						{
							required: true,
							message: '请输入账号',
							// 可以单个或者同时写两个触发验证方式
							trigger: 'blur,change'
						}
					],
					password: [
						{
							required: true,
							message: '请输入密码',
							// 可以单个或者同时写两个触发验证方式
							trigger: 'blur,change'
						}
					]
				}
			};
		},
		// 必须要在onReady生命周期，因为onLoad生命周期组件可能尚未创建完毕
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		},
		methods: {
			toRegister(){
				uni.navigateTo({
					url: '/pages/register/register'
				})
			},
			//登录
			login() {
				let _this = this
				if (!_this.form.account) {
					_this.$u.toast('账号不能为空');
					return;
				}
				
				if (!_this.form.password) {
					_this.$u.toast('密码不能为空');
					return;
				}
				_this.$u.myApi.login({
					account: _this.form.account,
					password: _this.form.password
				}).then(res => {
					console.log('res',res)
					uni.setStorageSync("token", res.data.authToken.token);
					// 获取用户最新信息
					_this.$u.myApi.userInfo("id="+res.data.userId).then((res) => {
						console.log(res)
						uni.setStorageSync("userInfo", res.data);
						uni.setStorageSync("userid", res.data.id);
						uni.switchTab({
							url: '/pages/index/index'
						});
					})
				}).catch(res => {})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		width: 100%;
		min-height: 100vh;
		background: url(../../static/login-register/login.jpg) no-repeat top left;
		background-size: 100% 100%;
		.navbar_right_btn{
			color: #FFFFFF;
			font-size: 36rpx;
			margin-right: 40rpx;
		}
		.box {
			width: 100%;
			height: calc(100vh - 44px);
			background-color: #aaaaaa75;
			padding: 20vh 60rpx 0rpx;
			box-sizing: border-box;
			
			.title{
				margin-bottom: 80rpx;
				letter-spacing: 6rpx;
				font-size: 60rpx;
				color: #FFFFFF;
			}
			
			/deep/ .u-form-item{
				background: #ffffff;
				border: 4rpx solid #ffb600;
				padding: 10rpx 20rpx;
				margin-bottom: 50rpx;
				border-radius: 50rpx;
				&:after{
					border: 0;
				}
			}
			
			.confirm {
				width: 100%;
				height: 90rpx;
				background: #ffb600;
				border-radius: 40rpx;
				text-align: center;
				line-height: 80rpx;
				color: #FFFFFF;
				font-size: 32rpx;
				font-weight: 400;
			}
		}
	}
</style>
