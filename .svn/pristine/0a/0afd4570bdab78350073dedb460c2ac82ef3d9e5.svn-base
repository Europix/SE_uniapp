<template>
	<view class="wrap">
		<u-navbar title="我的" title-color="#FFFFFF" title-size="32" :is-back="false" :border-bottom="false"
			:background="background">
		</u-navbar>
		<view class="top_box">
			<view class="user_info">
				<view style="display: flex;align-items: center;">
					<u-avatar :src="wldUser.avtar" size="120" class="avatar"></u-avatar>
					<view class="info_box">
						<view class="name">{{wldUser.nickname}}</view>
						<view class="describe">个性签名：我是个健身达人</view>
					</view>
				</view>
				<view class="code">
					<u-icon name="qrcode" custom-prefix="custom-icon" color="#ffffff" size="36" @click="qrcode"></u-icon>
				</view>
				<view class="rigth_box">
					<view class="bt_box">
						<view class="bt_item" @click="set">设置</view>
					</view>
				</view>
			</view>
		</view>
		<view class="my_order_info">
			<view class="title_box" @click="userOrder(0)">
				<view class="left">我的订单</view>
				<view class="right">全部订单<u-icon name="arrow-right" color="#707070" size="20"></u-icon>
				</view>
			</view>
		
			<view class="my_order">
				<view class="my_order_item" v-for="(item,index) in userOrderList" :key="index"
					@click="userOrder(index+1)">
					<image :src="item.icon" class="my_order_icon"></image>
					<view class="my_order_text">{{item.name}}</view>
					<u-badge type="error" :count="item.badge" :is-center="true"></u-badge>
				</view>
			</view>
		</view>
		<!--  -->
		<view class="list_box">
			<view class="title_box" @click="personalTrainer">
				<view class="left">
					私教预约
				</view>
				<view class="right">
					<u-icon name="arrow-right" color="#707070" size="20"></u-icon>
				</view>
			</view>
			<view class="title_box" @click="groupLesson">
				<view class="left">
					团体课预约
				</view>
				<view class="right">
					<u-icon name="arrow-right" color="#707070" size="20"></u-icon>
				</view>
			</view>
			<view class="title_box" @click="equipment">
				<view class="left">
					器材预约
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
				wldUser: {
					avtar: '/static/logo.png',
					nickname: '健身达人'
				},
				userOrderList: [
					{
						icon: '/static/my/my_order_1.png',
						name: 'VIP',
						badge: 0
					},
					{
						icon: '/static/my/my_order_2.png',
						name: '团体课',
						badge: 0
					},
					{
						icon: '/static/my/my_order_3.png',
						name: '私教课',
						badge: 0
					}
				]
			}
		},
		methods: {
			set() {
				uni.navigateTo({
					url: '/pages/set/set'
				})
			},
			userOrder(index) {
				uni.navigateTo({
					url: `/pages/user_order/user_order?index=${index}`
				})
			},
			qrcode(){
				uni.navigateTo({
					url: `/pages/qrcode/qrcode`
				})
			},
			personalTrainer() {
				uni.navigateTo({
					url: '/pages/topic_collection/topic_collection'
				})
			},
			groupLesson() {
				uni.navigateTo({
					url: '/pages/intelligence_table/intelligence_table'
				})
			},
			equipment() {
				uni.navigateTo({
					url: '/pages/complaint/complaint'
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
		
					.describe {
						color: #FFFFFF;
						font-size: 20rpx;
						font-weight: 400;
						margin: 8rpx 0rpx;
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
		
		/* 我的订单 */
		.my_order_info {
			width: 95%;
			margin: 10px auto;
			background: #FFFFFF;
			border-radius: 20rpx;
			padding: 30rpx;
			box-sizing: border-box;
		
			.title_box {
				display: flex;
				justify-content: space-between;
				align-items: center;
		
				.right {
					color: #5B5B5B;
					font-size: 20rpx;
					font-weight: 400;
				}
			}
		
			.my_order {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding-top: 32rpx;
		
				.my_order_item {
					position: relative;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
		
					.my_order_icon {
						width: 72rpx;
						height: 72rpx;
						margin-bottom: 8rpx;
					}
		
					.my_order_text {
						font-size: 20rpx;
						font-weight: 400;
						color: #5B5B5B;
					}
				}
			}
		}
		/* 我的预约。。。 */
		.list_box {
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
