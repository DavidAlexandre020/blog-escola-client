import { SignIn } from "@clerk/clerk-react";
import Helmet from "../components/helmet";
import Footer from "../components/Footer";

export default function LoginPage() {
  return (
    <div>
      <div className="flex items-center justify-center h-[calc(100vh-80px)]">
      <Helmet
         title="Iniciar sessão"
         largeTwitterCard={true}
         addPostfixTitle={true}
      />
      <SignIn signUpUrl="/register"/>
    </div>
    <Footer />
    </div>
  )
}
