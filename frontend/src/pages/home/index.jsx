import React, { useEffect, useState } from "react";
import { getUsers } from "../../services/user.service";
import Header from "../../components/header";
import PresentationPanel from "../../components/presentationPanel";
import Card from "../../components/card";
import "./style.css";
import TotalElements from "../../components/totalElements";


const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchGetUsers = async () => {
            try {
                const usersData = await getUsers();
                setUsers(usersData);
            } catch (error) {
                console.error("Erro ao buscar usuários:", error);
            }
        };

        fetchGetUsers();
    }, []);

    return (
        <div>
            <Header />
            <div className="home-container">
                <PresentationPanel />
                <Card users={users} />
                <TotalElements users={users} />
            </div>
        </div>
    );
};

export default Home;
