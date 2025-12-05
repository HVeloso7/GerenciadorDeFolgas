import logo from "./logo.png";
import "./App.css";
import CalendarComponent from "./CalendarComponent";

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>Gerenciar o tempo livre!</h1>
        <span className="user-name">Bem-vindo, Hélio</span>
      </header>

      <div className="content">
        <aside className="sidebar">
          <ul>
            <li>🏠 Início</li>
            <li>📅 Minhas Folgas</li>
            <li>🔄 Solicitar Troca</li>
            <li>📊 Relatórios</li>
          </ul>
        </aside>

        <main className="main-content">
          <h2>Suas Folgas do Mês</h2>

          <div className="calendar">
            <CalendarComponent />
          </div>
        </main>
      </div>

      <footer className="footer">
        &copy; 2025 Gerenciador de Folgas — Desenvolvido por Hélio Veloso
      </footer>
    </div>
  );
}

export default App;
