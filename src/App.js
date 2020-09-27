import React, { useState } from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import lightTheme from './themes/light';
import darkTheme from './themes/dark';
import styled from 'styled-components';
import Navbar from './comps/Navbar';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => props.theme.colors.background};
    transition: background 400ms ease-in-out;
  }
`;

const Container = styled.div`
  background: ${props => props.theme.colors.background};
  transition: background 400ms ease-in-out;
  min-height: 100vh;
  min-width: 100%;
`;

const AppContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 15px;
  color: ${props => props.theme.colors.textColor};
  transition: color 200ms ease-in-out;
`;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  React.useEffect(() => {
    const stored = localStorage.getItem('isDarkMode') === 'true';
    setIsDarkMode(stored);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prevIsDarkMode => !prevIsDarkMode);
    localStorage.setItem('isDarkMode', !isDarkMode);
  };
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Container>
        <Navbar isDark={isDarkMode} toggleTheme={toggleTheme} />

        <AppContainer>
          <Title />
          <UploadForm />
          <ImageGrid setSelectedImage={setSelectedImage} />
          {selectedImage && (
            <Modal
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
            />
          )}
        </AppContainer>
      </Container>
    </ThemeProvider>
  );
}

export default App;
