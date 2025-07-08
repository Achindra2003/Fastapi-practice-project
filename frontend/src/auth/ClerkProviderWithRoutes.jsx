import {ClerkProvider} from "@clerk/clerk-react"
import {BrowserRouter} from "react-router-dom";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

export default function ClerkProviderWithRoutes({children}){
    console.log("THE KEY BEING PASSED TO CLERK IS:", PUBLISHABLE_KEY);
    return (
        <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
            <BrowserRouter>{children}</BrowserRouter>
        </ClerkProvider>
    );
}
