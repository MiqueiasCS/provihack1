import { PersonaProvider } from './persona';


const Providers = ({ children }) => {
    return(
        <PersonaProvider>
            { children }
        </PersonaProvider>
    );
};

export default Providers;