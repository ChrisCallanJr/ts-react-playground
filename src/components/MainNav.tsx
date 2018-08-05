import * as React from 'react'
import { css } from 'emotion'

const navStyle = css`
  color: #FFF;
  background-color: #424242;
  height: 150px;
  width: 150px;
`

class MainNav extends React.Component<{}, {}>{
  render() {
    return(
      <div className={ navStyle }>
        <h1>Test</h1>
      </div>
    )
  }
}

export default MainNav
