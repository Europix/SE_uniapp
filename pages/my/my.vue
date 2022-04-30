<template>
	<view class="wrap">
		<u-navbar title="我的" title-color="#FFFFFF" title-size="32" :is-back="false" :border-bottom="false"
			:background="background">
		</u-navbar>
		<view class="top_box">
			<view class="user_info">
				<view style="display: flex;align-items: center;">
					<u-avatar :src="image" size="120" class="avatar"></u-avatar>
					<view class="info_box">
						<view class="name">{{userInfo.name}}</view>
					</view>
				</view>
				<view class="rigth_box">
					<view class="bt_box">
						<u-icon name="qrcode" custom-prefix="custom-icon" color="#ffffff" size="36" @click="qrcode"></u-icon>
					</view>
				</view>
			</view>
		</view>
		<!--  -->
		<view class="list_box">
			<view class="title_box" @click="userOrder">
				<view class="left">
					<image src="/static/my/dingdan.png" class="left_icon"></image>我的订单
				</view>
				<view class="right">
					<u-icon name="arrow-right" color="#707070" size="20"></u-icon>
				</view>
			</view>
			<view class="title_box" @click="bookCoach">
				<view class="left">
					<image src="/static/my/sijiao.png" class="left_icon"></image>私教预约
				</view>
				<view class="right">
					<u-icon name="arrow-right" color="#707070" size="20"></u-icon>
				</view>
			</view>
			<view class="title_box" @click="bookCourse">
				<view class="left">
					<image src="/static/my/tuanti.png" class="left_icon"></image>团体课预约
				</view>
				<view class="right">
					<u-icon name="arrow-right" color="#707070" size="20"></u-icon>
				</view>
			</view>
			<view class="title_box" @click="bookMaterial">
				<view class="left">
					<image src="/static/my/qicai.png" class="left_icon"></image>器材预约
				</view>
				<view class="right">
					<u-icon name="arrow-right" color="#707070" size="20"></u-icon>
				</view>
			</view>
		</view>
		
		<view class="list_box">
			<view class="title_box" @click="set">
				<view class="left">
					<image src="/static/my/shezhi.png" class="left_icon"></image>设置
				</view>
				<view class="right">
					<u-icon name="arrow-right" color="#707070" size="20"></u-icon>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background: {
					backgroundColor: '#ffb600',
				},
				image: '',
				userInfo: uni.getStorageSync("userInfo"),
			}
		},
		onLoad() {
			if(uni.getStorageSync('photo')!=''){
				this.image = uni.getStorageSync('photo')
			}else{
				this.image = '/static/logo.png'
			}
		},
		methods: {
			set() {
				uni.navigateTo({
					url: '/pages/set/set'
				})
			},
			userOrder() {
				uni.navigateTo({
					url: `/pages/user_order/user_order`
				})
			},
			qrcode(){
				uni.navigateTo({
					url: `/pages/qrcode/qrcode`
				})
			},
			bookCoach() {
				uni.navigateTo({
					url: '/pages/coach/coach_book'
				})
			},
			bookCourse() {
				uni.navigateTo({
					url: '/pages/course/course_book'
				})
			},
			bookMaterial() {
				uni.navigateTo({
					url: '/pages/material/material_book'
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		width: 100%;
		min-height: 100vh;
		padding-bottom: 20rpx;
		box-sizing: border-box;
		background-color: #F5F5F5;
		.top_box {
			padding: 40rpx 0;
			background-color: #ffb600;
		
			.my_wrap {
				padding: 30rpx;
				background-color: #F5F5F5;
			}
		
			.user_info {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 0rpx 30rpx;
		
				.avatar {
					width: 120rpx;
					height: 120rpx;
					background: #BEBEBE;
					border-radius: 12rpx;
				}
		
				.info_box {
					padding-left: 28rpx;
					padding-right: 10rpx;
		
					.name {
						font-size: 32rpx;
						font-weight: 500;
						color: #FFFFFF;
					}
				}
				
				.code{
					display: flex;
					align-items: center;
				}
		
				.rigth_box {
					width: auto;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
		
					.bt_box {
						display: flex;
						justify-content: space-between;
						align-items: center;
						margin-bottom: 20rpx;
		
						.bt_item {
							color: #FFFFFF;
							font-size: 24rpx;
							font-weight: 400;
						}
					}
				}
			}
		}
		
		/* 我的预约。。。 */
		.list_box {
			margin-top: 20rpx;
			padding: 10rpx 30rpx;
			background-color: #FFFFFF;
		
			.title_box {
				padding: 20rpx 0rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
		
				.left {
					display: flex;
					align-items: center;
					color: #000000;
					font-size: 28rpx;
					font-weight: 400;
		
					.left_icon {
						width: 32rpx;
						height: 32rpx;
						margin-right: 20rpx;
					}
				}
		
				.right {
					width: 28rpx;
					height: 28rpx;
				}
			}
		}
	}
</style>
