<template>
	<view class="wh-100">
		<view class="wh-100 modal flex" style="width: 100%;height: 100%;" >
			<view>
				<view class="bottom-view icon-bg" @click="$emit('switchMain',1)">
					<u--image :showLoading="true" src="/static/icon/close.png" width="40px" height="40px" :lazy-load="true"  mode="widthFix" ></u--image>
				</view>
				<slot></slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['title'],
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss"> 
@import url(@/style/global.scss);
	.modal{
		position: absolute;
		top: 0;
		background-color: rgba(0, 0, 0, .2);
		
	}
	.icon-bg{
		width: 78px;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 78px;
		background-color: #fff;
		border-radius: 15px;
		box-shadow: 0px 0px 20px rgba(0, 0, 0, 1);
	}
</style>
