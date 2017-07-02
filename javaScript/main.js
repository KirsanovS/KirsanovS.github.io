 

var regApp = angular.module('regApp', ["ngRoute","ngAnimate" ,'textAngular']);

 
 
 regApp.controller('main', function ($scope,$location,$rootScope, $routeParams, $templateCache,
 servicesShare ,serviceItems,serviceMenu, $http,$timeout,textAngularManager){
 
	 //--cmp
	 $scope.cmpFn = function(item){
		if( !$scope.cmpArr){ $rootScope.cmpArr = [] }
		  $rootScope.cmpArr.push(item)  
	 }
	 
	 $scope.aurorizFn = function(auroriz){
		if(auroriz.login == 1 && auroriz.password == 1){
			console.log('auroriz',auroriz)
		    $rootScope.adminFlag = 1;
		}
		 
	 }
	 
 
	
	
	$scope.objMenu ={img:'/imgs/design/no-image.png' , top: 0,left: 0,size: 100}

	$scope.Menu = function(){
		var itemsUnPath = serviceMenu.items;
		var itemsWithPath = addPath(itemsUnPath,'imgs/design/buttons/' )
		return itemsWithPath;
	}();
	 
	
	$scope.addMenu = function(objMenu){
		console.log(objMenu) 
		var newCollName = makeCollName()
		serviceItems.createNewColl(newCollName) 
		serviceMenu.addMenu(objMenu,newCollName)
	}
	 
	$scope.modifyMenu = function(menuItem){
		$scope.objMenu = Object.create(menuItem) 
		$scope.flagModifyMenu = 1
	}
	 
	$scope.delMenu = function(menuItem){	//console.log(menuItem)
		serviceMenu.del(menuItem)
	} 
	
	$scope.previewImgAdmin = function(){ //console.log('previewImgAdmin')
		$scope.flagCreateMenu = 1
		var inputFile = document.getElementById('filePreView')
		viewImg(inputFile, function(srcImg){
			$scope.objMenu.img = srcImg
			$timeout(function(){ console.log('reset') })
		})
	}
	 
	$scope.saveModifyMenu = function(menuItem){	 
		serviceMenu.saveModify(menuItem)
	}

	
	
	
	 
	$scope.objItem ={ img:'/imgs/design/no-image.png'  }
	
	$scope.getItems = function(collName){
		$scope.nowCollection = collName||'RSTUV7X';
		var itemsUnPath = serviceItems.getColl($scope.nowCollection);
		$scope.items = addPath(itemsUnPath,'/imgs/items/') 
	} ;
	$scope.getItems()
	 
	$scope.delItem = function(item){
		serviceItems.del(item,$scope.nowCollection)
	}
	
	$scope.modifyItem = function(objItem){ 		//console.log('modifyItemCreate', objItem)
		$scope.objItem = Object.create(objItem)
		$scope.flagModifyItem = 1;
	}
	
	$scope.saveModifyItem = function(objItem){	 console.log('saveModifyItem', $scope.objItem)
		serviceItems.saveModify(objItem,$scope.nowCollection)
	} 
	
	$scope.addItem = function(objItem){  
		serviceItems.addItem(objItem,$scope.nowCollection) 
	}
 
	 
	$scope.previewImgItem = function(){
		$scope.flagCreateItem = 1;	 
		var inputFile = document.getElementById('filePreView_adminItem')
		viewImg(inputFile, function(srcImg){
			$scope.objItem.img = srcImg
			$timeout(function(){ console.log('reset') })
		}) 
	}
	
	
	
	
	
	
	
	
	
	//--- from angularBags
	$scope.paternView = function(value){ 
		$scope.howIsShow = value
		var items = angular.element(document.getElementsByClassName('items'));
		//console.log($scope.howIsShow); 
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
	 
		ind = smalRecursion(ind+1); console.log('createMonitor:',ind )
		$scope.hideEl = angular.element(items[ind-1]).after($scope.monitor);	
		console.log('createMonitor ind',ind)
		 
		 
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
	 
	$scope.onePageFn = function(item){
		$rootScope.onePage = item; console.log('onePageFn',item)
		console.log('onePage2',$scope.onePage)
	}
	
	
	 $scope.delImgOnePage = function(item,img){//console.log('delImgOnePage',arguments)
		serviceItems.delImgOnePage($scope.nowCollection,item.id,img) 
	}
	
	$scope.saveOnePage = function(item,img){
		serviceItems.saveOnePage($scope.nowCollection,item ,img)
	}
 
	$scope.previewImgItemOnePage = function(){ 
		var inputFile = document.getElementById('filePreView_adminOnePage')
		viewImg(inputFile, function(srcImg){
			  $scope.imgsObj.imgs[$scope.imgsObj.imgs.length] = srcImg 
			/*console.log($scope.imgsObj, $scope.imgsObj[$scope.imgsObj.length]) */
			$timeout(function(){ console.log('reset') })
		}) 
	}
 
	$scope.createImgsObj = function(){ 
		var newArr = []
		for(var i=0; i<$rootScope.onePage.imgs.length; i++){
			newArr[newArr.length] = $rootScope.onePage.imgs[i]
		} 
		$scope.imgsObj = {
			id:$rootScope.onePage.id,
			imgs:newArr
		} 
	}
 
 
 
 
 //----share
 
	 $scope.postShare = function(){ 
			var path = 'imgs/share/';
			if( (!servicesShare.post.img.match(path)) && (!servicesShare.post.img.match('data:')) ){
				servicesShare.post.img = path+servicesShare.post.img 
			}
			return  servicesShare.post 
		}();	//console.log( $scope.postShare)
 
	
	$scope.delShare = function(){	//console.log( 'delShare')
		servicesShare.del()
		$timeout(function(){ console.log('reset') })
	};
 
	$scope.previewImgShare = function(){ 
		var inputFile = document.getElementById('adminShareFile')
		viewImg(inputFile, function(srcImg){
			$scope.postShare.img = srcImg
			$timeout(function(){ console.log('reset') })
		}) 
	}
 
	 $scope.saveShare = function(newPostShare){
		servicesShare.save(newPostShare)
	 }
 
 
 
 
 
 
 
 
 
 
 //---suportFunctions
 
	function viewImg(inputFile, callBack){
		inputFile.addEventListener('change', function(evt){
				var file = evt.target.files;  
			  if (file[0].type.match('image*')) {
				  var f = file[0]
				  var reader = new FileReader();

				  reader.onload = (function(theFile) {
					return function(e) {	 
						 var src = e.target.result; console.log('no __proto__',$scope.objMenu)
						 callBack(src)
					};
				  })(f);

				  reader.readAsDataURL(f);
			  
			   }
			}, false);
			
	}
	 
	 
	 var makeCollName = function(){
			var text = "";
			var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
			for( var i=0; i < 10; i++ )
				text += possible.charAt(Math.floor(Math.random() * possible.length));
			return text;
		}
		
	function addPath(itemsUnPath,path){
		for(numb in itemsUnPath){ 
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
		} //console.log('itemsUnPath',itemsUnPath,'&&(!itemsUnPath[0].imgs.match(path))'  )
		return itemsUnPath;
	}

	/* $('#map').click(function(){
		$('#mapContainer').css({'height':'auto', 'transition':'1s'})
	}) */
	
	$scope.$on("$routeChangeSuccess", function(){ 
       $scope.flagMap = 0; console.log('flagMap', $scope.flagMap)
	})
	 
	
	
} );

 

  
	 
 
 

 

  	
 

 
 
 

 

