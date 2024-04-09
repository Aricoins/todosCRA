import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { PersistGate } from 'redux-persist/integration/react';
// import { persistor } from './redux/store'; // Importa store y persistor correctamente
import LoginForm from './components/LoginPage';
import HomePage from './components/HomePage';
import TodosPage from './components/TodosPage'; 
//import { Provider } from 'react-redux';
// import { store } from './redux/store';

const App = () => {
  return (
    // <Provider store={store}>
    //   <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/homepage" element={<HomePage />} />
          <Route path="/task" element={<TodosPage />} /> 
          </Routes>
        </BrowserRouter>
    //   </PersistGate>
    // </Provider>
  );
};

export default App;