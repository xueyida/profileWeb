## 预览

[项目预览](http://47.103.206.38:8080/)

## 启动项目

 - `yarn start`


 - `yarn test`


 - `yarn build`


 - `yarn eject`生成配置文件


## Server
  
  - Mongodb

    - 安装、启动等
    
    - 给mongodb做一个服务

    - 给服务自启动

        systemctl enable nginx
        systemctl disable nginx

        启动时，配置文件添加fork=true，为后台启动
  
  - 后端服务 

    - 做一个后台服务

        - nohup
            yum provides */nohup
            nohup npm start &

        - pm2
    
    - 后台服务的自启动


## 注册服务实例    

## Reference

[Node+socket.io](https://blog.csdn.net/lizhipeng123321/article/details/79480835)

[参考弹幕代码](https://github.com/beautifulBoys/Bullet-Screen)

[自定义服务](https://www.jianshu.com/p/61582f4beff2)