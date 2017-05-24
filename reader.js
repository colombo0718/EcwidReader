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

length=data1.split('\n').length
console.log(length)
for(var i=0;i<length;i++){
	var id=data1.split('\n')[i].split(';')[0]
	if(id>574){
		output+=id+'\n'
	}
}

//fs.writeFile('temp.txt','')
fs.writeFile('temp.txt',output)
