!(function() {
  var oldLoadAp = window.onload;
  window.onload = function () {
    oldLoadAp && oldLoadAp();

    new APlayer({
      container: document.getElementById('aplayer'),
      fixed: true,
      autoplay: true,
      loop: 'all',
      order: 'random',
      theme: '#b7daff',
      preload: 'none',
      audio: [
        {
          name: '直到世界尽头', // 音频名称
          artist: '陈楚生', // 音频艺术家
          url: 'https://music.163.com/song/media/outer/url?id=2163286082.mp3', // 音频链接
          cover: 'https://img2.baidu.com/it/u=2866470092,363262258&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500' // 音频封面
        },
        {
          name: '山川是我', // 音频名称
          artist: '海洋bor', // 音频艺术家
          url: 'https://music.163.com/song/media/outer/url?id=2103367323.mp3', // 音频链接
          cover: 'http://p2.music.126.net/HyctpLaMbmcaZ8fAsnldNw==/109951169098605422.jpg?param=130y130' // 音频封面
        }


      ]
    });
  }
})();
