<template>
	<view class="" style="height: 90%;">
		
		<video :src="url"  controls style="width: 100%;height: 100%;" poster="https://img1.baidu.com/it/u=2205810988,4283060315&fm=253&fmt=auto&app=138&f=JPEG">
			
		</video>
	</view>
</template>

<script>
	export default {
		props:['url'],
		data() {
			return {
				}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	
</style>