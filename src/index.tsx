import * as React from 'react'
import * as ReactDOM from 'react-dom'
declare let module: any

import MainNav from './components/MainNav'
//import Message from './components/Message'

ReactDOM.render(
  <MainNav />,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
