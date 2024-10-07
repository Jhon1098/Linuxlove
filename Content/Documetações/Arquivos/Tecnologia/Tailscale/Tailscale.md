# [<img src="https://seeklogo.com/images/T/tailscale-logo-86A0B25127-seeklogo.com.png" height="25">](https://tailscale.com)


Ótima VPN com zero configurações.

## O que é

O Tailscale é uma ferramenta de rede privada virtual (VPN) que visa simplificar e tornar mais seguro o acesso remoto a recursos de rede. 

## Para que server

Ele permite que você conecte dispositivos, servidores e serviços de forma segura através da internet, criptografando o tráfego entre eles. O Tailscale se destaca por sua facilidade de uso e configuração, além de oferecer recursos como acesso à rede local como se estivesse localmente conectado, mesmo através da internet. Ultilizando também a tecnologia Rede Mesh o que torna a deixar todos os dispositivos conectados e comunicativos entre si.

## O que precisa para usá-lo

Uma conta em uma das plataformas disponíveis, **Google, Microsoft, Github, Apple ou OIDC**.
Uma vez criado a conta, basta fazer login no dispositivo em que vão ser usados.


## Como instalar

Vou deixar um guia rápido para cada dispositivo suportado.

* **Linux**

Instale com um comando:

```bash
curl -fsSL https://tailscale.com/install.sh | sh
```

Conecte sua máquina à rede Tailscale e autentique em seu navegador:

```bash
sudo tailscale up
```

Você está conectado! Você pode encontrar seu endereço IPv4 Tailscale executando:

```bash
tailscale ip -4
```

* **Android**

1. Baixe e o aplicativo Tailscale na [Play Store](https://play.google.com/store/apps/details?id=com.tailscale.ipn)
2. Aceite as solicitações para instalar uma configuração VPN
3. Faça login com a sua conta

* **iOS (iPhone/iPad):**

1. Baixe e abra o aplicativo Tailscale [iOS](https://apps.apple.com/us/app/tailscale/id1470499037?ls=1)
2. Aceite as solicitações para instalar uma configuração VPN e permitir notificações push
3. Inscreva-se usando o endereço de e-mail da sua equipe

* **MacOS**

1. Baixe e abra o aplicativo Tailscale [macOS](https://apps.apple.com/ca/app/tailscale/id1475387142?mt=12) na App Store ou usando a ferramenta ```mas``` CLI
2. Siga o fluxo de integração do Tailscale, que o guiará na instalação da configuração do Tailscale VPN
3. Faça login com a sua conta

* **Windows**

1. Baixe e execute o instalador do [Windows](https://pkgs.tailscale.com/stable/tailscale-setup-latest.exe)
2. Clique em Login no ícone Tailscale agora na bandeja do sistema e autentique em seu navegador
3. Cadastre-se com o endereço de e-mail da sua equipe


## Rodando um Exit Node

**Windows:**

1. Baixe e instale o cliente Tailscale para Windows a partir do site oficial.
2. Após a instalação, o Tailscale deve iniciar automaticamente. Se não, você pode encontrá-lo no menu Iniciar ou na barra de tarefas.
3. Faça login com sua conta Tailscale.
4. No aplicativo Tailscale, você verá uma lista de dispositivos conectados e suas respectivas redes.
5. Clique no ícone de engrenagem ou nas configurações para acessar as configurações avançadas.
6. Encontre a opção para "Permitir nó de saída" ou "Exit Node" e ative-a.
7. Siga as instruções adicionais para configurar o nó de saída, se necessário.
8. Depois de configurado, seu dispositivo Windows funcionará como um nó de saída na rede Tailscale.

**macOS:**

1. Baixe e instale o cliente Tailscale para macOS a partir do site oficial.
2. Após a instalação, abra o aplicativo Tailscale.
3. Faça login com sua conta Tailscale.
4. No aplicativo Tailscale, você verá uma lista de dispositivos conectados e suas respectivas redes.
5. Clique no menu Tailscale na barra de menu (canto superior direito) e escolha "Configurações".
6. Dentro das configurações, encontre a opção para "Permitir nó de saída" ou "Exit Node" e ative-a.
7. Siga as instruções adicionais para configurar o nó de saída, se necessário.
8. Depois de configurado, seu dispositivo macOS funcionará como um nó de saída na rede Tailscale.

**Linux:**

1. No Linux, você pode instalar o Tailscale usando o gerenciador de pacotes específico da distribuição ou baixando diretamente do site oficial.
2. Após a instalação, você pode iniciar o serviço Tailscale e fazer login com sua conta Tailscale usando o comando `tailscale up`.
3. Você pode usar o comando `tailscale status` para verificar o status da conexão.
4. Para configurar um nó de saída, você pode usar a ferramenta de linha de comando `tailscale exit-node enable`.
5. Siga as instruções adicionais para configurar o nó de saída, se necessário.
6. Depois de configurado, seu dispositivo Linux funcionará como um nó de saída na rede Tailscale.

**Android:**

1. Baixe e instale o aplicativo Tailscale na Google Play Store.
2. Abra o aplicativo Tailscale após a instalação.
3. Faça login com sua conta Tailscale.
4. No aplicativo, toque no ícone de menu (três linhas horizontais) no canto superior esquerdo.
5. Selecione "Configurações".
6. Dentro das configurações, você deve encontrar a opção para "Permitir nó de saída" ou "Exit Node".
7. Ative esta opção.
8. Siga as instruções adicionais para configurar o nó de saída, se necessário.
9. Depois de configurado, seu dispositivo Android funcionará como um nó de saída na rede Tailscale.

**iOS (iPhone/iPad):**

1. Baixe e instale o aplicativo Tailscale na App Store.
2. Abra o aplicativo Tailscale após a instalação.
3. Faça login com sua conta Tailscale.
4. No aplicativo, toque no ícone de perfil (canto superior esquerdo) para acessar as configurações.
5. Selecione "Nodes" (Nós).
6. Encontre a opção para "Permitir nó de saída" ou "Exit Node".
7. Ative esta opção.
8. Siga as instruções adicionais para configurar o nó de saída, se necessário.
9. Depois de configurado, seu dispositivo iOS funcionará como um nó de saída na rede Tailscale.

___

Mais informações clique [aqui](https://tailscale.com/kb) (Contéudo em inglês).

___

### [<img src="https://avatars.githubusercontent.com/u/93058539?v=4" height="50" style="border-radius: 30%">](https://github.com/Jhon1098) **Escrito com ❤️ por Jhon1098** 