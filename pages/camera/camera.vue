
<template>
	<view class="wh-100">
		<u-action-sheet :actions="list" @select="selectValue" :show="show" style="position: absolute;"></u-action-sheet>
		<view class="wh-100">
			<u-navbar
			           title="摄像头"
			           :autoBack="true"
					   :fixed="false"
					   :border="true"
			       >
			       </u-navbar>
			<view class="wh-100" >
				
				<view class="control">
					<u-row gutter="20">
						<u-col span="2">
							<u-button type="primary"  :hairline="true" text="细边🔽" size="mini" style="padding: .5rem 0;" @click="show=true"></u-button>
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
	

</style>
