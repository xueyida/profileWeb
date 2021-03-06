import React from 'react';
import { Input, Tabs, Menu, Button } from 'antd';
import io from 'socket.io-client';
import { Stage, Layer } from 'react-konva';
import Konva from 'konva';
// import {IFrame} from 'konva/types/types';
import { GithubOutlined, GoogleOutlined, ZhihuOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
import './App.css';
import { throttle } from 'lodash';
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
  // eslint-disable-next-line no-console
  console.log(key);
}

interface BulleListProps {
  content: string,
  currentTime: any,
}

const httpServer = io.connect('http://47.103.206.38:3001'); // 后台IP地址及端口号 （自己电脑的ip）


const { Search } = Input;

function App() {
  const refvideo = React.useRef<HTMLVideoElement>(null);

  const [bulleList, setBullList] = React.useState<Array<BulleListProps>>([
    {
      content: '',
      currentTime: '', 
    },
  ]);
  const [layerNode, setLayerNode] = React.useState<any>();
  const [freezeList, setFreezeList] = React.useState<Array<BulleListProps>>([
    {
      content: '',
      currentTime: '', 
    },
  ]);

  React.useEffect(() => {
    let bulle:Array<any>;

    httpServer.emit('login');
    httpServer.on('loginSuccess', (list:any) => {
      if (list) {
        bulle = list;
        setBullList(list);
        setFreezeList(list);
      }
    });

    httpServer.on('messageSuccess', (obj:any) => { // 自己的信息发送成功。
      bulle.push(obj);
      setBullList([...bulle]);
    });
  }, []);

  
  const sendBulleFn = React.useCallback(async (v) => {
    if (layerNode) {
      const y = Math.floor(300 * Math.random());

      const blueRect = new Konva.Label({
        x: 700,
        y,
      });
      // blueRect.
      const tag = new Konva.Tag({
        fill: 'rgba(0, 0, 0, 0.26)',
        cornerRadius: 5,
      });

      const text = new Konva.Text({
        text: v,
        fontSize: 24,
        padding: 5,
        fill: '#fff',
      });

      blueRect.add(tag);
      blueRect.add(text);


      layerNode.add(blueRect); 
      await blueRect.to({
        duration: 4,
        x: -500,
      });
      setTimeout(() => {
        blueRect.destroy();
      }, 3500);
    }
  }, [layerNode]);


  React.useEffect(() => {
    let innerList = freezeList;

    if (refvideo.current) {
      refvideo.current.addEventListener('timeupdate', throttle(() => {
        if (refvideo.current) {
          const { currentTime } = refvideo.current;

          innerList.filter((item) => {
            return item.currentTime < currentTime;
          })
            .forEach((item, index) => {
              setTimeout(() => {
                sendBulleFn(item.content);
              }, 100 * index);
            });

          innerList = innerList.filter((item) => {
            return item.currentTime > currentTime;
          });
        }
      }, 1000));
    }
  }, [refvideo, freezeList, sendBulleFn]);

  



  const sendBulle = (v:string) => {
    let currentTime = '0';

    if (refvideo.current) {
      currentTime = refvideo.current.currentTime.toFixed(2);
    }

    const date = new Date();

    const sendTime = {
      M: (date.getMonth() + 1).toString().length === 1 ? `0${ (date.getMonth() + 1).toString()}` : (date.getMonth() + 1).toString(),
      D: date.getDay().toString().length === 1 ? `0${ date.getDay().toString()}` : date.getDay().toString(),
      hh: date.getHours().toString().length === 1 ? `0${ date.getHours().toString()}` : date.getHours().toString(),
      mm: date.getMinutes().toString().length === 1 ? `0${ date.getMinutes().toString()}` : date.getMinutes().toString(),
      ss: date.getSeconds().toString().length === 1 ? `0${ date.getSeconds().toString()}` : date.getSeconds().toString(),
    };
    
    const a = {
      content: v,
      sendTime,
      currentTime,
    };


    sendBulleFn(v);
    httpServer.emit('message', a);
  };

  
  return (
    <div className="App">
      <div className="App-header">
        <div className="logo"/>
        <Menu
            mode="horizontal"
            theme="dark"
          >
            <Menu.Item key="1">
              <a href="#home">Home</a>
            </Menu.Item>
            <Menu.Item key="2">
              <a href="#Demo">Demo</a>
            </Menu.Item>
            <Menu.Item key="3">
              <a href="#About">About</a>
            </Menu.Item>
        </Menu>
      </div>
      <div className="App-content">
        <div className="home" id="Home">
          <div className="homeInner">
            <div className="name">
              <span className="last">Front-End Engineer</span>
              <span className="first">& XUE YIDA</span>
            </div>
            {/* <div className="occ">Front-End Engineer</div> */}
          </div>
        </div>
        <div className="App-content-description">
          <div className="main" id="Demo">
            <div className="videoWrap">
              <video
                src={kobe}
                className="video"
                poster={cover}
                controls
                muted
                ref={refvideo}
              />
              <div style={{
                position: 'absolute',
                width: '100%',
                height: '75%',
                top: 0,
                left: 0, 
              }}
              >
                <Stage
                  width={700}
                  height={300}
                >
                  <Layer 
                    ref={(node) => {
                      setLayerNode(node);
                    }}
                  />
                </Stage>
              </div>
            </div>
          </div>
          <div className="dmWrap">
            <div className="dmContent">
              <Tabs
                defaultActiveKey="1"
                onChange={callback}
              >
                <TabPane
                  tab="弹幕列表"
                  key="1"
                >
                  <div className="itemWrap">
                    {
                      bulleList.map((item) => {
                        return (
                          <div>
                            {item.content}
                          </div>
                        );
                      })
                    }
                  </div>
                </TabPane>
               
              </Tabs>
            </div>
            <div className="dmFooter">
              <Search
                placeholder="input search text"
                onSearch={(value) => sendBulle(value)}
                style={{ width: '100%' }}
                enterButton="发送弹幕"
              />
            </div>
          </div>
        </div>
      </div>
      <footer className="App-footer" id="About">
        <div className="App-footer-item">
          <div className="item-header">Introduction</div>
          <div className="item-content">
            <a target="_blank" href="https://xueyida.github.io/">Project Repository</a>
          </div>
        </div>
        <div className="App-footer-item App-footer-item-about">
          <div className="item-header">About</div>
          <div className="item-content">
            <a target="_blank" href="https://xueyida.github.io/">Blog</a>
            <a target="_blank" href="https://github.com/xueyida">Github</a>
            <a target="_blank" href="https://github.com/xueyida/Notea">NoteBook</a>
          </div>
        </div>
        <div className="App-footer-item">
          <div className="item-header">Todo</div>
          <div className="item-content">
            <span>弹幕优化</span>
            <span>新的demo</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
