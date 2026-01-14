import "./App.css";
import CalendarComponent from "./CalendarComponent";
import logo from "./logo.png"; // se não for usar, pode remover

function App() {
  const menuItems = [
    { label: "Início", icon: "🏠" },
    { label: "Minhas Folgas", icon: "📅" },
    { label: "Solicitar Troca", icon: "🔄" },
    { label: "Relatórios", icon: "📊" },
  ];

  const activeItem = "Minhas Folgas"; // exemplo (depois você liga isso ao React Router)

  return (
    <div className="app-container">
      <header className="header">
        <div className="header-left">
          {/* Se quiser mostrar logo, descomente */}
          {/* <img className="brand-logo" src={logo} alt="Gerenciador de Folgas" /> */}
          <h1>Gerenciar o tempo livre!</h1>
        </div>

        <div className="header-right">
          {/* avatar simples (iniciais) — não precisa de imagem */}
          <div className="user-avatar-badge" aria-hidden="true">
            HV
          </div>
          <span className="user-name">
            Bem-vindo, Hélio <span className="chev">▾</span>
          </span>
        </div>
      </header>

      <div className="content">
        <aside className="sidebar" aria-label="Menu principal">
          <ul>
            {menuItems.map((item) => (
              <li
                key={item.label}
                className={item.label === activeItem ? "active" : ""}
                aria-current={item.label === activeItem ? "page" : undefined}
              >
                <span className="nav-ico" aria-hidden="true">
                  {item.icon}
                </span>
                <span className="nav-text">{item.label}</span>
              </li>
            ))}
          </ul>
        </aside>

        <main className="main-content">
          {/* painel/card grande (combina com o CSS que te enviei) */}
          <section className="panel">
            <div className="page-header">
              <div>
                <h2>Suas Folgas do Mês</h2>
                <p className="page-subtitle">
                  Visualize suas folgas, navegue pelo calendário e organize suas trocas.
                </p>
              </div>

              {/* espaço pra futuros botões (ex: "Solicitar folga", "Exportar") */}
              <div className="page-actions">
                {/* <button className="btn">Nova solicitação</button> */}
              </div>
            </div>

            <div className="calendar">
              <CalendarComponent />
            </div>
          </section>
        </main>
      </div>

      <footer className="footer">
        &copy; 2025 Gerenciador de Folgas — Desenvolvido por Hélio Veloso
      </footer>
    </div>
  );
}

export default App;
