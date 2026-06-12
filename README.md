# IS Help Landing Page

Landing page estática criada para auxiliar usuários da operação com orientações rápidas sobre WiFi, MyAhgora, Google Chat / People Chat, Kiosk de Autogestão e abertura de chamados para o time de IS (Internal System).

O objetivo do projeto é permitir que os usuários acessem as instruções por meio de QR Codes, principalmente pelo celular.

## Funcionalidades

- Layout responsivo para celular e desktop.
- Menu mobile com navegação por blocos.
- Navegação em abas/links no desktop.
- Troca de tema claro e escuro.
- Detecção automática do idioma do navegador.
- Seleção manual de idioma:
  - Português
  - Espanhol
  - Inglês
- Carrosséis de passo a passo com imagens.
- Seções explicativas para:
  - WiFi Meli-Guest
  - MyAhgora
  - Google Chat / People Chat
  - Possíveis falhas do MyAhgora
  - Possíveis falhas do Google Chat
  - Kiosk de Autogestão
  - Chamados / Jira SupportShipping

## Estrutura do projeto

```txt
.
├── index.html
├── style.css
├── script.js
├── _config.yml
└── assets/
    ├── img/
    └── logos/
```

## Como executar localmente

Abra o arquivo `index.html` diretamente no navegador.

Também é possível usar uma extensão como Live Server no VS Code para testar com recarregamento automático.

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie todos os arquivos do projeto para a branch `main`.
3. Acesse `Settings`.
4. Vá em `Pages`.
5. Em `Build and deployment`, selecione:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
6. Salve as configurações.
7. Aguarde o GitHub gerar o link do site.

## Domínio personalizado

Caso utilize um domínio próprio, configure o domínio em:

```txt
Settings > Pages > Custom domain
```

Depois, configure os registros DNS no provedor do domínio, como Namecheap, Cloudflare ou outro serviço utilizado.

## Imagens e logos

Os logos devem ficar em:

```txt
assets/logos/
```

Arquivos esperados:

```txt
logoMeliPortugues.png
logoMeliEspanhol.png
logoMeliIngles.png
```

As imagens dos tutoriais devem ficar em:

```txt
assets/img/
```

Enquanto os prints reais não forem adicionados, o projeto pode usar imagens de exemplo/placeholders.

## Observações

Este projeto é estático e não depende de backend, banco de dados ou servidor próprio.

Para manutenção, basta editar os arquivos HTML, CSS e JavaScript e enviar as alterações para o GitHub.
