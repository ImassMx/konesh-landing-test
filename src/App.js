import logo from './logo.svg';
import './App.css';

function App() {

  const submitForm = () => {
    document.getElementById("post-form").submit();
  }

  return (
    <div className="App">
      <form id="post-form" method="post" action='https://konesh_demo.asistenciasyseguros.com/promo'>
        <input type="hidden" name="licencia" value="123" />
        <input type="hidden" name="usuarioGerente" value="demo" />
        <input type="hidden" name="finVigenciaRenta" value="2023-05-25" />
      </form>

      <div style={{marginTop: '50px', fontSize: '24px'}}>
        <a href="javascript:;" onClick={submitForm}>
          Mandar información
        </a>
      </div>
    </div>
  );
}

export default App;
