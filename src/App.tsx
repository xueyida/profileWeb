import React from 'react';
import { Divider, Input, Button, Tabs} from 'antd';
import io from 'socket.io-client';
import {GithubOutlined, GoogleOutlined, ZhihuOutlined, PhoneOutlined, MailOutlined} from '@ant-design/icons';
import './App.css';
import kobe from './images/rose.mp4';
import cover from './images/cover.png';

interface ListData {
  icon: any,
  title: string,
  isLink?: boolean
}

const data:Array<ListData> = [
  {
    icon: <PhoneOutlined />,
    title: '18234082909',
  },
  {
    icon: <MailOutlined />,
    title: '941820581@qq.com',
  },
  {
    icon: <GithubOutlined />,
    title: 'https://github.com/xueyida',
    isLink: true,
  },
];

const { TabPane } = Tabs;

function callback(key:string) {
  console.log(key);
}

interface BulleListProps {
  content: string,
}


const { Search } = Input;

function App() {

  const httpServer = io.connect('http://192.168.1.5:3001'); // 后台IP地址及端口号 （自己电脑的ip）

  const [bulleList, setBullList] = React.useState<Array<BulleListProps>>([{content: ''}]);
  const [inputVal, setInputVal] = React.useState<String>('');

  React.useMemo(() => {
    httpServer.emit('login');
    httpServer.on('loginSuccess', function (list:any) {
      if (list) {
        // console.log(list);
        setBullList(list);
      }
    });
  }, [httpServer])
  console.log(bulleList)

  // httpServer.on('messageSuccess', function (obj) { // 自己的信息发送成功。
  //   console.log('收到messageSuccess');
  // });

  // httpServer.on('message', function (obj) {
  //   console.log(obj);
  //   console.log('收到message:' + obj.content);
  //   // me.list.push(obj);
  //   // me.danMuAnimate(obj.content, obj.color, obj.fontSize);
  // });

  const sendBulle = (v:string) => {
    console.log(v)
    const a = {
      content: v,
    }
    httpServer.emit('message', a);
  }

  

  return (
    <div className="App">
      <header className="App-header">
        {/* <div className="App-header-avatar" /> */}
        <div className="App-header-top">
          <div className="App-header-iconWrap">
            <GithubOutlined />
            <GoogleOutlined />
            <ZhihuOutlined />
          </div>
        </div>
      </header>
      <div className="App-content">
        {/* <div className="App-content-title">
          薛益达
          <Icon type="man" />
          男
        </div>
        <div className="App-content-subTitle">
          前端工程师
          <Divider type="vertical" />
          篮球爱好者
          <Divider type="vertical" />
          伪文艺青年
        </div> */}
        <div className="App-content-description">
          <video
            src={kobe}
            className="video"
            poster={cover}
            controls
          />
          <div className="dmWrap">
            <div className="dmContent">
              <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="弹幕列表" key="1">
                  {
                    bulleList.map((item) => {
                      return (
                        <div>
                          {item.content}
                        </div>
                      )
                    })
                  }
                </TabPane>
               
              </Tabs>
            </div>
            <div className="dmFooter">
            <Search
              placeholder="input search text"
              onSearch={value => sendBulle(value)}
              style={{ width: "100%" }}
              enterButton="发送弹幕"
            />
            </div>
          </div>
        </div>
      </div>
      <footer className="App-footer">
        {
          data.map((item) => {
            return (
              <span className="App-footer-item">
                {
                  item.isLink ? (
                    <a
                      href={item.title}
                      target="_blank"
                    >
                      {/* <Icon type={item.icon} /> */}
                      {item.icon}
                      <span className="App-footer-item-title">
                        {item.title}
                      </span>
                    </a>
                  ) : (
                    <>
                      {/* <Icon type={item.icon} /> */}
                      {item.icon}
                      <span className="App-footer-item-title">
                        {item.title}
                      </span>
                    </>
                  )
                }
                
              </span>
            );
          })
        }
      </footer>
    </div>
  );
}

export default App;
