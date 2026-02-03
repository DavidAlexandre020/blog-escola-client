import { SignUp } from "@clerk/clerk-react";
import Helmet from "../components/helmet";
import Footer from "../components/Footer";

export default function RegisterPage() {
  return (
    <div>
      <div className="flex items-center justify-center h-[calc(100vh-80px)]">
      <Helmet
         title="Criar conta"
         largeTwitterCard={true}
         addPostfixTitle={true}
      />
      <SignUp signInUrl="/login" />
    </div>
    <Footer />
    </div>
  )
}
