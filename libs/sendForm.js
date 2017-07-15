var send = angular.module('send', []);
/* send.service('send',['$http',function($http){
	this.post = function(url,object,res){	 
		
		var url = '/nodePost';
		
		 
		 var data = getData(object,object.myFile)  
		
		function getData(textObj, filesArr){	//console.log( 'textObj, filesArr',textObj, filesArr);
			var data  = new FormData() 
			for(name in textObj){
				if( typeof textObj[name] != 'object'){ 
					data.append(name,textObj[name]) 
				}
			}
		
			for( var i = 0; i < filesArr.length; i++){	//console.log('xxx',filesArr[i]) 
				data.append('xxx',filesArr[i]._file) 
			}
			return data
		}
		 
		
	
		 console.log('object', object)
		$http.post(url,data,{transformRequest: angular.identity, headers:{'Content-Type':undefined} })
		.then(function(response) { 
		
		}) 
	}
}]) */

send.service('getData',['$http',function($http){

		return function(textObj ){	//console.log( 'textObj, filesArr',textObj, filesArr);
			
			var data  = new FormData() 
			
			for(name in textObj){	// console.log(typeof textObj[name],textObj[name],name)
				if( typeof textObj[name] != 'object' && name != '$$hashKey' ){ 
					data.append(name,textObj[name]) 
				} 
				//console.log('xqwe',name, textObj[name] )
				if( typeof textObj[name] == 'object' && textObj[name][0]._file ){ var filesArr = textObj[name]  }
				 
			}
			//console.log('filesArr',filesArr)
			if( filesArr&&(filesArr[0]._file) ){	
				for( var i = 0; i < filesArr.length; i++){	 //console.log('xxx',filesArr[i]._file) 
					var name = filesArr[i].fileName.slice(0,filesArr[i].fileName.indexOf('.')) + Math.floor(Math.random(3)*1000)
					data.append(name,filesArr[i]._file) 
				}
			}
			
			return data
		}
		
}]) 

send.directive('fileModel',['$parse',function($parse){
	return{
		restrict: 'A',
		link: function(scope,element, attrs){
			var model = $parse(attrs.fileModel);  
			var modelSetter = model.assign;    
			 
			element.bind('change',function(){
				var values = [];
				angular.forEach(element[0].files,function(item){
					var value = {
						fileName: item.name,
						fileSize: item.size,
						url: URL.createObjectURL(item),
						_file: item
					}
					values.push(value)
				} )
				 /* console.log('attrs.fileModel',attrs.fileModel) */
				scope.$apply(function(){
					if(attrs.multiple){
						modelSetter(scope,values)
					}else{
						modelSetter(scope,[values[0]])
					}
					
					
				})
			})
		}
	}
}])	

//instruction
//  send.post('/urlString , objectFromForm)  // var regApp = angular.module('regApp', ['send']); //function reg($scope,$http ,send){
//	file-model="mod.myFile">  - set derective
