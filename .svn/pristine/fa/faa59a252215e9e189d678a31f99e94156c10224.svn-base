
function GetDateStr(AddDayCount) { 
	var dd = new Date(); 
	dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期 
	var y = dd.getFullYear(); 
	var m = dd.getMonth()+1;//获取当前月份的日期 
	var d = dd.getDate(); 

	if (m >= 1 && m <= 9) {
					m = "0" + m;
	 }
	if (d>= 0 && d<= 9) {
					d= "0" + d;
	 }
	return y+"-"+m+"-"+d; 
}
 
 var currentFirstDate,cells=[];
	
	var formatDate = function(date){
		var y = date.getFullYear();
		var m = date.getMonth()+1;//获取当前月份的日期 
		var d = date.getDate(); 
		
		if (m >= 1 && m <= 9) {
						m = "0" + m;
		 }
		if (d>= 0 && d<= 9) {
						d= "0" + d;
		 }
		 
		var code = y+'-'+m+'-'+ d;
	  var year = y+'年';
	  var month = m+'月';
	  var day = d+'日';
	  var week = ['星期天','星期一','星期二','星期三','星期四','星期五','星期六'][date.getDay()]; 
		 
		// 昨天
		if (GetDateStr(-1)== code) {
			week = "昨天"
		}
		// 今天
		if (GetDateStr(0)== code) {
				week = "今天"
		}
		
		// 明天
		if (GetDateStr(1)== code) {
				week = "明天"
		}
		
		// 后天
		if (GetDateStr(2)== code) {
				week = "后天"
		}
		
	  return {time: year+month+day,name:week,code:code,day:d};
	};
	
	var addDate= function(date,n){    
	  date.setDate(date.getDate()+n);    
	  return date;
	};
	
	var setDate = function(date){ 
		cells=[];
	  var week = date.getDay()-1;
	  date = addDate(date,week*-1);
	 
	  currentFirstDate = new Date(date);
	  for(var i = 0;i<7;i++){         
	    cells.push(formatDate(i==0 ? date : addDate(date,1)));
	  }        
	}; 
	
	 var surplusWeek = function(date){ 
		 var date = new Date()
		  setDate(date);
			
			var y = date.getFullYear();
			var m = date.getMonth()+1;//获取当前月份的日期 
			var d = date.getDate(); 
			
			if (m >= 1 && m <= 9) {
					 m = "0" + m;
			}
			if (d>= 0 && d<= 9) {
							d= "0" + d;
			 }
			
			var now  = y+'-'+m+'-'+d
			for (var i = 0 , len = cells.length; i < len; i++) {
				if (cells[i].code == now) {
					cells.splice(0,i)
				}
			}
			return cells
	 }
 
function getWeekTime(name){
	switch (name){
		case '本周日期':
			 setDate(new Date());
			 return cells;
			break;
		case '下周日期':
		  setDate(addDate(currentFirstDate,7));
			return cells;
			break;
		case '上周日期':
		   setDate(addDate(currentFirstDate,-7));
			 return cells;
			break;
		case '本周剩余日期和下周日期':
		    var surplus = surplusWeek();
				 setDate(addDate(currentFirstDate,7));
		    return [...surplus,...cells]
			break;
		case '本周剩余日期':
		    return surplusWeek()
			break;
		default:
		  setDate(new Date());
			break;
	}
		 
}

module.exports = {
	getWeekTime:getWeekTime
}


