import { useRouter } from "next/router"
import Works from "@components/works"
const works = () => {
  const router = useRouter()
  return <Works />
}

export default works
