<template>
	<view class="wrap">
		<u-navbar title="修改密码" title-color="#000000" title-size="32" back-icon-size="40" back-icon-color="#000000"
			back-icon-name="arrow-left" :border-bottom="false">
		</u-navbar>
		
		<view class="title">请设置密码</view>
		<u-form :model="form" ref="uForm">
			<u-form-item label="新密码" prop="password" label-width="70px">
				<u-input v-model="form.password" type="password" :border-bottom="false" placeholder="请输入密码"/>
			</u-form-item>
			<u-form-item label="确认密码" prop="repassword" label-width="70px">
				<u-input v-model="form.repassword" type="password" :border-bottom="false" placeholder="请再次确认密码"/>
			</u-form-item>
		</u-form>
		<view class="confirm" @click="confirm">确认修改</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				titleStyle:{
					'font-size':'28rpx',
					'color':'#000000'
				},
				form: {
					password: '',
					repassword: ''
				},
				rules: {
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
		methods:{
			confirm(){
				let _this = this;
				uni.showToast({
					duration: 1000,
					title: '修改成功',
					icon: 'none'
				});
				setTimeout(()=>{
					uni.navigateBack({})
				},500)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap{
		width: 100%;
		min-height: 100vh;
		background-color: #FFFFFF;
		padding: 0 40rpx;
		.title{
			margin: 20rpx 0;
			color: rgb(192, 196, 204);
			font-size: 26rpx;
		}
		.confirm {
			width: 100%;
			height: 80rpx;
			background: #ffb600;
			border-radius: 40rpx;
			text-align: center;
			line-height: 80rpx;
			color: #FFFFFF;
			font-size: 32rpx;
			font-weight: 400;
			margin: 80rpx auto;
		}
	}
</style>
