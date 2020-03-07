$(document).ready(function(){
	$('#lunbo').carouFredSel({
		circular:true,
		infinate:false,
		responsive:true,
		scroll:{
			item:1,
			fx:"fade"
		},
		pagination:{
			container:"#t_navigation",
			anchorBuilder:function(nr){
				return '<a href="#'+nr+'"></a>';
			}
		}
	});
});