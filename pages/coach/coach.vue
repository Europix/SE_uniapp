<template>
	<view class="wrap">
		<u-navbar title="私教" title-color="#FFFFFF" title-size="32" :border-bottom="false"
			:background="background" back-icon-size="40" back-icon-color="#ffffff" back-icon-name="arrow-left">
		</u-navbar>
		<!-- 搜索 -->
		<view class="search">
			<u-search placeholder="搜索教练" v-model="keyword" shape="square" :show-action="false" height="60"
				@change="getUser" @search="getUser">
			</u-search>
		</view>
		<!-- 教练列表 -->
		<view class="list">
			<view class="item" v-for="(item,index) in list">
				<view class="info_box">
					<u-image v-if="item.sex ==0" :src="image" width="140rpx" height="140rpx" border-radius="8rpx"></u-image>
					<u-image v-else :src="image1" width="140rpx" height="140rpx" border-radius="8rpx"></u-image>
					<view class="info-con">
						<view class="name">{{item.name}}</view>
						<view class="age_sex">
							<text>{{item.age}}</text> 
							<text v-if="item.sex ==0">男</text>
							<text v-else>女</text>
						</view>
						<view class="info">{{item.info}}</view>
					</view>
				</view>
				<view class="bottom-btn">
					<u-button size="mini" class="order" @click="order(item.id, 'coach')">立即预约</u-button>
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
				keyword: '',
				image: '/static/jiaolian/man.jpg',  //男头像
				image1: '/static/jiaolian/woman.jpeg',  //女头像
				list: []
			}
		},
		onLoad() {
			this.getCoachList()
		},
		methods: {
			/* 网络请求--获取私教列表 */
			getCoachList(){
				let _this = this;
				_this.$u.indexApi.coachList({},{}).then( res => {
					console.log(res)
					_this.list = res.data.rows
				})
			},
			order(id, type){
				uni.navigateTo({
					// url: '/pages/personal_trainer/personal_trainer_order?id='+id
					url: `/pages/coach/coach_order?id=${id}&type=${type}`
				})
			},
			getUser(){
				this.$u.indexApi.coachList({
					search: this.keyword
				},{}).then( res => {
					console.log(res)
					this.list = res.data.rows
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
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		width: 100%;
		min-height: 100vh;
		box-sizing: border-box;
		background-color: #F5F5F5;
		.search {
			// width: 98%;
			margin: 20rpx 20rpx 0;
			background-color: #FFFFFF;
		}
		.list{
			padding: 20rpx;
			.item {
				margin-bottom: 20rpx;
				padding: 20rpx;
				background: #FFFFFF;
				border-radius: 12rpx;
				.info_box{
					display: flex;
					justify-content: flex-start;
					align-items: center;
					.info-con {
						flex: 1;
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
				}
				.bottom-btn{
					margin-top: 20rpx;
					text-align: right;
					.order{
						margin-right: 0;
						margin-left: 20rpx;
						border: 1rpx solid #ffb600;
						color: #ffb600;
						background-color: #FFFFFF;
					}
				}
				
			}
		}
	}
	/deep/ .u-input{
		background-color: #ffffff !important;
	}
	/deep/ .u-search{
		background-color: #ffffff !important;
	}
	/deep/ .u-content{
		background-color: #ffffff !important;
	}
</style>
