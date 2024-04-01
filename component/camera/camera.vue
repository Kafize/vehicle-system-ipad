
<template>
	<view class="wh-100">
		
		<u-action-sheet :actions="list" @select="selectValue" :show="show" style="position: absolute;"></u-action-sheet>
		<view class="container wh-100">
			<u-navbar
			           title="摄像头"
			           
					   :fixed="false"
					   :border="true"
					   @leftClick="$emit('switchMain',1)"
					   :safeAreaInsetTop="false"
			       >
			       </u-navbar>
			<view class="wh-100" style="height: 85%;">
				<view class="image" style="height: 80%;" >
					<u-row   align="center" class="wh-100">
						<u-col span="6"  >
							<view >
								<u-image  :src="selectImage" mode="" width="" height="250px" :showLoading="true" :lazy-load="true"></u-image>
							</view>
						</u-col>
						<u-col span="6" style="position: relative;">
							<view style="position: absolute;z-index: 1;" class="wh-100">
								<view class="wh-100 flex">
									<u--image :showLoading="true" src="/static/images/u9.png" width="100px" height="100px" :lazy-load="true"  mode="widthFix" ></u--image>
								</view>
							</view>
							<u-row >
								<u-col span="6">
									<u--image :showLoading="true" src="/static/images/u5.png"  :lazy-load="true" width="100%" height="125px"  mode="widthFix"></u--image>
								</u-col>
								<u-col span="6">
									<u--image :showLoading="true" src="/static/images/u6.png"  :lazy-load="true" width="100%" height="125px"  mode="widthFix" ></u--image>
								</u-col>
							</u-row>
							<u-row  >
								<u-col span="6">
									<u--image :showLoading="true" src="/static/images/u7.png"  :lazy-load="true" width="100%" height="125px"  mode="widthFix" ></u--image>
								</u-col>
								<u-col span="6">
									<u--image :showLoading="true" src="/static/images/u8.png"  :lazy-load="true" width="100%" height="125px"  mode="widthFix"></u--image>
								</u-col>
							</u-row>
						</u-col>
					</u-row>
				</view>
				<view class="control" style="height: 20%;">
					<u-row gutter="20">
						<u-col span="2">
							<u-button type="primary"  :hairline="true" text="修改🔽" size="mini" style="padding: .5rem 0;" @click="show=true"></u-button>
						</u-col>
						<u-col span="2">
							<u-button type="error" plain  :hairline="true" text="关闭" size="mini" style="padding: .5rem 0;"></u-button>
						</u-col>
					</u-row>
				</view>
			</view>
			
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:'你好',
				show:false,
				selectImage:'/static/images/u3.png',
				imageArray:[
					'/static/images/u5.png',
					'/static/images/u6.png',
					'/static/images/u7.png',
					'/static/images/u8.png',
					'/static/images/u9.png',
				],
				list: [
						{
							name:'前',
							index:0,
						},
						{
							name: '后',
							index:1,
						},
						{
							name: '左',
							index:2
						},
						{
							name:'右',
							index:3
						},
						{
							name:'360度',
							index:4
							
						}
				],
			}
		},
		onLoad() {

		},
		methods: {
			selectValue(item){
				this.selectImage=this.imageArray[item.index];
				this.show=false;
			}
		}
	}
</script>

<style lang="scss">
	@import url("@/style/global.scss");

</style>
