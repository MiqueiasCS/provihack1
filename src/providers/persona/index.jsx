import { createContext, useState } from "react";


export const PersonaContext = createContext();

export const PersonaProvider = ({ children }) => {
    // onde fica as infos que fou renderizar
    // primeiro vou mocar algumas informações

    const dataMocked = [
        {
            "id": 1,
            "name": "Anderson",
            "email": "Isso é uma EMAIL",
            "nivel": "Junior",
            "photo": "Isso é uma foto",
            "description": "Isso é uma descrição, Isso é uma descrição, Isso é uma descrição, Isso é uma descrição Isso é uma descrição Isso é uma descrição Isso é uma descrição",
            "url": "Link do linkedin",
            "state": "SP",
            "city": "Suzano",
            "function": "FullStack"
        },
        {
            "id": 2,
            "name": "Pedro",
            "email": "Isso é uma EMAIL",
            "nivel": "Junior",
            "photo": "Isso é uma foto",
            "description": "Isso é uma descrição, Isso é uma descrição, Isso é uma descrição, Isso é uma descrição Isso é uma descrição Isso é uma descrição Isso é uma descrição",
            "url": "Link do linkedin",
            "state": "SP",
            "city": "Suzano",
            "function": "FullStack"
        },
        {
            "id": 3,
            "name": "Junior",
            "email": "Isso é uma EMAIL",
            "nivel": "Junior",
            "photo": "Isso é uma foto",
            "description": "Isso é uma descrição, Isso é uma descrição, Isso é uma descrição, Isso é uma descrição Isso é uma descrição Isso é uma descrição Isso é uma descrição",
            "url": "Link do linkedin",
            "state": "SP",
            "city": "Suzano",
            "function": "FullStack"
        },
        {
            "id": 4,
            "name": "Rodolfo",
            "email": "Isso é uma EMAIL",
            "nivel": "Junior",
            "photo": "Isso é uma foto",
            "description": "Isso é uma descrição, Isso é uma descrição, Isso é uma descrição, Isso é uma descrição Isso é uma descrição Isso é uma descrição Isso é uma descrição",
            "url": "Link do linkedin",
            "state": "SP",
            "city": "Suzano",
            "function": "FullStack"
        },
        {
            "id": 5,
            "name": "Vagner",
            "email": "Isso é uma EMAIL",
            "nivel": "Junior",
            "photo": "Isso é uma foto",
            "description": "Isso é uma descrição, Isso é uma descrição, Isso é uma descrição, Isso é uma descrição Isso é uma descrição Isso é uma descrição Isso é uma descrição",
            "url": "Link do linkedin",
            "state": "SP",
            "city": "Suzano",
            "function": "FullStack"
        }
    ];

    const [personData, setPersonData] = useState(dataMocked);

    const handlePerson = (info) => {
        setPersonData(info)
    }

    return (
        <PersonaContext.Provider value={{personData, handlePerson}}>
            {children}
        </PersonaContext.Provider>
    );
};
