regApp.factory('servicesShare', function(getData, $http ){
   return{
	/* 	post: { 
			name: 'Название акции  ',
			img: "share.jpg", 
			describe:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, nobis aliquam facilis aliquid nostrum explicabo maiores qui hic minus repudiandae veritatis delectus incidunt. Veritatis, labore ad cum quia quasi officia.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, nobis aliquam facilis aliquid nostrum explicabo maiores qui hic minus repudiandae veritatis delectus incidunt. Veritatis, labore ad cum quia quasi officia.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, nobis aliquam facilis aliquid nostrum explicabo maiores qui hic minus repudiandae veritatis delectus incidunt. Veritatis, labore ad cum quia quasi officia.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, nobis aliquam facilis aliquid nostrum explicabo maiores qui hic minus repudiandae veritatis delectus incidunt. Veritatis, labore ad cum quia quasi officia.',
			date: (new Date()).toLocaleString()
		} , */
		
		getShare: function(){  //console.log('/getShare') 
			return $http.post('/getShare',{},{transformRequest: angular.identity, headers:{'Content-Type':undefined} }) 
		},
		 
		 
		
		saveShare: function(newItem){ //console.log('save',modifyItem) 
			newItem.date = (new Date()).toLocaleString()
			var data = getData(newItem)
			
			$http.post('/saveShare',data,{transformRequest: angular.identity, headers:{'Content-Type':undefined} })
			.then(function(response) {  })  
		},
		
		del: function(){console.log(this.post) 
			
			var data = getData(  
				{
					name : ' ',
					img : ' ',
					describe : ' ',
					date : ' ',
				}
			)
			
			$http.post('/saveShare',data,{transformRequest: angular.identity, headers:{'Content-Type':undefined} })
			.then(function(response) {  })  
		}
		
    };
})