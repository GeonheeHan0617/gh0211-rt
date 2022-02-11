import ReactDOM from 'react-dom';
import GuestList from './state/GuestList';
/* import UserSearch from './state/UserSearch'; */
import EventComponent from './events/EventComponet';
import UserSearch from './refs/UserSearch';

const App = () => {
    /* return 앞에 한줄 뛰기 하면 오류 생김 */
    return (
        <div>
            <GuestList />
            <UserSearch />
            <EventComponent />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));