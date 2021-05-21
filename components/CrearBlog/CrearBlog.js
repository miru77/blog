import React, {useState} from 'react'
import {Button, Form} from "react-bootstrap"
//import {Form, Button} from "semantic-ui-react"
import {useFormik} from 'formik';
import * as Yup from 'yup'
import {toast} from "react-toastify"
import useAuth from "../../hooks/useAuth"
import {crearBlog} from "../../api/blog"





export default function CrearBlog({logout}) {

   

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData) => {
            const response = await crearBlog(formData)
            toast.info("Titulo y detalle creado")
            console.log(response)
           
        }
     
    })

    return (
        <div className="change-name-form">
            <h4>Ingresa titulo y/o detalle</h4>

            <Form onSubmit={formik.handleSubmit}>
                
                    <Form.Control  name="name"  placeholder="Agregar titulo" 
                    onChange={formik.handleChange} value={formik.values.name}
                    isInvalid= {!!formik.errors.name}  
                    />

                    <Form.Control  name="lastname"  placeholder="Agregar detalle" 
                    onChange={formik.handleChange} value={formik.values.lastname}
                    isInvalid= {!!formik.errors.lastname}    
                    />


                {formik.errors.name&& ( <div className = "mensaje">{formik.errors.name} </div>)}
        
                    {formik.errors.lastname && (  <div className = "mensaje"> {formik.errors.lastname}</div> )}
               
               <div>
                   <Button className="submit" type="submit" >Enviar</Button>
               </div>
             
            </Form>
            
        </div>
    )
}

function initialValues(name, lastname) {

    return {
        name: "",
        lastname: ""
    }
    
}

function validationSchema() {
    return {
        name: Yup.string().required("El titulo es obligatorio"),
        lastname: Yup.string().required("El detalle es obligatorio")
    }
}