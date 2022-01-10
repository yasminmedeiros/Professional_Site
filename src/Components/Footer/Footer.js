import React from 'react'

function Footer() {
    return (
        <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          backgroundColor: '#f1f1f1',
        }}
      >
       
        <div style={{
          margin:'2% 2%',
          backgroundColor: '#c5c5c5',
          width:'90%',
          height:'auto',
        }}>
          <div style={{
            margin: '0px 0px',
            border:"solid 20px #f1f1f1",
          }}>
            <div style={{
              padding: '0px 0px',
              margin:'0px 0px 0px 0px',
              backgroundColor:'#f1f1f1',              
              border:"solid 1px black"
            }}>
                <h1 style={{
                    backgroundColor:"#f1f1f1"
                }}>Contato</h1>
                <h2>Yasmin Kely Lucena de Medeiros</h2>
                <h2>Telefone: (84) 99964-9841</h2>
                <h2>Email: yasmin.medeirosapp@gmail.com</h2>

                <div style={{
                    marginTop:'5%',
                    marginBottom:'2%'
                }}>
                    <a href="https://www.linkedin.com/in/yasmin-medeiros-9208bb1b0/"><img src="https://img.icons8.com/ios-filled/50/000000/linkedin-circled--v4.png" alt="Index"/></a>
                    <a href="https://github.com/yasminmedeiros"><img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="Index"/></a>
                    <a href= "mailto:yasmin.medeirosapp@gmail.com"><img src="https://img.icons8.com/material-rounded/50/000000/google-plus.png" alt="Index"/></a>
                </div>
            </div>
            
          </div>
          
        </div>
     </div>
    )
}

export default Footer
