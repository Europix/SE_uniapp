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
						<view class="grid-text">教练预约</view>
					</u-grid-item>
					<u-grid-item @click="groupLesson">
						<image src="/static/index/index_2.png" class="grid_img"></image>
						<view class="grid-text">团体预约</view>
					</u-grid-item>
					<u-grid-item @click="place">
						<image src="/static/index/index_3.png" class="grid_img"></image>
						<view class="grid-text">场地预约</view>
					</u-grid-item>
					<u-grid-item @click="sellCard">
						<image src="/static/index/index_4.png" class="grid_img"></image>
						<view class="grid-text">办理会员</view>
					</u-grid-item>
				</u-grid>
			</view>
			<!-- 健身房信息 -->
			<view class="list">
				近期即将开始的预约信息：
				<view class="item" v-for="(item,index) in list">
				<u-image :src="item.image" width="140rpx" height="140rpx" border-radius="8rpx"></u-image>
				<view class="info-con">
					<view class="name">{{item.name}}</view>
					<view class="age_sex"><text>{{item.age}}</text> <text>{{item.sex}}</text></view>
					<view class="info">{{item.info}}</view>
				</view>
				<u-button size="mini" class="order" @click="order">查看</u-button>
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
					backgroundColor: "#ffb600"
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
				list: [
					{	
						id: 1,
						name: "约翰·罗伯特",
						sex: '男',
						age: '23',
						info: '22-4-25：9：00-10：00',
						area: '教室1',
						image: '/static/jiaolian/user-05.jpg'
					},
					{
						id: 2,
						name: "游泳场",
						sex: '32',
						age: '容量',
						info: '22-4-26：9：00-10：00',
						area: '瑜伽室',
						image: '/static/gyms/2.jpg'
					},
					{
						id: 3,
						name: "智乃",
						sex: '女',
						age: '20',
						info: '22-4-27：9：00-10：00',
						area: '瑜伽室1',
						image: '/static/jiaolian/chino.jpg'
					}
				],
				islogin: true
			}
		},
		onLoad() {

		},
		methods: {
			order(){
				uni.navigateTo({
					url: '/pages/personal_trainer/personal_trainer_order'
				})
			},
			//上拉加载
			onReachBottom() {
				// this.page+=1;
				// this.getExamPaper(this.active)
			},
			//下拉刷新
			onPullDownRefresh() {
				// this.page = 1;
				// this.topicList = [];
				// this.getExamPaper(this.active);
			},
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
			},
			place(){
				uni.navigateTo({
					url: '/pages/place/placechoose'
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
				background-color: #FF1493;
			}
			/deep/ .u-indicator-item-round-active{
					background-color: #ffb600;
				}
		}
		
		/* 宫格布局 */
		.login_con{
			background-color: #F5F5F5;
			.grid{
				padding: 30rpx;
				.grid_img{
					width: 80rpx;
					height: 80rpx;
				}
			}
			.list{
				padding: 40rpx;
				.item {
					margin-bottom: 20rpx;
					display: flex;
					justify-content: flex-start;
					align-items: center;
					padding: 20rpx;
					background: #FFFFFF;
					border-radius: 12rpx;
					
					.info-con {
						margin-left: 40rpx;
						.name {
							margin-bottom: 30rpx;
							color: #000000;
							font-size: 30rpx;
							position: relative;
							padding-left: 20rpx;
							&:after{
								content: '';
								width: 8rpx;
								height: 100%;
								background-color: #ffca46;
								position: absolute;
								left: 0;
								border-radius: 4rpx;
							}
						}
						.age_sex{
							margin-bottom: 20rpx;
							font-size: 24rpx;
							&>text{
								background-color: #ffa9a6;
								padding: 4rpx 20rpx;
								margin-right: 20rpx;
								border-radius: 10rpx;
								color: #ffffff;
								
							}
						}
						.info{
							color: #999999;
							font-size: 24rpx;
						}
					}
					.order{
						margin-right: 0;
						border: 1rpx solid #ffb600;
						color: #ffb600;
						background-color: #FFFFFF;
					}
				}
			}
			
		}
	}
</style>