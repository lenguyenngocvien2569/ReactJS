import React ,{useState}from 'react'
import './Color.css'

function Color(props){
    let [color , setColor] = useState('black')
    
    function randomColor(){
        console.log("random")
        let colors = ['red' , 'blue' , 'yellow']
        const rdm = Math.trunc(Math.random()*3)
        return colors[rdm]
    }
    function onHandleClick(){
        console.log("click")
        const newcolor = randomColor()
        setColor(newcolor)
    }
    return (
        <div class="cha"> 
            <h1>Vien</h1>
            <div className="box1" style={{backgroundColor:color}}></div>
            <button className="btn" onClick={onHandleClick}>Click</button>
        </div>
    )
}
export default Color