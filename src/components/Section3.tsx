import * as React from 'react'
import { css } from 'emotion'

const headerStyle = css`
  color: #6a706e;
  background-color: #6a706e;
  height: 100vh;
  width: 100%;
`

class Section3 extends React.Component<{}, {}>{
  render() {
    return(
      <div className={ headerStyle }>
        <h1>Test</h1>
      </div>
    )
  }
}

export default Section3
