export default function getPostApi(_req, res) {
  return res.status(200).json({
    id: 1,
    title: "Primeiros passos com o Git",
    subtitle: "O mínimo que um dev precisa saber para trabalhar com Git",
    body: `<p><strong>O que &eacute; o Git ?</strong><br />
    <br />
    Git &eacute; o sistema de controle de vers&atilde;o para software mais usado no mundo, ele foi feito para ajudar no controle de vers&atilde;o de projetos pequenos e grandes.<br />
    <br />
    <strong>Qual problema o Git resolve ?</strong></p>
    
    <p>&nbsp;</p>
    
    <p>Antes do Git sinceramente n&atilde;o tenho id&eacute;ia de como as pessoas controlavam a vers&atilde;o do software kkkkkk acredito que criavam o arquivo com o nome projeto_v1.js, depois quando havia alguma mudan&ccedil;a ou nova vers&atilde;o alteravam o nome do arquivo para projeto_v2.js pra poder ter acesso &agrave;s diferentes vers&otilde;es... e como era quando mais de um desenvolvedor queria trabalhar no mesmo projeto ? ser&aacute; que eles mandavam o projeto por email um pro outro depois que tivessem feito alguma mudan&ccedil;a ? nossa n&atilde;o consigo imaginar como eles faziam...<br />
    <br />
    <strong>Primeiros passos com o Git</strong><br />
    <br />
    Existem v&aacute;rias ferramentas para trabalhar com o Git, mas para facilitar vamos usar o Github e a linha de comando, ok ? para prosseguir voc&ecirc; j&aacute; deve ter criado uma conta no github.com... depois que estiver logado no Github voc&ecirc; vai perceber que no canto superior direito existem alguns &iacute;cones como na imagem abaixo ...</p>
    
    <p><img src="/images/github.png" style="border-radius:10px; height:124px; margin:10px 0; width:334px" /></p>
    
    <p>Clique no simbolo de +&nbsp; e depois em &quot;novo reposit&oacute;rio&quot;... aparecer&aacute; uma tela onde voc&ecirc; poder&aacute; definir o nome do reposit&oacute;rio... vamos usar o nome de tutorial-git ap&oacute;s isso existem campos opcionais que neste tutorial n&atilde;o vamos preencher... clique no bot&atilde;o &quot;criar reposit&oacute;rio&quot;</p><br/>
    
    <p>Meus parab&eacute;ns, voc&ecirc; criou o seu primeiro reposit&oacute;rio no Github ! agora vamos colocar arquivos nele, pra isso crie uma pasta no seu computador, onde desejar, pode ser na &aacute;rea de trabalho ou em qualquer outro lugar... de o nome de &quot;tutorial-git&quot; pra essa pasta... <br/><br/>voc&ecirc; pode abrir essa pasta com o seu editor de texto favorito como vscode, sublime ou o que preferir e criar dentro desta pasta um arquivo qualquer... pode ser um arquivo teste.js ou um arquivo em qualquer linguagem de programa&ccedil;&atilde;o que preferir. depois de criar o arquivo abra o terminal na pasta &quot;tutorial-git&quot; que criamos... para come&ccedil;armos a usar o Git e termos o controle de vers&atilde;o desse projeto que criamos n&oacute;s devemos rodar o seguinte comando no terminal:<br /><br />
    <div class='code-bg'>git init</div> &nbsp;</p><br />
    
    <p>Ap&oacute;s esse comando n&oacute;s devemos rodar um outro comando para definir quais arquivos n&oacute;s queremos que sejam versionados... no nosso caso queremos que todos os arquivos da pasta &quot;tutorial-git&quot; sejam versionados, ent&atilde;o podemos rodar o seguinte comando:<br /><br />
    <div class='code-bg'>git add .</div></p><br />
    
    <p>Esse comando vai adicionar todos os arquivos ao git para que possam ter um controle de vers&atilde;o .</p>
    
    <p>Podemos salvar no hist&oacute;rico do Git cada modifica&ccedil;&atilde;o, adi&ccedil;&atilde;o ou remo&ccedil;&atilde;o de um arquivo com o comando git commit... rode o seguinte comando no terminal:<br /><br />
    <div class='code-bg'>git commit -m &quot;Esse &eacute; o meu primeiro commit !!!&quot;</div><br />
    &nbsp;</p>
    
    <p>Esse comando recebe um par&acirc;metro -m que significa mensagem, no nosso caso a mensagem vinculada ao nosso commit foi&nbsp;&quot;Esse &eacute; o meu primeiro commit !!!&quot;</p><br />
    
    <p><strong>Branches</strong></p><br />
    
    <p>Branches, do Ingl&ecirc;s &quot;ramos&quot; s&atilde;o uma forma de separarmos o nosso c&oacute;digo em vers&otilde;es diferentes... digamos que estamos trabalhando em uma equipe de tres pessoas, cada uma delas tem uma tarefa diferente, mas todas trabalham no mesmo projeto... ent&atilde;o, cada uma delas vai criar uma branch e trabalhar nessa branch para entregar a funcionalidade exigida... uma delas vai fazer o cabe&ccedil;alho de um site, outra o rodap&eacute; e outra vai trabalhar na constru&ccedil;&atilde;o de um carrossel de imagens que fica na p&aacute;gina inicial. S&atilde;o 3 pessoas trabalhando em partes diferentes de um mesmo projeto... cada uma usa uma branch diferente, depois o trabalho &eacute; unificado pra entregar o site completo com o cabe&ccedil;alho, o rodap&eacute; e o carrossel de imagens.&nbsp;</p>
    
    <p>Por padr&atilde;o as branches vem com o nome de master, por&eacute;m podemos mudar esse nome para &quot;main&quot; com o seguinte comando no terminal:<br /><br />
    <div class='code-bg'>git branch -M main</div></p><br />
    
    <p>Depois de renomearmos a nossa branch para main devemos vincular o c&oacute;digo que est&aacute; na nossa m&aacute;quina ao reposit&oacute;rio que criamos no Github. Pra isso rodamos o seguinte comando no terminal:</p><br />
    
    <div class='code-bg'>git remote add origin https://github.com/KeysiJones/tutorial-git.git</div>
    
    <br /><br /><p>Notem que o nosso comando adiciona a origem passando o nosso nome de usu&aacute;rio/nome do reposit&oacute;rio... o meu usu&aacute;rio &eacute; KeysiJones, aqui voc&ecirc;s trocam para o seu usu&aacute;rio/nome do seu projeto</p>
    
    <p>Se o meu usu&aacute;rio fosse guilherme-dev e o nome do meu reposit&oacute;rio fosse tutotial-git eu rodaria o seguinte comando no terminal para vincular o meu c&oacute;digo ao meu reposit&oacute;rio:<br />
    &nbsp;</p>
    
    <p><div class='code-bg'>git remote add origin https://github.com/guilherme-dev/tutorial-git.git </div></p><br />
    
    <p>Depois de rodarmos esse comando o nosso projeto j&aacute; est&aacute; vinculado ao reposit&oacute;rio do Github ! agora basta mandarmos os nossos arquivos pra l&aacute; !<br /><br />
    Antes de mandarmos o nosso arquivo pra l&aacute;, vamos adicionar c&oacute;digo nele... pode ser qualquer comando, como por exemplo console.log(&quot;Ol&aacute; mundo !&quot;) ou qualquer c&oacute;digo na linguagem que voc&ecirc; preferir... para este exemplo estamos usando Javascript porque roda no navegador sem precisar instalar nada...<br />
    <br />
    Digamos que no in&iacute;cio do tutorial n&oacute;s criamos o arquivo teste.js... ent&atilde;o agora vamos abrir o arquivo teste.js e colocar o comando console.log(&quot;Ol&aacute; mundo !&quot;) s&oacute; para n&atilde;o enviar o arquivo vazio...<br />
    &nbsp;</p>
    
    <p>Perfeito ! estamos quase l&aacute; ! agora falta enviar os nossos arquivos para o Github... pra isso rodamos o seguinte comando no terminal:<br />
    &nbsp;</p>
    
    <div class='code-bg'>git push -u origin main</div><br /><br />
    
    <p>Meus parab&eacute;ns !! voc&ecirc; conheceu comandos essenciais do Git e subiu os seus arquivos para o Github ! v&aacute;rias pessoas poder&atilde;o ver o seu c&oacute;digo e interagir com ele !<br />
    &nbsp;</p>
    
    <p>&nbsp;</p>
    `,
  });
}
