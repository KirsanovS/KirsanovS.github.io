regApp.factory('serviceMenu', function( ){
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
		
		 
		
		addMenu: function(objMenu,collName){
			 
			 this.items[this.items.length] = {
				id: this.items.length+1,
				name: objMenu.name,
				color: objMenu.color,
				roundColor: objMenu.roundColor,
				textColor: objMenu.textColor,
				img:objMenu.img,
				top: objMenu.top,
				left: objMenu.left,
				size: objMenu.size,
				collName: collName 
			 } 
			 
			 
			/* var newObj = Object.create(objMenu)
			newObj.id = this.items.length+1;
			this.items[this.items.length] = newObj;
			console.log('qqq',this.items.length,newObj) */
	/* 			 
				console.log('qqq',this.items.length,newObj)
			this.items[this.items.length] = newObj  */
			 
			 
		},
		
		saveModify: function(modifyItem){ 
			 this.items[modifyItem.id-1] = modifyItem 
		},
		
		del: function(menuItem){
			for(var i=0; i< this.items.length; i++){
				if(this.items[i].id == menuItem.id)
					this.items.splice(i,1);
			}
		}
		
    };
})