import React from 'react';
import { Route, Routes } from "react-router-dom";
import UsersPage from "./entities/UsersPage";
import TodosPage from "./entities/TodosPage";
import Layout from "./shared/Layout";
import "./styles/style.scss";

const App = () => (
    <Layout>
        <Routes>
            <Route path="/users_page" element={<UsersPage/>}/>
            <Route path="/todos_page" element={<TodosPage/>}/>
        </Routes>
    </Layout>

);

export default App;
