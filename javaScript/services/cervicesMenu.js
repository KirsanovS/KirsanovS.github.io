regApp.factory('serviceMenu', function( getData,$http,$q,$timeout  ){
   return{
		items:[{
			id:1,
			name: 'Постельное белье',
			roundColor: '#d6ff00',
			textColor: '#f55fe1',
			img: "slip.jpg",
			top: 20,
			left: 0,
			size: 100,
			collName:'R1TUVWX'
		},{
			id:2,
			name: 'Детские матрацы',
			roundColor: '#ff007f',
			textColor: '#00ff80',
			img: 'matr.jpg',
			top: 0,
			left: 0,
			size: 150,
			collName: 'RSTU6WX'
		},{
			id:3,
			name: 'Комоды',
			roundColor: '#00ff80',
			textColor: '#6fffe1',
			img: 'komod.png',
			top: 0,
			left: 0,
			size: 100,
			collName: 'R5TUVWX'
		},{
			id:4,
			name: 'Кроватки',
			roundColor: '#fd00ff',
			textColor: '#6f1fe1',
			img: 'krovat.png',
			top: 0,
			left: 0,
			size: 100,
			collName: 'RSTUV7X'
		},{
			id:5,
			name: 'Муфты для рук',
			roundColor: '#f98c00',
			textColor: '#f25fe1',
			img: 'mufta.jpg',
			top: 0,
			left: 0,
			size: 100,
			collName: 'RSTU2WX'
		},{
			id:6,
			name: 'Стульчики для кормления',
			roundColor: '#44ffef',
			textColor: '#44c1ff',
			img:'stul.jpg',
			top: 0,
			left: 0,
			size: 100,
			collName: 'RSTUVWX'
		}],
		
		getMenu: function( ){ 
			return $http.post('/getMenu',{},{transformRequest: angular.identity, headers:{'Content-Type':undefined} }) 
		},
		
		addMenu: function(objMenu,collName){ 
			 var data = getData({ 
				name: objMenu.name,
				color: objMenu.color,
				roundColor: objMenu.roundColor,
				textColor: objMenu.textColor,
				img:objMenu.img,
				top: parseInt(objMenu.top),
				left: objMenu.left,
				size: objMenu.size,
				collName: collName 
			 }) 
			 
			 $http.post('/addMenu',data,{transformRequest: angular.identity, headers:{'Content-Type':undefined} })
			.then(function(response) { console.log('response',response)  }) 
		 
		},
		
		saveModify: function(modifyItem){ 
			 var data = getData(modifyItem) //console.log(modifyItem)
			 
			 $http.post('/saveModifyMenu',data,{transformRequest: angular.identity, headers:{'Content-Type':undefined} })
			.then(function(response) {   })  
		},
		
		del: function(menuItem){	 /*  console.log('menuItem--',menuItem)   */
			var data = getData(menuItem ); 
			$http.post('/delMenu', data,{transformRequest: angular.identity, headers:{'Content-Type':undefined} })
			.then(function(response) { console.log('	delllll'),   $timeout(function(){},0) }) 
			 
		}
		
    };
})