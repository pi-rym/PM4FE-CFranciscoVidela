import RegisterForm from "./RegisterForm";
import AuthBackground from "@/components/Background/AuthBackground";

export default function RegisterPage () {
    return(
        <main>
        <h2>Register</h2>
        <AuthBackground>
        <RegisterForm/>
        </AuthBackground>
        </main>
    )
};