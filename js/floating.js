$(function(){
	// добавляем плавающий элемент в наш список
	$("<div class='float'></div>").appendTo('.floating');
	// инициализируем его стили базовые
	$('.float').css({
		'position':'absolute',
		'z-index':'-1',
		'-webkit-transition': 'all 0.3s ease',
		'-moz-transition': 'all 0.3s ease',
		'transition': 'all 0.3s ease',
		'display':'none'
	});
	// инициализируем базовые стили для нашего контейнера для поплавка
	$('.floating').css('position','relative');
	// показываем поплавок при заходен на элемент, убираем при выходе
	$('.floating').on("mouseenter",function(){
		$('.float',this).css('display','block');
	}).on("mouseleave",function(){
		$('.float',this).css('display','none');
	})
	// обрабатываем поплавок при наведении на каждый элемент
	$('.floating li').on("mouseenter",function(){
		// забираем у элемента его ширину высоту и отступы внутрениие
		var width = $(this).width();
		var height = $(this).height();
		var padding_left = parseInt($(this).css('padding-left'));
		var padding_right = parseInt($(this).css('padding-right'));
		var padding_top = parseInt($(this).css('padding-top'));
		var padding_bottom = parseInt($(this).css('padding-bottom'));
		// эмулируем размеры 
		var ww = width + padding_left + padding_right;
		var hh = height + padding_top + padding_bottom;
		// задаем новые размеры и позицию для нашего поплавка - анимаию делает css
		$('.float').css({
			'width' : ww, 
			'height' : hh,
			'top': $(this).position().top,
			'left': $(this).position().left
		});
	});
})