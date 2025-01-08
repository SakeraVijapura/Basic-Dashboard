import { Button, Col, Container, Form, Image, Row } from "react-bootstrap"
import Logo from "../../assets/img/logo.png"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify";

const Register = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const onSubmit = (data) => {
        // Get user data from localstorage
        const users = JSON.parse(localStorage.getItem('users') || null) || [];

        // Push User Data in Array of object
        users.push(data);

        // Set user data in localstorage
        localStorage.setItem('users', JSON.stringify(users));

        // Register success Toast Message
        toast.success('Registration successfull!', {
            position: 'top-center'
        })
    }

    return (

        <div className="main">
            <Container fluid className="py-5 px-0">
                <Row className="titleSection align-items-center">
                    <Col xs={5}>
                        <Image src={Logo} className="logoImg" alt="Logo" />
                    </Col>

                    <Col xs={7}>
                        <h2>Register</h2>
                    </Col>
                </Row>

                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3 mb-sm-4">
                        <Form.Label className="formLabel">Name</Form.Label>
                        <Form.Control
                            {...register("name", { required: true, minLength: 3 })}
                            className="formInput"
                            type="text"
                            placeholder="Enter your name"
                        />
                        <p className="text-danger mt-1">
                            {
                                errors?.name?.type === 'required'
                                    ? 'Name is required.'
                                    : errors?.name?.type === 'minLength'
                                        ? 'Name has atleast 3 characters.'
                                        : ''
                            }
                        </p>
                    </Form.Group>

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
                        }
                    </Form.Group>

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
                        >
                            Register</Button>
                    </div>
                    {/* <ToastContainer /> */}
                </Form>

            </Container >
        </div>
    )
}

export default Register