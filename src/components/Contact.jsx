import React, { Fragment, useState} from 'react'

const Contact = () => {
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [list, setList] = useState('');
    
    const changeHandler = (e) => {
        if (!isNaN(e.target.value) && e.target.value.length) {
            setMessage('Number is not Allowed!')
        } else {
            setMessage('')
        }
        setName(e.target.value)
    }

    const submitForm = (e) => {
        setMessage('Added!')
        setTimeout(()=>setList('Test List'),1000)
    }

    return (
    <Fragment>
        <h1 className='display-6 fw-bold text-center' data-testid='heading-contact'>Contact</h1> 
        <h3>Contact Form</h3> <br /><br />
        <p data-testid='test-msg' className='text-light text-bg-danger fw-bolder'>{ message}</p>    
        <div>
            <label className="form-label" htmlFor="form1Example13">Email address</label>
            <input type="email" id="form1Example13" placeholder='Enter Email' className="form-control form-control-lg"  required /><br/>
            
            <label className="form-label" htmlFor="form1Example13">Contact Name</label>
            <input type="text" id="form1Example13" placeholder='Enter Name' className="form-control form-control-lg" onChange={changeHandler} required />  <br/> 

            <button  className="btn btn-primary btn-block" onClick={submitForm} disabled={message.length ? true : false}>Submit</button><br/><hr/>
        </div> 
            
            <ul><li data-testid='li-1'>{ list}</li></ul>
    </Fragment>  
  )
}

export default Contact