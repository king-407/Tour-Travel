import React from 'react'
import './intro.css'
import vacation from '../Images/vacation.jpg'
import work from '../Images/work.jpg'
import birthday from '../Images/birthday.jpg'
import security from '../Images/security.png'
import user from '../Images/user-experience.png'
const Intro = () => {
    const my={
        backgroundImage: `url(https://images.unsplash.com/photo-1534531688091-a458257992cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)`,
        height:'100vh',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  
  
  
    }
  return (
      <>
      
    <div className="background img-fluid " style={my}> 
    <div className="text container pt-3">
    <div className="row">
        <div className="col-md-12 text-center">
            <h1>Write your Personal Diary</h1>
        </div>
    </div>
</div>
</div>
<div className="container mt-5 pt-3">
    <div className="row">
        <div className="col-md-12 text-center">
            <h1>Write your Personal Diary</h1>
        </div>
    </div>
</div>
<section>
<div className="container mt-5 pt-3">
    <div className="row">
        <div className="col-md-6 text-center">
            <img className="vacation img-fluid" src={vacation} style={{height:'400px'}}/>
            <p className='mt-3' style={{fontSize:'20px'}}>Preserve your vacation stories for memories</p>
        </div>
        <div className="col-md-6 text-center">
            <img className="work img-fluid" src={work} style={{height:'400px'}}/>
            <p className="mt-3" style={{fontSize:'20px'}}>Write your work stories here,about your suuccess or failure</p>
        </div>
    </div>
</div>
</section>
<section>
<div className="container mt-5 pt-3">
    <div className="row text-center ">
        <div className="col-md-12">
            <img className="vacation img-fluid" src={birthday} style={{height:'600px',width:'500px'}}/>
            <p className='mt-3' style={{fontSize:'20px'}}>Preserve your vacation stories for memories</p>
        </div>
       
    </div>
</div>
</section>
<section className='first'>
<div className="container mt-5 pt-3">
    <div className="row">
        <div className="col-md-6 text-center">
            <img className="security img-fluid" src={security} style={{height:'200px'}}/>
            <p className='mt-3' style={{fontSize:'20px'}}>Preserve your vacation stories for memories</p>
        </div>
        <div className="col-md-6 text-center">
            <img className="user img-fluid" src={user} style={{height:'200px'}}/>
            <p className="mt-3" style={{fontSize:'20px'}}>Write your work stories here,about your suuccess or failure</p>
        </div>
    </div>
</div>
</section>



    </>
  )
}

export default Intro