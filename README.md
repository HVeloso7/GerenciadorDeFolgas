# 🗓️ Gerenciador de Folgas

🔗 **Acesse o projeto:**  
👉 https://gerenciador-de-folgas.vercel.app

---

## 🧠 Sobre o Projeto

O **Gerenciador de Folgas** é um sistema web em desenvolvimento criado para **organizar, visualizar e gerenciar folgas, escalas e trocas de turno** de colaboradores em uma empresa.

O sistema tem como objetivo:
- Facilitar o **controle de escalas**
- Reduzir **conflitos de agenda**
- Apoiar o **cumprimento da legislação trabalhista**
- Centralizar solicitações e aprovações em um único ambiente

O projeto foi idealizado com uma **arquitetura escalável**, separando responsabilidades entre **Administrador, Gestor e Colaborador**.

---

## 👥 Perfis de Usuário

### 👤 Colaborador
- Visualiza suas escalas e folgas
- Solicita folgas
- Solicita troca de turnos
- Acompanha o status das solicitações
- Visualiza calendário (dia, semana e mês)
- Atualiza foto e dados do perfil

### 🧑‍💼 Gestor
- Cadastra colaboradores
- Define escalas de trabalho
- Aprova ou rejeita:
  - Solicitações de folga
  - Solicitações de troca
- Visualiza o calendário geral da equipe
- Gera relatórios gerenciais

### 👑 Administrador
- Gerencia gestores do sistema
- Controla permissões e acessos

---

## ✨ Funcionalidades

### 📅 Calendário Interativo
- Visualização por **dia, semana e mês**
- Exibição de:
  - Escalas de trabalho
  - Pausas
  - Folgas
- Navegação entre períodos

### 🔐 Autenticação
- Cadastro de colaborador feito pelo gestor
- Primeiro acesso via link enviado por e-mail
- Criação de senha segura com regras de complexidade
- Login com e-mail e senha
- Logout seguro

### 🔄 Gestão de Folgas e Trocas
- Solicitação de folga pelo colaborador
- Solicitação de troca entre colaboradores
- Aprovação ou rejeição pelo gestor
- Atualização automática do calendário

---

## 🧩 Tecnologias Utilizadas

| Camada | Tecnologias |
|------|-------------|
| ⚛️ Front-end | React JS, HTML5, CSS3, JavaScript (ES6+) |
| 📅 UI | FullCalendar |
| 🔌 Comunicação | Axios |
| 🖥️ Back-end (planejado) | Java + Spring Boot, API REST, JWT |
| 💾 Banco de Dados (planejado) | MySQL |
| 🛠️ DevOps | Git, GitHub, Vercel |

---

## 🗂️ Modelagem do Sistema

- Modelagem de dados com:
  - Usuários (Admin, Gestor, Colaborador)
  - Escalas
  - Folgas
  - Trocas
  - Tokens de primeiro acesso
- Regras de negócio bem definidas
- Base preparada para crescimento e integrações futuras

---

## 🚀 Status do Projeto

🔹 **Status atual:**  
✅ Interface principal (Home)  
✅ Estrutura de perfis e requisitos funcionais  
✅ Calendário interativo integrado  
🔧 Em evolução contínua  

### 🔜 Próximas Etapas
1️⃣ Finalizar regras do calendário (cores, tipos de evento)  
2️⃣ Implementar autenticação e autorização  
3️⃣ Desenvolver API REST com Spring Boot  
4️⃣ Integrar banco de dados MySQL  
5️⃣ Criar dashboard do gestor  
6️⃣ Implementar notificações por e-mail  

---

## 🧑‍💻 Autor

**Hélio Veloso**  
🎓 Estudante de **Engenharia de Software** — Anhanguera Educacional  
💼 Em transição para a área de Tecnologia  
❤️ Apaixonado por **programação, sistemas e soluções criativas**

🔗 LinkedIn:  
https://www.linkedin.com/in/hélio-vianey-carreiro-veloso-filho-a6b756228  

📧 E-mail:  
helioveloso9@gmail.com

---

## 🤝 Contribuições

Este projeto está em constante evolução 🚀  
Sugestões, correções e melhorias são muito bem-vindas!

- Abra uma **issue**
- Envie um **pull request**
- Dê feedback 💡
