<template>
	<view class="wh-100">
			<u-navbar v-if="currentView==0"
					   title="媒体播放器"
					   :autoBack="false"
					   :fixed="false"
					   :border="true"
					   :safeAreaInsetTop="false"
					   @leftClick="$emit('switchMain',1)"
				   >
				   </u-navbar>
			<u-navbar
					   :autoBack="false"
						v-if="currentView==1"
					   bgColor="#fff"
					   :fixed="false"
						@leftClick="currentView=0"
					   :safeAreaInsetTop="false"
				   >
				   </u-navbar>
			<component :is="viewArray[currentView]" :switchSecond="switchSecond"  @toggleView='toggleView' :url="videoUrl"></component>
	</view>
</template>

<script>
	import videoList from './component/videoList.vue'
	import playvideo from './component/playvideo.vue'
	export default {
		props:['switchSecond'],
		components:{
			'videoList':videoList,
			'playvideo':playvideo
		},
		data() {
			return {
				viewArray:[
					'videoList',
					'playvideo'
				],
				currentView:0,
				videoUrl:'',
			}
		},
		methods: {
			toggleView(flag,url){
				this.currentView=flag;
				this.videoUrl=url;
			}
		}
	}
</script>

<style lang="scss">
	
	@import url(@/style/global.scss);
	
	
	
</style>
