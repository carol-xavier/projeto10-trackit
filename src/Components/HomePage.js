import logo from '../assets/trackit.png';

function HomePage(){
    return (
        <section className="home-page">
            <img src={logo} />
            <form>
                <input type="email" placeholder="email"></input>
                <input type="password" placeholder="senha"></input>
                <button>Entrar</button>
            </form>
        </section>
    )
}

export default HomePage;