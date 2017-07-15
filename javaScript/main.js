 

var regApp = angular.module('regApp', ['send',"ngRoute","ngAnimate" ,'textAngular']);

 
 
 regApp.controller('main', function (getData,$scope,$location,$rootScope, $routeParams, $templateCache,
 servicesShare ,serviceItems,serviceMenu, $http,$timeout,textAngularManager){
 
	 //--cmp
	 $scope.cmpFn = function(item){
		if( !$scope.cmpArr){ $rootScope.cmpArr = [] }
		  $rootScope.cmpArr.push(item)  
	 }
	 
	 $scope.aurorizFn = function(auroriz){
		if(auroriz.login == 1 && auroriz.password == 1){
			//console.log('auroriz',auroriz)
		    $rootScope.adminFlag = 1;
		}
		 
	 }
	 
 
	
	
	$scope.objMenu ={
		img:'/imgs/design/no-image.png' ,
		top: 0,
		left: 0,
		size: 100,
		name: '',
		color: '#337799',
		roundColor: '#337799',
		textColor: '#337799'
	}

	$scope.MenuGet = function(){
		var rezultHTTP = serviceMenu.getMenu(); 
		rezultHTTP.then(function(response) { ////console.log('getMenu rezultHTTP ',response.data) 
			var rezult = addPath(response.data,'imgs/design/buttons/' ) 
			$scope.Menu = setInt(rezult) /* 
			$rootScope.nowCollection = 	$scope.Menu.collName||'oYEVYvMPWC'; */
		}, function error(res){
			console.error('getMenu rezultHTTP error: ',res) 
		})  
	} ;
	$scope.MenuGet() 
	
	
	$scope.addMenu = function(objMenu){
		////console.log(objMenu) 
		var newCollName = makeCollName()
		serviceItems.createNewColl(newCollName) 
		serviceMenu.addMenu(objMenu,newCollName)
		
		$scope.MenuGet()
	}
	 
	$scope.modifyMenu = function(menuItem){
		$scope.objMenu = Object.create(menuItem) 
		$scope.flagModifyMenu = 1
		
		
	}
	 
	$scope.delMenu = function(menuItem){	//////console.log(menuItem)
		serviceMenu.del(menuItem) 
		
		$scope.MenuGet()
	} 
	
	$scope.previewImgAdmin = function(){ 
		$scope.flagCreateMenu = 1 
	}
	 
	$scope.saveModifyMenu = function(menuItem){	 
		serviceMenu.saveModify(menuItem)
	}

	
	
	// -- items --
	
	 
	$scope.objItem ={ name:'', img:'/imgs/design/no-image.png'    }
	
	$scope.getItems = function(menu){
		if(menu){
			var collName = menu.collName
			$scope.mainColor = menu.roundColor
			//console.log('collName', collName)
		}else{$scope.mainColor = "#00ff80"}
		
		/* $rootScope.nowCollection = collName||'oYEVYvMPWC'; */
		var itemsUnPath = serviceItems.getColl($rootScope.nowCollection);
		
		var rezultHTTP = serviceItems.getColl($rootScope.nowCollection); 
		rezultHTTP.then(function(response) { //console.log('getColl rezultHTTP ',response.data) 
			$scope.items = addPath(response.data,'/imgs/items/' )  
		}, function error(res){
			console.error('getMenu rezultHTTP error: ',res) 
		})   
		 
	} ;
	$scope.getItems()
	 
	$scope.delItem = function(item){	//console.log(' delItem mainjs item',item)
		serviceItems.del(item,$rootScope.nowCollection)
		$scope.getItems()
	}
	
	$scope.modifyItem = function(objItem){ 		////console.log('modifyItemCreate', objItem)
		$scope.objItem = Object.create(objItem)
		$scope.flagModifyItem = 1;
	}
	
	$scope.saveModifyItem = function(objItem){	 //console.log('saveModifyItem', $scope.objItem)
		serviceItems.saveModify(objItem,$rootScope.nowCollection)
	} 
	
	$scope.addItem = function(objItem){  
		serviceItems.addItem(objItem,$rootScope.nowCollection) 
		 
	}
 
	 
	$scope.previewImgItem = function(){
		$scope.flagCreateItem = 1;	 
		/* var inputFile = document.getElementById('filePreView_adminItem')
		viewImg(inputFile, function(srcImg){
			$scope.objItem.img = srcImg
			$timeout(function(){ //console.log('reset') })
		})  */
	}
	
	
	
	
	
	
	
	
	
	//--- from angularBags
	$scope.paternView = function(value){ 
		$scope.howIsShow = value
		var items = angular.element(document.getElementsByClassName('items'));
		////console.log($scope.howIsShow); 
		switch($scope.howIsShow){
			case 1: items.css("width","100%"); break;
			case 2: items.css("width","400px"); break;
			case 3: items.css("width","250px"); break;
			case 4: items.css("width","175px"); break;
		}
	} 
	

	$scope.createMonitorx = function(){
			$scope.monitor = document.createElement("div");
			$scope.monitor.innerHTML = '123' 
		 $scope.monitor = angular.element(document.getElementsByClassName('monitor')[0]);  
			
	}()
	
	$scope.createMonitor = function(ind){  
		if(ind=="close"){ $scope.hideEl = 0; return}
		$scope.ind = ind;
		var items = angular.element(document.getElementsByClassName('items'));
		
	 
		/*  monitor = angular.element(document.getElementsByClassName('monitor')[0]); */
	 
		ind = smalRecursion(ind+1); //console.log('createMonitor:',ind )
		$scope.hideEl = angular.element(items[ind-1]).after($scope.monitor);	
		//console.log('createMonitor ind',ind)
		 
		 
		function smalRecursion(indElement){	 
			if((indElement!=0)&&(indElement%$scope.howIsShow==0)){
				if(indElement>$scope.items.length-($scope.items.length%$scope.howIsShow)){indElement=$scope.items.length; return indElement;}
				return indElement; 
			}else{ 
				return smalRecursion(indElement+1);
			}
		}	
		 
	} 
	
	 
	 
		
	 //-----onePage
	 
/* 	$scope.onePageFn = function(item){
		$rootScope.onePage = item; //console.log('onePageFn',item)
		//console.log('onePage2',$scope.onePage)
	} */
	
	$scope.$on("$routeChangeSuccess", function(){  
        $scope.flagMap = 0; 
		
		var id = $routeParams["idDinamic"];
		var collName = $scope.nowCollectionX = $routeParams["collName"];
		if(id&&collName){
			console.log('$routeChangeSuccess', id , collName )
			$scope.CreateOnrePageObj(id , collName )
		}
		
		if($routeParams["collName"])$rootScope.nowCollection = $routeParams["collName"];
 
		console.log('---$rootScope.nowCollection', $rootScope.nowCollection)
		
	     
	})
	
	$scope.CreateOnrePageObj = function(id,collName){
			  console.log('CreateOnrePageObj : ', id, collName)
				var rezultHTTP = serviceItems.getItem( id, collName )   
				rezultHTTP.then(function(response) { 
					$rootScope.onePage =  response.data  ; //console.log('$rootScope.onePagexxx',$rootScope.onePage) 
					 
					var newArr = []
					if(  $rootScope.onePage.imgs){
						for(var i=0; i<$rootScope.onePage.imgs.length; i++){
							newArr[newArr.length] = $rootScope.onePage.imgs[i]
							//console.log(' $rootScope.onePage.imgs[i]',  $rootScope.onePage.imgs[i] )
						} 
						$scope.oldImgsObj = {
							id:$rootScope.onePage._id,
							imgs: newArr
						} 
					} 
					
				}) 
			 	
	}
	
		$scope.delImgOnePage = function(arrImgs,img){ //console.log('delImgOnePage',arguments)  
			for(var i=0; i<arrImgs.length; i++){
				if(arrImgs[i]==img){ arrImgs.splice(i,1) }//console.log(img);
			}
		}
		
		$scope.saveOnePage = function(id,imgsOld, imgsNew){
			//console.log(id,imgsOld, imgsNew)
			var fullImgsObj = {
				id:$rootScope.onePage._id, 
				new: imgsNew, 
				collName: $rootScope.nowCollection
			}
			 
			serviceItems.saveOnePage(fullImgsObj, imgsOld)
			/* serviceItems.saveOnePage($rootScope.nowCollection,item ,img) */
		}
		
		/* $scope.createImgsObj = function(){ 
			var newArr = []
			for(var i=0; i<$rootScope.onePage.imgs.length; i++){
				newArr[newArr.length] = $rootScope.onePage.imgs[i]
			} 
			$scope.oldImgsObj = {
				id:$rootScope.onePage.id,
				imgs:newArr
			} 
			//console.log('$scope.oldImgsObj',$scope.oldImgsObj)
		}   */
	
	
	
/*  	$scope.previewImgItemOnePage = function(){ 
		var inputFile = document.getElementById('filePreView_adminOnePage')
		viewImg(inputFile, function(srcImg){
			  $scope.imgsObj.imgs[$scope.imgsObj.imgs.length] = srcImg 
			//console.log($scope.imgsObj, $scope.imgsObj[$scope.imgsObj.length])
			$timeout(function(){ //console.log('reset') })
		}) 
	} */
	 
	
 
 
 //----share
 
 
$scope.getShare = function(){ 
 
	 var rezultHTTP = servicesShare.getShare( )  
	 rezultHTTP.then(function(response) { 
		//console.log('response',response.data[response.data.length-1]) 
		$rootScope.postShare = response.data[response.data.length-1]
	 })
	 
	 
	 
}();
	
	
$scope.delShare = function(){	////console.log( 'delShare')
	servicesShare.del() 
};
  
$scope.saveShare = function(newPostShare){
	servicesShare.saveShare(newPostShare)
}
 
 
 /* 	$scope.previewImgShare = function(){ 
		var inputFile = document.getElementById('adminShareFile')
		viewImg(inputFile, function(srcImg){
			$scope.postShare.img = srcImg
			$timeout(function(){ //console.log('reset') })
		}) 
	} */
 
 
 
 
 
 
 
 //---suportFunctions
 
	function viewImg(inputFile, callBack){
		inputFile.addEventListener('change', function(evt){
				var file = evt.target.files;  
			  if (file[0].type.match('image*')) {
				  var f = file[0]
				  var reader = new FileReader();

				  reader.onload = (function(theFile) {
					return function(e) {	 
						 var src = e.target.result; //console.log('no __proto__',$scope.objMenu)
						 callBack(src)
					};
				  })(f);

				  reader.readAsDataURL(f);
			  
			   }
			}, false);
			
	}
	 
	 
	 var makeCollName = function(){
			var text = "";
			var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
			for( var i=0; i < 10; i++ )
				text += possible.charAt(Math.floor(Math.random() * possible.length));
			return text;
		}
		
	function addPath(itemsUnPath,path){
		for(numb in itemsUnPath){ 
			if(!itemsUnPath[numb].img)return
			if( (!itemsUnPath[numb].img.match(path)) && (!itemsUnPath[numb].img.match('data:'))  && (!itemsUnPath[numb].img.match('imgs/'))  ){
				var url =  path+ itemsUnPath[numb].img;
				itemsUnPath[numb].img = url;  
				
				 
			}
		}	 
		
		for(numb in itemsUnPath){ 
				if( itemsUnPath[numb].imgs  ){ 
						for(numbj in itemsUnPath[numb].imgs){
						  if( !itemsUnPath[numb].imgs[numbj].match(path) && !itemsUnPath[numb].imgs[numbj].match('data:')&& !itemsUnPath[numb].imgs[numbj].match('imgs/') ){
							 itemsUnPath[numb].imgs[numbj] = path +  itemsUnPath[numb].imgs[numbj];
							}  
						}					
					 
				 }	
		} ////console.log('itemsUnPath',itemsUnPath,'&&(!itemsUnPath[0].imgs.match(path))'  )
		return itemsUnPath;
	}

	/* $('#map').click(function(){
		$('#mapContainer').css({'height':'auto', 'transition':'1s'})
	}) */
	
	 function setInt(rezult){
				for(var i = 0; i<rezult.length; i++){
					rezult[i].top = parseInt(rezult[i].top)
					rezult[i].size = parseInt(rezult[i].size)
					rezult[i].left = parseInt(rezult[i].left) 
				}  
				return rezult;
			}
	 
	
	
} );

 

  
	 
 
 

 

  	
 

 
 
 

 

