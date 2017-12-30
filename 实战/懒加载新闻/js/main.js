//回调函数 func JSONP
var rowH = [0,0,0];
var newList = document.querySelector('.new-list');
var load = document.querySelector('.load-more');
var page = 1;


var script = document.createElement('script');
script.src = 'https://platform.sina.com.cn/slide/album_tech?jsoncallback=func&app_key=1271687855&num=8&page=4';
document.body.appendChild(script);

window.addEventListener('scroll',function(){
	if (isVisiable()) {
		var script = document.createElement('script');
		script.src = 'https://platform.sina.com.cn/slide/album_tech?jsoncallback=func&app_key=1271687855&num=8&page='+ page;
		document.body.appendChild(script);
	}
})
function func(data){
	console.log(data.data)
	appendNews(data.data)
	page++;
}

function appendNews(newsInfo){
	newsInfo.forEach(function(news){
		var newLi = document.createElement('li');
		var innerHTML = '';
		innerHTML += '<a href="'+ news.url +'"><img src="' + news.img_url + '" alt=""></a>';
		innerHTML += '<h3 class="title">'+ news.short_name+ '</h3>';
		innerHTML += '<p class="new-content">'+ news.short_intro + '</p>';
		newLi.innerHTML = innerHTML;
		newLi.querySelector('img').addEventListener('load',function(){
			waterFall(newLi);
		})

	})
}

function waterFall (ele) {
	var idx = rowH.indexOf(Math.min.apply(this,rowH));
	ele.style.top = rowH[idx] + 'px';
	ele.style.left = 300*idx + 'px';
	newList.appendChild(ele);
	rowH[idx] += Math.floor(parseInt(getComputedStyle(ele).height)) + 10;
	newList.style.height = Math.max.apply(this,rowH) +'px';
}

function isVisiable() {
	var clientH = window.innerHeight;
	var scroll = window.scrollY;
	var offsetH = load.offsetTop;
	if (clientH +  scroll + 200>= offsetH) {
		return true ;
	} else {
		return false;
	}
}
