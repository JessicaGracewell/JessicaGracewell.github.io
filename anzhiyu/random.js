var posts=["2023/07/17/C语言学习路线/","2023/04/26/HelloTalk/","2023/07/17/IIS安装/","2023/07/17/Markdown/","2023/04/26/夕阳/","2023/04/26/学习Linux路线/","2023/04/26/学习服务器路线/","2023/04/26/我的2022年度总结/","2023/07/17/我的大学生活/","2023/04/26/我的生活/","2023/04/26/我的美食之旅/","2023/04/26/梨花开了，春天来了/","2023/07/17/部署Blog到Ubuntu/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};