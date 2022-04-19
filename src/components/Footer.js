import React from 'react'

class Footer extends React.Component{


    render(){
            const {handleDecrease, handleIncrease, handleReset} = this.props
            const {state} = this.props
        // const v = this.state.number
        return(
            <div style={{fontSize:"50px", textAlign:"center"}}>
                <h2>Counter</h2>
                <span>{state.name}</span>
                <h2>{state.number}</h2>
                <p style={{color:"red", fontSize:"13px"}}>{state.message ? state.message:""}</p>
               <p> <button onClick={handleDecrease}>Decrease</button>
                <button onClick={handleReset}>Reset</button>
                <button onClick={handleIncrease}>Increase</button></p>
                
            </div>
        )
    }
}

export default Footer