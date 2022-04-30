<template>
	<view class="wrap">
		<u-navbar back-icon-name="arrow-left" back-icon-size="40" back-icon-color="#000000" :border-bottom="false">
			<view class="search">
				<u-search placeholder="搜索我的订单" v-model="keyword" shape="square" :show-action="false" height="60"
					@change="getUserOrder" @search="getUserOrder">
				</u-search>
			</view>
		</u-navbar>

		<u-tabs :list="list" :current="current" @change="change" font-size="28" gutter="24" active-color="#7adf71"
			bar-height="4" height="70"></u-tabs>

	</view>
</template>

<script>
	// import empty from '@/components/empty/empty.vue';
	export default {
		components: {
			// empty
		},
		data() {
			return {
				list: [{
					name: 'VIP',
					type: 'vip'
				}, {
					name: '私教课',
					type: 'waitingPayment'
				}, {
					name: '团体课',
					type: 'waitingReceiving'
				}],
				current: 0,
				
			};
		},
		onLoad(params) {
			this.current = params.index;
		},
		methods: {
			change(index) {
				this.current = index;
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

		.list {
			padding: 20rpx 30rpx;

			.item {
				width: 690rpx;
				background: #FFFFFF;
				border-radius: 12rpx;
				margin-bottom: 20rpx;

				&:last-child {
					margin-bottom: 0rpx;
				}

				.top_box {
					display: flex;
					justify-content: space-between;
					align-items: center;
					height: 70rpx;
					box-sizing: border-box;
					padding: 0rpx 30rpx;
					border-bottom: 1px solid rgba(210, 210, 210, 0.5);

					.left {
						display: flex;
						align-items: center;

						.name {
							color: #878787;
							font-size: 24rpx;
							font-weight: 400;
						}

						.label {
							color: #FFFFFF;
							font-size: 20rpx;
							text-align: center;
							border-radius: 16rpx;
							padding: 0rpx 14rpx;
							background-color: #FF5B5B;
							margin-left: 20rpx;
						}
					}

					.right {
						color: #878787;
						font-size: 24rpx;
						font-weight: 400;
					}
				}

				.goods_wrap {
					box-sizing: border-box;
					padding: 24rpx 30rpx;
					border-bottom: 1px solid rgba(210, 210, 210, 0.5);

					.goods {
						display: flex;
						justify-content: space-between;
						margin-bottom: 24rpx;

						&:last-child {
							margin-bottom: 0;
						}

						.goods_cover {
							width: 140rpx;
							height: 140rpx;
							border-radius: 8rpx;
							margin-right: 36rpx;
						}

						.goods_info {
							width: 454rpx;

							.row {
								display: flex;
								justify-content: space-between;
								align-items: center;
								margin-bottom: 12rpx;

								.goods_name {
									color: #000000;
									font-size: 28rpx;
									font-weight: 400;
								}

								.price {
									font-size: 28rpx;
									font-weight: 400;
									color: #000000;
								}

								.gray_text {
									color: #AFAFAF;
									font-size: 24rpx;
									font-weight: 400;
								}
							}
						}
					}
				}

				.total_box {
					color: #000000;
					font-size: 24rpx;
					font-weight: 400;
					text-align: right;
					line-height: 1;
					padding: 24rpx 0rpx;

					.price {
						color: #FA5049;
						font-size: 36rpx;
						font-weight: bold;
					}
				}

				.btn_wrap {
					display: flex;
					justify-content: flex-end;
					align-items: center;
					padding: 0rpx 30rpx 30rpx;

					.main_btn {
						width: 140rpx;
						height: 52rpx;
						background: linear-gradient(270deg, #F96661 0%, #FA473F 100%);
						border-radius: 36rpx;
						font-size: 24rpx;
						font-weight: 400;
						color: #FFFFFF;
						text-align: center;
						line-height: 52rpx;
					}

					.no_main_btn {
						display: flex;
						align-items: center;
						justify-content: center;
						
						height: 52rpx;
						background: #FFFFFF;
						box-sizing: border-box;
						padding: 0rpx 20rpx;
						border: 1px solid #D2D2D2;
						border-radius: 36rpx;
						text-align: center;
						font-size: 24rpx;
						font-weight: 400;
						color: #3E3E3E;
					}

					view {
						margin-right: 22rpx;

						&:last-child {
							margin-right: 0rpx;
						}
					}
				}

			}
		}
	}
</style>
