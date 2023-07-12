import React, { useState, useCallback } from "react";
import { Container, Form, SubmitButton } from './styles';
import { FaGithub, FaPlus } from 'react-icons/fa';
import api from '../../services/api';

export default function Main() {
    const [newRepo, setRepo] = useState('');
    const [repositories, setRepositories] = useState([]);

    function handleInputChange(e) {
        setRepo(e.target.value);
    }

    const handleSubmit = useCallback((e) => {
        e.preventDefault();

        async function submit() {

            const response = await api.get(`repos/${newRepo}`);

            const data = {
                name: response.data.full_name,
            }

            setRepositories([...repositories, data]);
            setRepo('');
        }

        submit();
    }, [newRepo, repositories]);

    return(
        <Container>
            <h1>
                <FaGithub size={25}/>
                Meus Repositórios
            </h1>

            <Form onSubmit={handleSubmit}>
                <input type="text" placeholder="Adicionar Repositórios" value={newRepo} onChange={handleInputChange}/>

                <SubmitButton>
                    <FaPlus color="#FFF" size={14}/>
                </SubmitButton>
            </Form>
        </Container>
    );
}