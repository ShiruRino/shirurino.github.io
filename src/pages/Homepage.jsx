import avatar from '../assets/hero.jpg'
export default function Homepage(){
    return(
    <div className="container d-flex flex-wrap my-5  w-100 justify-content-between align-items-center" style={{minHeight:'70vh'}}>
        <div className="hero-text py-5">
        <div className="badge bg-secondary mb-3 p-2">👋 Welcome to my page</div>
        <h1>Hi There, <br /> I'm Muhammad Jibran Al Fabian</h1>
        <h2>Fullstack Developer</h2>
        </div>
            <img src={avatar} width={'500rem'} height={'500rem'} alt="das me" style={{boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)', borderRadius:'100%', objectFit:'cover'}}/>
    </div>
    )
}