export default function About(){
    return(
        <>
        <div className="py-5" style={{background: '#deffea', background: 'radial-gradient(circle,rgba(222, 255, 239, 1) 0%, rgba(230, 255, 246, 1) 50%, rgba(255, 253, 222, 1) 100%)'}}>
            <div className="container" style={{width: '70%'}}>
            <div className="badge bg-secondary fs-6 mb-3 py-2">👨‍💻 Get to know me</div>
            <h1>About me</h1>
            <p className="fs-5">Just a Grade 12 student trying to make the web look better, one line of code at a time. I spend most of my time designing in Figma or building layouts with Bootstrap, currently figuring out the ropes of real-world development through my internship. When I’m not stressing over pixels or database relationships, you can usually find me grinding in PokeMMO or revisiting Pokémon Black.</p>
            </div>
        </div>
        <div className="py-5 mb-5" style={{backgroundColor: '#F5FFFC'}}>
            <div className="container" style={{width: '80%'}}>
            <div className="shadow px-4 py-5 mb-5 bg-body-tertiary rounded border-5 border-start border-success">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex flex-column gap-2">
                    <span className="fw-bolder fs-5">SMKN 64 Jakarta</span>
                    <span className="fw-bold fs-6">Rekayasa Perangkat Lunak</span>
                    </div>
                    <div className="d-flex flex-column gap-2 text-end">
                    <span className="rounded-pill bg-success-subtle px-4 py-2">Current Student</span>
                    <span>2023 - Present</span>
                    </div>
                </div>
                Focused on web development, software engineering, and UI/UX design principles.
            </div>
            </div>
        </div>
        <div>
            <div className="text-center mb-5">
                <h1 className="mb-3">Technical Skills</h1>
                <p>Technologies and tools I work with daily.</p>
            </div>
            <div className="d-flex container justify-content-center align-items-center">
            <div className="row w-100">
                <div className="col shadow-lg p-3 bg-body-tertiary w-100 rounded d-flex justify-content-center align-items-center" style={{height:'10rem'}}><h1>React</h1></div>
                <div className="col shadow-lg p-3 bg-body-tertiary w-100 rounded d-flex justify-content-center align-items-center" style={{height:'10rem'}}>Laravel</div>
            </div>
            </div>
        </div>
        </>
    )
}