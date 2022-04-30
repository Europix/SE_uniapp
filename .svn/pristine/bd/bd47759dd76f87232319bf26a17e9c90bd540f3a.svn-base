<template>
	<view class="content">
		<view>
			<scroll-view class="scroll-view_H" scroll-x="true" style="padding-top:10px;">
				<view class="scroll-view-item_H" @click="SelectHeader(item, i)" v-for="(item, i) in WeekList" :key="i"
					:class="selectHeader == i ? 'bg-cyan text-shadow' : 'bg-blue'">
					<view style="text-align: center;">
						<view style="color:#6d6c7d;">{{ item.name }}</view>
						<view class="day shadow shadow-lg" :class="selectHeader == i ? 'bg-red' : ''">{{ item.day }}
						</view>
					</view>
				</view>
			</scroll-view>
			<view class="flex seniorblack text-df" style="    padding: 10px 0;">
				<view class="flex-sub  radius text-center text-white">
					上午
					<text class="lg cuIcon-unfold text-xs text-bold margin-left" style="color: #5D5C6A;"></text>
				</view>
				<view class="flex-sub  radius text-center text-white">
					报名人数
					<text class="lg cuIcon-order text-xs text-bold margin-left" style="color: #5D5C6A;"></text>
				</view>
				<view class="flex-sub  radius text-center text-white">
					历史记录
					<text class="lg cuIcon-cartfill text-xs text-bold margin-left" style="color: #5D5C6A;"></text>
				</view>
			</view>
			<view class="barHeight"></view>

			<view class="barConten">
				<view class="flex justify-between">
					<view class="radius text-white text-df">选择预约时间段</view>
					<view class="radius text-grey text-sm">共{{ contentList.length }}节课</view>
				</view>
			</view>

			<scroll-view scroll-y="true" style="height:74vh;" refresher-enabled="true" :refresher-triggered="triggered"
				:refresher-threshold="20" refresher-background="lightblue" @refresherpulling="onPulling"
				@refresherrefresh="onRefresh" @refresherrestore="onRestore">
				<view class="seniorblack" v-for="(item, imdex) in contentList" :key="imdex"
					style="height: 74px;padding: 0 6px;  border-bottom: 1px solid #252934;">
					<view class="flex justify-between align-center">
						<view class="radius text-white text-df">
							<view class="flex  justify-start align-center" style="height: 74px;">
								<view class="radius margin-right" style="height: 74px;line-height:74px;">
									<text class="lg lg text-white cuIcon-time cuIcon-time"
										style="font-size: 34px;"></text>
								</view>
								<view class="radius" style="line-height: 18px;">
									<view class="text-xl">{{ item.time }}</view>
									<view>{{ item.name }} | {{ item.teacher }}</view>
									<view class="text-sm">
										<text class="margin-right">已报名</text>
										<text>{{ item.count }}人</text>
									</view>
								</view>
							</view>
						</view>
						<view class="radius text-grey text-df"><button class="cu-btn bg-red"
								@click="Appointment(item)">立即预约</button></view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import {
		getWeekTime
	} from './utils/index.js'
	export default {
		name: 'appointment',
		props: {
			TimeType: {
				type: String,
				default: '本周剩余日期和下周日期'
			},
			contentList: {
				type: Array,
				default: []
			}
		},
		data() {
			return {
				selectHeader: 0,
				WeekList: getWeekTime(this.TimeType),
				triggered: false
			};
		},
		onLoad() {
			this._freshing = false;
			setTimeout(() => {
				this.triggered = true;
			}, 1000);
		},
		methods: {
			// 选择头部日期
			SelectHeader(item, i) {
				this.selectHeader = i;
				this.$emit('SelectHeader', item);
			},
			// 预约
			Appointment(item) {
				this.$emit('Appointment', item);
			},
			onPulling(e) {
				this.$emit('onPulling', e);
			},
			onRefresh() {
				if (this._freshing) return;
				this._freshing = true;
				setTimeout(() => {
					this.triggered = false;
					this._freshing = false;
				}, 1000);
			},
			onRestore() {
				this.triggered = 'restore'; // 需要重置
				console.log('onRestore');
			}
		}
	};
</script>

<style>
	.barConten {
		padding: 0px 6px;
		height: 34px;
		line-height: 34px;
		background: #FFFFFF;
		border-bottom: 1px solid #4CD964;
	}

	.barHeight {
		height: 10px;
		background-color: #007AFF;
	}

	.seniorblack {
		background-color: #DD524D;
	}

	.day {
		width: 18px;
		font-size: 10px;
		height: 18px;
		line-height: 18px;
		margin: 0 auto;
		border-radius: 57%;
		margin-top: 4px;
	}

	.scroll-view_H {
		white-space: nowrap;
		width: 100%;
		background: #F0AD4E;
	}

	.scroll-view-item {
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
		font-size: 36rpx;
	}

	.scroll-view-item_H {
		display: inline-block;
		width: 98rpx;
		margin-right: 5px;
		height: 100rpx;
		background: #ff00ff;
	}
</style>
