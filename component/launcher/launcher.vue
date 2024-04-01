
<template>
	<view class="wh-100">
		<view class="wh-100">
			<view  class="wh-100">
				 <u-grid :border="false" col="2">
					<u-grid-item >
						<view class="list-item" style="background-color: #4690F9;">
							<u-row justify="start" align="start">
								<u-col span="3">
									<view class="image-music flex">
										<u--image   :showLoading="true" src="https://p1.music.126.net/Oe2hsITZSTX21ovDWUpspw==/109951164524289363.jpg?param=130y130" width="80px" height="80px" :lazy-load="true" shape="circle" mode="widthFix" ></u--image>
									</view>
								</u-col>
								<u-col span="9" style="padding: .5rem 0;">
									<u--text text="吻别-张学友" color="#fff"></u--text>
									<view class="flex" style="justify-content: start;padding: .5rem 0;transform: translateX(-5px);">
										<u-icon name="skip-back-left" color="#fff"  size="28"></u-icon>
										<u-icon name="play-right"  size="27" color="#fff"></u-icon>
										<u-icon name="skip-forward-right" color="#fff" size="28"></u-icon>
									</view>
									<view class="music-progress">
										<view></view>
									</view>
								</u-col>
							</u-row>
						</view>
					</u-grid-item>	
					<u-grid-item>
						<view class="list-item" style="background-color: #e45656;">
							<view>
								<u-row>
									<u-col span="6">
										<u--text :text="todayDate" size="14" color="#fff"></u--text>
										<u--text text=" 二月初二" size="14"  color="#fff"></u--text>
									</u-col>
									<u-col span="6">
										
										<u--text text="甲辰 龙" size="14" align="end"  color="#fff"></u--text>
										
									</u-col>
								</u-row>
							</view>
							<u-divider lineColor="#fff" :hairline="false"></u-divider>
							<view>
								<u--text text="距离 2024年清明节 还有23天" size="12"  color="#fff"></u--text>
							</view>
						</view>
					</u-grid-item>
					<u-grid-item>
						<view class="list-item" style="background-color: #0BB387;">
							<view >
								<view>
									<u-row>
										<u-col span="6" align="start">
											<u-icon
											@click="show=true" 
											    name="arrow-down"
											    size="14"
												:label="wheather.cityName"
												labelPos="left"
												labelColor="#fff"
												color="#fff"
											></u-icon>
										</u-col>

									</u-row>
								</view>
								<u-divider :hairline="false" lineColor="#fff"></u-divider>
								<view>
									<u-row justify="space-between" align="center">
										<u-col span="6" align="center">
											<view class="flex">
												<view >
													<u-icon style="filter: brightness(100);" :name="$url+wheather.weatherIcon" :label="wheather.weather" labelColor="#fff"color="#fff"  size="24" ></u-icon>
												</view>
											</view>
											<u--text :text="wheather.minTemperature+'℃~'+wheather.maxTemperature+'℃'" color="#fff" size="20" align="center" ></u--text>
										</u-col>
										<u-col span="6" align="center">
											<u--text :text="wheather.currentTemperature+'℃'" size="28" align="center" color="#fff"></u--text>
										</u-col>
									</u-row>
								</view>					
							</view>
						</view>
					</u-grid-item>
					<u-grid-item>
						<view class="list-item" style="background-color: #f8d714;">
							<u-row justify="center" align="center" class="wh-100">
								<u-col span="4" align="center" class="wh-100">
									<view class="" style="">
										<u--image :showLoading="true" src="/static/images/car.png" width="120px" height="70px" :lazy-load="true"  mode="widthFix"></u--image>
										<u--text text="我的 迈巴赫" color="#fff" align="center" style="margin-top: 5px;" :bold="true"></u--text>
									</view>
								</u-col>	
								<u-col span="8">
									<u-row justify="start" align="start">
										<u-col span="6" align="center" justify="start"> 
											<view>
												<u--text text="行驶距离" align="center" color="#fff"></u--text>
												<u--text text="220km" align="center"  color="#fff"></u--text>
											</view>
											<br>
											<view>
												<u--text text="出行次数" align="center"  color="#fff"></u--text>
												<u--text text="12次" align="center"  color="#fff"></u--text>
											</view>
										</u-col>
										<u-col span="6">
											<view>
												<u--text text="车外温度" align="center"  color="#fff"></u--text>
												<u--text text="22℃" align="center"  color="#fff"></u--text>
											</view>
											<br>
											<view>
												<u--text text="车内温度" align="center" color="#fff"></u--text>
												<u--text text="18℃" align="center"  color="#fff"></u--text>
											</view>
										</u-col>
									</u-row>
								</u-col>
							</u-row>
						</view>
					</u-grid-item>
				</u-grid>
				<view class="bottom-add" >
					<view class="bottom-view icon-bg" v-for="(i,index) in addImageList" @longpress="i.setting?(longPress.longPressSheetShow=true,selectAddIndex=index):false" @click="i.setting?(i.componentIndex==5?$emit('closeAll'):$emit('switchMain',i.componentIndex)):(BottomIconshow=true,selectAddIndex=index)">
						<u--image :showLoading="true" :src="i.icon" width="32px" height="32px" :lazy-load="true"  mode="widthFix" ></u--image>
					</view>
				</view>
			</view>
		</view>
		<u-popup :show="BottomIconshow" @close="BottomIconshow=false"  @open="BottomIconshow=true" bgColor="#3d4355" >
		    <view class="" >
				<view class="bottom-add">
					<view class="bottom-view icon-bg" v-for="(i,index) in replaceImageList">
						<u--image :showLoading="true" :src="i"  height="32px" width="32px" :lazy-load="true"  mode="widthFix" @click="([addImageList[selectAddIndex].icon,addImageList[selectAddIndex].setting,addImageList[selectAddIndex].componentIndex]=new Array(i,true,index+2)),BottomIconshow=false"></u--image>
					</view>
				</view>
			</view>
		</u-popup>
		<!-- 操作菜单 -->
		<u-action-sheet  @select="selectItem" :actions="longPress.longPressSheetlist" @close="longPress.longPressSheetShow=false" :closeOnClickOverlay="true" :closeOnClickAction="true"  :show="longPress.longPressSheetShow"></u-action-sheet>
	</view>
