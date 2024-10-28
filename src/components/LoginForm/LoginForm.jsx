'use client'
import React, { useState } from 'react'
import styles from './loginform.module.css'
import { loginSchema } from '../../../utils/validation';
import { z } from 'zod';



const LoginForm = () => {
  const [formData, setFormData]= useState({
    email:'',
    password:''
  })
  const [formError, setFormError] = useState({})

  const handleChange = (e) =>{
    const {name,value} = e.target
    const newData = (prev)=>(
      {...prev,[name]:value}
    )
    setFormData(newData)
  }
  console.log(formData)

  const handleSubmit = async(e) =>{
    e.preventDefault();
    try {
      // validate the data
      loginSchema.parse(formData)

      // send data to api
      const response = await fetch('/api/login',{
        method:'POST',
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify(formData)
      })

      const res = await response.json()
      console.log(res,'this is res')
      
    } catch (error) {
      if (error instanceof z.ZodError){
        const newFormError ={}
        error.errors.forEach(err=>{
          if (err.message.startsWith('String')){
            newFormError[err.path[0]]= err.message.replace(/^\w+/, err.path[0])
          } else {
            newFormError[err.path[0]]= err.message
          }
           // replaces the first word with [path]
        })
        setFormError(newFormError)
        console.log(newFormError,'this is new form error')
      } else{
        console.log(error)
      }
      console.log(error)
    }
  }

    return (
        <div className={styles.container}>
            <div className={styles.form_container}>
                <h1>User Registration form</h1>
                
                <form onSubmit={handleSubmit}>
                    {/* Email */}
                    <label htmlFor="email">Email</label>
                    <p style={{color:'red'}}> 
                   {formError.email}
                    </p>
                    <input type="text" id="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange}  />
                    
    
                    {/* password */}
                    <label htmlFor="password">Password *</label>
                    <p style={{color:'red'}}> 
                     {formError.password}
                    </p>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange}/>
    
                    <button type="submit" className="submit-btn">Publish Post</button>
                </form>
               
                
                {/* {errors} */}
            </div>
          
        </div>
      );
}

export default LoginForm
