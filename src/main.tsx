import { createRoot } from 'react-dom/client'
import './components/App/App.scss';
import App from './components/App/App.tsx'
import {BrowserRouter} from "react-router";


// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
