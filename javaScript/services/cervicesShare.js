regApp.factory('servicesShare', function( ){
   return{
		post: { 
			name: 'Название акции  ',
			img: "share.jpg", 
			describe:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, nobis aliquam facilis aliquid nostrum explicabo maiores qui hic minus repudiandae veritatis delectus incidunt. Veritatis, labore ad cum quia quasi officia.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, nobis aliquam facilis aliquid nostrum explicabo maiores qui hic minus repudiandae veritatis delectus incidunt. Veritatis, labore ad cum quia quasi officia.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, nobis aliquam facilis aliquid nostrum explicabo maiores qui hic minus repudiandae veritatis delectus incidunt. Veritatis, labore ad cum quia quasi officia.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, nobis aliquam facilis aliquid nostrum explicabo maiores qui hic minus repudiandae veritatis delectus incidunt. Veritatis, labore ad cum quia quasi officia.',
			date: (new Date()).toLocaleString()
		} ,
		
		 
		 
		
		save: function(modifyItem){ //console.log('save',modifyItem) 
			this.post = Object.create(modifyItem)
			this.post.date = (new Date()).toLocaleString()
			
		},
		
		del: function(){console.log(this.post) 
			this.post.name = ' ';
			this.post.img = ' ';
			this.post.describe = ' ';
			this.post.date = ' ';
		}
		
    };
})