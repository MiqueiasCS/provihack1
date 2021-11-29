import { ContainerCard, ContainerSub } from './style';

export const PersonCard = ({ person }) => {

    return(
        <ContainerCard>
            <div className="container-flex">
                <ContainerSub>
                    <img alt="img_perfil" src={person.photo}/>
                </ContainerSub>
                
                <ContainerSub>
                    <p>Programador(a) {person.nivel}</p>
                    <h2>{person.name}</h2>
                    <p className="email">{person.email}</p>
                    <p className="description">{person.description}</p>
                </ContainerSub>
            </div>
            <ContainerSub>
                <p>{person.city}-{person.state}</p>
                <a href={person.url} target="_blank" rel="noreferrer"><button>Link Currículo</button></a>
            </ContainerSub>
        </ContainerCard>
    );
};