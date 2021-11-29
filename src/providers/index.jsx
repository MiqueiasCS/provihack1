import {  UsersProviders} from './users';
import { AuthProvider } from './auth';


const Providers = ({ children }) => {
    return(
        <AuthProvider>
            <UsersProviders>
            { children }
            </UsersProviders>
        </AuthProvider>
    );
};

export default Providers;