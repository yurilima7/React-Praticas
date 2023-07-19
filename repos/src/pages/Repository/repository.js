import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { Container, Owner, Loading, BackButton, IssuesList, PageActions, FilterStatus, WithOutIssues } from "./styles";
import api from "../../services/api";

export default function Repository() {
    const name = useParams();

    const [repository, setRepository] = useState({});
    const [issues, setIssues] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [stateReq, setState] = useState('all');
    const [stateIndex, setStateIndex] = useState(0);

    useEffect(() => {

        async function load() {
            const nameRepo = decodeURIComponent(name.repository);

            const [reposData, issuesData] = await Promise.all([
                api.get(`/repos/${nameRepo}`),
                api.get(`/repos/${nameRepo}/issues`, {
                    params: {
                        state: stateReq,
                        per_page: 5,
                    }
                }),
            ]);

            console.log(reposData.data);
            console.log(issuesData.data);
            setRepository(reposData.data);
            setIssues(issuesData.data)
            setLoading(false);
        }

        load();
    }, [name.repository, stateReq]);

    useEffect(() => {
        async function loadIssue() {
            const nameRepo = decodeURIComponent(name.repository);

            const response = await api.get(`/repos/${nameRepo}/issues`, {
                params: {
                    state: stateReq,
                    page,
                    per_page: 5,
                }
            });

            setIssues(response.data);
        }

        loadIssue();
    }, [name.repository, page, stateReq]);

    function pageControl(action) {
        setPage(action === 'back' ? page - 1 : page + 1);
    }

    function filterOptions(option) {
        if (option === 'all') {
            setState('all');
            setStateIndex(0);
        } else if (option === 'open') {
            setState('open');
            setStateIndex(1);
        } else if (option === 'closed') {
            setState('closed');
            setStateIndex(2);
        }
    }

    if (loading) {
        return(
            <Loading>
                <h1>Carregando...</h1>
            </Loading>
        );
    }

    return(
        <Container>
            <BackButton to="/">
                <FaArrowLeft color="#000" size={30}/>
            </BackButton>

            <Owner>
                <img src={repository.owner.avatar_url} alt={repository.owner.login}/>

                <h1>{repository.name}</h1>

                <p>{repository.description}</p>
            </Owner>

            {
                issues.length === 0 ? (
                    <WithOutIssues></WithOutIssues>
                ) : 
                (
                    <FilterStatus active={stateIndex}>
                        <button type="button" onClick={() => filterOptions('all')}>
                            Todas
                        </button>

                        <button type="button" onClick={() => filterOptions('open')}>
                            Abertas
                        </button>

                        <button type="button" onClick={() => filterOptions('closed')}>
                            Fechadas
                        </button>
                    </FilterStatus>
                )
            }

            {
                issues.length === 0 ? 
                (
                    <WithOutIssues>
                        <h1>Sem issues neste repositório.</h1> 
                    </WithOutIssues> 
                ) :
                (
                    <IssuesList>
                        {issues.map(issue => (
                            <li key={String(issue.id)}>
                                <img src={issue.user.avatar_url} alt={issue.user.login} />

                                <div>
                                    <strong>
                                        <a href={issue.html_url}>
                                            {issue.title}
                                        </a>

                                        {issue.labels.map(label => (
                                            <span key={String(label.id)}>{label.name}</span>
                                        ))}
                                    </strong>

                                    <p>{issue.user.login}</p>
                                </div>
                            </li>
                        ))}
                    </IssuesList>
                )
            }

            {
                issues.length === 0 ? (
                    <WithOutIssues></WithOutIssues>
                ) : 
                (
                    <PageActions>
                        <button type="button" onClick={() => pageControl('back')} disabled={page < 2}>
                            Voltar
                        </button>
                        <button type="button" onClick={() => pageControl('next')}>
                            Próxima
                        </button>
                    </PageActions>
                )
            }
        </Container>
    );
}