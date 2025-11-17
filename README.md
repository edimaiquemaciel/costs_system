# Costs - Sistema de Gerenciamento de Projetos

<div align="center">
  
  [![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-6.0.5-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
  [![JSON Server](https://img.shields.io/badge/JSON_Server-1.0.0-000000?style=for-the-badge)](https://github.com/typicode/json-server)
  [![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
</div>

## 📋 Sobre o Projeto

**Costs** é uma aplicação web completa e intuitiva para gerenciamento de projetos e controle de orçamento. Desenvolvida com React, permite criar, editar e monitorar projetos, adicionar serviços e acompanhar custos em tempo real, garantindo que seus projetos permaneçam dentro do orçamento planejado.

### ✨ Principais Funcionalidades

- ✅ **Criação de Projetos**: Defina nome, orçamento e categoria
- 📊 **Gestão de Orçamento**: Acompanhamento em tempo real dos gastos
- 🛠️ **Gerenciamento de Serviços**: Adicione e remova serviços vinculados aos projetos
- 📈 **Controle de Custos**: Validação automática para evitar estouros de orçamento
- 🎨 **Interface Intuitiva**: Design moderno e responsivo
- 💾 **Persistência de Dados**: API REST com JSON Server

## 🚀 Demonstração

[🔗 Ver Demonstração](https://costs-project-manager.vercel.app)

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React** 18.3.1 - Biblioteca para construção da interface
- **React Router DOM** 7.1.1 - Gerenciamento de rotas
- **React Icons** 5.4.0 - Biblioteca de ícones
- **Vite** 6.0.5 - Build tool e dev server
- **UUID** 11.0.3 - Geração de IDs únicos

### Backend
- **JSON Server** 1.0.0-beta.3 - API REST fake para desenvolvimento

### Dev Tools
- **ESLint** 9.17.0 - Linting de código
- **PropTypes** - Validação de tipos

## 📦 Instalação

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Passos

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/costs.git
cd costs
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Configure as variáveis de ambiente**

O projeto utiliza uma API REST hospedada no Render. Se desejar usar localmente:

- Crie um arquivo `db.json` na raiz do projeto com a estrutura:
```json
{
  "projects": [],
  "categories": [
    {"id": "1", "name": "Infra"},
    {"id": "2", "name": "Desenvolvimento"},
    {"id": "3", "name": "Design"},
    {"id": "4", "name": "Planejamento"}
  ]
}
```

- Atualize as URLs da API nos arquivos:
  - `src/components/pages/NewProject.jsx`
  - `src/components/pages/Projects.jsx`
  - `src/components/pages/Project.jsx`
  - `src/components/project/ProjectForm.jsx`

4. **Inicie o servidor de desenvolvimento**

Em um terminal:
```bash
npm run dev
# ou
yarn dev
```

Em outro terminal (para API local):
```bash
npm run backend
# ou
yarn backend
```

5. **Acesse a aplicação**

Abra seu navegador em: `http://localhost:5173`

## 📁 Estrutura do Projeto
```
costs/
├── public/
├── src/
│   ├── assets/           # Imagens e recursos estáticos
│   ├── components/
│   │   ├── form/         # Componentes de formulário
│   │   ├── layout/       # Componentes de layout
│   │   ├── pages/        # Páginas da aplicação
│   │   ├── project/      # Componentes relacionados a projetos
│   │   └── service/      # Componentes relacionados a serviços
│   ├── App.jsx           # Componente principal
│   ├── main.jsx          # Ponto de entrada
│   └── index.css         # Estilos globais
├── db.json               # Banco de dados JSON (para desenvolvimento local)
├── package.json
└── vite.config.js
```

## 💻 Scripts Disponíveis
```bash
# Inicia o servidor de desenvolvimento
npm run dev

# Inicia o backend JSON Server (local)
npm run backend

# Build de produção
npm run build

# Preview do build de produção
npm run preview

# Linting
npm run lint
```

## 🎨 Páginas

### Home
Página inicial com apresentação do sistema e call-to-action para criar projetos.

### Projetos
Listagem de todos os projetos cadastrados com opções de editar e excluir.

### Novo Projeto
Formulário para criação de novos projetos com:
- Nome do projeto
- Orçamento total
- Categoria

### Detalhes do Projeto
Visualização completa do projeto com:
- Informações gerais
- Orçamento vs. Custo utilizado
- Gerenciamento de serviços
- Edição de dados do projeto

### Empresa
Informações sobre a aplicação e seus objetivos.

### Contato
Formulário de contato e informações da empresa.

## 🔧 Funcionalidades Detalhadas

### Gestão de Projetos
- Criar projetos com nome, orçamento e categoria
- Editar informações do projeto
- Excluir projetos
- Visualizar resumo financeiro

### Gestão de Serviços
- Adicionar serviços ao projeto
- Definir custo por serviço
- Adicionar descrição detalhada
- Remover serviços
- Validação automática de orçamento

### Controle Financeiro
- Cálculo automático de custos totais
- Validação para evitar estouro de orçamento
- Visualização de orçamento disponível
- Histórico de gastos por serviço

## 🎯 Categorias de Projeto

- 🏗️ **Infra** - Projetos de infraestrutura
- 💻 **Desenvolvimento** - Projetos de software
- 🎨 **Design** - Projetos de design e UI/UX
- 📋 **Planejamento** - Projetos de planejamento estratégico

## 🌐 Deploy

O projeto está configurado para deploy no Vercel:

1. Conecte seu repositório ao Vercel
2. As configurações já estão definidas em `vercel.json`
3. Configure a URL da API backend (recomendado: Render, Railway ou Heroku)

## 🤝 Contribuindo

Contribuições são sempre bem-vindas!

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
