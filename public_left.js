$('.sidebar').append('<ul class="menu">'+
		'<li class="submenu">'+
		'<a href="userInfo.html">'+
		'<div>'+
		'<i class="menu-icon fa fa-th-large"></i>'+
		'<span class="menu-title">userInfo</span>'+
		'</div>'+
		'</a>'+
		'</li>'+
		'<li class="submenu"  id="list1">'+
		'<a href="login2.html">'+
		'<div>'+
		'<i class="menu-icon fa fa-desktop"></i>'+
		'<span class="menu-title">exit</span>'+
		'</div>'+
		'</a>'+
		'</li>'+
		'</ul>')
	setTimeout(function(){
		var role=JSON.parse(window.localStorage.nowinfor)["role"]

		if (role=='manager') {
			
			$('#list1').before('<li class="submenu"><a href="table.html?'+
				'show='+
				'RecipeName、recipeIntroduction、recipePicture'+
				'&add='+
				'RecipeName、recipeIntroduction、recipePicture'+
				'&fujian='+
				'recipePicture'+
				'&fuwenben='+
				'recipeIntroduction'+
				'&name='+
				'recipeManagement'+
				'">\
				<div>\
				<i class="menu-icon fa fa-th-large"></i>\
				<span class="menu-title">recipeManagement</span>\
				</div>\
				</a>\
				</li>')
			$('#list1').before('<li class="submenu"><a href="table.html?'+
				'show='+
				'Reviewer、commentTime、commentContent、RecipeName、recipeIntroduction、recipePicture'+
				'&add='+
				'Reviewer、commentTime、commentContent、RecipeName、recipeIntroduction、recipePicture'+
				'&fujian='+
				'recipePicture'+
				'&fuwenben='+
				'recipeIntroduction'+
				'&name='+
				'CommentManagement'+
				'">\
				<div>\
				<i class="menu-icon fa fa-th-large"></i>\
				<span class="menu-title">CommentManagement</span>\
				</div>\
				</a>\
				</li>')
			$('#list1').before('<li class="submenu"><a href="table.html?'+
				'show='+
				'Collector、collectionTime、RecipeName、recipeIntroduction、recipePicture'+
				'&add='+
				'Collector、collectionTime、RecipeName、recipeIntroduction、recipePicture'+
				'&fujian='+
				'recipePicture'+
				'&fuwenben='+
				'recipeIntroduction'+
				'&name='+
				'CollectionManagement'+
				'">\
				<div>\
				<i class="menu-icon fa fa-th-large"></i>\
				<span class="menu-title">CollectionManagement</span>\
				</div>\
				</a>\
				</li>')
			$('#list1').before('<li class="submenu"><a href="kong.html?'+
				'show='+
				'RecipeName、recipeIntroduction、recipePicture'+
				'&add='+
				'RecipeName、recipeIntroduction、recipePicture'+
				'&fujian='+
				'recipePicture'+
				'&fuwenben='+
				'recipeIntroduction'+
				'&name='+
				'recipe'+
				'">\
				<div>\
				<i class="menu-icon fa fa-th-large"></i>\
				<span class="menu-title">recipe</span>\
				</div>\
				</a>\
				</li>')
		}else{
	$('#list1').before('<li class="submenu"><a href="table.html?'+
				'show='+
				'Reviewer、commentTime、commentContent、recipeName、recipeIntroduction、recipePicture'+
				'&add='+
				'Reviewer、commentTime、commentContent、recipeName、recipeIntroduction、recipePicture'+
				'&fujian='+
				'recipePicture'+
				'&fuwenben='+
				'recipeIntroduction'+
				'&name='+
				'CommentManagement'+
				'">\
				<div>\
				<i class="menu-icon fa fa-th-large"></i>\
				<span class="menu-title">CommentManagement</span>\
				</div>\
				</a>\
				</li>')
			$('#list1').before('<li class="submenu"><a href="table.html?'+
				'show='+
				'Collector、collectionTime、RecipeName、recipeIntroduction、recipePicture'+
				'&add='+
				'Collector、collectionTime、RecipeName、recipeIntroduction、recipePicture'+
				'&fujian='+
				'recipePicture'+
				'&fuwenben='+
				'recipeIntroduction'+
				'&name='+
				'CollectionManagement'+
				'">\
				<div>\
				<i class="menu-icon fa fa-th-large"></i>\
				<span class="menu-title">CollectionManagement</span>\
				</div>\
				</a>\
				</li>')
			$('#list1').before('<li class="submenu"><a href="kong.html?'+
				'show='+
				'RecipeName、recipeIntroduction、recipePicture'+
				'&add='+
				'RecipeName、recipeIntroduction、recipePicture'+
				'&fujian='+
				'recipePicture'+
				'&fuwenben='+
				'recipeIntroduction'+
				'&name='+
				'recipe'+
				'">\
				<div>\
				<i class="menu-icon fa fa-th-large"></i>\
				<span class="menu-title">recipe</span>\
				</div>\
				</a>\
				</li>')
		}
	},500)
	function loadIndex(index){
		$('.submenu').each(function(i,o){
			if ($(o).find('.menu-title').text()==index) {
				$(o).find('a').attr('class','active')

			}else{
				$(o).find('a').removeClass('active')

			}

		})
	}