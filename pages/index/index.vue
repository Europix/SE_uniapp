<template>
	<view class="wrap">
		<u-navbar title="首页" title-color="#000000" title-size="32" :is-back="false" :border-bottom="false"
			:background="background">
		</u-navbar>
		<view class="swiper_wrap">
			<u-swiper :list="swiperList" mode="round" height="350"></u-swiper>
		</view>
		
		<view class="login_con">
			<view class="grid" v-if="islogin">
				<u-grid :col="4" :border="false" >
					<u-grid-item @click="personalTrainer">
						<image src="/static/index/index_1.png" class="grid_img"></image>
						<view class="grid-text">私教</view>
					</u-grid-item>
					<u-grid-item @click="groupLesson">
						<image src="/static/index/index_2.png" class="grid_img"></image>
						<view class="grid-text">团体课</view>
					</u-grid-item>
					<u-grid-item>
						<image src="/static/index/index_3.png" class="grid_img"></image>
						<view class="grid-text">器材</view>
					</u-grid-item>
					<u-grid-item @click="sellCard">
						<image src="/static/index/index_4.png" class="grid_img"></image>
						<view class="grid-text">充值中心</view>
					</u-grid-item>
				</u-grid>
			</view>
			<!-- 健身房信息 -->
			<view>未登录显示健身房信息</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background: {
					backgroundColor: "#ffffff"
				},
				swiperList: [{
						image: '/static/swiper/swiper1.png',
					},
					{
						image: '/static/swiper/swiper2.png',
					},
					{
						image: '/static/swiper/swiper3.png',
					},
					{
						image: '/static/swiper/swiper4.png',
					},
					{
						image: '/static/swiper/swiper5.png',
					}
				],
				islogin: true
			}
		},
		onLoad() {

		},
		methods: {
			/* 私教 */
			personalTrainer(){
				uni.navigateTo({
					url: '/pages/personal_trainer/personal_trainer'
				})
			},
			/* 团体课 */
			groupLesson(){
				uni.navigateTo({
					url: '/pages/group_lesson/group_lesson'
				})
			},
			/* 充值中心 */
			sellCard(){
				uni.navigateTo({
					url: '/pages/sell_card/sell_card'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		width: 100%;
		min-height: 100vh;
		background-color: #F5F5F5;
		.swiper_wrap {
			width: 100%;
			margin: 0rpx auto;
			// 轮播下方圆形颜色
			/deep/ .u-indicator-item-round{
				background-color: #FFFFFF;
			}
			/deep/ .u-indicator-item-round-active{
					background-color: #ffb600;
				}
		}
		
		/* 宫格布局 */
		.login_con{
			background-color: #FFFFFF;
			.grid{
				padding: 30rpx;
				.grid_img{
					width: 80rpx;
					height: 80rpx;
				}
			}
		}
	}
</style>
