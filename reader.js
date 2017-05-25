const fs=require('fs');

var data0=fs.readFileSync('orders_2017-05-22_13-38.csv','utf-8'),
	data1='',
	output='';

var length=data0.split('\n').length
for(var i=0;i<length;i++){
	var head=data0.split('\n')[i].split(';')[0],
		line=data0.split('\n')[i];
	if(head>0){
		data1+='\n'+line+','
	}else{
		data1+=line+','
	}
}
fs.writeFile('data1.txt',data1)

var ppk='',tcm='',cct='',ycn='',kp='';

length=data1.split('\n').length
console.log(length)
for(var i=0;i<length;i++){
	var line=data1.split('\n')[i],
		id=data1.split('\n')[i].split(';')[0];
	if(id>574){
		var clas=line.split(';')[3],
			name=line.split('學員姓名:')[1].split(',')[0],
			scho=line.split('就讀學校:')[1].split(',')[0],
			grad=line.split('就讀年級:')[1].split(',')[0],
			pare=line.split('家長姓名:')[1].split(',')[0],
			phon=line.split('聯絡電話:')[1].split(',')[0],
			mail=line.split(';')[1],
			eche=line.split('報名梯次:')[1].split(',')[0],
			offe=line.split('優惠條件:')[1].split(',')[0],
			mone=line.split(';')[5],
			comp=line.split('電腦需求:')[1].split(',')[0],
			aids=line.split('教具選購:').length;
			if(comp[0]=='自'){comp=''}
			if(aids>1){aids=line.split('教具選購:')[1].split(',')[0]}
				else{aids=''}
			if(aids.length>20){aids=line.split('教具選購:')[1].split('";')[0]}
		output=output+id+','+clas+','+name+','+scho+','+grad+','+pare+','+phon+','+mail+','+eche+','+offe+','+mone+','+comp+','+aids+'\n'
	}
}

//fs.writeFile('temp.txt','')
fs.writeFile('temp.txt',output)
