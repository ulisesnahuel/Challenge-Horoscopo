import { ArrowLeft } from 'lucide-react'
import { Link} from "react-router-dom";


interface HeaderProps {
  title: string
  showBack?: boolean
  backUrl?: string
}

export function Header({ title, showBack = true, backUrl = "/" }: HeaderProps) {
  return (
    <header className="bg-sky-700 text-white p-4 flex items-center gap-4 w-full">
      {showBack && (
        <Link to={backUrl} className="rounded-full bg-sky-800 p-2 mr-4"> 
          <ArrowLeft className="h-6 w-6" />
        </Link>
      )}
      <h1 className="text-2xl font-bold ml-auto mr-4">{title}</h1> 
    </header>
  )
}



