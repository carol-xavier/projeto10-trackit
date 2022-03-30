import {ThreeDots} from 'react-loader-spinner';
import axios from 'axios';
import HabitsPage from './HabitsPage';

function Table(props){
    const {habit, token, callback, callbackTable, load, callbackLoad} = props;
    const {name, days} = habit;

    function cleanTable(){
        callbackTable(false);
        callbackLoad(false);
    }

    function sendHabit(event) {
        event.preventDefault();
        callbackLoad(true);

        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';
        const object = {
            name,
            days
        }

        const promise = axios.post(URL, object, config);
        promise.then((response) => {
            const { data } = response;
            callback({ name: "", days: [] });
            callbackLoad(false);
            callbackTable(false);
            // HabitsPage();
            console.log("Habito criado", data);
        });

        promise.catch((err) => {
            console.log(err.response.statusText);
            callbackLoad(false);
            alert(`Não foi possível processar o hábito. ${err.response.statusText}`)
        })
    }

    return <form onSubmit={sendHabit}>
    <input required value={habit.name} placeholder="Nome do hábito" 
        onInput={e => callback({...habit, name: e.target.value})} disabled={load}/>
    <input required value={habit.days} type="text" 
        onInput={e => callback({...habit, days: [...days, e.target.value]})} disabled={load} />
    <div>
        <div onClick={cleanTable}>Cancelar</div>
        <button>{load ? 
            <ThreeDots color="#FFFFFF" width="51px" height="13px" /> : <div>Salvar</div>}
        </button>
    </div>
    </form>
}

export default Table; 