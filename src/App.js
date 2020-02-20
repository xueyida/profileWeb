import React from 'react';
import { Result } from 'antd';

class App extends React.Component{
  render() {
    
    return(
      <div>
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
        />
      </div>
    )
  }
}

export default App;
