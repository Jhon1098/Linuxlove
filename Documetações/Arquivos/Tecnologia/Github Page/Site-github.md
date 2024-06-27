# Criando um site com Github

 Nesse guia vou mostrar como você pode criar uma site "simples" sem gasta quase nada.
___

### 1. Criando sua conta

Se você ainda não tiver uma, crie uma conta gratuita no [Github](github.com).

### 2. Crie um Novo Repositório:

Faça login no GitHub e clique no botão "New" (Novo) para criar um novo repositório.

![Gitpages_1](/Documetações/Arquivos/Github%20Page/Imagens/Gitpages_1.png)

Nomeie o repositório, por exemplo "Meu site". Marque a opção "Initialize this repository with a README" (Inicializar este repositório com um README) e deixe como Public (público).

![Gitpages_2](/Documetações/Arquivos/Github%20Page/Imagens/Gitpages_2.png)

### 3. Clone o Repositório para o seu Computador:

Abra o terminal ou prompt de comando no seu computador e clone o repositório recém-criado usando o comando:

```bash
git clone https://github.com/seu_nome_de_usuário/Seu_repositório.git
```

### 4. Crie seu Site:

Crie os arquivos do seu site dentro do diretório clonado. Isso pode incluir arquivos HTML, CSS, JavaScript, imagens e outros recursos que você deseja que seu site exiba. 

Lembrando que pode ser feito tanto direto do seu computador pessoal quanto do próprio Github.

### 5. Faça o Commit e o Push dos Arquivos:

No terminal, navegue até o diretório do repositório clonado e adicione, faça o commit e faça o push dos arquivos para o repositório usando os seguintes comandos:

```bash
git add .
git commit -m "Adicionando meu site"
git push origin master
``` 

Ou se preferir pode usar o [Github Desktop](https://desktop.github.com/).

### 6. Ative o GitHub Pages:

No repositório do GitHub, vá para as configurações e role para baixo até encontrar a seção "Pages". ![GitPages_1](/Documetações/Arquivos/Github%20Page/Imagens/Gitpages_3.png)

![Gitpages_4](/Documetações/Arquivos/Github%20Page/Imagens/Gitpages_4.png)

 No menu suspenso "Source" (Origem), selecione "master branch" (ramo master). Isso indicará ao GitHub Pages que deve servir o conteúdo do seu site a partir do ramo master do seu repositório.

 ![Gitpages_5](/Documetações/Arquivos/Github%20Page/Imagens/Gitpages_5.png)

### 7. Acesse seu Site:

Após ativar o GitHub Pages e salvar as configurações, seu site estará disponível em ``https://seu_nome_de_usuário.github.io``. Pode levar alguns minutos até que o site seja acessível após a configuração inicial.

**Tadam 🎉 Seu site está criado.**

___ 

# Usando um Dominio personalizado

### 1. Adquira um Domínio:

Primeiro, você precisa adquirir um domínio. Existem vários registradores de domínio disponíveis onde você pode comprar um, como GoDaddy, Namecheap, Google Domains, entre outros. 

Ou você pode usar o [Duckdns](https://linuxlove.duckdns.org/Documeta%C3%A7%C3%B5es/doc.html) no qual eu fiz uma documentação, sem gasta um real.

### 2. Configure o Domínio:

Após adquirir o domínio, acesse o painel de controle do seu registrador de domínio e encontre a seção de configurações DNS (Domain Name System). Aqui, você precisará configurar registros DNS para direcionar o domínio para o GitHub Pages.

### 3. Adicione um Registro CNAME/IP:

Crie um registro CNAME apontando o seu domínio personalizado para <seu_nome_de_usuário>.github.io. Se o seu domínio é por exemplo seusite.com, você deve configurar um registro CNAME com o host www apontando para <seu_nome_de_usuário>.github.io.

Se você for usar o Duckdns, basta adicionar o Ip do github no lugar de "ip address":

![Gitpages_6](/Documetações/Arquivos/Github%20Page/Imagens/Gitpages_6.png)

Lista de ips [aqui](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

### 4. Configurar o GitHub

Agora, vá para o repositório do seu GitHub Pages.

1. No repositório, clique em "Settings".
2. Role para baixo até encontrar a seção "GitHub Pages".
3. Em "Custom domain", insira o seu domínio personalizado (por exemplo, "www.seudominio.com").
4. Clique em "Save".

### 5. Verificação

Após fazer todas as configurações, pode levar um tempo até que as alterações de DNS se propaguem completamente. Isso pode variar de alguns minutos a algumas horas, às vezes até mais. Você pode verificar a propagação do DNS usando ferramentas online.

### 6. Teste

Depois que a propagação do DNS estiver completa, teste acessando seu site usando o domínio personalizado para garantir que tudo esteja funcionando corretamente.

🎉 **Agora você tem seu próprio site sem gastar quase nada.**  🎉

___

### [<img src="https://avatars.githubusercontent.com/u/93058539?v=4" height="50" style="border-radius: 30%">](https://github.com/Jhon1098) **Escrito com ❤️ por Jhon1098** 