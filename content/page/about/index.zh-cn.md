---
title: 关于
menu:
    main: 
        weight: -90
        params:
            icon: user
---
  <style> html, body {
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>
  <div id="tags-wall"></div>
      <script src="/js/tags-wall.js" async=""></script>
      <script>
        const query = window.location.search.substring(1)
      .split('&').map(e => e.split('='))
      .reduce((pre, cur) => {
          pre[cur[0]] = decodeURI(cur[1])
          return pre
      }, {})
    if (query.url) {
      document.title = query.title || document.title
      fetch(query.url)
        .then(res => res.text())
        .then(text => Tags({
          style: {
            fn: Style1,
            title: query.title,
            animation: query.animation === '1',
            scale: 1,
          },
          text,
          rootDOM: document.getElementById('tags-wall')
        }))
    }
        Tags({
        style: {
          fn: Style1,
          title: 'about',
          animation: 1, // 如果是1，则开启动画，否则不开启动画
          scale: 1, // 放缩比例，即可调节标签和背景字的整体大小
          randomScoreIfNoSetting: 1 // 如果是1，则如果未设置标签大小那么随机设置一个大小；否则使用默认大小5
        },
        text: `
        infp/3
        标签2
        ...
        `, // 可以写在单独的文件中，如果写在的文件中，需要像上方那样使用fetch请求文件
        rootDOM: document.getElementById('tags-wall')
      })
    </script>
