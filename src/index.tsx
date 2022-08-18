import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './App';
import { AddCategory, AddTask, Dashboard, Login, SignUp } from './pages';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Dashboard />} /> 
        </Route>
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addCategory" element={<AddCategory />} />
        <Route path="/addTask" element={<AddTask />} />
      </Routes>
    </BrowserRouter>
);

