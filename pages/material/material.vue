<template>
	<view class="wrap">
		<u-navbar title="预约器材" title-color="#FFFFFF" title-size="32" :border-bottom="false"
			:background="background" back-icon-size="40" back-icon-color="#ffffff" back-icon-name="arrow-left">
		</u-navbar>
		<!-- 搜索 -->
		<view class="search">
			<u-search placeholder="搜索器材" v-model="keyword" shape="square" :show-action="false" height="60"
				@change="getUser" @search="getUser">
			</u-search>
		</view>
		<!-- 器械列表 -->
		<view class="list">
			<view class="item" v-for="(item,index) in list">
				<view class="info_box">
					<u-image v-if="item.name=='动感单车'" :src="image" width="140rpx" height="140rpx" border-radius="8rpx"></u-image>
					<u-image v-else-if="item.name=='杠铃'" :src="image1" width="140rpx" height="140rpx" border-radius="8rpx"></u-image>
					<u-image v-else-if="item.name=='腹肌板'" :src="image2" width="140rpx" height="140rpx" border-radius="8rpx"></u-image>
					<u-image v-else-if="item.name=='跑步机'" :src="image3" width="140rpx" height="140rpx" border-radius="8rpx"></u-image>
					<u-image v-else :src="image3" width="140rpx" height="140rpx" border-radius="8rpx"></u-image>
					<view class="info-con">
						<view class="name">{{item.name}}</view>
						<view class="age_sex"><text>{{item.status}}</text></view>
						<view class="info">{{item.info}}</view>
					</view>
				</view>
				<view class="bottom-btn">
					<u-button size="mini" class="order" @click="order(item.id, 'material')">立即预约</u-button>
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
				image: '/static/material/donggan.jpg',  //动感单车
				image1: '/static/material/gangling.jpg',  //杠铃
				image2: '/static/material/fujiban.jpg',  //腹肌板
				image3: '/static/material/paobu.jpg',  //跑步机
				image3: '/static/material/tuoyuan.jpg',  //椭圆机
				list: []
			}
		},
		onLoad() {
			this.getMaterialList()
		},
		methods: {
			/* 网络请求--获取器材列表 */
			getMaterialList(){
				let _this = this;
				_this.$u.indexApi.materialList({},{}).then( res => {
					console.log(res)
					_this.list = res.data.rows
				})
			},
			order(id, type){
				uni.navigateTo({
					url: `/pages/material/material_order?id=${id}&type=${type}`
				})
			},
			getUser(){
				this.$u.indexApi.materialList({
					search: this.keyword
				},{}).then( res => {
					console.log(res)
					this.list = res.data.rows
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
					text-align: right;
					margin-top: 20rpx;
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
	/deep/ uni-image{
		// border: 2rpx solid #000000;
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
