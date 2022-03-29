import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';

render();
function render(){
    ReactDOM.render(
          <App />,
        document.querySelector('.root')
      );
}

export default render;