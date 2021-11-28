import { PersonaProvider } from './persona';
import {  UsersProviders} from './users';


const Providers = ({ children }) => {
    return(
        <PersonaProvider>
            <UsersProviders>
            { children }
            </UsersProviders>
        </PersonaProvider>
    );
};

export default Providers;