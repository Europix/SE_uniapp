<template>
	<view class="wrap">
		<u-navbar title="私教" title-color="#FFFFFF" title-size="32" :border-bottom="false"
			:background="background" back-icon-size="40" back-icon-color="#ffffff" back-icon-name="arrow-left">
		</u-navbar>
		<!-- 教练列表 -->
		<view class="list" v-if="list.length!=0">
			<view class="item" v-for="(item,index) in list">
				<view class="info_box">
					<u-image v-if="item.coachsex ==0" :src="image" width="140rpx" height="140rpx" border-radius="8rpx"></u-image>
					<u-image v-else :src="image1" width="140rpx" height="140rpx" border-radius="8rpx"></u-image>
					<view class="info-con">
						<view class="name">{{item.coachname}}</view>
						<view class="info">开始时间:{{item.booktime}}</view>
						<view class="bottom-btn">
							<u-button size="mini" class="order" @click="cancelOrder(item)">取消预约</u-button>
						</view>
					</view>
				</view>
			</view>
			
		</view>
		<view class="nolist" v-else>
			<u-empty text="快去预约吧" mode="list"></u-empty>
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
			/* 网络请求--已预约团体课列表 */
			getCoachList(){
				let _this = this;
				_this.$u.indexApi.alreadyBook({
					pageNum: "1",
					pageSize: "50",
					type: "coach",
				},{}).then( res => {
					_this.list = res.data.rows
				})
			},
			cancelOrder(item){
				let _this = this
				//调用取消预约接口
				_this.$u.indexApi.cancelBook({
					ids: item.id,
				}).then(res => {
					console.log(res)
					_this.getCoachList()
				})
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
	.nolist{
		margin: 35vh auto;
	}
</style>
