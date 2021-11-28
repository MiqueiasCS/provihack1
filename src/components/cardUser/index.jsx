import { ContainerCard, ContainerSub } from './style';

export const PersonCard = ({ person }) => {

    return(
        <ContainerCard>
            <div className="container-flex">
                <ContainerSub>
                    <img alt="img_perfil" />
                </ContainerSub>
                
                <ContainerSub>
                    <p>{person.function}</p>
                    <h2>{person.name}</h2>
                    <p className="email"><strong>{person.email}</strong></p>
                    <p>{person.description}</p>
                </ContainerSub>
            </div>
            <ContainerSub>
                <p>{person.city}-{person.state}</p>
                <button>{person.url}</button>
            </ContainerSub>
        </ContainerCard>
    );
};