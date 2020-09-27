import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import styled from 'styled-components';

const ProgBar = styled.div`
  height: 5px;
  background: ${props => props.theme.colors.primary};
  margin-top: 20px;
`;
export const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return <ProgBar style={{ width: progress + '%' }} />;
};

export default ProgressBar;
