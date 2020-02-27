import React from 'react';
import { Icon, Divider } from 'antd';
import './App.css';
import kobe from './images/rose.mp4';
import cover from './images/cover.png';

interface ListData {
  icon: string,
  title: string,
  isLink?: boolean
}

const data:Array<ListData> = [
  {
    icon: 'phone',
    title: '18234082909'
  },
  {
    icon: 'mail',
    title: '941820581@qq.com'
  },
  {
    icon: 'github',
    title: 'https://github.com/xueyida',
    isLink: true,
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-avatar"/>
        <div className="App-header-top">
          <div className="App-header-iconWrap">
            <Icon type="github" theme="outlined" />
            <Icon type="google" theme="outlined" />
            <Icon type="zhihu" theme="outlined" />
            {/* <Icon type="wechat" theme="outlined" /> */}
          </div>
        </div>
      </header>
      <div className="App-content">
        <div className="App-content-title">薛益达<Icon type="man" />男</div>
        <div className="App-content-subTitle">
          前端工程师
          <Divider type="vertical" />
          篮球爱好者
          <Divider type="vertical" />
          伪文艺青年
        </div>
        <div className="App-content-description">
          <video src={kobe}  className="video"  poster={cover} controls/>
        </div>
      </div>
      <footer className="App-footer">
        {
           data.map((item) => {
            return (
              <span className="App-footer-item">
                {
                  item.isLink?(
                    <a href={item.title} target="_blank">
                      <Icon type={item.icon} />
                      <span className="App-footer-item-title">{item.title}</span>
                    </a>
                  ):(
                    <>
                      <Icon type={item.icon} />
                      <span className="App-footer-item-title">{item.title}</span>
                    </>
                  )
                }
                
              </span>
            )
          })
        }
      </footer>
    </div>
  );
}

export default App;
