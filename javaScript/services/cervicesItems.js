regApp.factory('serviceItems', function( getData, $http  ){
   return{
   
		items:{ 
		
			R1TUVWX:[{
				id:1,
				name: 'ФА-М АЛЕСЯ БЕЛЫЙ/ЛАЙМ',
				img: '/imgs/items/'+'bed_42_2_bel-240x240.jpg',
				imgs:['bed_40_3_slon-240x240.jpg','bed_venga_klen-240x240.jpg','bed_Laim-240x240.jpg'],
				describe: 'Text about this bag',
				fullDescribe: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, nisi, mollitia, natus illo molestiae rem sed animi accusantium eos perferendis placeat officia laborum minus cumque distinctio sint ex error qui! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, nisi, mollitia, natus illo molestiae rem sed animi accusantium eos perferendis placeat officia laborum minus cumque distinctio sint ex error qui!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, nisi, mollitia, natus illo molestiae rem sed animi accusantium eos perferendis placeat officia laborum minus cumque distinctio sint ex error qui!"
			},{
				id:2,
				name: 'ФА-М АЛЕСЯ БЕЛЫЙ',
				img: '/imgs/items/'+'bed_42_2_bel-240x240.jpg',
				imgs:['bed_42_2_bel-240x240.jpg','img_name2','img_name3'],
				describe: 'Text about this bag',
				fullDescribe: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, nisi, mollitia, natus illo molestiae rem sed animi accusantium eos perferendis placeat officia laborum minus cumque distinctio sint ex error qui! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, nisi, mollitia, natus illo molestiae rem sed animi accusantium eos perferendis placeat officia laborum minus cumque distinctio sint ex error qui!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, nisi, mollitia, natus illo molestiae rem sed animi accusantium eos perferendis placeat officia laborum minus cumque distinctio sint ex error qui!"
			},{
				id:3,
				name: 'ФА-М АЛЕСЯ БЕЛЫЙ/ГОЛУБОЙ',
				img: '/imgs/items/'+'bed_42_2_bel-240x240.jpg',
				imgs:['bed_42_2_bel-240x240.jpg','img_name2','img_name3'],
				describe: 'Text about this bag',
				fullDescribe: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, nisi, mollitia, natus illo molestiae rem sed animi accusantium eos perferendis placeat officia laborum minus cumque distinctio sint ex error qui! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, nisi, mollitia, natus illo molestiae rem sed animi accusantium eos perferendis placeat officia laborum minus cumque distinctio sint ex error qui!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, nisi, mollitia, natus illo molestiae rem sed animi accusantium eos perferendis placeat officia laborum minus cumque distinctio sint ex error qui!"
			} ,{
				id:4,
				name: 'ФА-М АЛЕСЯ БЕЛЫЙ/РОЗОВЫЙ',
				img: '/imgs/items/'+'bed_42_2_bel-240x240.jpg',
				imgs:['bed_42_2_bel-240x240.jpg','img_name2','img_name3'],
				describe: 'Text about this bag',
				fullDescribe: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, nisi, mollitia, natus illo molestiae rem sed animi accusantium eos perferendis placeat officia laborum minus cumque distinctio sint ex error qui! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, nisi, mollitia, natus illo molestiae rem sed animi accusantium eos perferendis placeat officia laborum minus cumque distinctio sint ex error qui!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, nisi, mollitia, natus illo molestiae rem sed animi accusantium eos perferendis placeat officia laborum minus cumque distinctio sint ex error qui!"
			}],
			
			RSTUV7X:[{
				id:1,
				name: 'ФА-М АЛЕСЯ БЕЛЫЙ/ЛАЙМ',
				img:  'bed_42_2_bel-240x240.jpg',
				imgs:['bed_40_3_slon-240x240.jpg','bed_venga_klen-240x240.jpg','bed_Laim-240x240.jpg'],
				describe: 'Text about this bag',
				fullDescribe: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, nisi, mollitia, natus illo molestiae rem sed animi accusantium eos perferendis placeat officia laborum minus cumque distinctio sint ex error qui! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, nisi, mollitia, natus illo molestiae rem sed animi accusantium eos perferendis placeat officia laborum minus cumque distinctio sint ex error qui!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, nisi, mollitia, natus illo molestiae rem sed animi accusantium eos perferendis placeat officia laborum minus cumque distinctio sint ex error qui!"
			},{
				id:2,
				name: 'ФА-М АЛЕСЯ БЕЛЫЙ',
				img:  'bed_42_2_bel-240x240.jpg',
				imgs:['bed_42_2_bel-240x240.jpg','img_name2','img_name3'],
				describe: 'Text about this bag',
				fullDescribe: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, nisi, mollitia, natus illo molestiae rem sed animi accusantium eos perferendis placeat officia laborum minus cumque distinctio sint ex error qui! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, nisi, mollitia, natus illo molestiae rem sed animi accusantium eos perferendis placeat officia laborum minus cumque distinctio sint ex error qui!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, nisi, mollitia, natus illo molestiae rem sed animi accusantium eos perferendis placeat officia laborum minus cumque distinctio sint ex error qui!"
			}],
		
		},
		
		 
		createNewColl: function(collName){//console.log('collName',collName) //console.log(this.items)	
			 console.log('serv collName',collName)
			 var data = getData({'collName':collName})
			$http.post('/createNewColl',data,{transformRequest: angular.identity, headers:{'Content-Type':undefined} })
			.then(function(response) {  }) 
		},
		
		addItem: function(objItem,collName){    
			var data = getData({ 
				name: objItem.name,
				img:objItem.img, 
				describe:objItem.describe,
				fullDescribe:objItem.fullDescribe ,
				collName:collName
			 })
			
			$http.post('/addItem',data,{transformRequest: angular.identity, headers:{'Content-Type':undefined} })
			.then(function(response) {  })  
		},
		
		getColl: function(collName){
			var data = getData({'collName':collName})
			return $http.post('/getColl',data,{transformRequest: angular.identity, headers:{'Content-Type':undefined} }) 
			
			/* return this.items[collName]; */ 
		},
		
		getItem: function(id,collName){  console.log('/getItem serv : id,collName', id,collName)
			var data = getData({'id':id,'collName':collName}) ; 
			return $http.post('/getItem',data,{transformRequest: angular.identity, headers:{'Content-Type':undefined} })
			 
		/* 	var data = getData({'id':id,'collName':collName}) ;	 console.log('/getItem')
			 
			$http.post('/getItem',data,{transformRequest: angular.identity, headers:{'Content-Type':undefined} })
			.then(function(response) {  }) 
			 */
			 
		},
		
		
		del: function(item,collName){
			item.imgs = ''
			item.collName = collName ; console.log( 'del item',item)
			var data = getData(item) ;	  
			 
			$http.post('/delItem',data,{transformRequest: angular.identity, headers:{'Content-Type':undefined} })
			.then(function(response) {  }) 
			
			
			
		},
		
	 
		
		saveModify: function(objItem,collName){ 
			var data = getData({ 
				_id: objItem._id,
				name: objItem.name,
				img:objItem.img, 
				describe:objItem.describe,
				fullDescribe:objItem.fullDescribe ,
				collName: objItem.collName
			 })
			
			$http.post('/modifyItem',data,{transformRequest: angular.identity, headers:{'Content-Type':undefined} })
			.then(function(response) {  })  
		},
		 
		
		
		
		
		
		
//  ----- OnePage ----
		 
		
		saveOnePage: function(fullImgsObj, imgsOld){	// console.log(fullImgsObj) 
			var data = getData( fullImgsObj) 
			data.append('imgsOld',imgsOld)
			$http.post('/saveOnePage', data,{transformRequest: angular.identity, headers:{'Content-Type':undefined} })
			.then(function(response) {  }) 
			
		 
		}
		
    };
})












