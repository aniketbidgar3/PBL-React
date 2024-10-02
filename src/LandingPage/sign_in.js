import books from "../assets/images/corosel2.jpeg";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";

function SignIn() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="row m-5">
      <img src={books} className="col-md-5 w-40" alt="book img " />
      <div className=" col-md-6  text-center">
        <Form>
          <h1>Login</h1>
          <p className="mb-3">It is for free and may take few seconds only</p>
          <Form.Group className="mb-4 mx-5" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted my-5">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-4 mx-5" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit" href="/Homepage">
            Login
          </Button>

          <div className="row mt-4">
            <a className="col-sm" href="#sign up">
              Forgot password?
            </a>
            <a className="col-sm" href="/sign_up">
              Create an Account
            </a>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default SignIn;
