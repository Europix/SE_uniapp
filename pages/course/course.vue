<template>
	<view class="wrap">
		<u-navbar title="团体课" title-color="#FFFFFF" title-size="32" :border-bottom="false"
			:background="background" back-icon-size="40" back-icon-color="#ffffff" back-icon-name="arrow-left">
		</u-navbar>
		<!-- 搜索 -->
		<view class="search">
			<u-search placeholder="搜索课程" v-model="keyword" shape="square" :show-action="false" height="60"
				@change="getUser" @search="getUser">
			</u-search>
		</view>
		<view class="appointment_con">
			<!-- 课程列表 -->
			<view class="lesson_list">
				<view class="lesson">
					<view class="lesson-item" v-for="(item, index) in list">
						<view class="info_box">
							<u-image :src="image" width="100rpx" height="100rpx" border-radius="8rpx"></u-image>
							<view class="info-con">
								<view class="name">{{item.name}}</view>
								<view class="time">{{item.time}} | {{item.day}}</view>
								<view class="area">{{item.area}}</view>
								<view class="info">{{item.info}}</view>
							</view>
						</view>
						<view class="bottom-btn">
							<u-button size="mini" class="order" ref="order" @click="order(item)">立即预约</u-button>
						</view>
					</view>
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
				keyword: '',
				image: '/static/time.png',
				list:[],
			}
		},
		onLoad() {
			this.getCourseList()
		},
		methods: {
			/* 网络请求--获取私教列表 */
			getCourseList(){
				let _this = this;
				_this.$u.indexApi.courseList({},{}).then( res => {
					console.log(res)
					_this.list = res.data.rows
				})
			},
			getUser(){
				this.$u.indexApi.courseList({
					search: this.keyword
				},{}).then( res => {
					console.log(res)
					this.list = res.data.rows
				})
			},
			order(item){
				let _this = this
				let time = _this.getTodayTimes() + ' ' + item.time
				//调用预约接口
				_this.$u.indexApi.book({
					type: 'course',
					coachid: '',
					courseid: item.id,
					materialid: '',
					booktime: time
				}).then( res => {
					if(res.code==0){
						return false
					}else{
						uni.showToast({
							icon:'success',
							title:'预约成功'
						})
					}
				})
			},
			getTodayTimes(){
				//获取当天年月日
				var now_year = new Date().getFullYear();
				var now_month = new Date().getMonth() + 1;
				var now_day = new Date().getDate();
				
				//now_time 当前日期
				var now_time ="";
				now_time+= now_year;
				
				if(now_month<10){
				      now_time+= '-0'+now_month;
				      if(now_day<10){
				            now_time+= '-0'+now_day;
				      }else{
				            now_time+= '-'+now_day;
				      }
				}else{
				      now_time+='-'+ now_month;
				      if(now_day<10){
				             now_time+= '-0'+now_day;
				      }else{
				             now_time+= '-'+now_day;
				      }
				}
				return now_time
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
		.search {
			// width: 98%;
			margin: 20rpx 20rpx 0;
			background-color: #FFFFFF;
		}
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
							.area{
								color: #999999;
								font-size: 26rpx;
								margin-bottom: 10rpx;
							}
						}
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
