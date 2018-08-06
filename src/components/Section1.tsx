import * as React from 'react'
import { css } from 'emotion'

const headerStyle = css`
  color: #6a706e;
  background-color: #82968c;
  height: 100vh;
  width: 100%;
`

class Section1 extends React.Component<{}, {}>{
  render() {
    return(
      <div className={ headerStyle }>
        <h1>Test</h1>
      </div>
    )
  }
}

export default Section1


