import avatar from '../assets/hero.jpg'
export default function Homepage(){
    return(
    <div className="container d-flex w-100 justify-content-between align-items-center" style={{minHeight:'90vh'}}>
        <div className="hero-text">
        <h1>Hi There, <br /> I'm Muhammad Jibran Al Fabian</h1>
        <h3>Fullstack Developer</h3>
        </div>
            <img src={avatar} width={'250px'} height={'250px'} alt="das me" style={{boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)', borderRadius:'100%', objectFit:'cover'}}/>
    </div>
    )
}