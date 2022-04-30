<template>
	<view class="wrap">
		<u-navbar title="用户订单" title-color="#FFFFFF" title-size="32" :border-bottom="false"
			:background="background" back-icon-size="40" back-icon-color="#ffffff" back-icon-name="arrow-left">
		</u-navbar>

		<!-- 会员卡 -->
		<view class="card_con clearfix">
			<view class="card_title">会员卡</view>
			<view class="card_item" v-for="(item, index) in card" v-if="card.length!=0">
				<view class="info_box">
					<u-image :src="image" v-if="item.type=='年卡'" width="140rpx" height="140rpx" border-radius="8rpx"></u-image>
					<u-image :src="image1" v-else-if="item.type=='月卡'" width="140rpx" height="140rpx" border-radius="8rpx"></u-image>
					<u-image :src="image2" v-else-if="item.type=='游泳卡'" width="140rpx" height="140rpx" border-radius="8rpx"></u-image>
					<u-image :src="image3" v-else-if="item.type=='团体课卡'" width="140rpx" height="140rpx" border-radius="8rpx"></u-image>
					<u-image :src="image4" v-else-if="item.type=='私教卡'" width="140rpx" height="140rpx" border-radius="8rpx"></u-image>
					<view class="info-con">
						<view class="name">{{item.type}}</view>
						<view class="time">充值时间: {{item.feetime}}</view>
						<view class="price_order clearfix">
							<text class="price">￥{{item.fee}}</text>
						</view>
					</view>
				</view>
			</view>
			<view class="nolist" v-else>
				<u-empty text="无购卡记录" mode="list"></u-empty>
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
				image: '/static/card/year.jpg', //年卡图片
				image1: '/static/card/halfyear.jpg', //年卡图片
				image2: '/static/card/youyong.jpg', //游泳卡图片
				image3: '/static/card/jezz.jpg', //团体课卡图片
				image4: '/static/card/quanji.jpg', //团体课卡图片
				card: [],
			};
		},
		onShow() {
			this.getUserOrder()
		},
		methods: {
			/* 网络请求--获取用户订单 */
			getUserOrder() {
				let _this = this;
				_this.$u.indexApi.cardOrder({}).then(res => {
					console.log(res)
					_this.card = res.data.rows
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		width: 100%;
		min-height: 100vh;
		background-color: #F5F5F5;

		.search {
			width: 628rpx;
			margin-left: 20rpx;
		}

		.card_con {
			padding: 20rpx;

			.card_title {
				color: #004d86;
				font-weight: bold;
				font-size: 36rpx;
				margin-bottom: 20rpx;
			}

			.card_item {
				background-color: #FFFFFF;
				border-radius: 20rpx;
				overflow: hidden;
				margin-bottom: 20rpx;
				padding: 20rpx;
						
				&>image {
					width: 100%;
					height: 200rpx;
				}
				.info_box{
					display: flex;
					justify-content: flex-start;
					align-items: center;
					.info-con {
						flex: 1;
						margin-left: 40rpx;
						.name {
							padding-bottom: 16rpx;
							font-size: 32rpx;
							font-weight: bold;
						}
						
						.time,
						.remark {
							padding-bottom: 16rpx;
							color: #999999;
							font-size: 22rpx;
						}
						
						.remark {
							margin-top: 10rpx;
						}
						
						.price_order {
							padding-bottom: 16rpx;
						
							.price {
								margin-top: 6rpx;
								color: #ffb600;
								font-weight: bold;
							}
						
							.order {
								margin-right: 0;
								border: 1rpx solid #ffb600;
								color: #ffb600;
								background-color: #FFFFFF;
							}
						}
					}
				}
				

			}
		}

	}

	.clearfix {
		*zoom: 1;
	}

	.clearfix:after {
		content: "";
		display: block;
		clear: both;
	}

	.money {
		font-size: 80rpx;
		color: $u-type-warning;
		position: relative;

		.close {
			position: absolute;
			top: 20rpx;
			right: 20rpx;
			line-height: 28rpx;
			font-size: 28rpx;
		}
	}

	.tips {
		color: $u-tips-color;
	}
</style>
