## 预览

[项目预览](http://47.103.206.38:8080/)

## 启动项目

 - `yarn start`


 - `yarn test`


 - `yarn build`


 - `yarn eject`生成配置文件


## Server
  
  - Mongodb

      ### 安装、启动等

        
      > 下载 `curl -O https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-3.0.6.tgz `

      
      > 解压 `tar -zxvf mongodb-linux-x86_64-3.0.6.tgz`

      > MongoDB bin目录下的文件添加到path路径中 `export PATH=<mongodb-install-directory>/bin:$PATH`,MongoDB 的安装路径为
      `mongodb-install-directory`；

      > 运行`./mongod`

      > 后台管理数据库 `./mongo`

    
    ### 给mongodb做systemctl自定义服务
        
    > Type=forking后台启动服务

    ```sh

      [Unit]
      Description=mongodb
      After=network.target remote-fs.target nss-lookup.target
      [Service]
      Type=forking
      ExecStart=/home/mongodb-linux-x86_64-rhel62-3.2.10/bin/mongod --config  /home/mongodb-linux-x86_64-rhel62-3.2.10/mongodb.conf

      ExecReload=/bin/kill -s HUP $MAINPID

      ExecStop=/home/mongodb-linux-x86_64-rhel62-3.2.10/bin/mongod --shutdown --config  /home/mongodb-linux-x86_64-rhel62-3.2/mongodb.conf

      PrivateTmp=true

      
      [Install]

      WantedBy=multi-user.target

    ```


    ### 给服务自启动
    
    ```sh
      systemctl enable mongodb.service
    ```

    ### 通过navcat for mongodb连接

    > 这里使用的是密码启动，无密码启动需要在数据库config里进行配置

    - 创建用户

    ```sh
      use admin
      db.createUser(
        {
          user: "adminUserName",
          pwd: "userPassword",
          roles:
          [
            {
              roles: "userAdminAnyDatabase",
              db: "admin"
            }
          ]
        }
      )
    ```

    - 登陆mongo客户端

      ```sh
        
      ```
    - 

  
  - 后端服务 

    > 使用nohup给node做后端服务

      ```sh
        yum provides */nohup
        nohup npm start &
      ```
            

    > pm2
    
  
  
      

## 注册服务实例    

## Reference

[Node+socket.io](https://blog.csdn.net/lizhipeng123321/article/details/79480835)

[参考弹幕代码](https://github.com/beautifulBoys/Bullet-Screen)

[自定义服务](https://www.jianshu.com/p/61582f4beff2)