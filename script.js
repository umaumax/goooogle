$(window).load(function(){
	$('#hdtb-msb-vis').append(''+
		'<div class="hdtb-mitem hdtb-imb">'+
		'<a class="q qs" href="'+location.href+'&lr=lang_ja">日本語のみ</a>'+
	'</div>');
$('#hdtb-msb-vis').append(''+
	'<div class="hdtb-mitem hdtb-imb">'+
	'<a class="q qs" href="'+location.href+'&lr=lang_en">Only English</a>'+
'</div>');
	$('#hdtb-msb-vis').append(''+
		'<div class="hdtb-mitem hdtb-imb">'+
		'<a class="q qs" href="'+location.href+'&tbs=qdr:y">1年以内</a>'+
	'</div>');
});
