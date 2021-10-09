import { BrowserHistory, State } from 'history';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

declare const window:any;

window.renderDogs = (containerId: string, history: BrowserHistory<State> | undefined) => {
  ReactDOM.render(
    <App history={history}/>,
    document.getElementById(containerId)
  )
}

window.unmountCats = (containerId: string) => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId) as HTMLElement);
}

if(!document.getElementById('Dogs-container')) {
  ReactDOM.render(<App/>, document.getElementById('root'));
}