import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter} from 'react-router-dom';
import { Routercomponent } from './Routercomponent/Routercomp';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routercomponent/>
  </BrowserRouter>
)
