<template>
	<view class="wrap">
		<u-navbar title="充值中心" title-color="#FFFFFF" title-size="32" :border-bottom="false"
			:background="background" back-icon-size="40" back-icon-color="#ffffff" back-icon-name="arrow-left">
		</u-navbar>
		<!-- 会员卡 -->
		<view class="vip_card card_con clearfix">
			<view class="card_title">会员卡</view>
			<view class="card_item" v-for="(item, index) in vipCard" @click="toDetails">
				<image :src="item.image"></image>
				<view class="name">{{item.name}}</view>
				<view class="time_price clearfix">
					<text class="time">{{item.time}}</text>
					<text class="price">￥{{item.price}}</text>
				</view>
			</view>
		</view>
		<!-- 私教卡 -->
		<view class="person_card card_con clearfix">
			<view class="card_title">私教卡</view>
			<view class="card_item" v-for="(item, index) in personCard">
				<image :src="item.image"></image>
				<view class="name">{{item.name}}</view>
				<view class="time_price clearfix">
					<text class="time">{{item.time}}</text>
					<text class="price">￥{{item.price}}</text>
				</view>
			</view>
		</view>
		<!-- 团体卡 -->
		<view class="team_card card_con clearfix">
			<view class="card_title">团体卡</view>
			<view class="card_item" v-for="(item, index) in teamCard">
				<image :src="item.image"></image>
				<view class="name">{{item.name}}</view>
				<view class="time_price clearfix">
					<text class="time">{{item.time}}</text>
					<text class="price">￥{{item.price}}</text>
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
				vipCard: [
					{
						image: '/static/card/halfyear.jpg',
						name: '健身半年卡',
						price: '698',
						time: '半年'
					},
					{
						image: '/static/card/year.jpg',
						name: '健身年卡',
						price: '1399',
						time: '365天'
					},
				],
				personCard: [
					{
						image: '/static/card/youyong.jpg',
						name: '游泳卡',
						price: '799',
						time: '30次'
					},
					{
						image: '/static/card/quanji.jpg',
						name: '拳击卡',
						price: '1000',
						time: '30次'
					},
				],
				teamCard: [
					{
						image: '/static/card/yujia.jpg',
						name: '瑜伽卡',
						price: '1099',
						time: '30次'
					},
					{
						image: '/static/card/jezz.jpg',
						name: '爵士舞卡',
						price: '1099',
						time: '30次'
					},
					{
						image: '/static/card/kzyujia.jpeg',
						name: '空中瑜伽卡',
						price: '1399',
						time: '35次'
					},
				]
			}
		},
		methods: {
			toDetails(){
				uni.navigateTo({
					url: '/pages/sell_card/sell_card_details'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		width: 100%;
		min-height: 100vh;
		box-sizing: border-box;
		background-color: #F5F5F5;
		.card_con{
			padding: 20rpx;
			.card_title{
				color: #004d86;
				font-weight: bold;
				font-size: 36rpx;
				margin-bottom: 20rpx;
			}
			.card_item{
				width: calc(50% - 10rpx);
				float: left;
				background-color: #FFFFFF;
				border-radius: 20rpx;
				overflow: hidden;
				margin-bottom: 20rpx;
				&:nth-child(2n+1){
					margin-left: 20rpx;
				}
				&>image{
					width: 100%;
					height: 200rpx;
				}
				.name{
					padding: 0 20rpx 15rpx;
					font-size: 32rpx;
					font-weight: bold;
				}
				.time_price{
					padding: 0 20rpx 15rpx;
					.time{
						color: #999999;
						font-size: 26rpx;
					}
					.price{
						float: right;
						color: #ffb600;
						font-weight: bold;
					}
				}
			}
		}
		
	}
	.clearfix{
		*zoom: 1;
	}
	
	.clearfix:after{
		content: "";
		display: block;
		clear: both;
	}
</style>
