import { RedirectToSignIn, useAuth } from "@clerk/clerk-react"
import { Layout } from "lucide-react"
import { useLocation } from "react-router-dom"
import { Spinner } from "../Shadcn/spinner"
function ProtectedLayout() {
  /* isLoaded = true, isSignedIn = true: safe to render protected content and make authenticated calls.
  isLoaded = true, isSignedIn = false: safe to redirect to sign‑in. */
  const { isLoaded, isSignedIn } = useAuth()
  const location = useLocation()
  if (!isLoaded) return <Spinner />
  if (!isSignedIn) {
    return (
      // TODO: Write notes explaining redirectUrl logic
      <RedirectToSignIn redirectUrl={location.pathname + location.search} />
    )
  }
  //   TODO: Add protected layout wrapper component or change navbar
  return (
    <div>
      <Layout />
    </div>
  )
}

export default ProtectedLayout
