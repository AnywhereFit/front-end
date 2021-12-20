import React from "react";
import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";

import "./CreateClass.css";

const CreateClass = () => {
  return (
    <div className="create-class-container">
      <h1>Create a New Class</h1>
      <Form>
        <FormGroup>
          <Label>Name:</Label>
          <Input type="text" />
        </FormGroup>
        <FormGroup>
          <Label>Type:</Label>
          <Input type="select">
            <option>Select a type</option>
            <option>Type 1</option>
            <option>Type 2</option>
            <option>Type 3</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label>Start Time:</Label>
          <Input type="time" />
        </FormGroup>
        <FormGroup>
          <Label>Duration:</Label>
          <span className="subtext">45 Minutes</span>
          <Input type="range" />
        </FormGroup>
        <FormGroup>
          <Label>Intensity Level:</Label>
          <FormGroup>
            <Input type="radio" name='intensity' />
            <Label>Easy</Label>
            <br />
            <Input type="radio" name='intensity' />
            <Label>Moderate</Label>
            <br />
            <Input type="radio" name='intensity' />
            <Label>Hard</Label>
          </FormGroup>
        </FormGroup>
        <FormGroup>
          <Label>Location:</Label>
          <Input type="text" />
        </FormGroup>
        <FormGroup>
          <Label>Class Size:</Label>
          <Input type="number" />
        </FormGroup>
        <Button className="create-class-btn">Create Class</Button>
      </Form>
    </div>
  );
};

export default CreateClass;
