## 装饰器语法

- babel 6.x  babel-cli|babel-core|....   babel-plugin-transform-decorators-legacy
- babel 7.x  @babel/core    @babel/plugin-proposal-decorators
```babelrc
  {
    "plugins": [
      ["@babel/plugin-proposal-decorators", { "legacy": true }]
    ]
  }
````
## 图片上传
前端向服务器传递一张图片，服务器将图片保存起来，返回前端可以访问的一个路径
### 前端
  - FORMDATA 文件上传的一个js对象
  - axios 与服务器进行通讯
### 后端
  - 接受前端传递过来的文件信息
    - 解析formdata
      - 流
      - files
    - 文件上传成功会缓存到服务器的缓存路径
  - 利用fs读文件、写文件将图片保存到静态资源服务器
  - egg
     - files
        - 配置config.default.js
        ```js
          {
              multipart: {
                mode: 'file',
              },
          }
          ctx.request.files
        ```