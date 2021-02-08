import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'


const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushis.map(sush => <Sushi sushi={sush} eatSushi={props.eatSushi} eatenSushis={props.eatenSushis}/>)
        }
        <MoreButton sushiCounter={props.sushiCounter}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer