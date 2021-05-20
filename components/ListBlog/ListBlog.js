import React, {useState} from 'react'
import {map} from "lodash"
import Link from "next/link"
import useWindowSize from "../../hooks/useWindowSize"
import {breakpointUpLg, breakpointUpMd, breakpointUpSm} from "../../utils/breakpoint"
import { Container, Row, Col, Card, Button , ButtonGroup} from "react-bootstrap"
import DetalleModal from '../Modal/DetalleModal/DetalleModal'
import {DeleteBlogId} from "../../api/blog"
import {toast} from "react-toastify"
import {useRouter} from "next/router"





export default function ListBlog({blogs}) {

    const {width} = useWindowSize();
 
  

    return (

        <Container className="proyects">
        <h1>Challenges Blog</h1>
         
        <Row>
          {blogs.map((proyect, index) => (
           
            <Col key={index} xs={12} sm={4} className="proyect">
                <Info proyect={proyect}/>
            </Col>
          ))}
        </Row>
      </Container>
    
    )
}



function Info({proyect}) {

  const [modalShow, setModalShow] = useState(false);
  const router = useRouter()

  const DeleteBlogIdfunc = (id) => {
    DeleteBlogId(id)
    toast.info(` Eliminado el blog id: ${id}`)
    console.log(id)
 
  }

 
  
    return (
        <>
        <Card>
                <Card.Body>
                  <Card.Title>{proyect.title}</Card.Title>

                  <DetalleModal
                   show={modalShow}
                  onHide={() => setModalShow(false)}
                  id = {proyect.id}
                 />
                
                        <div className="actions">

                        <ButtonGroup aria-label="Basic example"  className="mb-2">

                          
                            <Button variant="secondary" className="outline" onClick={() => setModalShow(true)}>Detalles</Button>
                            <Button variant="secondary" onClick={() => router.push(`/editar?query=${proyect.id}`)}>Editar</Button>
                            
                            <Button variant="danger" onClick={() => DeleteBlogIdfunc(proyect.id)}>Eliminar</Button>
                        </ButtonGroup>
        
                    </div>
                </Card.Body>
              </Card>
        
    </>
    )
    
  }
  
   



//  <Card.Text>{proyect.description}</Card.Text>

//<a href={proyect.url} target="_blank"  rel="noopener noreferrer">
//<Button variant="primary">Ver Proyecto</Button>
//</a>


//   <Button className="submit" onClick={() => addHeroe(heroe.id)} >Agregar al equipo</Button>
