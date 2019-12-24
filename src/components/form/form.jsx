import React, { useState } from "react";
import useForm from "react-hook-form";
import styled from "react-emotion";

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

const Form = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = e => {
    // console.log(data);
    e.preventDefault();
    console.log(name, email, "state");
  };

  // console.log(watch("example")); // watch input value by passing the name of it
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <FormWrapper>
        {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input
            name="name"
            placeholder="name"
            ref={register}
            onChange={e => setName({ name: e.target.value })}
            value={name}
          />

          {/* include validation with required or other standard HTML validation rules */}
          <input
            name="email"
            placeholder="email"
            ref={register({ required: true })}
            onChange={e => setEmail({ email: e.target.value })}
            value={email}
          />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" />
        </form>
      </FormWrapper>
    </>
  );
};
export default Form;
