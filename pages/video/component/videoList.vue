<template>
	<view class="wh-100">
		<u-action-sheet :actions="list" title="播放设备" :show="show" @select="show=false"></u-action-sheet>
		<view style="padding: 1rem 2rem;overflow: auto;height: 80%;" >
			<u-grid :border="false" col="2" >
				<u-grid-item v-for="i in videoList" class="wh-100" style="padding: 1rem;">
					<view class="list-item wh-100" >
						<view class="wh-100 video-image" style="position: relative;" >
							<view class="wh-100 flex video-matte" >
								<image src="@/static/icon/pause.png" style="width: 48px;height: 48px;cursor: pointer;" @click="show=true"></image>
							</view>	
							<u--image :showLoading="true" :src="i.image" width="100%"   :lazy-load="true" mode="aspectFill" ></u--image>
						</view>
						<view class="article">
							<u--text :text="'标题：'+i.title" size="12"></u--text>
							<u--text :text="'上次看到：'+i.time" size="12"></u--text>
						</view>
					</view>
				</u-grid-item>
			</u-grid>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					{
						name:'主屏、副屏同时播放',
					},
					{
						name:'仅副屏播放'
					}
				],
				show:false,
				videoList:[
					{
						'image':'https://img1.baidu.com/it/u=2205810988,4283060315&fm=253&fmt=auto&app=138&f=JPEG',
						'title':'新疆-阿克苏山湖',
						'time':'09:26:10'
					},
					{
						'image':'https://img0.baidu.com/it/u=192897063,893726515&fm=253&fmt=auto&app=138&f=JPEG',
						'title':'月亮不睡我不睡-goodNight',
						'time':'10:21:01'
					},
					{
						'image':'https://img1.baidu.com/it/u=4234181394,1364677181&fm=253&fmt=auto&app=138&f=JPG',
						'title':'AI的发展与未来',
						'time':'01:39:17'
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	@import url("../../../style/global.scss");
	.list-item{
		.video-matte{
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 1;
			background-color: rgba(0, 0, 0, 0.3); /* 半透明黑色遮罩，可以根据需求调整颜色和透明度 */
		}
		.article{
			background-color: #fff;
			padding: 1rem;
			box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.1);
		}
	}
</style>
