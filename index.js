console.log("eazyzoom init ");
hexo.extend.tag.register('easyzoom', function(args){
  var imgSmall = args[0];
  var imgBig = args[1];
  return '<div class="easyzoom easyzoom--overlay">'+
				'<a href="' + imgBig + '">'+
					'<img src="'+ imgSmall +'" alt="" />'+
				'</a>'+
			'</div>';

}, {async: true});
console.log("eazyzoom tag registered");
hexo.extend.filter.register('inject_ready', (inject) => {
	inject.link('body_begin', { href: 'https://cdn.rawgit.com/i-like-robots/EasyZoom/master/css/easyzoom.css', rel: 'stylesheet' });
	inject.script('body_end', { src: 'https://raw.githubusercontent.com/i-like-robots/EasyZoom/master/src/easyzoom.js', rel: 'stylesheet' });
	inject.raw('body_end', '<script>var $easyzoom = $(".easyzoom").easyZoom();</script>');
});
