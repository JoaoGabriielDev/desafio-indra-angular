Sistema de Gerenciamento de Preços de Combustíveis

Descrição do Projeto

O Sistema de Gerenciamento de Preços de Combustíveis é uma solução robusta e eficiente, desenvolvida para facilitar o gerenciamento e a análise de dados relacionados aos preços de combustíveis. Este sistema foi criado utilizando Spring Boot no backend e Angular no frontend, com MySQL como banco de dados, para oferecer uma plataforma completa e integrada para empresas e profissionais do setor de combustíveis.

Funcionalidades Principais

Documentação Interativa: Acesso a uma documentação pública, disponível sem autenticação, para facilitar a compreensão e o uso da API. Operações CRUD: Gerenciamento completo de usuários e histórico de preços de combustíveis, permitindo criar, ler, atualizar e deletar dados com facilidade. Importação de Dados via CSV: Simplifica a entrada de grandes volumes de informações, agilizando o processo de gerenciamento de dados. Análise de Dados: Cálculo da média de preços de combustíveis por município, fornecendo insights detalhados sobre os padrões de preços regionais. Consultas Avançadas: Possibilidade de realizar consultas por sigla da região, agrupamento de dados por distribuidora e por data da coleta, além de obter o valor médio de compra e venda por município e por bandeira.

Entidades do Domínio

Usuários: Gerenciamento de contas de usuário que interagem com o sistema. Histórico de Preços de Combustíveis: Registro detalhado dos preços de compra e venda de combustíveis ao longo do tempo. Distribuidoras: Informações sobre as empresas que distribuem combustíveis. Regiões: Representação geográfica que permite consultas e análises baseadas em localização. Bandeiras: Classificação das marcas de combustíveis que facilitam a análise de mercado.

Tecnologias Utilizadas

Backend: Java 17 Spring Boot MySQL

Frontend: Angular 18 HTML5 & CSS3 TypeScript

Como Rodar o Projeto?

Pré-requisitos: Java 17 ou superior instalado Node.js e npm instalados (para o frontend) MySQL configurado

Instruções: Clone este repositório. Navegue até o diretório do backend e configure o banco de dados MySQL no arquivo application.properties. Execute o comando mvn spring-boot:run para iniciar o servidor backend. Navegue até o diretório do frontend e execute npm install para instalar as dependências. Execute ng serve para rodar a aplicação Angular. Acesse o sistema através do navegador em http://localhost:4200.

Contribuições

Contribuições são bem-vindas! Se você tem sugestões, melhorias ou correções, sinta-se à vontade para abrir uma issue ou submeter um pull request.

Licença Este projeto está licenciado sob a Licença MIT.
