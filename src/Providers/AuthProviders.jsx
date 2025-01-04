import { createContext } from "react";

export const AuthContext = createContext(null)

const AuthProviders = ({children}) => {
    const [user, serUser] = useState(null);

    const authInfo = {

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;