<template>
	<view>
		
	</view>
</template>

<script>
import { Client } from 'mqtt';
	const mqtt=require('mqtt/dist/mqtt.js')
	export default {
		data() {
			return {
				client:null,
				mqttEvent:{
					'0311020000000000':()=>(this.mainScreen.currentIndex=4),
					'0301010000000000':()=>(console.log('p档'))
				}
			}
		},
		mounted() {
			this.MQTTINIT();
		},
		methods: {
			MQTTINIT(){
				 let clientUrl;
				// #ifdef APP-PLUS
				clientUrl='wx://192.168.95.1:8083/mqtt';
				// #endif
				// #ifdef H5
				clientUrl='ws://192.168.95.1:8083//mqtt';
				// #endif
				this.client=mqtt.connect(clientUrl);
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
				.on('error',err=>{
					console.log(err);
				})
				.publish('can2android','03,01,00,00,00,00,00,00')
			}
		}
	}
</script>

<style>

</style>
