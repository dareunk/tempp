import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './router/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  // 🔧 화면 높이 계산 후 --vh 설정
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVh(); // 처음 실행
    window.addEventListener('resize', setVh); // 화면 리사이즈 시 갱신

    return () => window.removeEventListener('resize', setVh);
  }, []);

  return (
    <Container fluid className="p-0" style={{ height: '100%', width: '100%'}}>
      <Row
        className="justify-content-md-center align-items-center"
        style={{ margin: '0', height: '100%', width: '100%'}}
      >
        <Col
          xs={12}
          md={8}
          lg={3}
          style={{
            padding: '0',
            borderLeft: '1px solid black',
            borderRight: '1px solid black',
            height: '100%',
          }}
        >
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
