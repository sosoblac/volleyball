'use client'
import { useState } from 'react';
import { date, z } from 'zod';
import { userSchema } from '../../../utils/validation';
import styles from './userform.module.css'
import { useRouter } from 'next/navigation';

const UserForm = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstname: '',
    lastname:'',
    role: 'PLAYER',
    teamId: '',
    isAdmin: false,
    date: new Date()
  });
  const [errors, setErrors] = useState({} || '');
  const [serverErrors, setServerErrors] = useState('');
  const [serverSuccess, setServerSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Validate formData with Zod
      userSchema.parse(formData);
      setErrors({})

      // Submit the form data to your API route
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json()

      console.log(response,'THIS IS RESPONSE IM TRYING TO UNDERSTAND')
      if (!response.ok) throw new Error(data.error);

      // alert(data.success);
      setServerErrors('')
      setServerSuccess(data.success)
      if (data.success) {
        setTimeout(() => {
          router.push('/');
        }, 5000); // Wait for 5000ms (5 seconds)
      }

    } catch (err) {
      // If it's a Zod error, extract the first message
      if (err instanceof z.ZodError) {
        // create new form error as empty object
        const formError = {}
        // get the error path and assign a message to it
        err.errors.forEach(err=>{
          formError[err.path[0]]= err.message.replace(/^\w+/, err.path[0])
        })
        setErrors(formError); // Get the first error message
        console.log(formError)
      } else {
        console.log(err.name,'AFTER CATCH ERROR')
        setServerErrors(err.message); // For other errors
      }
    }
  };

  return (
    <div className={styles.container}>
        <div className={styles.form_container}>
            <h1>User Registration form</h1>
            <p style={{color:'red'}}>{serverErrors} </p>
            <p style={{color:'green'}}>{serverSuccess} </p>
            
            <form onSubmit={handleSubmit}>
                {/* Email */}
                <label htmlFor="email">Email *</label>
                <p style={{color:'red'}}> 
                {errors.email}
                </p>
                <input type="text" id="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange}  />

                {/* password */}
                <label htmlFor="password">Password *</label>
                <p style={{color:'red'}}> 
                  {errors?.password}
                </p>
                <input type="password" id="password" name="password" value={formData.password} onChange={handleChange}/>

                {/* First Name */}
                <label htmlFor="firstname">First name *</label>
                <p style={{color:'red'}}> 
                  {errors?.firstname}
                </p>
                <input type="text" id="firstname" name="firstname" placeholder="Enter your first name" value={formData.firstname} onChange={handleChange}  />

                {/* Last Name */}
                <label htmlFor="lastname">Last name *</label>
                <p style={{color:'red'}}> 
                  {errors?.lastname}
                </p>
                <input type="text" id="lastname" name="lastname" placeholder="Enter your lastname" value={formData.lastname} onChange={handleChange}  />

                {/* Featured Image */}
                {/* <label htmlFor="featuredImage">Featured Image</label>
                <input type="file" id="featuredImage" name="featuredImage" accept="image/*" onChange={handleChange} /> */}

                {/* role */}
                <label htmlFor="role">Role (ADMIN/ FANS/ PLAYER)</label>
                <select id="role" name="role" value={formData.role} onChange={handleChange}>
                <option value="ADMIN">ADMIN</option>
                <option value="PLAYER">PLAYER</option>
                <option value="FAN">FAN</option>
                </select>

                {/* Submit Button */}
                <button type="submit" className="submit-btn">Publish Post</button>
            </form>
            
            
            {/* {errors} */}
        </div>
      
    </div>
  );
};

export default UserForm;
