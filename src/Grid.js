import React from 'react'
import Circle from "./svgs/Circle";
import Cross from "./svgs/Cross";
function Grid(props) {
    const renderSvg = svg =>{
        if(svg==='cross'){
            return <Cross/>
        }else if(svg==='circle'){
            return <Circle/>
        }
        else{
            return null
        }
    }
    const divisions = props.position.map(value=>{
        return (
            <div onClick={()=>{
                props.setPositions()
            }}>
           {renderSvg(value)} 
           </div>
        )
    })
    return (
        <div className="container">
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>

            
        </div>
    )
}

export default Grid
