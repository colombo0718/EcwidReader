const fs=require('fs');

var data0=fs.readFileSync('orders_2017-05-22_13-38.csv','utf-8')

for(var i=0;i<=7269;i++){
	if(data0.split('\n')[i].split(';').length>1){
		console.log(data0.split('\n')[i])
	}
}

//console.log(aa.split('\n').length)
