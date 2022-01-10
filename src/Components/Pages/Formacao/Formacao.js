import React from 'react'

function Formacao() {
    return (
        <div style={{backgroundColor:'#c5c5c5'}}>
            <div
            style={style2}
        >
                <div style={style3}>
                    <div style={style4}>
                        <h1 style={style5}>
                        Lorem Ipsum is
                        </h1>
                        
                    </div>
                </div>

                <div style={style3}>
                    <div style={style4}>
                        <h1 style={style5}>
                        Lorem Ipsum is
                        </h1>
                        
                    </div>
                </div>

                <div style={style3}>
                    <div style={style4}>
                        <h1 style={style5}>
                        Lorem Ipsum is
                        </h1>
                        
                    </div>
                </div>
            </div>
        </div>                
    )
}

const style2 = {
    padding:'5% 5%',    
    margin:'0px 0px 0px 0px',
    height:'auto',
    boxSizing: 'border-box',
    display: 'block',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    backgroundColor: '#c5c5c5'
    
}
const style3 ={
    margin:'5% 5%',
    backgroundColor: '#c5c5c5',
    border:"solid 2px black",
    width:'90%',
    height:'auto',
    }
const style4={
    margin: '0px 0px',
    border:"solid 40px #f1f1f1",
}
const style5 ={
    padding: '0px 0px',
    margin:'0px 0px 0px 0px',
    backgroundColor:'#f1f1f1',              
    
    }
export default Formacao
