import React, {useState, useEffect} from 'react'
import { size } from 'lodash'
import {Modal, Button} from "react-bootstrap"
import useAuth from "../../../hooks/useAuth"
import {getBlogId} from "../../../api/blog"



export default function DetalleModal(props) {
        const { onHide, id} = props
    return (
      <Modal className="basic-modal"    
    
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header  className="header" closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
           <span>Inicia sesión</span>   
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       <Info onHide={onHide}  id={id}/>
      </Modal.Body>
    </Modal>
    )
}


function Info({id}) {


  const [blog, SetBlog] = useState(null)
  const {logout} = useAuth();


  useEffect(() => {
    (async () => {
            const response = await getBlogId(id ,logout)
         
           
                SetBlog(response)
            
    })()
  }, [])
  console.log(blog)


  return (

    
      <>
      
      {!blog && <h2>Buscando Blog ...</h2>}
        {blog && size(blog) === 0 && (
               <div><h3>No se ha encontrado ningun Blog...</h3></div>
           )}
           {size(blog) > 0 && <>
                    <div className="header-game__title">
              <h5>{blog.title} </h5>
                    
              </div>
              <div className="header-game__delivery">

                  <p> {blog.body}</p>
              </div>
           
           </>}


      
  </>
  )
  
}

 