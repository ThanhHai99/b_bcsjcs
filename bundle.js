(()=>{"use strict";var e={509:function(e,t,r){var n=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.AppController=void 0;const o=r(563),a=r(918);let s=class{constructor(e){this.appService=e}getHello(){return this.appService.getHello()}};t.AppController=s,n([(0,o.Get)(),i("design:type",Function),i("design:paramtypes",[]),i("design:returntype",String)],s.prototype,"getHello",null),t.AppController=s=n([(0,o.Controller)(),i("design:paramtypes",[a.AppService])],s)},205:function(e,t,r){var n=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};Object.defineProperty(t,"__esModule",{value:!0}),t.AppModule=void 0;const i=r(563),o=r(509),a=r(918),s=r(365),c=r(428),l=r(845),u=r(85),d=r(951),h=r(773);let f=class{};t.AppModule=f,t.AppModule=f=n([(0,i.Module)({imports:[s.BinanceModule,c.ConfigModule.forRoot({envFilePath:[".env"],isGlobal:!0,cache:!0,load:[l.default]}),u.OkxModule,d.ReportModule,h.ExchangeModule],controllers:[o.AppController],providers:[a.AppService]})],f)},918:function(e,t,r){var n=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};Object.defineProperty(t,"__esModule",{value:!0}),t.AppService=void 0;const i=r(563);let o=class{getHello(){return"Hello World!"}};t.AppService=o,t.AppService=o=n([(0,i.Injectable)()],o)},507:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BinanceConfig=void 0,t.BinanceConfig={depositP2PHistory:[{orderNumber:"20601569957284466688",amount:7e6},{orderNumber:"20599433750259236864",amount:1e6},{orderNumber:"20599067193907982336",amount:2e6},{orderNumber:"20598112966771331072",amount:4e5},{orderNumber:"20597858700044353536",amount:1e6},{orderNumber:"20597110078946316288",amount:3e6},{orderNumber:"20596186633552961536",amount:4e5},{orderNumber:"20595526032529244160",amount:59e5},{orderNumber:"20590316985227087872",amount:274e3},{orderNumber:"20589653781866766336",amount:15e5},{orderNumber:"20584783287197126656",amount:5e5}],withdrawP2PHistory:[{orderNumber:"20609363893980004352",amount:5e5},{orderNumber:"20608415506282602496",amount:1e6},{orderNumber:"20604327733671284736",amount:2e6},{orderNumber:"20598561738003931136",amount:75e5},{orderNumber:"20595605226680119296",amount:5904444},{orderNumber:"20615567322504462336",amount:104e5}]}},173:function(e,t,r){var n=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.BinanceController=void 0;const o=r(563),a=r(886);let s=class{constructor(e){this.service=e}test(){}};t.BinanceController=s,n([(0,o.Get)(),i("design:type",Function),i("design:paramtypes",[]),i("design:returntype",void 0)],s.prototype,"test",null),t.BinanceController=s=n([(0,o.Controller)("binance"),i("design:paramtypes",[a.BinanceService])],s)},365:function(e,t,r){var n=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};Object.defineProperty(t,"__esModule",{value:!0}),t.BinanceModule=void 0;const i=r(563),o=r(173),a=r(886),s=r(959),c=r(161),l=r(461),u=r(765),d=r(840);let h=class{};t.BinanceModule=h,t.BinanceModule=h=n([(0,i.Module)({imports:[s.ScheduleModule.forRoot(),l.EventEmitterModule.forRoot(),u.SharedModule,d.HttpModule],controllers:[o.BinanceController],providers:[a.BinanceService,c.BinanceUtil],exports:[a.BinanceService,c.BinanceUtil]})],h)},886:function(e,t,r){var n=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.BinanceService=void 0;const o=r(563),a=r(428),s=r(112),c=r(161),l=r(500),u=r(966),d=r(18),h=r(716),f=r(56),p=r(316),m=r(825),g=r(461),y=r(959),b=r(895),v=r(66).sprintf;let S=class{constructor(e,t,r,n,i){this.configService=e,this.telegramShared=t,this.rateShared=r,this.numberShared=n,this.binanceUtil=i}newCoinTradeBot(){try{this.telegramShared.log(`[${d.Exchanges.BINANCE}] Start ${this.newCoinTradeBot.name}`);for(const e in f.NewCoin.BINANCE){const t=f.NewCoin.BINANCE[`${e}`];if(h().isAfter(t.time))continue;const r=h(t.time).local(!0),n=`${r.minute()} ${r.hour()} ${r.date()} ${r.month()+1} *`;new p.CronJob(n,(async()=>{const r=this.binanceUtil.getBalanceCoin("USDT"),n=r<t.funds?r:t.funds;if(n<5)return;const i=await this.binanceUtil.priceNow(e);return await this.buy(e,n/i,i)})).start(),this.telegramShared.report(`Job ${d.Exchanges.BINANCE}-NewCoin-${e} created`)}}catch(e){this.telegramShared.log(`[${d.Exchanges.BINANCE}] ${this.newCoinTradeBot.name}: ${e}`)}}async shortTermTradeBot(){try{this.telegramShared.log(`[${d.Exchanges.BINANCE}] Start ${this.shortTermTradeBot.name}`);const e=(0,f.default)().ShortTerm.BINANCE,t=Object.keys(e).reduce((function(t,r){if(!0===e[r].status){const n=e[r].coin;Object.keys(n).forEach((function(e){t[e]=n[e]}))}return t}),{}),r="5m",n=576;for(const e in t){const i=await this.binanceUtil.getClosePrice(`${e}USDT`,r,n),o=await this.binanceUtil.RSINow(i),a=await this.binanceUtil.volumeNow(`${e}USDT`,r,n);if(o<=t[`${e}`].minRsi&&a>=t[`${e}`].minVolume){const o=this.binanceUtil.getBalanceCoin("USDT");if(o<10)continue;const a=this.binanceUtil.calculateMovingAverage(i.slice(-n),n),s=this.binanceUtil.getBalanceCoin(e)+Number((0,m.get)(this.binanceUtil.getBalance,`${e}.locked`,0)),c=await this.binanceUtil.priceNow(`${e}USDT`,r),l=s*c,u=Math.floor(t[`${e}`].funds)-Math.floor(l);if(u<10||o<u)continue;if(i[a.length]>a[a.length]&&i[a.length-1]<=a[a.length-1]){const t=await this.buy(e,Number((u/c).toFixed(5)),c);if("FILLED"!=(0,m.get)(t,"status",null))continue}}if("true"==this.configService.get("app.log")){let r=v("%6s - %5s - %12s - %5s - %5s",e,o,a,o<=t[`${e}`].minRsi,a>=t[`${e}`].minVolume);r=o<=t[`${e}`].minRsi&&a>=t[`${e}`].minVolume?b.green(r):b.red(r),console.log(r)}}}catch(e){this.telegramShared.error(e)}}async longTermTradeBot(){try{return this.telegramShared.log(`[${d.Exchanges.BINANCE}] Start ${this.longTermTradeBot.name}`),!0}catch(e){this.telegramShared.error(e)}}async buy(e,t,r){try{const n=await this.binanceUtil.binanceRequestAPI("/api/v3/order","POST",null,{side:"BUY",symbol:e,quantity:t,price:r,timestamp:await this.binanceUtil.getServerTime(),timeInForce:"GTC"},null,!0);return"FILLED"==(0,m.get)(n,"status",null)&&this.telegramShared.report(`Buy----------------------------------\n🟢 | ${t} ${e} | Price: ${r}`),n}catch(e){this.telegramShared.error(e)}}async sell(e,t,r){try{const n=await this.binanceUtil.binanceRequestAPI("/api/v3/order","POST",null,{side:"SELL",symbol:e,quantity:t,price:r,type:"LIMIT",timestamp:await this.binanceUtil.getServerTime(),timeInForce:"GTC"},null,!0);return"FILLED"==(0,m.get)(n,"status",null)&&this.telegramShared.report(`Sell----------------------------------\n🔴 | ${t} ${e} | Price: ${r}`),n}catch(e){this.telegramShared.error(e)}}setup(){const e=this.configService.get("trade.longTerm"),t=this.configService.get("trade.shortTerm"),r=this.configService.get("trade.newCoin");"true"==t&&new p.CronJob(y.CronExpression.EVERY_MINUTE,(()=>this.shortTermTradeBot())).start(),"true"==e&&new p.CronJob(y.CronExpression.EVERY_MINUTE,(()=>this.longTermTradeBot())).start(),"true"==r&&new p.CronJob(y.CronExpression.EVERY_MINUTE,(()=>this.newCoinTradeBot())).start()}};t.BinanceService=S,n([(0,g.OnEvent)("binance.setup.done"),i("design:type",Function),i("design:paramtypes",[]),i("design:returntype",void 0)],S.prototype,"setup",null),t.BinanceService=S=n([(0,o.Injectable)(),i("design:paramtypes",[a.ConfigService,s.TelegramShared,u.RateShared,l.NumberShared,c.BinanceUtil])],S)},161:function(e,t,r){var n,i=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.BinanceUtil=void 0;const a=r(563),s=r(480),c=r(982),l=r(938),u=r(428),d=r(461),h=r(112),f=r(716),p=r(507),m=r(840),g=r(959),y=r(825),b=r(277);let v=n=class{constructor(e,t,r,n){this.configService=e,this.eventEmitter=t,this.telegramShared=r,this.httpService=n,this.setup(!0)}set setBalance(e){this.balance=e}set setAccount(e){this.account=e}set setPrices(e){this.prices=e}set setSymbols(e){this.symbols=e}set setDeposit(e){this.deposit=e}set setWithdraw(e){this.withdraw=e}set setIsReady(e){this.isReady=e}get getBalance(){return this.balance}get getAccount0(){return this.account}get getPrices(){return this.prices}get getSymbols(){return this.symbols}get getDeposit(){return this.deposit}get getWithdraw(){return this.withdraw}get getIsReady(){return this.isReady}getBalanceCoin(e){const t=this.balance.findIndex((t=>t.asset===e));return-1!=t?Number(this.balance[t].free):0}async binanceRequestAPI(e,t,r,n,i,o=!0){const a=n?s.stringify(n).split("&").map((e=>{const t=e.split("=");return[t[0],s.unescape(t[1])].join("=")})).join("&"):"";let u=`https://api.binance.com${e}`;if(u+=""!=a?`?${a}`:"",o){const e=c.createHmac("sha256",this.configService.get("binance.api_secret")).update(a).digest("hex");u+=`&signature=${e}`}return await new Promise(((e,n)=>{l.default.request({method:t,url:u,headers:{...i,"X-MBX-APIKEY":this.configService.get("binance.api_key")},data:r}).then((t=>{e(t.data)})).catch((e=>{n(e)}))}))}async getP2PHistory(e){return await this.binanceRequestAPI("/sapi/v1/c2c/orderMatch/listUserOrderHistory",null,null,{timestamp:await this.getServerTime(),startTimestamp:1e3*f().subtract(1,"months").unix(),tradeType:e},null,!0)}async getAccount(){return await this.binanceRequestAPI("/api/v3/account","GET",null,{timestamp:await this.getServerTime()},!0)}async calculateRSI(e){const t={values:e,period:14};return b.RSI.calculate(t)}async RSINow(e){const t=await this.calculateRSI(e);return t[t.length-1]}async getAllSymbol(){try{return(await this.binanceRequestAPI("/api/v3/exchangeInfo","GET",null,null,null,!1)).symbols.map((e=>e.symbol)).filter((e=>e.endsWith("USDT")))}catch(e){this.telegramShared.error(e)}}async getClosePrice(e,t,r){try{return(await this.candlestick(e,t,r)).map((e=>Number(e[4])))}catch(e){this.telegramShared.error(e)}}async getClosePrices(e){try{return await this.binanceRequestAPI("/api/v3/ticker/price","GET",null,{symbols:'["'+e.toString().split(",").join('","')+'"]'},null,!1)}catch(e){this.telegramShared.error(e)}}async candlestick(e,t,r){try{return this.binanceRequestAPI("/api/v3/klines","GET",null,{symbol:e,interval:t,limit:r},null,!1)}catch(e){this.telegramShared.error(e)}}async priceNow(e,t="5m",r=1){try{const n=await this.candlestick(e,t,r);return Number(n[0][4])}catch(e){this.telegramShared.error(e)}}async volumeNow(e,t="5m",r=1){const n=await this.candlestick(e,t,r);return Number(n[0][5])}calculateMovingAverage(e,t){const r=[];for(let n=0;n<e.length-t+1;n++){const i=e.slice(n,n+t).reduce(((e,t)=>e+t),0);r.push(i/t)}return r}async P2PSell(){return await this.getP2PHistory("SELL")}async P2PBuy(){return await this.getP2PHistory("BUY")}async tradingHistory(e){try{return await this.binanceRequestAPI("/api/v3/myTrades",null,null,{timestamp:await this.getServerTime(),symbol:e},null,!0)}catch(e){this.telegramShared.error(e)}}async depositTruth(){try{return await this.binanceRequestAPI("/sapi/v1/capital/deposit/hisrec","GET",null,{timestamp:await this.getServerTime()},null,!0)}catch(e){this.telegramShared.error(e)}}async depositTruthAmount(){try{const e=p.BinanceConfig.depositP2PHistory.reduce(((e,t)=>e+t.amount),0);return e+(await this.depositTruth()).map((e=>{const t=Number(e.amount),r=Number(this.coinToUsd(e.coin))||0;return{coin:e.coin,quantity:t,asset:t*r}})).reduce(((e,t)=>e+t.asset),0)}catch(e){this.telegramShared.error(e)}}async withdrawTruth(){try{return await this.binanceRequestAPI("/sapi/v1/capital/withdraw/history","GET",null,{timestamp:await this.getServerTime()},null,!0)}catch(e){this.telegramShared.error(e)}}async withdrawTruthAmount(){try{const e=p.BinanceConfig.depositP2PHistory.reduce(((e,t)=>e+t.amount),0);return e+(await this.withdrawTruth()).map((e=>{const t=Number(e.amount)+Number(e.transactionFee),r=Number(this.coinToUsd(e.coin))||0;return{coin:e.coin,quantity:t,asset:t*r}})).reduce(((e,t)=>e+t.asset),0)}catch(e){this.telegramShared.error(e)}}async setup(e=!1){try{if(this.symbols=await this.getAllSymbol(),this.account=await this.getAccount(),"{}"==JSON.stringify(this.account))return await this.setup();if(this.balance=this.account.balances.filter((e=>Number((0,y.get)(e,"locked",0))+Number((0,y.get)(e,"free",0))>0)),this.prices=await this.getClosePrices(this.symbols),this.deposit=await this.depositTruth(),this.withdraw=await this.withdrawTruth(),this.isReady=!0,e){const e="binance.setup.done";this.eventEmitter.emit(e,!0),a.Logger.log(`event: ${e}`,n.name)}}catch(e){this.telegramShared.error(e)}}coinToUsd(e){const t=this.prices.findIndex((t=>t.symbol===`${e}USDT`));return-1!=t?Number(this.prices[t].price):0}coinInWallet(e){const t=this.account.balances.findIndex((t=>t.asset===e)),r=-1!=t?Number((0,y.get)(this.account.balances,`${t}.free`,0))+Number((0,y.get)(this.account.balances,`${t}.locked`,0)):0,n=this.account.balances.findIndex((t=>`LD${t.asset}`===e));return r+(-1!=n?Number((0,y.get)(this.account.balances,`${n}.free`,0))+Number((0,y.get)(this.account.balances,`${n}.locked`,0)):0)}async calculatePnL(e){if(!this.symbols.find((t=>t===`${e}USDT`)))return{total:0,today:0};let t=0,r=0;const n=await this.tradingHistory(`${e}USDT`);if(!n)return null;const i=this.coinInWallet(e);for(const e of n)e.isBuyer?(t-=parseFloat(e.qty),f(e.time).isSame(f().subtract(1,"days"),"day")&&(r-=parseFloat(e.qty))):(t+=parseFloat(e.qty),f(e.time).isSame(f().subtract(1,"days"),"day")&&(r+=parseFloat(e.qty)));const o=this.withdraw.findIndex((t=>t.coin===e)),a=-1!=o?this.withdraw[o].amount:0,s=this.deposit.findIndex((t=>t.coin===e)),c=-1!=s?this.withdraw[s].amount:0;return{total:i+Number(a)-Number(c)+t,today:0}}async getServerTime(){try{return(await this.binanceRequestAPI("/api/v3/time","GET",null,null,null,!1)).serverTime}catch(e){this.telegramShared.error(e)}}};t.BinanceUtil=v,i([(0,g.Cron)(g.CronExpression.EVERY_HOUR),o("design:type",Function),o("design:paramtypes",[Boolean]),o("design:returntype",Promise)],v.prototype,"setup",null),t.BinanceUtil=v=n=i([(0,a.Injectable)(),o("design:paramtypes",[u.ConfigService,d.EventEmitter2,h.TelegramShared,m.HttpService])],v)},56:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.NewCoin=void 0;const n=r(18);Number.MAX_VALUE,t.default=()=>({[`${n.Term.ShortTerm}`]:{[`${n.Exchanges.BINANCE}`]:{[`${n.Platform.POW}`]:{status:!1,coin:{BTC:{profitPercent:2,funds:150,minRsi:25,minVolume:200}}},[`${n.Platform.Layer1Layer2}`]:{status:!1,coin:{BNB:{profitPercent:2,funds:10,minRsi:20,minVolume:200},SOL:{profitPercent:2,funds:10,minRsi:20,minVolume:200},XRP:{profitPercent:2,funds:10,minRsi:20,minVolume:200},ADA:{profitPercent:2,funds:10,minRsi:20,minVolume:200},AVAX:{profitPercent:2,funds:10,minRsi:20,minVolume:200},TRX:{profitPercent:2,funds:10,minRsi:20,minVolume:200},MATIC:{profitPercent:2,funds:10,minRsi:20,minVolume:200},NEAR:{profitPercent:2,funds:10,minRsi:30,minVolume:200},ATOM:{profitPercent:2,funds:10,minRsi:20,minVolume:200},ARB:{profitPercent:2,funds:10,minRsi:20,minVolume:200},STRK:{profitPercent:2,funds:10,minRsi:20,minVolume:200},DYM:{profitPercent:2,funds:10,minRsi:20,minVolume:200},AEVO:{profitPercent:2,funds:10,minRsi:20,minVolume:200},PIXEL:{profitPercent:2,funds:10,minRsi:20,minVolume:200},AR:{profitPercent:2,funds:10,minRsi:20,minVolume:200},LINK:{profitPercent:2,funds:10,minRsi:20,minVolume:200}}},[`${n.Platform.DeFi}`]:{status:!1,coin:{JUP:{profitPercent:2,funds:10,minRsi:20,minVolume:200},AAVE:{profitPercent:2,funds:10,minRsi:20,minVolume:200},CAKE:{profitPercent:2,funds:10,minRsi:20,minVolume:200},DYDX:{profitPercent:2,funds:10,minRsi:20,minVolume:200},LUNA:{profitPercent:2,funds:10,minRsi:25,minVolume:200},ETHFI:{profitPercent:2,funds:10,minRsi:20,minVolume:200}}},[`${n.Platform.AI}`]:{status:!1,coin:{GRT:{profitPercent:2,funds:10,minRsi:20,minVolume:200},THETA:{profitPercent:2,funds:10,minRsi:20,minVolume:200},FET:{profitPercent:2,funds:10,minRsi:20,minVolume:200},WLD:{profitPercent:2,funds:10,minRsi:20,minVolume:200},OCEAN:{profitPercent:2,funds:10,minRsi:20,minVolume:200},RLC:{profitPercent:2,funds:10,minRsi:20,minVolume:200},IQ:{profitPercent:2,funds:10,minRsi:20,minVolume:200},AI:{profitPercent:2,funds:10,minRsi:20,minVolume:200}}},[`${n.Platform.MeMe}`]:{status:!0,coin:{DOGE:{profitPercent:5,funds:10,minRsi:20,minVolume:5e7},SHIB:{profitPercent:5,funds:10,minRsi:20,minVolume:1e11},WIF:{profitPercent:5,funds:10,minRsi:20,minVolume:1e6},PEPE:{profitPercent:5,funds:10,minRsi:20,minVolume:7e11},FLOKI:{profitPercent:5,funds:10,minRsi:20,minVolume:5e9},BONK:{profitPercent:5,funds:10,minRsi:20,minVolume:2e10},BOME:{profitPercent:5,funds:10,minRsi:20,minVolume:5e7}}},[`${n.Platform.NFT}`]:{status:!1,coin:{VANRY:{profitPercent:2,funds:10,minRsi:20,minVolume:200}}}},[`${n.Exchanges.OKX}`]:{}},[`${n.Term.LongTerm}`]:{[`${n.Exchanges.BINANCE}`]:{},[`${n.Exchanges.OKX}`]:{}}}),t.NewCoin={[`${n.Exchanges.BINANCE}`]:{},[`${n.Exchanges.OKX}`]:{}}},18:(e,t)=>{var r,n,i;Object.defineProperty(t,"__esModule",{value:!0}),t.Term=t.Platform=t.Exchanges=void 0,function(e){e.BINANCE="BINANCE",e.OKX="OKX"}(r||(t.Exchanges=r={})),function(e){e.POW="POW",e.Layer1Layer2="Layer1Layer2",e.DeFi="DeFi",e.GameFi="GameFi",e.AI="AI",e.MeMe="MeMe",e.NFT="NFT"}(n||(t.Platform=n={})),function(e){e.ShortTerm="ShortTerm",e.LongTerm="LongTerm"}(i||(t.Term=i={}))},845:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=()=>({app:{port:process.env.APP_PORT||3e3,log:process.env.APP_LOG||!1},telegram:{log:process.env.TELEGRAM_LOG||!1},binance:{api_key:process.env.BINANCE_API_KEY,api_secret:process.env.BINANCE_API_SECRET,test:process.env.BINANCE_TEST},okx:{api_key:process.env.OKX_API_KEY,api_secret:process.env.OKX_API_SECRET,api_passphrase:process.env.OKX_API_PASSPHRASE},trade:{shortTerm:process.env.TRADE_SHORT_TERM||!1,longTerm:process.env.TRADE_LONG_TERM||!1,newCoin:process.env.TRADE_NEW_COIN||!1}})},773:function(e,t,r){var n=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};Object.defineProperty(t,"__esModule",{value:!0}),t.ExchangeModule=void 0;const i=r(563),o=r(14);let a=class{};t.ExchangeModule=a,t.ExchangeModule=a=n([(0,i.Module)({providers:[o.ExchangeService]})],a)},14:function(e,t,r){var n=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};Object.defineProperty(t,"__esModule",{value:!0}),t.ExchangeService=void 0;const i=r(563);let o=class{};t.ExchangeService=o,t.ExchangeService=o=n([(0,i.Injectable)()],o)},37:function(e,t,r){var n=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.OkxController=void 0;const o=r(563),a=r(222);let s=class{constructor(e){this.service=e}test(){return this.service.shortTermTradeBot()}};t.OkxController=s,n([(0,o.Get)(),i("design:type",Function),i("design:paramtypes",[]),i("design:returntype",void 0)],s.prototype,"test",null),t.OkxController=s=n([(0,o.Controller)("okx"),i("design:paramtypes",[a.OkxService])],s)},85:function(e,t,r){var n=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};Object.defineProperty(t,"__esModule",{value:!0}),t.OkxModule=void 0;const i=r(563),o=r(222),a=r(37),s=r(537),c=r(959),l=r(461),u=r(765),d=r(840);let h=class{};t.OkxModule=h,t.OkxModule=h=n([(0,i.Module)({imports:[c.ScheduleModule.forRoot(),l.EventEmitterModule.forRoot(),u.SharedModule,d.HttpModule],controllers:[a.OkxController],providers:[o.OkxService,s.OkxUtil],exports:[o.OkxService,s.OkxUtil]})],h)},222:function(e,t,r){var n=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.OkxService=void 0;const o=r(563),a=r(537);let s=class{constructor(e){this.okxUtil=e}buy(e,t,r){return Promise.resolve(void 0)}longTermTradeBot(){return Promise.resolve(void 0)}newCoinTradeBot(){}reportBalanceBot(e){return null}reportPnLBot(e){return Promise.resolve(void 0)}sell(e,t,r,n){return Promise.resolve(void 0)}async shortTermTradeBot(){return await this.okxUtil.getSymbols}};t.OkxService=s,t.OkxService=s=n([(0,o.Injectable)(),i("design:paramtypes",[a.OkxUtil])],s)},537:function(e,t,r){var n,i=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.OkxUtil=void 0;const a=r(563),s=r(428),c=r(461),l=r(112),u=r(840),d=r(573),h=r(716),f=r(982),p=r(480);let m=n=class{constructor(e,t,r,n){this.configService=e,this.eventEmitter=t,this.telegramShared=r,this.httpService=n,this.setup(!0)}set setBalance(e){this.balance=e}set setAccount(e){this.account=e}set setPrices(e){this.prices=e}set setSymbols(e){this.symbols=e}set setDeposit(e){this.deposit=e}set setWithdraw(e){this.withdraw=e}set setIsReady(e){this.isReady=e}get getBalance(){return this.balance}get getAccount(){return this.account}get getPrices(){return this.prices}get getSymbols(){return this.symbols}get getDeposit(){return this.deposit}get getWithdraw(){return this.withdraw}get getIsReady(){return this.isReady}async okxRequestAPI(e,t,r,n,i,o=!0){const a=`https://www.okx.com${e}`,s=h().toISOString(),c=`${s}${t}${e}?${p.stringify(n)}`,l=f.createHmac("sha256",this.configService.get("okx.api_secret")).update(c).digest("base64");i={...i,"OK-ACCESS-KEY":this.configService.get("okx.api_key"),"OK-ACCESS-PASSPHRASE":this.configService.get("okx.api_passphrase"),"OK-ACCESS-SIGN":l,"OK-ACCESS-TIMESTAMP":s};const{data:u}=await(0,d.firstValueFrom)(this.httpService.get(a,{headers:i,params:n}).pipe((0,d.catchError)((e=>{throw console.error(e),"An error happened!"}))));return u.data}async getServerTime(){try{const[e]=await this.okxRequestAPI("/api/v5/public/time","GET",null,null,null,!1);return Number(e.ts)}catch(e){this.telegramShared.error(e)}}async calculatePnL(e){return{total:0,today:0}}coinToUsd(e){return 0}async depositTruthAmount(){return 0}async withdrawTruthAmount(){return 0}async setup(e=!1){try{if(this.isReady=!1,this.account=await this.okxRequestAPI("/api/v5/account/instruments","GET",null,{instType:"SPOT"},!0),this.symbols=this.account.filter((e=>"USDT"===e.quoteCcy)).map((e=>e.baseCcy)),this.isReady=!0,e){const e="okx.setup.done";this.eventEmitter.emit(e,!0),a.Logger.log(`event: ${e}`,n.name)}}catch(e){this.telegramShared.error(e)}}};t.OkxUtil=m,t.OkxUtil=m=n=i([(0,a.Injectable)(),o("design:paramtypes",[s.ConfigService,c.EventEmitter2,l.TelegramShared,u.HttpService])],m)},339:function(e,t,r){var n=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.ReportController=void 0;const o=r(563),a=r(376);let s=class{constructor(e){this.service=e}test(){return this.service.reportBalanceBot()}};t.ReportController=s,n([(0,o.Get)(),i("design:type",Function),i("design:paramtypes",[]),i("design:returntype",void 0)],s.prototype,"test",null),t.ReportController=s=n([(0,o.Controller)("report"),i("design:paramtypes",[a.ReportService])],s)},951:function(e,t,r){var n=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};Object.defineProperty(t,"__esModule",{value:!0}),t.ReportModule=void 0;const i=r(563),o=r(376),a=r(339),s=r(959),c=r(461),l=r(365),u=r(765),d=r(840),h=r(447),f=r(85);let p=class{};t.ReportModule=p,t.ReportModule=p=n([(0,i.Module)({imports:[s.ScheduleModule.forRoot(),c.EventEmitterModule.forRoot(),l.BinanceModule,u.SharedModule,d.HttpModule,f.OkxModule],controllers:[a.ReportController],providers:[o.ReportService,h.ReportUtil],exports:[o.ReportService,h.ReportUtil]})],p)},376:function(e,t,r){var n=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.ReportService=void 0;const o=r(563),a=r(447),s=r(161),c=r(18),l=r(537),u=r(112),d=r(500),h=r(966),f=r(316),p=r(716),m=r(461),g=r(825),y=r(220);let b=class{constructor(e,t,r,n,i,o){this.reportUtil=e,this.binanceUtil=t,this.okxUtil=r,this.telegramShared=n,this.numberShared=i,this.rateShared=o}async reportPnLBot(){try{const e=[["Status","Coin","Amount (USD)","Amount (VND)"]];let t=0,r=0;for(const n of this.reportUtil.symbols){let i=0,o=0;for(const e of Object.values(c.Exchanges))switch(e){case c.Exchanges.BINANCE:const e=await new Promise((e=>setTimeout((async()=>{const t=await this.binanceUtil.calculatePnL(n.split("USDT")[0]);return e(t)}),200)));if(0===e.total&&0===e.today)break;const t=this.binanceUtil.coinToUsd(n.split("USDT")[0]);i+=e.total*t,o+=e.today*t;break;case c.Exchanges.OKX:const r=await new Promise((e=>setTimeout((async()=>{const t=await this.okxUtil.calculatePnL(n.split("USDT")[0]);return e(t)}),200)));if(0===r.total&&0===r.today)break;const a=this.okxUtil.coinToUsd(n.split("USDT")[0]);i+=r.total*a,o+=r.today*a}t+=i,r+=o,0===i&&0===o||e.push([i>0?"+":"-",n,i,await this.rateShared.usdToVnd(i)])}const n=await this.binanceUtil.depositTruthAmount(),i=await this.binanceUtil.withdrawTruthAmount(),o=t-n+i-await this.okxUtil.depositTruthAmount()+await this.okxUtil.withdrawTruthAmount();e.push(["","","",""]),e.push([t>0?"🟢":"🔴","Total",this.numberShared.formatNumber(t),this.numberShared.formatNumber(await this.rateShared.usdToVnd(t))]),e.push([r>0?"🟢":"🔴","[testing] Today",this.numberShared.formatNumber(r),this.numberShared.formatNumber(await this.rateShared.usdToVnd(r))]),e.push([o>0?"🟢":"🔴","[testing] Truth",this.numberShared.formatNumber(await this.rateShared.vndToUsd(o)),this.numberShared.formatNumber(o)]),this.telegramShared.report(`\`\`\`${(0,y.table)(e)}\`\`\``,{parse_mode:"Markdown"})}catch(e){this.telegramShared.error(e)}}async reportBalanceBot(){const e=[["Status","Exchange","Amount (USD)","Amount (VND)"]];for(const t of Object.values(c.Exchanges))switch(t){case c.Exchanges.BINANCE:let t=0;for(const e of this.binanceUtil.getBalance){const r=e.asset.startsWith("LD")?e.asset.split("LD")[1]:e.asset,n=Number((0,g.get)(e,"free",0))+Number((0,g.get)(e,"locked",0));if(0==n)continue;const i="USDT"==e.asset?n:n*Number(this.binanceUtil.coinToUsd(`${r}USDT`));i&&(t+=i)}e.push([t>0?"+":"-",c.Exchanges.BINANCE,this.numberShared.formatNumber(t),this.numberShared.formatNumber(await this.rateShared.usdToVnd(t))]);break;case c.Exchanges.OKX:const r=0;e.push([r>0?"+":"-",c.Exchanges.OKX,this.numberShared.formatNumber(r),this.numberShared.formatNumber(await this.rateShared.usdToVnd(r))])}this.telegramShared.report(`\`\`\`${(0,y.table)(e,{})}\`\`\``,{parse_mode:"Markdown"})}setup(){if(!this.binanceUtil.getIsReady||!this.okxUtil.getIsReady)return;const e=p("0001-01-01T05:00+07:00").local(!0).hour();new f.CronJob(`0 ${e} * * *`,(()=>this.reportBalanceBot())).start();const t=p("0001-01-01T07:00+07:00").local(!0).hour();new f.CronJob(`0 ${t} * * *`,(()=>this.reportPnLBot())).start()}};t.ReportService=b,n([(0,m.OnEvent)(["binance.setup.done","okx.setup.done"]),i("design:type",Function),i("design:paramtypes",[]),i("design:returntype",void 0)],b.prototype,"setup",null),t.ReportService=b=n([(0,o.Injectable)(),i("design:paramtypes",[a.ReportUtil,s.BinanceUtil,l.OkxUtil,u.TelegramShared,d.NumberShared,h.RateShared])],b)},447:function(e,t,r){var n=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.ReportUtil=void 0;const o=r(563),a=r(428),s=r(461),c=r(112),l=r(840),u=r(161);r(277);let d=class{constructor(e,t,r,n,i){this.configService=e,this.eventEmitter=t,this.telegramShared=r,this.httpService=n,this.binanceUtil=i,this.symbols=new Set([])}setup(){[this.binanceUtil.getIsReady].every((e=>!0===e))&&this.binanceUtil.getSymbols.forEach((e=>this.symbols.add(e)))}};t.ReportUtil=d,n([(0,s.OnEvent)(["binance.setup.done"]),i("design:type",Function),i("design:paramtypes",[]),i("design:returntype",void 0)],d.prototype,"setup",null),t.ReportUtil=d=n([(0,o.Injectable)(),i("design:paramtypes",[a.ConfigService,s.EventEmitter2,c.TelegramShared,l.HttpService,u.BinanceUtil])],d)},440:function(e,t,r){var n=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorShared=void 0;const o=r(563);let a=class{constructor(){}errorToString(e){return JSON.stringify({message:e.message,stack:e.stack})}};t.ErrorShared=a,t.ErrorShared=a=n([(0,o.Injectable)(),i("design:paramtypes",[])],a)},500:function(e,t,r){var n=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NumberShared=void 0;const o=r(563);let a=class{constructor(){}formatNumber(e){return Math.abs(e)>=1e9?(e/1e9).toFixed(2)+"B":Math.abs(e)>=1e6?(e/1e6).toFixed(2)+"M":Math.abs(e)>=1e3?(e/1e3).toFixed(2)+"K":e.toFixed(2)}};t.NumberShared=a,t.NumberShared=a=n([(0,o.Injectable)(),i("design:paramtypes",[])],a)},966:function(e,t,r){var n=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.RateShared=void 0;const o=r(563),a=r(938);let s=class{constructor(){}async usdToVnd(e){const t=await a.default.get("https://api.exchangerate-api.com/v4/latest/USD");return e*Number(t.data.rates.VND)}async vndToUsd(e){const t=await a.default.get("https://api.exchangerate-api.com/v4/latest/VND");return e*Number(t.data.rates.USD)}};t.RateShared=s,t.RateShared=s=n([(0,o.Injectable)(),i("design:paramtypes",[])],s)},765:function(e,t,r){var n=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};Object.defineProperty(t,"__esModule",{value:!0}),t.SharedModule=void 0;const i=r(563),o=r(500),a=r(966),s=r(112),c=r(440);let l=class{};t.SharedModule=l,t.SharedModule=l=n([(0,i.Module)({providers:[o.NumberShared,a.RateShared,s.TelegramShared,c.ErrorShared],exports:[o.NumberShared,a.RateShared,s.TelegramShared,c.ErrorShared]})],l)},112:function(e,t,r){var n=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.TelegramShared=void 0;const o=r(563),a=r(428),s=r(440),c=r(209);let l=class{constructor(e,t){this.configService=e,this.errorShared=t,this.token="7038615031:AAHIDin4IcQ_kBWPmtq1RzYw2G7Y_Vujb3w",this.logChannelId="-1001557915152",this.reportChannelId="-1002028571197",this.bot=new c(this.token,{})}report(e,t={}){this.bot.sendMessage(this.reportChannelId,e,t)}log(e){const t="🟢 | "+e,r=this.configService.get("app.log"),n=this.configService.get("telegram.log");"true"==r&&console.log(t),"false"!=n&&this.bot.sendMessage(this.logChannelId,t)}error(e){e.message="🔴 | "+e.message;const t=this.errorShared.errorToString(e),r=this.configService.get("app.log"),n=this.configService.get("telegram.log");"true"==r&&console.log(t),"false"!=n&&this.bot.sendMessage(this.logChannelId,t)}};t.TelegramShared=l,t.TelegramShared=l=n([(0,o.Injectable)(),i("design:paramtypes",[a.ConfigService,s.ErrorShared])],l)},840:e=>{e.exports=require("@nestjs/axios")},563:e=>{e.exports=require("@nestjs/common")},428:e=>{e.exports=require("@nestjs/config")},781:e=>{e.exports=require("@nestjs/core")},461:e=>{e.exports=require("@nestjs/event-emitter")},959:e=>{e.exports=require("@nestjs/schedule")},938:e=>{e.exports=require("axios")},895:e=>{e.exports=require("chalk")},316:e=>{e.exports=require("cron")},825:e=>{e.exports=require("lodash")},716:e=>{e.exports=require("moment")},209:e=>{e.exports=require("node-telegram-bot-api")},573:e=>{e.exports=require("rxjs")},66:e=>{e.exports=require("sprintf-js")},220:e=>{e.exports=require("table")},277:e=>{e.exports=require("technicalindicators")},982:e=>{e.exports=require("crypto")},480:e=>{e.exports=require("querystring")}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,r),o.exports}(()=>{const e=r(781),t=r(205),n=r(428),i=r(112),o=r(716);!async function(){const r={};"true"==process.env.APP_LOG||(r.logger=!1);const a=await e.NestFactory.create(t.AppModule,r),s=a.get(n.ConfigService),c=a.get(i.TelegramShared),l=s.get("app.port");await a.listen(l,(()=>{const e=`${o().local(!0).format()} ==> Stared at port: ${l}`;c.log(e)}))}()})()})();