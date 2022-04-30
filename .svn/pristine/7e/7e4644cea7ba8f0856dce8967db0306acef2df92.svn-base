<template>
	<view class="wrap">
		<u-navbar title="私教" title-color="#FFFFFF" title-size="32" :border-bottom="false"
			:background="background" back-icon-size="40" back-icon-color="#ffffff" back-icon-name="arrow-left">
		</u-navbar>
		<!-- 教练列表 -->
		<view class="list">
			<view class="item" v-for="(item,index) in list">
				<u-image :src="item.image" width="140rpx" height="140rpx" border-radius="8rpx"></u-image>
				<view class="info-con">
					<view class="name">{{item.name}}</view>
					<view class="age_sex"><text>{{item.age}}</text> <text>{{item.sex}}</text></view>
					<view class="info">{{item.info}}</view>
				</view>
				<u-button size="mini" class="order" @click="order">预约</u-button>
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
				list: [
					{	
						id: 1,
						name: "罗阳",
						sex: '男',
						age: '23',
						info: '增肌大神，减脂，力量',
						area: '教室1',
						image: '/static/jiaolian/man.jpg'
					},
					{
						id: 2,
						name: "谢玲玲",
						sex: '女',
						age: '25',
						info: '瑜伽大师，塑形，减脂',
						area: '瑜伽室',
						image: '/static/jiaolian/woman.jpeg'
					},
					{
						id: 3,
						name: "麦子",
						sex: '女',
						age: '26',
						info: '纤体瑜伽，美容减肥瑜伽',
						area: '瑜伽室1',
						image: '/static/jiaolian/woman.jpeg'
					}
				]
			}
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
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		width: 100%;
		min-height: 100vh;
		box-sizing: border-box;
		background-color: #F5F5F5;
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
</style>
