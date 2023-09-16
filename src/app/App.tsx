import AppRouter from './providers/router/ui/AppRouter'
import { Navbar } from '@/widgets/Navbar'
import './styles/index.scss'

export const App = () => (
    <div className="app normal">
        <Navbar />
        <AppRouter />
    </div>
) 