</template>

<script>
	const mqtt = require('mqtt/dist/mqtt.js')
	export default {
		props:['switchSecond'],
		data() {
			return {
				wheather:[],
				BottomIconshow:false,
				selectAddIndex:0,
				longPress:{
					longPressSheetShow:false,
					longPressSheetlist: [
						{
							name:'替换其App',
							flag:0,
						},
						{
							name: '副屏启动',
							flag:1
						},
					],
				},
				addImageList:[
					{
						icon:'/static/icon/add.png',
						setting:false,
						componentIndex:0
					},
					{
						icon:'/static/icon/add.png',
						setting:false,
						componentIndex:0,
					},
					{
						icon:'/static/icon/add.png',
						setting:false,
						componentIndex:0,
					},
					{
						icon:'/static/icon/add.png',
						setting:false,
						componentIndex:0,
					},
					{
						icon:'/static/icon/add.png',
						setting:false,
						componentIndex:0,
					},
				],
				replaceImageList:[
					'/static/icon/music.png',
					'/static/icon/weather.png',
					'/static/icon/camera.png',
					'/static/icon/close.png',
				],
				client:null
			}
		},
		
		mounted() {
			this.getWeather(13)
		},
		computed:{
			todayDate(){
				let date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1; // 注意月份是从0开始计数的，所以需要+1
				let day = date.getDate()
				let formattedDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
				return formattedDate;
			},
		},
		methods: {
			selectItem(e){
				e.flag?(this.switchSecond(2,'')):this.BottomIconshow=true
			},
			getWeather(cityId){
				this.$request.get(`/control/weather/list?cityId=${cityId}`)
				.then(res=>{
					if(res.code==200){
						this.wheather=res.rows[0]||this.wheather;
					}else{
						this.$request.requestShowToastError(res.msg);
					}
				})
				.catch(err=>{
					this.$request.requestShowToastError(err);
				})
			},
			isIconChange(c){
				return c=='/static/icon/add.png'?false:true;
			}
		}
	}
</script>

<style lang="scss">
	@import url("../../style/global.scss");
	.list-item{
		border-radius: 15px;
		background-color: #fff;
		padding: 1rem;
		margin: .5rem 1rem; 
		width: 80%;
		height: 90px;
		box-shadow: 2px 2px 2px rgba(0, 0, 0, 1);
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
	
	.bottom-add{
		padding: 1rem;
		display: flex;
		height: auto;
		justify-content: space-around;
		width: 95%;
		align-items: center;
	}
	.bottom-view{
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 50px;
		height: 50px;
		border-radius: 15px;
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
	.image-music{
		 animation: rotate 120s linear infinite; 
	}
	@keyframes rotate {
	  from {
	    transform: rotate(0deg); /* 从 0 度开始旋转 */
	  }
	  to {
	    transform: rotate(360deg); /* 旋转一周，360 度 */
	  }
	}
</style>
