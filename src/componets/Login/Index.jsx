import { Button, Col, Container, Form, Image, Row } from "react-bootstrap"
import Logo from "../../assets/img/logo.png"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();


    const onSubmit = (data) => {
        const users = JSON.parse(localStorage.getItem('users') || null) || [];

        const registeredUser = users.filter((user) => user.email == data.email && user.password == data.password)

        if (registeredUser.length > 0) {
            // Set user data in localstorage
            localStorage.setItem('loggedUser', JSON.stringify(registeredUser[0]))

            // Login success toast message
            toast.success('Login Successfull!', {
                position: 'top-center'
            })

            // Redirect on dashboard
            navigate('/home');
        } else {
            toast.error('User not found', {
                position: 'top-center'
            }
            )
        }
    }


    return (
        <div className="main">
            <Container fluid className="py-5 px-0 main">
                <Row className="titleSection align-items-center">
                    <Col xs={5}>
                        <Image src={Logo} className="logoImg" alt="Logo" />
                    </Col>

                    <Col xs={7}>
                        <h2>Login</h2>
                    </Col>
                </Row>

                <Form onSubmit={handleSubmit(onSubmit)}>

                    <Form.Group className="mb-3 mb-sm-4">
                        <Form.Label className="formLabel">Email</Form.Label>
                        <Form.Control
                            {...register("email", { required: true })}
                            className="formInput"
                            type="text"
                            placeholder="Enter your email"
                        />
                        {
                            errors?.name?.type === 'required'
                                ? 'Email is required.'
                                : ''
                        }                </Form.Group>

                    <Form.Group className="mb-3 mb-sm-4">
                        <Form.Label className="formLabel">Password</Form.Label>
                        <Form.Control
                            {...register("password", { required: true, minLength: 4, maxLength: 8 })}
                            className="formInput"
                            type="password"
                            placeholder="Enter your password"
                        />
                        <p className="text-danger mt-1">
                            {
                                errors?.password?.type === 'required'
                                    ? 'Password is required.'
                                    : errors?.password?.type === 'minLength'
                                        ? 'More than 4 digits required.'
                                        : errors?.password?.type === 'maxLength'
                                            ? 'Less than 8 digits required.'
                                            : ''
                            }
                        </p>
                    </Form.Group>

                    <div className="btnWrapper mt-5">
                        <Button className="custBtn"
                            variant="info"
                            size="lg"
                            type="submit"
                        >Login</Button>
                    </div>
                </Form>
            </Container >
        </div>
    )
}

export default Login;