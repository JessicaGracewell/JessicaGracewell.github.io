var posts=["2023/04/26/HelloTalk/","2023/04/26/C语言学习路线/","2023/04/25/IIS安装/","2023/04/26/我的2022年度总结/","2023/04/25/Markdown/","2023/04/26/我的大学生活/","2023/04/26/我的生活/","2023/04/26/梨花开了，春天来了/","2023/04/26/我的美食之旅/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};