<template>
	<view class="wrap">
		<u-navbar title="" title-color="#000000" title-size="32" :background="background" back-icon-size="40"
		back-icon-color="#ffffff" back-icon-name="arrow-left" :border-bottom="false">
			<view class="navbar_right_btn" slot="right" @click="tologin">登录</view>
		</u-navbar>

		<view class="box">
			<view class="title">用户注册</view>
			<u-form :model="form" ref="uForm">
					<u-form-item label="账号" prop="account" label-width="70px">
						<u-input v-model="form.account" :border-bottom="false" placeholder="请输入账号" />
					</u-form-item>
					<u-form-item label="密码" prop="password" label-width="70px">
						<u-input v-model="form.password" type="password" :border-bottom="false" placeholder="请输入密码"/>
					</u-form-item>
					<u-form-item label="确认密码" prop="repassword" label-width="70px">
						<u-input v-model="form.repassword" type="password" :border-bottom="false" placeholder="请再次确认密码"/>
					</u-form-item>
			</u-form>
			
			<view class="confirm" @click="register">立即注册</view>
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
					repassword: ''
				},
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
							min: 8,
							max:10,
							message: '密码要6-10字',
							trigger: 'change'
						}
					],
					repassword: [
						{
							required: true,
							message: "确认密码不能为空",
							trigger: "blur"
						},
						{
							trigger: 'blur',
							validator: (rule, value, callback) => {
								if (value !== this.form.password) {
									callback(new Error('两次输入密码不一致'))
								} else {
									callback()
								}
							}
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
			tologin(){
				uni.navigateTo({
					url: '/pages/login/login'
				})
			},
			//登录
			register() {
				uni.navigateTo({
					url: '/pages/login/login'
				})
			},
			
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		width: 100%;
		min-height: 100vh;
		background: url(../../static/login-register/register.jpg) no-repeat top left;
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
			padding: 15vh 60rpx 0rpx;
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
				width: 630rpx;
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
