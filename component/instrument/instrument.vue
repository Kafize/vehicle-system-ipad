<template>
	
		<view >
			<view class="flex wh-100" style="height: auto;">
				<div class="half-circle" ></div>
			</view>
			<u-row>
				<u-col span="3">
					<u--text text="360km/h" color="#fff" size="16"  align="center"></u--text>
					<u--text text="平均速度" color="#fff" size="18" :bold="true" align="center"></u--text>
				</u-col>
				<u-col span="3">
					<u--text text="18℃" color="#fff" size="16"  align="center"></u--text>
					<u--text text="车内温度" color="#fff" size="18" :bold="true" align="center"></u--text>
				</u-col>
				<u-col span="3">
					<u--text text="80km" color="#fff" size="16"  align="center"></u--text>
					<u--text text="里程小计" color="#fff" size="18" :bold="true" align="center"></u--text>
				</u-col>
				<u-col span="3">
					<u--text text="360km/h" color="#fff" size="16"  align="center"></u--text>
					<u--text text="平均速度" color="#fff" size="18" :bold="true" align="center"></u--text>
				</u-col>
			</u-row>
		</view>
	
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	@import url('../../style/global.scss');
.half-circle {
		width: 150px;
		height: 150px;
		border: 15px solid #efefef; /* 环形的宽度和颜色 */
		border-radius: 50%; /* 让元素变成圆形 */
		border-bottom-color: transparent; /* 隐藏上半部分的颜色 */
	}
	
</style>
