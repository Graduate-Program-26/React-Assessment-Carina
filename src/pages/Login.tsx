import { LoginForm } from "@/components/Shadcn/login-form"

export default function Home() {
  // Page to be used as search all github users and preview
  return (
    <div className="flex h-[80vh] items-center justify-center">
      <LoginForm />
    </div>
  )
}
