import LoginForm from "./LoginForm"
import AuthBackground from "@/components/Background/AuthBackground"
export default function LoginPage () {
    return(
        <main>
            <h1>Login</h1>
            <AuthBackground>
            <LoginForm/>
            </AuthBackground>
        </main>
    )
};