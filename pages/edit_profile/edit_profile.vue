<template>
	<view class="wrap">
		<u-navbar title="编辑资料" title-color="#000000" title-size="32" back-icon-size="40" back-icon-color="#000000"
			back-icon-name="arrow-left" :border-bottom="false">
		</u-navbar>
		
		<view class="row">
			<view class="name">姓名</view>
			<u-input v-model="userInfo.name" height="90" placeholder="请输入姓名" maxlength="6" />
		</view>
		
		<view class="row">
			<view class="name">性别</view>
			<view class="radio">
				<view :class="['radio_item',userInfo.sex === '0' ? 'radio_item_s' : '']" @click="setSex('0')">男</view>
				<view :class="['radio_item',userInfo.sex === '1' ? 'radio_item_s' : '']" @click="setSex('1')">女</view>
			</view>
		</view>
		
		<view class="row">
			<view class="name">邮箱</view>
			<u-input v-model="userInfo.mail" height="90" placeholder="请输入邮箱" />
		</view>
		

		<view class="confirm" @click="updateUserInfo">提交修改</view>
	</view>
</template>

<script>
	import checkmail from '../../utils/checkMail.js';
	export default {
		data() {
			return {
				userInfo: {
					role: '0'
				}
			};
		},
		onLoad() {
			const user = uni.getStorageSync('userInfo');
			this.userInfo= user;
		},
		methods: {
			setSex(type) {
				this.userInfo.sex = type
			},
			updateUserInfo() {
				let _this = this
				if (!checkmail.checkEmail(_this.userInfo.mail)) {
					uni.showToast({title: '邮箱格式错误',icon: 'none'});
					return;
				}
				_this.$u.myApi.updateUserInfo(_this.userInfo).then(res => {
					uni.showToast({
						icon:'success',
						title:'保存成功'
					})
					// 获取用户最新信息
					_this.$u.myApi.userInfo("id="+_this.userInfo.id).then((res) => {
						uni.setStorageSync("userInfo", res.data);
						uni.setStorageSync("userid", res.data.id);
						uni.navigateBack({
							delta: 2
						})
					})
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		width: 100%;
		min-height: 100vh;
		background-color: #FFFFFF;

		.avatar {
			width: 120rpx;
			height: 120rpx;
			margin: 60rpx auto;
		}

		.row {
			display: flex;
			align-items: center;
			height: 90rpx;
			margin: 0rpx 30rpx;
			border-bottom: 1rpx solid rgba(210, 210, 210, 0.4);
			line-height: 1;

			.name {
				width: 120rpx;
				color: #929292;
				font-size: 28rpx;
				font-weight: 400;
				margin-right: 20rpx;
			}

			.text {
				color: #000000;
				font-size: 28rpx;
				font-weight: 400;
			}

			.radio {
				display: flex;

				.radio_item {
					width: 72rpx;
					height: 36rpx;
					background: #F5F5F5;
					border-radius: 8rpx;
					text-align: center;
					line-height: 36rpx;
					color: #000000;
					font-size: 28rpx;
					font-weight: 400;
					margin-right: 20rpx;

					&:last-child {
						margin-right: 0rpx;
					}
				}

				.radio_item_s {
					color: #FFFFFF;
					background: #ffb600;
				}
			}
		}

		.confirm {
			width: 690rpx;
			height: 80rpx;
			background: #ffb600;
			border-radius: 40rpx;
			text-align: center;
			line-height: 80rpx;
			color: #FFFFFF;
			font-size: 32rpx;
			font-weight: 400;
			position: fixed;
			left: 30rpx;
			right: 30rpx;
			bottom: 100rpx;
		}

	}
</style>
