import styled from 'styled-components';
import { TextField, FormLabel } from '@mui/material';

const RegisterForm = styled.form`
  position: relative;
  margin-top: 50px;
  padding: 20px;

  border: 2px solid gray;
  background-color: #fff;
  border-radius: 6px;

  width: 440px;
  height: 430px;
`;

const Text = styled(FormLabel)`
  margin-bottom: 8px;

  font-size: 14px;
  font-weight: bold;
`;

const Thumb = styled.div`
  position: relative;
`;

const Input = styled(TextField)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;


  border: 1px solid #d4d4d4;
  border-radius: 4px;
  font-size: 16px; */
`;

const CheckboxText = styled.p`
  font-size: 14px;
  margin: 0px;
`;

const Button = styled.button`
  margin: 0 auto;
  display: block;

  margin-top: 20px;
  padding: 10px 15px 10px 15px;

  text-align: center;
  background-color: #fff;
  border: 1px solid gray;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;

  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
`;

export { RegisterForm, Thumb, Text, Input, CheckboxText, Button };
