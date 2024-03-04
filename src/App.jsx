import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Header from './ui/Header';
import Main from './pages/Main';

const StyledApp = styled.div``;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Header />
        <Main />
      </StyledApp>
    </>
  );
}

export default App;
