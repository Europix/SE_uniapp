<template>
	<view class="wrap">
		<u-navbar title="团体课" title-color="#FFFFFF" title-size="32" :border-bottom="false"
			:background="background" back-icon-size="40" back-icon-color="#ffffff" back-icon-name="arrow-left">
		</u-navbar>
		<view class="appointment_con">
			<!-- 课程列表 -->
			<view class="lesson_list">
				<view class="lesson" v-if="list.length!=0">
					<view class="lesson-item" v-for="(item, index) in list">
						<view class="info_box">
							<u-image :src="image" width="100rpx" height="100rpx" border-radius="8rpx"></u-image>
							<view class="info-con">
								<view class="name">{{item.coursename}}</view>
								<view class="time">开始时间:{{item.booktime}}</view>
								<view class="bottom-btn">
									<u-button size="mini" class="order" ref="order" @click="cancelOrder(item)">取消预约</u-button>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="nolist" v-else>
					<u-empty text="快去预约吧" mode="list"></u-empty>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		components:{
		},
		data() {
			return {
				background: {
					backgroundColor: '#ffb600',
				},
				image: '/static/time.png',
				list:[],
			}
		},
		onLoad() {
			this.getCourseList()
		},
		methods: {
			/* 网络请求--已预约团体课列表 */
			getCourseList(){
				let _this = this;
				_this.$u.indexApi.alreadyBook({
					pageNum: "1",
					pageSize: "50",
					type: "course",
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
					_this.getCourseList()
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
		.appointment_con{
			/* 课程列表 */
			.lesson_list{
				padding: 20rpx;
				.lesson-item{
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
								margin-bottom: 10rpx;
								color: #000000;
								font-size: 30rpx;
								position: relative;
							}
							.time{
								margin-bottom: 10rpx;
								font-size: 26rpx;
							}
							.bottom-btn{
								margin-top: 20rpx;
								text-align: right;
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
			}
		}
	}
	.nolist{
		margin: 35vh auto;
	}
</style>
