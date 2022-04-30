<template>
	<view class="wrap">
		<u-navbar title="团体课" title-color="#FFFFFF" title-size="32" :border-bottom="false"
			:background="background" back-icon-size="40" back-icon-color="#ffffff" back-icon-name="arrow-left">
		</u-navbar>
		<view class="appointment_con">
			<!-- <appointment :contentList="contentList" @onPulling="onPulling" @SelectHeader="SelectHeader" @Appointment="Appointment"></appointment> -->
			<!-- 日期列表 -->
			<scroll-view class="scroll-view_H b-t b-b" scroll-x>
				<block v-for="(item,index) in dateArr" :key="index">
					<div class="flex-box" @click="selectDateEvent(index,item)" :class="{ borderb: index==dateActive}">
						<view class="date-box" :style="{color:index==dateActive?selectedTabColor:'#333'}">
							<text class="fontw">{{item.week}}</text>
							<text>{{item.date}}</text>
						</view>
					</div>
				</block>
			</scroll-view>
			<!-- 课程列表 -->
			<view class="lesson_list">
				<view class="lesson" v-show="dateActive==0">
					<view class="lesson-item" v-for="(item, index) in contentList">
						<u-image :src="image" width="100rpx" height="100rpx" border-radius="8rpx"></u-image>
						<view class="info-con">
							<view class="name">{{item.name}}</view>
							<view class="time">{{item.time}}</view>
							<view class="coach">{{item.coach}} | {{item.area}}</view>
						</view>
						<u-button size="mini" class="order" ref="order" @click="order(item.id)">立即预约</u-button>
					</view>
				</view>
				<view class="lesson" v-show="dateActive==1">
					<view class="lesson-item" v-for="(item, index) in contentList1">
						<u-image :src="image" width="100rpx" height="100rpx" border-radius="8rpx"></u-image>
						<view class="info-con">
							<view class="name">{{item.name}}</view>
							<view class="time">{{item.time}}</view>
							<view class="coach">{{item.coach}} | {{item.area}}</view>
						</view>
						<u-button size="mini" class="order" ref="order" @click="order(item.id)">立即预约</u-button>
					</view>
				</view>
				<view class="lesson" v-show="dateActive==2">
					<view class="lesson-item" v-for="(item, index) in contentList2">
						<u-image :src="image" width="100rpx" height="100rpx" border-radius="8rpx"></u-image>
						<view class="info-con">
							<view class="name">{{item.name}}</view>
							<view class="time">{{item.time}}</view>
							<view class="coach">{{item.coach}} | {{item.area}}</view>
						</view>
						<u-button size="mini" class="order" ref="order" @click="order(item.id)">立即预约</u-button>
					</view>
				</view>
				<view class="lesson" v-show="dateActive==3">
					<view class="lesson-item" v-for="(item, index) in contentList3">
						<u-image :src="image" width="100rpx" height="100rpx" border-radius="8rpx"></u-image>
						<view class="info-con">
							<view class="name">{{item.name}}</view>
							<view class="time">{{item.time}}</view>
							<view class="coach">{{item.coach}} | {{item.area}}</view>
						</view>
						<u-button size="mini" class="order" ref="order" @click="order(item.id)">立即预约</u-button>
					</view>
				</view>
				<view class="lesson" v-show="dateActive==4">
					<view class="lesson-item" v-for="(item, index) in contentList4">
						<u-image :src="image" width="100rpx" height="100rpx" border-radius="8rpx"></u-image>
						<view class="info-con">
							<view class="name">{{item.name}}</view>
							<view class="time">{{item.time}}</view>
							<view class="coach">{{item.coach}} | {{item.area}}</view>
						</view>
						<u-button size="mini" class="order" ref="order" @click="order(item.id)">立即预约</u-button>
					</view>
				</view>
				<view class="lesson" v-show="dateActive==5">
					<view class="lesson-item" v-for="(item, index) in contentList5">
						<u-image :src="image" width="100rpx" height="100rpx" border-radius="8rpx"></u-image>
						<view class="info-con">
							<view class="name">{{item.name}}</view>
							<view class="time">{{item.time}}</view>
							<view class="coach">{{item.coach}} | {{item.area}}</view>
						</view>
						<u-button size="mini" class="order" ref="order" @click="order(item.id)">立即预约</u-button>
					</view>
				</view>
				<view class="lesson" v-show="dateActive==6">
					<view class="lesson-item" v-for="(item, index) in contentList6">
						<u-image :src="image" width="100rpx" height="100rpx" border-radius="8rpx"></u-image>
						<view class="info-con">
							<view class="name">{{item.name}}</view>
							<view class="time">{{item.time}}</view>
							<view class="coach">{{item.coach}} | {{item.area}}</view>
						</view>
						<u-button size="mini" class="order" ref="order" @click="order(item.id)">立即预约</u-button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import appointment from '../../components/appointment/appointment.vue'
	import {
		initData,
		currentTime
	} from '../../utils/date.js'
	export default {
		components:{
			appointment
		},
		data() {
			return {
				background: {
					backgroundColor: '#ffb600',
				},
				dateArr: [], //日期数据
				nowDate: "", // 当前日期
				selectDate: "", //选择的日期
				dateActive: 0, //选中的日期索引
				selectedTabColor: "#ffb600",
				selectHeader: 0,
				WeekList: [],
				day:1,
				image: '/static/time.png',
				contentList:[
					{
						id: 1,
						time: '13:00-14:00',
						name: '燃脂训练',
						coach: '李俊清',
						area: '多功能操客厅'
					},{
						id: 2,
						time: '18:00-19:00',
						name: '爵士舞',
						coach: '申吉祥',
						area: '多功能操客厅'
					},{
						id: 3,
						time: '19:30-20:30',
						name: '腹愁着联盟',
						coach: '李俊清',
						area: '多功能操客厅'
					},{
						id: 4,
						time: '19:30-20:30',
						name: '动感冲浪',
						coach: '李涛',
						area: '动感单车室'
					}
				],
				contentList1:[
					{
						id: 5,
						time: '13:00-14:00',
						name: '阴瑜伽',
						coach: '李有婷',
						area: '多功能操客厅'
					},{
						id: 6,
						time: '18:00-19:00',
						name: "LM'BP",
						coach: '马星',
						area: '多功能操客厅'
					},{
						id: 7,
						time: '19:30-20:30',
						name: "LM'BP",
						coach: '马星',
						area: '多功能操客厅'
					}
				],
				contentList2:[
					{
						id: 8,
						time: '13:00-14:00',
						name: '炫舞',
						coach: '李有婷',
						area: '多功能操客厅'
					},{
						id: 9,
						time: '18:00-19:00',
						name: "普拉提",
						coach: 'Lisa',
						area: '多功能操客厅'
					},{
						id: 10,
						time: '19:30-20:30',
						name: "减脂蹦床",
						coach: 'Lisa',
						area: '多功能操客厅'
					},{
						id: 11,
						time: '19:30-20:30',
						name: "Spinning",
						coach: '焦清',
						area: '动感单车室'
					}
				],
				contentList3:[
					{
						id: 12,
						time: '13:00-14:00',
						name: '蜜桃臀',
						coach: 'Ron',
						area: '多功能操客厅'
					},{
						id: 13,
						time: '18:00-19:00',
						name: "空中瑜伽",
						coach: '杜鑫',
						area: '多功能操客厅'
					},{
						id: 14,
						time: '19:30-20:30',
						name: "快乐舞蹈",
						coach: '焦清',
						area: '多功能操客厅'
					}
				],
				contentList4:[
					{
						id: 15,
						time: '13:00-14:00',
						name: '普拉提',
						coach: '小钰',
						area: '多功能操客厅'
					},{
						id: 15,
						time: '18:00-19:00',
						name: "马甲线",
						coach: 'Ron',
						area: '多功能操客厅'
					},{
						id: 16,
						time: '19:30-20:30',
						name: "身体充电",
						coach: 'Ron',
						area: '多功能操客厅'
					},{
						id: 17,
						time: '19:30-20:30',
						name: "动感单车",
						coach: '李涛',
						area: '动感单车室'
					}
				],
				contentList5:[
					{
						id: 18,
						time: '18:00-19:00',
						name: '空中瑜伽',
						coach: '小钰',
						area: '多功能操客厅'
					}
				],
				contentList6:[
					{
						id: 19,
						time: '18:00-19:00',
						name: '臀腿训练',
						coach: '亚亚',
						area: '多功能操客厅'
					}
				],
			}
		},
		onLoad() {
			this.selectDate = this.nowDate = currentTime().date
			this.initOnload()
		},
		methods: {
			initOnload() {
				this.dateArr = initData() // 日期栏初始化
			},
			// 日期选择事件
			selectDateEvent(index, item) {
				this.dateActive = index
				this.selectDate = item.date
				this.initOnload()
			},
			order(id){
				this.$u.toast('预约成功');
			}
			/* // 选择头部日期
			SelectHeader(item) {
				console.log(item);
			},
			// 下拉刷新 
			onPulling(){
				console.log('onPulling');
			},
			// 预约
			Appointment(){
				uni.showModal({
					title: '预约',
					content: '系统感知课:12:20-13:45',
					success: function (res) {
						if (res.confirm) {
							console.log('用户点击确定');
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			} */
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
			/* 日期列表 */
			scroll-view{
				width: 100%;
				white-space: nowrap;
				height: 75px;
				background-color: #fff;
				position: relative;
				padding-top: 10px;
			
				// margin-top:10px;
				&::after{
					background: #e5e5e5;
					content: '';
					display:block;
					width: 100%;
					height: 1px;
					position: absolute;
					bottom: 0;
					left: 0;
					transform:scaleY(0.5);
					
				}
				.flex-box{
						display: inline-block;
						height: 60px;
						width: 25%;
						margin: 0 7rpx 0 7rpx;
						box-sizing: border-box;
			
					&.active{
						.date-box{
							 border: none;
							.days{
								font-weight: bold;
								color: #818181;
							}
							.date{
								font-weight: bold;
								color: #818181;
							}
						}
					}
					.date-box{	
						border: none;
						display: flex;
						height: 50px;
						flex-direction: column;
						align-items: center;
						justify-content: space-around;
						font-size: 26rpx;
						color: rgba(129, 129, 129, 1);
						.date{
							font-weight: bold;
							color: #818181;
							font-size: 26rpx;
						
						}
					}
					&.borderb {
						border-bottom: 2px solid #ffb600;
					}
				}
				
			}
			/* 课程列表 */
			.lesson_list{
				.lesson-item{
					margin-bottom: 10rpx;
					display: flex;
					justify-content: flex-start;
					align-items: center;
					padding: 20rpx;
					background: #FFFFFF;
					border-radius: 12rpx;
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
						.coach{
							color: #999999;
							font-size: 26rpx;
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
