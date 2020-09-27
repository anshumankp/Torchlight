import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import styled from 'styled-components';

const Label = styled.label`
  display: block;
  width: 30px;
  height: 30px;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 50%;
  margin: 10px auto;
  line-height: 30px;
  color: ${props => props.theme.colors.primary};
  font-weight: bold;
  font-size: 24px;

  :hover {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.background};
  }

  input {
    height: 0;
    width: 0;
    opacity: 0;
  }
`;

const Output = styled.div`
  height: 60px;
  font-size: 0.8rem;
`;

const Form = styled.form`
  margin: 30px auto 10px;
  text-align: center;
`;



const Error = styled.div`
  color: ${props => props.theme.colors.primary};
`;

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg'];
  const changeHandler = e => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpeg)');
    }
  };

  return (
    <Form>
      <Label>
        <input type='file' onChange={changeHandler} />
        <span>+</span>
      </Label>

      <Output>
        {error && <Error>{error}</Error>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </Output>
    </Form>
  );
};

export default UploadForm;
