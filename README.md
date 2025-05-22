<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Portfólio Acadêmico</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>João da Silva</h1>
    <p>Estudante de Tecnologia | Desenvolvedor Web</p>
  </header>

  <nav>
    <ul>
      <li><a href="#educacao">Educação</a></li>
      <li><a href="#competencias">Competências</a></li>
      <li><a href="#projetos">Projetos</a></li>
    </ul>
  </nav>

  <section id="educacao">
    <h2>Educação</h2>
    <ul>
      <li><strong>2023 - Atual:</strong> ADS – FATEC SJC</li>
      <li><strong>2021 - 2022:</strong> Técnico em Informática – ETEC</li>
    </ul>
  </section>

  <section id="competencias">
    <h2>Competências Técnicas</h2>
    <ul>
      <li>HTML, CSS, JavaScript</li>
      <li>PHP e MySQL</li>
      <li>Git e GitHub</li>
    </ul>
  </section>

  <section id="projetos">
    <h2>Projetos Acadêmicos</h2>
    <div class="projeto">
      <h3>Site para Pizzaria</h3>
      <p>Site institucional com menu, galeria e painel de controle.</p>
      <button onclick="verProjeto('https://seuusuario.github.io/pizzaria')">Ver Projeto</button>
    </div>
  </section>

  <footer>
    <p>© 2025 João da Silva | <a href="mailto:joao@email.com">Contato</a></p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
