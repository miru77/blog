import React, {useState} from 'react'
import {Button, Form} from "react-bootstrap"
//import {Form, Button} from "semantic-ui-react"
import {useFormik} from 'formik';
import * as Yup from 'yup'
import {toast} from "react-toastify"
import useAuth from "../../hooks/useAuth"
import {updateNameApi} from "../../api/blog"





export default function ChangeNameForm({blog, logout}) {

   

    const formik = useFormik({
        initialValues: initialValues(blog.title, blog.body),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData) => {
            toast.info("Titulo y detalle actializado")
            const response = await updateNameApi(blog.id, formData, logout)
            console.log(formData)
           
        }
     
    })

    return (
        <div className="change-name-form">
            <h4>Cambia el titulo y/o detalle</h4>

            <Form onSubmit={formik.handleSubmit}>
                
                    <Form.Control  name="name"  placeholder="Tu nuevo titulo" 
                    onChange={formik.handleChange} value={formik.values.name}
                    isInvalid= {!!formik.errors.name}  
                    />

                    <Form.Control  name="lastname"  placeholder="Tu nuevo detalle" 
                    onChange={formik.handleChange} value={formik.values.lastname}
                    isInvalid= {!!formik.errors.lastname}    
                    />
               
                <Button className="submit">Actualizar</Button>
            </Form>
            
        </div>
    )
}

function initialValues(name, lastname) {

    return {
        name: name || "",
        lastname: lastname || ""
    }
    
}

function validationSchema() {
    return {
        name: Yup.string().required(true),
        lastname: Yup.string().required(true)
    }
}