import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>Manage Time Off</h1>
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
            <p>
              Aqui ficará o calendário com as suas folgas.
              <br />
              (Você poderá clicar em um dia para solicitar troca.)
            </p>
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
