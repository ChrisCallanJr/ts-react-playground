import * as React from 'react'
import { css } from 'emotion'

const headerStyle = css`
  color: #6a706e;
  background-color: #89b6a5;
  height: 100vh;
  width: 100%;
`

class Header extends React.Component<{}, {}>{
  render() {
    return(
      <div className={ headerStyle }>
        <h1>Test</h1>
      </div>
    )
  }
}

export default Header

