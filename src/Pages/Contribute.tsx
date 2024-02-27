import { useLocation } from "react-router-dom"
import Button from "../components/UI/Button"
import Textarea from "../components/UI/Textarea"

const ContributePage = () => {
  const {state} = useLocation()
  return (
    <div>
      <h2 className="text-center mb-3">Your Email: {state.email}</h2>
      <h2 className="text-center mb-3">Issue: 🐛 Bug Report</h2>
      <form className="space-y-3 max-w-sm mx-auto">
        <Textarea />
        <Button>Submit new issue</Button>
      </form>
    </div>
  )
}

export default ContributePage