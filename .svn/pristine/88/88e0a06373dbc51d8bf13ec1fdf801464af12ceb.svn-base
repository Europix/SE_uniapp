<template>
	<view class="wrap">
		<u-navbar title="预约教练" title-color="#FFFFFF" title-size="32" :border-bottom="false"
			:background="background" back-icon-size="40" back-icon-color="#ffffff" back-icon-name="arrow-left">
		</u-navbar>
		<view class="order_con">
			<times @change="getTime" :appointTime="appointTime" :isMultiple="false" :isSection="false" :disableTimeSlot = "disableTimeSlot"></times>
		</view>
	</view>
</template>

<script>
	import times from 'components/pretty-times/pretty-times.vue'
	export default {
		components: {
		    times
		},
		data() {
			return {
				background: {
					backgroundColor: '#ffb600',
				},
				appointTime: ["2021-11-16 15:30:00"],
				disableTimeSlot: {
					begin_time: "2021-11-17 11:00:00",
					end_time: "2021-11-17 16:00:00"
				}
			}
		},
		methods: {
			getTime(e) {
				console.log(e)
				this.$u.toast('预约成功');
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
	}
</style>
