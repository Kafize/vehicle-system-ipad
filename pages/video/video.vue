<template>
	<view>
		<view class="content">
			
			<view class="container" style="position: relative;">
				<u-navbar
				           title="媒体播放器"
				           :autoBack="true"
						   :fixed="false"
						   :border="true"
				       >
				       </u-navbar>
					
			   <component :is="pagesArrayNames[pageValue]" ></component>
				<u-tabbar style="position: absolute;bottom: 0;width: 100%;"
					:value="pageValue"
					:fixed="false"
					:placeholder="false"
					:safeAreaInsetBottom="false"
				>
					<u-tabbar-item text="视频列表" icon="grid" @click="pageValue=0" ></u-tabbar-item>
					<u-tabbar-item text="播放器" icon="play-right" @click="pageValue=1" ></u-tabbar-item>					
				</u-tabbar>
			</view>
		</view>
	</view>
</template>

<script>
	import videoList from './component/videoList.vue'
	import playvideo from './component/playvideo.vue'
	export default {
		components:{
			'videoList':videoList,
			'playvideo':playvideo
		},
		data() {
			return {
				
				pagesArrayNames:[
					'videoList',
					'playvideo'
				],
				
				pageValue:0,
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	@import url("@/style/global.scss");
	
	
	
	
</style>
