import { useContext } from "react";
import { PersonaContext } from '../../providers/persona';
import { PersonCard } from "../cardUser";


export const ContainerPersonCardUser = () => {
    
    const { personData } = useContext(PersonaContext);

    return(
        <div>
            {personData.map((person) => (
                <PersonCard key={person.id} person={person}/>
            ))}
        </div>
    );
};