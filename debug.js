var txt='<br>'; 

function damp(obj, bukva)
{
	alert('damp');
	for(var item in obj) 
	{ 
	    if(bukva) if(item.charAt(0)!==bukva )continue;
		var stroka='';if(classof(obj[item])!=='global')stroka=obj[item]; else stroka='global';
		txt += item+'.....'+typeof obj[item]+'  '+stroka+'<br>';	 
	}
    $('#texto').append(txt);
}
function classof(o) {
    if (o === null) return "Null";
    if (o === undefined) return "Undefined";
    return Object.prototype.toString.call(o).slice(8,-1);
}
