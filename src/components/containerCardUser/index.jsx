import { useContext } from "react";
// import { PersonaContext } from '../../providers/persona';
import { UsersContext } from "../../providers/users";
import { PersonCard } from "../cardUser";


export const ContainerPersonCardUser = () => {
    
    // const { personData } = useContext(PersonaContext);
    const { users } = useContext(UsersContext)

    return(
        <div>
            {users.map((person) => (
                <PersonCard key={person.id} person={person}/>
            ))}
        </div>
    );
};