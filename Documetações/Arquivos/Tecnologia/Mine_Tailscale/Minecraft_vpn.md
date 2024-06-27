# [<img src="https://logos-world.net/wp-content/uploads/2020/05/Minecraft-Logo-700x394.png" height="80">](https://www.minecraft.net/pt-br)
# Jogue minecraft em qualquer lugar do mundo

Mostrarei como você pode criar um servidor de minecraft auto-hospedado em sua casa e pode jogar com seus amigos de qualquer lugar do mundo sem abrir portas na sua rede e com muito mais segurança e diversão.

## Requisitos

1. Um computador (Não precisar ser um mega pc)
2. Uma distro Linux (ou outro sistema que rode docker)
3. Docker e Docker-compose 
4. Uma conta no Tailscale
5. Uma conta na Microsoft

## Passo a passo

**1. Passo: Distro Linux**

Nessa documentação irei usar o [Debian](www.debian.org) 12, se você queira usar alguma distro diferente pode usar sem medo, porque tudo aqui será rodado via containers docker, podendo ser rodado até no windows.

**2. Instalando o Docker**

1. Primeiro instale os repositorios e a chave GPG.
```bash
 # Add Docker's official GPG key:
 sudo apt-get update
 sudo apt-get install ca-certificates curl
 sudo install -m 0755 -d /etc/apt/keyrings
 sudo curl -fsSL https://download.docker.com/linux/debian/gpg -o /etc/apt/keyrings/docker.asc
 sudo chmod a+r /etc/apt/keyrings/docker.asc
 # Add the repository to Apt sources:
 echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/debian \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
 sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
 sudo apt-get update
```

2. Depois instale o docker em si.

```bash
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

3. Por final verifique se ele foi instalado com sucesso rodando esse comando:

```bash
sudo docker run hello-world
```


Se tudo ocorreu como deveria podemos passar para a próxima parte.

**3. Criando um Conta no Tailscale e Microsoft**

**Na Microsoft:**

Acesse e link [Microsoft](https://www.microsoft.com/pt-br), após acessado você só vai precisar de um e-mail e uma senha.


**No Tailscale:**

Você consegue criar sua conta usando um desses: **Google, Microsoft, Github, Apple ou OIDC**.

OBS: Você pode até mesmo usar a própria conta da Microsoft para fazer login no Tailscale

**4. Criando os containers docker**

**Tailscale:**

Vamos usar um modelo já pronto para agilizar o processo:
```yml
services:
    "Name":
        image: tailscale/tailscale:latest
        hostname: "Name"
        environment:
          - TS_AUTHKEY="tskey-auth-" # chave de autenticação do tailscale
          - TS_STATE_DIR=/var/lib/tailscale
        volumes:
          - "/volume/tailscale/var/":/var/lib/tailscale
          - "/volume/tailscale/dev/net/tun":/dev/net/tun
        network_mode: host
        cap_add:
          - net_admin
          - sys_module
        restart: unless-stopped
```

Nesse arquivo só basta mudar aonde estão as aspa (""), mude o "Name" para o nome que você quiser, o "tskey-auth-" pela chave de acesso (Mostrarei daqui a pouco) e "Volumes" pelo o local onde você quer deixar armazenados os seu dados.

**Obtendo a chave de acesso Tailscale**

1. Após fazer login na sua conta do Tailscale, vá para a opção "Settings" ou "Configs" no canto superior direito na tela inicial abaixo da sua foto de perfil.
2. Vá ate a opção "Keys".
3. Clique em "Generate auth key...".
4. Coloque um nome na "Description".
5. Coloque 2 dias na opção "Expiration"

(Não se preocupe com essa opção, ela só vai ser usada para auto expirar a chave se ela não for usada, logo após o primeiro uso ela se expirar sozinho).

6. Depois clique em "Generate Key".
7. Após criado troque a opção "tskey-auth-" do arquivo de configurações por ela.

Essa chave será usada apenas para a autorização do servidor para se conectar a sua conta Tailscale.

**Minecraft**

Vamos usar um modelo já pronto para agilizar o processo:
```yaml
services:
    "Name":
        container_name: "Name"
        environment:
            - EULA=TRUE
            - ONLINE_MODE=false # para poder jogar sem precisar de uma conta na microsoft
        ports:
            - 19132:19132/udp
        restart: unless-stopped
        image: itzg/minecraft-bedrock-server
        volumes:
            - "/volume/minecraft/data":/data
```


Nesse arquivo só basta mudar aonde estão as aspa (""), mude o "Name" para o nome que você quiser e "Volumes" pelo o local onde você quer deixar armazenados os seu dados.

Para adicionar configurações como se fosse no ```server.properties``` coloque abaixo da opção "environment", para saber o que cada comando faz e qual habilitar acesse **[aqui](https://minecraft.fandom.com/wiki/Server.properties#Bedrock_Edition_3)**.

**5. Rodando os Containers**

Após ter configurado todos os dois arquivos da maneira correta crie duas pasta, uma para o Minecraft e o outro para o Tailscale, afim de organização. Todos os dois arquivos devem ser nomeados para ```docker-compose.yml```, por esse motivo precisamos criar duas pasta, devido ao "Docker-compose" só ler um arquivo com esse nome por pasta (Se você quiser fazer o teste ou tem mais experiência com docker de rodar os dois container tudo em um arquivo, pode fazer).

**6. Se conectando ao servidor**

Após ter conseguindo fazer os containers rodarem: 
1. Faça login na Tailscale no disposito que contenha o cliente do minecraft para assim poder se conectar ao servidor. 
2. Feito o login procure pelo IP do seu servidor no serviço da Tailscale. 
3. Conseguindo obter o Ip do seu servidor, entre no Minecraft.
4. Faça login com sua conta Microsoft no Minecraft.
5. Acesse a página de Servidores e adicione seu servidor com um Nome, IP e Porta.
6. Verifique à conexão

Se tudo ocorre como deveria, agora você tem um servidor de Minecraft para poder jogar da onde você quiser. 🎉 

Para poder jogar com seus amigos é só compartilhar a conexão do Tailscale com eles. Tanto passando sua conta para eles (Método não tão seguro) ou adicionar eles por meio dos conviter da Tailscale (Mais seguro), na opção "User" e "Invite users", enviando o convite via e-mail ou por um link. Para eles se conectarem por meio desse link basta eles também terem uma conta no Tailscale. Esse método depende de qual plano do Tailscale você usa, se for o plano grátis você só pode adicionar até três contas, a partir do plano "Starter" você tem usuários ilimitado.

#

### [<img src="https://avatars.githubusercontent.com/u/93058539?v=4" height="50" style="border-radius: 30%">](https://github.com/Jhon1098) **Escrito com ❤️ por Jhon1098** 