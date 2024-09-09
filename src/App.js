import logo from "./logo.svg";
import "./App.css";
import CommentsList from "./components/ComentsList";

function App() {
    return (
        <div className="App">
            <CommentsList title="Список комментариев" />
        </div>
    );
}

export default App;
