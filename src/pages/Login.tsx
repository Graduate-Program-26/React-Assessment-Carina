import { LoginForm } from "@/components/Shadcn/login-form"
import { SignIn } from "@clerk/clerk-react"

export default function Login() {
  // Page to be used as search all github users and preview
  return (
    <div className="flex h-[80vh] items-center justify-center">
      {/* <LoginForm /> */}
      <SignIn routing="path" path="/login" />
    </div>
  )
}
