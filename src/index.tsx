import * as React from 'react'
import * as ReactDOM from 'react-dom'
declare let module: any

import Frame from './Frame'

ReactDOM.render(
  <Frame />,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
