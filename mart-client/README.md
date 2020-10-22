## 校园超市 - 前端
## 技术选型
vue+vue-router+vuex+vant
## 安装
  定位项目路径，启动服务器
  ```cmd
    cnpm install
    npm run serve
  ```
  浏览器打开：http://localhost:8080/

## 前端常见的布局模式
  - 流式布局|流体式布局
  - 自适应布局
  - 弹性盒布局
  - 响应式布局
  - 双栏布局
  - 三栏布局
  - 双飞翼|圣杯布局

### 移动端适配基础
  - html结构入手
  - 文字大小
  - 图片 
#### 自适应图片
#### 文字大小及屏幕比例适配
#### 常见的单位及换算
```
  pt px rem em vw换算
```
#### em & rem的区别
em是相对父级元素适应
rem是相对html 根节点元素适应
```html
  <div style="font-size:12px">
    <p style="font-size:1em"></p>
    <p style="font-size:1rem"></p>
  </div>
```
### vue项目移动端适配
 - vue-cli/@3.x版本
 - postcss-pxtorem
 - amfe-flexible

安装插件
 ```json
  {
    "amfe-flexible": "^2.2.1",
    "postcss": "^8.1.0",
    "postcss-aspect-ratio-mini": "^1.1.0",
    "postcss-cssnext": "^3.1.0",
    "postcss-import": "^12.0.1",
    "postcss-loader": "^4.0.2",
    "postcss-plugin-px2rem": "^0.8.1",
    "postcss-px-to-viewport": "^1.1.1",
    "postcss-px2rem": "^0.3.0",
    "postcss-pxtorem": "^5.1.1",
    "postcss-url": "^8.0.0",
    "postcss-viewport-units": "^0.1.6",
    "postcss-write-svg": "^3.0.1",
  }
 ```

项目根目录创建.vue.config.js
```js
const pxtorem = require('postcss-pxtorem');
module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          pxtorem({
            rootValue: 37.5,
            // propList: ['font', 'font-size', 'line-height', 'letter-spacing'],
            propList: ['*'],
            propList: ['*'],
            exclude: /node_modules/i
          }),
        ]
      }
    }
  }
}
···
