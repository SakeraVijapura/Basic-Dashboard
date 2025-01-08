import { Container, Image } from "react-bootstrap"
import Logo from "../../assets/img/logo.png"
import Diamond from "../../assets/img/✨.png"
import { useState } from "react";

const DashBoard = () => {

    const [user, setUser] = useState(() => {
        return JSON.parse(localStorage.getItem('loggedUser'));
    });

    return (
        <Container fluid className="container-fluid px-0">
            <div className='dashBoard main'>
                <Image src={Logo} className="logoImg" alt="Logo" />

                <div className="banner">
                    <div className="textContainer">
                        <p>Slide information</p>
                        <h2>Hello, {user.name} <br /> Thank You for Login</h2>
                    </div>
                    <div className="imgWrapper">
                        <img src={Diamond} alt="Diamond Img" />
                    </div>
                </div>
            </div>
        </Container>

    )
}

export default DashBoard