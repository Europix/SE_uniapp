<template>
	<view class="wrap">
		<u-navbar title="首页" title-color="#FFFFFF" title-size="32" :is-back="false" :border-bottom="false"
			:background="background">
		</u-navbar>
		<view class="swiper_wrap">
			<u-swiper :list="swiperList" mode="round" height="350"></u-swiper>
		</view>
		
		<view class="login_con" v-if="islogin">
			<view class="grid">
				<u-grid :col="4" :border="false" >
					<u-grid-item @click="coach">
						<image src="/static/index/index_1.png" class="grid_img"></image>
						<view class="grid-text">私教预约</view>
					</u-grid-item>
					<u-grid-item @click="course">
						<image src="/static/index/index_2.png" class="grid_img"></image>
						<view class="grid-text">团体预约</view>
					</u-grid-item>
					<u-grid-item @click="material">
						<image src="/static/index/index_3.png" class="grid_img"></image>
						<view class="grid-text">器材预约</view>
					</u-grid-item>
					<u-grid-item @click="sellCard">
						<image src="/static/index/index_4.png" class="grid_img"></image>
						<view class="grid-text">会员中心</view>
					</u-grid-item>
				</u-grid>
			</view>
			<!-- 近期即将开始的预约信息 -->
			<view class="quick_start">
				<view class="title"><text>即将开始</text></view>
				<view class="list" v-if="list.length!=0">
					<view class="item" v-for="(item, index) in list">
						<view class="info_box">
							<u-image :src="image" width="100rpx" height="100rpx" border-radius="8rpx"></u-image>
							<view class="info-con">
								<view class="name" v-if="item.type=='course'">{{item.coursename}}</view>
								<view class="name" v-else-if="item.type=='coach'">{{item.coachname}}</view>
								<view class="name" v-else-if="item.type=='material'">{{item.materialname}}</view>
								<view class="time">{{item.booktime}}</view>
							</view>
						</view>
					</view>
				</view>
				<view class="nolist" v-else>
					<u-empty text="快去预约吧" mode="list"></u-empty>
				</view>
			</view>
		</view>
		<!-- 用户未登录 -->
		<view v-else class="notlogin">
			<u-empty text="用户未登录" mode="list"></u-empty>
		</view>
		
	</view>
</template>

<script>
	import checkLogin from '../../utils/checkLogin.js';
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
				islogin: null,
				image: '/static/time.png',
				list: []
			}
		},
		onLoad() {
			
		},
		onShow() {
			this.isLogin()
			this.getExpireBook()
		},
		methods: {
			/* 网络请求--快开始的预约 */
			getExpireBook(){
				let _this = this;
				_this.$u.indexApi.expireBook({
					pageNum: "1",
					pageSize: "50",
				}).then( (res) => {
					_this.list = res.data.rows
				})
			},
			/* 判断是否登录 */
			isLogin(){
				let checkLoginState = checkLogin();
				this.islogin = checkLoginState
				if(!checkLoginState){
					uni.showModal({
					    title: '提示',
					    content: '您未登录，是否去登录？',
						confirmColor: '#FA473F',
					    success: (res)=> {
					        if (res.confirm) {
								uni.navigateTo({
									url:'/pages/first/first'
								})
					        } else if (res.cancel) {
								uni.switchTab({
									url:'/pages/index/index'
								})
					        }
					    }
					});
				}
			},
			/* 私教 */
			coach(){
				uni.navigateTo({
					url: '/pages/coach/coach'
				})
			},
			/* 团体课 */
			course(){
				uni.navigateTo({
					url: '/pages/course/course'
				})
			},
			/* 器材 */
			material(){
				uni.navigateTo({
					url: '/pages/material/material'
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
			padding: 20rpx;
			.grid{
				padding: 0rpx;
				.grid_img{
					width: 80rpx;
					height: 80rpx;
				}
			}
			.quick_start{
				margin-top: 20rpx;
				.title{
					font-size: 36rpx;
					color: #333333;
					position: relative;
					font-weight: bold;
					&::before{
						content: '';
						width: 70rpx;
						height: 10rpx;
						background-color: #ffb600;
						position: absolute;
						left: 0;
						bottom: 4rpx;
					}
					&>text{
						position: relative;
						z-index: 1;
					}
				}
			}
		}
		
		.list{
			margin: 20rpx 0;
			padding: 0 20rpx;
			background: #FFFFFF;
			border-radius: 12rpx;
			.item{
				padding: 20rpx 0;
				border-bottom: 2rpx dashed #eee;
				&:last-child{
					margin-bottom: 0;
					border: none;
				}
				.info_box{
					display: flex;
					justify-content: flex-start;
					align-items: center;
					
					.info-con {
						flex: 1;
						margin-left: 40rpx;
						.name {
							margin-bottom: 10rpx;
							color: #000000;
							font-size: 30rpx;
							position: relative;
						}
						.time{
							margin-bottom: 10rpx;
							font-size: 26rpx;
						}
					}
				}
			}
		}
		
		.notlogin,.nolist{
			margin: 5vh auto;
		}
	}
</style>