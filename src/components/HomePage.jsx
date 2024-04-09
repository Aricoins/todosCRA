import React, { useEffect } from 'react';
//import { useSelector } from 'react-redux';
//import { useNavigate } from 'react-router-dom';
import { Button, Typography } from 'antd';
import 'aos/dist/aos.css'; // Importa el archivo CSS de AOS

import TodoCRUDPage from './TodosPage.jsx';

const { Title, Paragraph } = Typography;

const HomePage = () => {
  const [ver, setVer] = React.useState(false)
//   const user = useSelector((state) => state);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!user) {
//       navigate('/');
//     }
//   }, [user, navigate]); 

  // Función para mostrar los todos
  const mostrarTodos = () => {
    setVer(!ver);
  }

  // Validar si el token de sesión existe en sessionStorage
  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (!token) {
      alert("You are not logged in");
    
    }
  }, []);

  return (
    <div  style={{ margin: "20%", textAlign: "center" }}>
      <Title>Welcome to the Home Page</Title>
      <Paragraph>
        <h3>Welcome to Our Platform!</h3>
        <p>At To Do App, we understand the value of organization and task planning. Effective organization reduces stress, boosts productivity, and helps you achieve your goals efficiently.</p>
        <p>Why It Matters</p>
        <p>Being organized allows you to focus on what matters most, whether it's personal projects or professional tasks. By planning your tasks effectively, you can stay on track, overcome obstacles, and reach your objectives with confidence.</p>
        <p>How We Can Help</p>
        <p>Our platform offers intuitive tools and resources to streamline your organization and task planning process. From simple task management to customizable workflows, we've got you covered.</p>
        <p>Start Today</p>
        <p>Join us today and take control of your time. Let's turn your goals into achievements together!</p>
      </Paragraph>
      <Button type="link" onClick={mostrarTodos} style={{backgroundColor: "blue", color: "white", marginBottom: "10px"}} >See ToDos</Button>
      {ver && <TodoCRUDPage/>}
    </div>
  );
};

export default HomePage;