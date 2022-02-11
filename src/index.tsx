import ReactDOM from 'react-dom';
import GuestList from './state/GuestList';

const App = () => {
    /* return 앞에 한줄 뛰기 하면 오류 생김 */
    return <div>

        <GuestList />
    </div>
};

ReactDOM.render(<App />, document.querySelector('#root'));