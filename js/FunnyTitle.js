// �������Ц����
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/funny.ico");
        document.title = 'GeorgeBlog';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/favicon.ico");
        document.title = 'GeorgeBlog';
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});