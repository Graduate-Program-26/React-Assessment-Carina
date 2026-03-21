import { SignIn } from "@clerk/clerk-react"

export default function Login() {
  return (
    <div className="flex h-[80vh] items-center justify-center">
      <SignIn routing="path" path="/login" />
    </div>
  )
}
