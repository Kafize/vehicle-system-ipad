<template>
	<view class="content" >
		<view class="container">
			<view class="wh-100" >
				<view class="flex-column-view wh-100">
					<u-row class="wh-100" style="flex: 2;"  >
						<u-col span="6"  class="wh-100 screen"  >
							<component :is="secondScreen.screenArray[secondScreen.currentIndex]" @switchMain="switchSecond"  :url="secondScreen.videoUrl" >
								<u--text text="副屏" color="#fff" align="center"></u--text>
							</component>
						</u-col>
						<u-col span="6"  class="wh-100 flex screen" >
							<component :is="instrumentScreen.screenArray[instrumentScreen.currentIndex]" @switchMain="switchInstrument" >
								<u--text text="仪表盘" color="#fff" align="center"></u--text>
							</component>
						</u-col>
					</u-row>
					<view class="wh-100 main-screen" style="flex: 3;">
						<component :is="mainScreen.screenArray[mainScreen.currentIndex]" @switchMain="switchMain" :switchSecond="switchSecondVideo" @closeAll="closeAll" >
							<u--text text="主屏" color="#fff" align="center"></u--text>
						</component>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import launcher from '@/component/launcher/launcher.vue';
	import videoPlayer from '@/component/video/video.vue'
	import weather from '@/component/weather/weather.vue'
	import Mscreen from '@/component/screen/Mscreen.vue'
	import analysis from '@/component/analysis/analysis.vue'
	import secondscreen from '@/component/screen/secondscreen.vue'
	import modal from '@/component/shutdown/shutdown.vue'
	import playerVideo from "@/component/video/component/playvideo.vue"
	import instrument from '@/component/instrument/instrument.vue'
	import camera from '@/component/camera/camera.vue'
	import echart from '@/pages/echart/echart.vue'
	const mqtt=require('mqtt/dist/mqtt.js')
	export default {
		components:{
			'launcher':launcher,
			'Mscreen':Mscreen,
			'weather':weather,
			'videoPlayer':videoPlayer,
			'analysis':analysis,
			'secondscreen':secondscreen,
			'playerVideo':playerVideo,
			'modal':modal,
			'instrument':instrument,
			'camera':camera,
			'echart':echart
		},
		data() {
			return {			
				mainScreen:{
					currentIndex:0,
					screenArray:['modal','launcher','videoPlayer','weather','camera'],
				},
				secondScreen:{
					currentIndex:0,
					screenArray:['modal','secondscreen','videoPlayer'],
					videoUrl:''
				},
				instrumentScreen:{
					currentIndex:0,
					screenArray:['modal','instrument'],
				},
				mqttEvent:{
					'0311020000000000':()=>(this.mainScreen.currentIndex=4),
					'0301010000000000':()=>(console.log('p档'))
				}
			}
		},
		mounted() {
			this.MQTTINIT()
		},
		methods: {
			MQTTINIT(){
				let clientUrl;
				// #ifdef H5
				clientUrl='ws://192.168.124.5:8083/mqtt';
				// #endif
				this.client=mqtt.connect(clientUrl);
				console.log(this.client)
				this.client
				.subscribe('android2can',err=>{
					if(!err){
						console.log('订阅主题');
					}
				})
				.on('message',(topic,message)=>{
					const messageString=message.toString().replace(/,/g,'')
					this.mqttEvent[messageString]();
				})
				.publish('can2android','03,01,00,00,00,00,00,00')
				
			},
			MQTTINIT1(){
				let clientUrl='ws:192.168.124.5:8083/mqtt';
				this.client=mqtt.connect(clientUrl);
				console.log(this.client);
				this.client
				.subscribe('android2can',err=>{
					if(!err){
						console.log(err);
						
					}
				})
				.on('message',(topic,message)=>{
					const messageString=message.toString().replace(/,/g,'')
					this.mqttEvent[messageString]();
				})
				.publish('can2android','03,01,00,00,00,00,00,00')
				
				
				
			},
			switchMain(Index){
				console.log(Index)
				this.mainScreen.currentIndex=Index;
				return false
			},
			switchSecondVideo(Index,url){
				console.log(Index,url)
				this.secondScreen.currentIndex=Index;
				this.secondScreen.videoUrl=url;
				return false;
			},
			switchSecond(Index){
				this.secondScreen.currentIndex=Index;
			},
			switchInstrument(Index){
				this.instrumentScreen.currentIndex=Index;
				return false;
			},
			closeAll(){
				console.log(0)
				this.mainScreen.currentIndex=this.secondScreen.currentIndex=this.instrumentScreen.currentIndex=0
			}
		}
	}
</script>

<style lang="scss">
	@import url("@/style/global.scss");
	page{
		background-color: #3d4355;
	}
	.flex-column-view{
		display: flex;
		flex-direction: column;
		
	}
	.main-screen{
		min-width: 0;
		min-height: 0;
		flex: 3;
		position: relative;
	}
	.screen{
		position: relative;
		border: solid 1px #fff;
		border-top: none;
		
	}
	.music-progress{
		border: solid #fff 2px;
		border-radius: 15px;
		position: relative;
	}
	.music-progress::after{
		content: '';
		top: -5px;
		left: 10px;
		width: 10px;
		border-radius: 50%;
		height: 10px;
		background-color: #fff;
		position: absolute;
	}
</style>