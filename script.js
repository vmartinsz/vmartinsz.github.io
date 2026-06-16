const translations = {
  pt: {
    brandSubtitle: 'Guia rápido para operação', navHome: 'Início', navWifi: 'WiFi', navMyAhgora: 'MyAhgora', navGoogleChat: 'Google Chat', navMyAhgoraErrors: 'Erros MyAhgora', navGoogleErrors: 'Erros Google Chat', navSelfService: 'Autogestão', navTickets: 'Chamados', themeButton: 'Tema',
    heroEyebrow: 'Suporte rápido para operação', heroTitle: 'Problemas com MyAhgora, Google Chat, WiFi ou tecnologia?', heroText: 'Este guia ajuda você a resolver os problemas mais comuns ou entender quando pedir apoio ao seu TL ou PS para abertura de chamado ao time de IS.', heroBtnMyAhgora: 'Ajuda com MyAhgora', heroBtnGoogleChat: 'Ajuda com Google Chat', quickAccessTitle: 'Acesso rápido', quickWifi: 'Conectar na Meli-Guest', quickMyAhgoraErrors: 'Falhas MyAhgora', quickGoogleErrors: 'Falhas Google Chat', quickSelfService: 'Trocar senha / código',
    wifiTitle: 'Conecte-se à rede Meli-Guest', wifiIntro: 'É muito importante estar conectado ao WiFi Meli-Guest. O aplicativo MyAhgora só irá funcionar conectado nessa rede.', wifiStepsTitle: 'Passo a passo', wifiStep1: 'Selecione a rede WiFi Meli-Guest.',
    wifiStep2: 'Preencha nome, e-mail e aceite os termos.',
    wifiStep3: 'No campo Palavra Chave (Passphrase), digite: <strong>Meli@Guest</strong>.',
    wifiStep4: 'Finalize o registro e aguarde a conexão.', wifiDnsTitle: 'Erro de DNS?', wifiDnsText: 'Alguns celulares ficam com DNS manual configurado. Coloque o DNS em automático. Se tiver dúvidas ou problemas de conexão, peça para seu TL ou PS abrir um chamado para o time de IS.', imagePlaceholder: 'Substitua esta imagem pelo print explicativo.',
    myTitle: 'Como acessar o MyAhgora', myIntro: 'O MyAhgora é o aplicativo utilizado para controle e manuseio de ponto.', myStep1: 'Procure por MyAhgora na Play Store, App Store ou outra loja de aplicativos.', myStep2: 'Baixe o aplicativo e certifique-se de estar conectado na Meli-Guest.', myStep3: 'Ao abrir o app, clique em <strong>ACESSO VIA SSO</strong>, abaixo do botão de entrar.', myStep4: 'Digite seu e-mail do Mercado Livre.', myStep5: 'Quando aparecerem duas opções de código, clique na <strong>primeira opção</strong>.', myStep6: 'Na página de login do Mercado Livre, informe seu <strong>usuário</strong> e senha. É o mesmo usuário e senha utilizados no Handheld ou WMS.', myImportant: 'Qualquer erro dentro do MyAhgora, após o login, deve ser tratado pelo People Chat.', myErrorButton: 'Ver possíveis falhas do MyAhgora',
    chatTitle: 'Como acessar o Google Chat / People Chat', chatIntro: 'O Google Chat é importante para comunicação com o time e para acessar o People Chat, usado em dúvidas de RH, benefícios, atestados, holerite e atendimento.', chatStep1: 'Baixe o Google Chat pela Play Store, App Store ou outra loja de aplicativos.', chatStep2: 'Abra o app e toque no ícone do canto superior direito, onde aparece sua foto, letra ou avatar.', chatStep3: 'Toque em adicionar outra conta.', chatStep4: 'Aceite os termos do Google quando solicitado.', chatStep5: 'Digite seu e-mail do Mercado Livre, não seu e-mail pessoal.', chatPeopleTip: 'Para falar com um atendente no People Chat, escreva: <strong>Falar com um atendente</strong>. Se o bot responder outra coisa, envie a mesma mensagem novamente até ele pedir o contexto.', chatErrorButton: 'Ver possíveis falhas do Google Chat',
    myErrorsTitle: 'Possíveis falhas do MyAhgora', myErrorsIntro: 'Confira os erros mais comuns e o que fazer em cada caso.', exampleTitle: 'Exemplo de mensagem', myError1Title: '“Aconteceu um erro, tente novamente mais tarde”', myError1Text: 'Espere 24 horas. Caso o erro persista, envie mensagem ao People Chat pedindo para falar com um atendente.', myError1Example1: 'Primeira mensagem: “Falar com um atendente”.', myError1Example2: 'Após o bot pedir contexto: “Ao tentar acessar o aplicativo do MyAhgora, aparece a mensagem: Aconteceu um erro, tente novamente mais tarde”.', myError2Title: 'Erro relacionado a usuário e senha', myError2Text: 'Verifique se está usando o usuário do Handheld ou WMS, não o e-mail. Se o usuário estiver correto, ele aparecerá na parte superior ao digitar a senha. Confira também todos os caracteres da senha.', myError2Action: 'Se mesmo assim não funcionar, troque sua senha no kiosk de autogestão do seu CAD.', goSelfService: 'Ir para autogestão', myError3Title: 'Não aparece o espelho de pontos', myError3Text: 'Espere 24 horas. Caso o erro persista, envie mensagem ao People Chat pedindo para falar com um atendente.', myError3Example: '“Meu MyAhgora está sem acesso ao espelho de pontos”.', askTicketNote: 'Caso tenha dúvidas ou outro erro, peça para seu TL ou PS abrir um chamado para o time de IS.',
    googleErrorsTitle: 'Possíveis falhas do Google Chat', googleErrorsIntro: 'Veja os problemas mais comuns durante o acesso ao Google Chat e People Chat.', googleError1Title: '“Não foi possível fazer o login”', googleError1Text: 'Geralmente ocorre após troca de senha e está relacionado ao código de oito dígitos. Vá até o kiosk de autogestão do seu CAD, gere o código de 8 dígitos do Google e tente novamente.', googleError2Title: 'Verificação de duas etapas', googleError2Text: 'Gere o código de 8 dígitos do Google no kiosk de autogestão. O código não é permanente e expira, então gere outro se necessário.', googleError3Title: 'People Chat não aparece no Google Chat', googleError3Text: 'O chat só aparece para usuários Meli. Pesquise por People Chat e, se aparecer o botão de instalar, instale. Se não aparecer e você for usuário Meli, aguarde 24 horas e tente novamente. Caso continue, peça para seu TL enviar e-mail para melihelp.support@mercadolibre.com.', googleError4Title: 'Erro relacionado a e-mail e senha', googleError4Text: 'Confira se o e-mail do Mercado Livre está correto e se a senha foi digitada com todos os caracteres. Se não funcionar, troque a senha no kiosk de autogestão.',
    selfServiceTag: 'Autogestão', selfServiceTitle: 'Kiosk de autogestão', selfServiceIntro: 'Use o kiosk do seu CAD para trocar senha, gerar código de 8 dígitos do Google ou desbloquear usuário.', passwordTitle: 'Como trocar senha', passwordText: 'Escaneie seu crachá no kiosk, acesse Gestão de Perfil e clique em Cambio de contrasena. Informe CPF, responda a pergunta de segurança e crie uma senha com no mínimo 8 caracteres, letra maiúscula, letra minúscula, números e caracteres especiais. Não utilize nome, sobrenome ou meses do ano.', codeTitle: 'Como gerar código de 8 dígitos', codeText: 'Escaneie seu crachá no kiosk, acesse Gestão de Perfil e clique em gerar código G-SUITE. Informe CPF, responda a pergunta de segurança e o código será gerado.', unlockTitle: 'Como desbloquear usuário', unlockText: 'Escaneie seu crachá no kiosk, acesse Gestão de Perfil e clique em gerar código desbloqueio de usuário. Informe CPF, responda a pergunta de segurança e o usuário será desbloqueado.',

    wifiCap1: '<strong>1/4</strong> Selecione a rede Meli-Guest',
    wifiCap2: '<strong>2/4</strong> Preencha nome, e-mail e aceite os termos',
    wifiCap3: '<strong>3/4</strong> Digite a Palavra Chave (Passphrase): Meli@Guest',
    wifiCap4: '<strong>4/4</strong> Finalize e aguarde conectar',
    myCap1: '<strong>1/6</strong> Baixe o aplicativo MyAhgora', myCap2: '<strong>2/6</strong> Confirme que está na rede Meli-Guest', myCap3: '<strong>3/6</strong> Clique em ACESSO VIA SSO', myCap4: '<strong>4/6</strong> Informe seu e-mail Mercado Livre', myCap5: '<strong>5/6</strong> Escolha a primeira opção de código', myCap6: '<strong>6/6</strong> Faça login com usuário do Handheld/WMS e senha',
    chatCap1: '<strong>1/5</strong> Baixe o Google Chat', chatCap2: '<strong>2/5</strong> Toque na foto/letra no canto superior direito', chatCap3: '<strong>3/5</strong> Clique em adicionar outra conta', chatCap4: '<strong>4/5</strong> Informe seu e-mail Mercado Livre', chatCap5: '<strong>5/5</strong> Digite a senha e valide o acesso',
    kioskCap1: '<strong>1/5</strong> Escaneie seu crachá no kiosk', kioskCap2: '<strong>2/5</strong> Acesse Gestão de Perfil', passwordCap3: '<strong>3/5</strong> Clique em Cambio de contrasena', kioskCap4: '<strong>4/5</strong> Informe CPF e responda a pergunta de segurança', passwordCap5: '<strong>5/5</strong> Crie uma senha forte e confirme', codeCap3: '<strong>3/5</strong> Clique em gerar código G-SUITE', codeCap5: '<strong>5/5</strong> Use o código gerado na verificação do Google', unlockCap3: '<strong>3/5</strong> Clique em gerar código desbloqueio de usuário', unlockCap5: '<strong>5/5</strong> Aguarde a confirmação de desbloqueio',
    ticketsTitle: 'Abertura de chamados', ticketsIntro: 'Chamados são registros importantes para controle, segurança, métricas e gerenciamento. O time de IS necessita de chamado para atuar.', ticketsHowTitle: 'Como abrir', ticketsHowText: 'O TL ou PS pode criar chamado acessando o Meli Tools e procurando por Jira SupportShipping. Ao entrar no Jira, informe o e-mail corporativo e avance para a tela de chamados.', ticketsWarningTitle: 'Importante', ticketsWarningText: 'Deve ser criado um chamado para cada equipamento ou pessoa. Seja descritivo: informe problema, localização e, se houver, usuário afetado. Chamados criados de forma errada, duplicados ou fora do padrão poderão ser recusados pelo time de IS.', ticketsTypesTitle: 'Chamados mais utilizados', ticketWifi: 'problemas de conexão, rede lenta ou instabilidade que afete a operação.', ticketEquipmentTitle: 'Equipamentos:', ticketEquipment: 'handhelds, scanners, impressoras, solicitação de novo equipamento, configuração ou problemas.', ticketSoftware: 'MyAhgora ou Google Chat. Para Google Chat, selecione Gmail. Para MyAhgora, selecione otro.', footerText: 'Internal System • Guia rápido para apoio à operação'
  },
  es: {},
  en: {}
};

translations.es = {
  ...translations.pt,
  brandSubtitle: 'Guía rápida para la operación', navHome: 'Inicio', navMyAhgoraErrors: 'Errores MyAhgora', navGoogleErrors: 'Errores Google Chat', navSelfService: 'Autogestión', navTickets: 'Tickets', themeButton: 'Tema',
  heroEyebrow: 'Soporte rápido para la operación', heroTitle: '¿Problemas con MyAhgora, Google Chat, WiFi o tecnología?', heroText: 'Esta guía ayuda a resolver los problemas más comunes o entender cuándo pedir apoyo a tu TL o PS para abrir un ticket al equipo de IS.', heroBtnMyAhgora: 'Ayuda con MyAhgora', heroBtnGoogleChat: 'Ayuda con Google Chat', quickAccessTitle: 'Acceso rápido', quickWifi: 'Conectar a Meli-Guest', quickMyAhgoraErrors: 'Fallas MyAhgora', quickGoogleErrors: 'Fallas Google Chat', quickSelfService: 'Cambiar contraseña / código',
  wifiTitle: 'Conéctate a la red Meli-Guest', wifiIntro: 'Es muy importante estar conectado al WiFi Meli-Guest. La app MyAhgora solo funcionará conectada a esta red.', wifiStepsTitle: 'Paso a paso', wifiStep1: 'Selecciona la red WiFi Meli-Guest.',
  wifiStep2: 'Completa nombre, e-mail y acepta los términos.',
  wifiStep3: 'En el campo Contraseña (Passphrase), escribe: <strong>Meli@Guest</strong>.',
  wifiStep4: 'Finaliza el registro y espera la conexión.', wifiDnsTitle: '¿Error de DNS?', wifiDnsText: 'Algunos celulares tienen DNS manual configurado. Coloca el DNS en automático. Si tienes dudas o problemas de conexión, pide a tu TL o PS que abra un ticket para IS.', imagePlaceholder: 'Reemplaza esta imagen por el print explicativo.',
  myTitle: 'Cómo acceder a MyAhgora', myIntro: 'MyAhgora es la app utilizada para control y gestión de marcación.', myStep1: 'Busca MyAhgora en Play Store, App Store u otra tienda.', myStep2: 'Descarga la app y asegúrate de estar conectado a Meli-Guest.', myStep3: 'Al abrir la app, toca <strong>ACESSO VIA SSO</strong>, debajo del botón de entrar.', myStep4: 'Ingresa tu e-mail de Mercado Libre.', myStep5: 'Cuando aparezcan dos opciones de código, selecciona la <strong>primera opción</strong>.', myStep6: 'En la página de login de Mercado Libre, informa tu <strong>usuario</strong> y contraseña. Es el mismo usuario y contraseña usados en Handheld o WMS.', myImportant: 'Cualquier error dentro de MyAhgora, después del login, debe tratarse por People Chat.', myErrorButton: 'Ver posibles fallas de MyAhgora',
  chatTitle: 'Cómo acceder a Google Chat / People Chat', chatIntro: 'Google Chat es importante para comunicarte con tu equipo y acceder a People Chat, usado para dudas de RR. HH., beneficios, certificados, recibo de sueldo y atención.', chatPeopleTip: 'Para hablar con un agente en People Chat, escribe: <strong>Falar com um atendente</strong>. Si el bot responde otra cosa, envía el mismo mensaje nuevamente hasta que pida el contexto.', chatErrorButton: 'Ver posibles fallas de Google Chat',

  chatStep1: 'Descarga Google Chat desde Play Store, App Store u otra tienda de apps.', chatStep2: 'Abre la app y toca el ícono de la esquina superior derecha, donde aparece tu foto, letra o avatar.', chatStep3: 'Toca en agregar otra cuenta.', chatStep4: 'Acepta los términos de Google cuando se solicite.', chatStep5: 'Ingresa tu e-mail de Mercado Libre, no tu e-mail personal.', chatStep6: 'Ingresa tu contraseña, cierra las pestañas relacionadas y abre Google Chat nuevamente.',
  wifiCap1: '<strong>1/4</strong> Selecciona la red Meli-Guest',
  wifiCap2: '<strong>2/4</strong> Completa nombre, e-mail y acepta los términos',
  wifiCap3: '<strong>3/4</strong> Escribe la contraseña (Passphrase): Meli@Guest',
  wifiCap4: '<strong>4/4</strong> Finaliza y espera la conexión',
  myCap1: '<strong>1/6</strong> Descarga la app MyAhgora', myCap2: '<strong>2/6</strong> Confirma que estás en la red Meli-Guest', myCap3: '<strong>3/6</strong> Toca ACESSO VIA SSO', myCap4: '<strong>4/6</strong> Ingresa tu e-mail de Mercado Libre', myCap5: '<strong>5/6</strong> Selecciona la primera opción de código', myCap6: '<strong>6/6</strong> Inicia sesión con usuario de Handheld/WMS y contraseña',
  chatCap1: '<strong>1/5</strong> Descarga Google Chat', chatCap2: '<strong>2/5</strong> Toca la foto/letra en la esquina superior derecha', chatCap3: '<strong>3/5</strong> Toca agregar otra cuenta', chatCap4: '<strong>4/5</strong> Ingresa tu e-mail de Mercado Libre', chatCap5: '<strong>5/5</strong> Ingresa la contraseña y valida el acceso',
  kioskCap1: '<strong>1/5</strong> Escanea tu credencial en el kiosk', kioskCap2: '<strong>2/5</strong> Accede a Gestión de Perfil', passwordCap3: '<strong>3/5</strong> Toca Cambio de contrasena', kioskCap4: '<strong>4/5</strong> Informa CPF y responde la pregunta de seguridad', passwordCap5: '<strong>5/5</strong> Crea una contraseña segura y confirma', codeCap3: '<strong>3/5</strong> Toca generar código G-SUITE', codeCap5: '<strong>5/5</strong> Usa el código generado en la verificación de Google', unlockCap3: '<strong>3/5</strong> Toca generar código desbloqueio de usuario', unlockCap5: '<strong>5/5</strong> Espera la confirmación de desbloqueo',

  navWifi: 'WiFi', navMyAhgora: 'MyAhgora', navGoogleChat: 'Google Chat',
  myErrorsTitle: 'Posibles fallas de MyAhgora', myErrorsIntro: 'Consulta los errores más comunes y qué hacer en cada caso.', exampleTitle: 'Ejemplo de mensaje', myError1Title: '“Ocurrió un error, inténtalo nuevamente más tarde”', myError1Text: 'Espera 24 horas. Si el error continúa, envía un mensaje a People Chat solicitando hablar con un agente.', myError1Example1: 'Primer mensaje: “Falar com um atendente”.', myError1Example2: 'Después de que el bot pida contexto: “Al intentar acceder a la app MyAhgora, aparece el mensaje: Aconteceu um erro, tente novamente mais tarde”.', myError2Title: 'Error relacionado con usuario y contraseña', myError2Text: 'Verifica que estés usando el usuario de Handheld o WMS, no el e-mail. Si el usuario está correcto, aparecerá en la parte superior al escribir la contraseña. Revisa también todos los caracteres de la contraseña.', myError2Action: 'Si aun así no funciona, cambia tu contraseña en el kiosk de autogestión de tu CAD.', goSelfService: 'Ir a autogestión', myError3Title: 'No aparece el espejo de marcaciones', myError3Text: 'Espera 24 horas. Si el error continúa, envía un mensaje a People Chat solicitando hablar con un agente.', myError3Example: '“Mi MyAhgora está sin acceso al espejo de marcaciones”.', askTicketNote: 'Si tienes dudas u otro error, pide a tu TL o PS que abra un ticket para el equipo de IS.',
  googleErrorsTitle: 'Posibles fallas de Google Chat', googleErrorsIntro: 'Consulta los problemas más comunes durante el acceso a Google Chat y People Chat.', googleError1Title: '“No fue posible iniciar sesión”', googleError1Text: 'Generalmente ocurre después de cambiar la contraseña y está relacionado con el código de ocho dígitos. Ve al kiosk de autogestión de tu CAD, genera el código de 8 dígitos de Google e intenta nuevamente.', googleError2Title: 'Verificación en dos pasos', googleError2Text: 'Genera el código de 8 dígitos de Google en el kiosk de autogestión. El código no es permanente y expira, por lo que puedes generar otro si es necesario.', googleError3Title: 'People Chat no aparece en Google Chat', googleError3Text: 'El chat solo aparece para usuarios Meli. Busca People Chat y, si aparece el botón de instalar, instálalo. Si no aparece y eres usuario Meli, espera 24 horas e intenta nuevamente. Si continúa, pide a tu TL que envíe un e-mail a melihelp.support@mercadolibre.com.', googleError4Title: 'Error relacionado con e-mail y contraseña', googleError4Text: 'Verifica que tu e-mail de Mercado Libre esté correcto y que la contraseña haya sido escrita con todos los caracteres. Si no funciona, cambia la contraseña en el kiosk de autogestión.',
  selfServiceTag: 'Autogestión', selfServiceTitle: 'Kiosk de autogestión', selfServiceIntro: 'Usa el kiosk de tu CAD para cambiar contraseña, generar código de 8 dígitos de Google o desbloquear usuario.', passwordTitle: 'Cómo cambiar contraseña', passwordText: 'Escanea tu credencial en el kiosk, accede a Gestión de Perfil y toca Cambio de contrasena. Informa CPF, responde la pregunta de seguridad y crea una contraseña con mínimo 8 caracteres, letra mayúscula, letra minúscula, números y caracteres especiales. No uses nombre, apellido ni meses del año.', codeTitle: 'Cómo generar código de 8 dígitos', codeText: 'Escanea tu credencial en el kiosk, accede a Gestión de Perfil y toca generar código G-SUITE. Informa CPF, responde la pregunta de seguridad y el código será generado.', unlockTitle: 'Cómo desbloquear usuario', unlockText: 'Escanea tu credencial en el kiosk, accede a Gestión de Perfil y toca generar código desbloqueio de usuario. Informa CPF, responde la pregunta de seguridad y el usuario será desbloqueado.',
  ticketsTitle: 'Apertura de tickets', ticketsIntro: 'Los tickets son registros importantes para control, seguridad, métricas y gestión. El equipo de IS necesita un ticket para actuar.', ticketsHowTitle: 'Cómo abrir', ticketsHowText: 'El TL o PS puede crear un ticket accediendo a Meli Tools y buscando Jira SupportShipping. Al entrar en Jira, informa el e-mail corporativo y avanza a la pantalla de tickets.', ticketsWarningTitle: 'Importante', ticketsWarningText: 'Debe crearse un ticket para cada equipo o persona. Sé descriptivo: informa el problema, la ubicación y, si existe, el usuario afectado. Los tickets creados de forma incorrecta, duplicados o fuera del estándar podrán ser rechazados por el equipo de IS.', ticketsTypesTitle: 'Tickets más utilizados', ticketWifi: 'problemas de conexión, red lenta o inestabilidad que afecte la operación.', ticketEquipmentTitle: 'Equipos:', ticketEquipment: 'handhelds, scanners, impresoras, solicitud de nuevo equipo, configuración o problemas.', ticketSoftware: 'MyAhgora o Google Chat. Para Google Chat, selecciona Gmail. Para MyAhgora, selecciona otro.',
  footerText: 'Internal System • Guía rápida para apoyo a la operación'
};

translations.en = {
  ...translations.pt,
  brandSubtitle: 'Quick guide for operations', navHome: 'Home', navMyAhgoraErrors: 'MyAhgora errors', navGoogleErrors: 'Google Chat errors', navSelfService: 'Self-service', navTickets: 'Tickets', themeButton: 'Theme',
  heroEyebrow: 'Quick support for operations', heroTitle: 'Issues with MyAhgora, Google Chat, WiFi or technology?', heroText: 'This guide helps you solve the most common issues or understand when to ask your TL or PS to open a ticket with the IS team.', heroBtnMyAhgora: 'Help with MyAhgora', heroBtnGoogleChat: 'Help with Google Chat', quickAccessTitle: 'Quick access', quickWifi: 'Connect to Meli-Guest', quickMyAhgoraErrors: 'MyAhgora issues', quickGoogleErrors: 'Google Chat issues', quickSelfService: 'Password / code',
  wifiTitle: 'Connect to Meli-Guest WiFi', wifiIntro: 'It is very important to be connected to Meli-Guest WiFi. The MyAhgora app will only work on this network.', wifiStepsTitle: 'Step by step', wifiDnsTitle: 'DNS error?', wifiDnsText: 'Some phones have manual DNS configured. Set DNS to automatic. If you have questions or connection issues, ask your TL or PS to open a ticket for IS.', imagePlaceholder: 'Replace this image with the explanatory screenshot.',
  myTitle: 'How to access MyAhgora', myIntro: 'MyAhgora is the app used for time clock control and management.', myStep1: 'Search for MyAhgora in Play Store, App Store or another app store.', myStep2: 'Download the app and make sure you are connected to Meli-Guest.', myStep3: 'Open the app and tap <strong>ACESSO VIA SSO</strong>, below the login button.', myStep4: 'Enter your Mercado Libre e-mail.', myStep5: 'When two code options appear, select the <strong>first option</strong>.', myStep6: 'On the Mercado Libre login page, enter your <strong>username</strong> and password. It is the same username and password used on Handheld or WMS.', myImportant: 'Any error inside MyAhgora after login must be handled through People Chat.', myErrorButton: 'See possible MyAhgora issues',
  chatTitle: 'How to access Google Chat / People Chat', chatIntro: 'Google Chat is important for team communication and for accessing People Chat, used for HR questions, benefits, certificates, payslips and support.', chatPeopleTip: 'To talk to an agent in People Chat, type: <strong>Falar com um atendente</strong>. If the bot replies with something else, send the same message again until it asks for context.', chatErrorButton: 'See possible Google Chat issues',

  chatStep1: 'Download Google Chat from the Play Store, App Store or another app store.', chatStep2: 'Open the app and tap the icon in the upper-right corner, where your photo, letter or avatar appears.', chatStep3: 'Tap add another account.', chatStep4: 'Accept Google terms when prompted.', chatStep5: 'Enter your Mercado Libre e-mail, not your personal e-mail.', chatStep6: 'Enter your password, close the related tabs and open Google Chat again.',
  wifiCap1: '<strong>1/4</strong> Select the Meli-Guest network',
  wifiCap2: '<strong>2/4</strong> Fill in your name, e-mail and accept the terms',
  wifiCap3: '<strong>3/4</strong> Enter the Passphrase: Meli@Guest',
  wifiCap4: '<strong>4/4</strong> Complete registration and wait for connection',
  myCap1: '<strong>1/6</strong> Download the MyAhgora app', myCap2: '<strong>2/6</strong> Confirm you are on the Meli-Guest network', myCap3: '<strong>3/6</strong> Tap ACESSO VIA SSO', myCap4: '<strong>4/6</strong> Enter your Mercado Libre e-mail', myCap5: '<strong>5/6</strong> Select the first code option', myCap6: '<strong>6/6</strong> Log in with your Handheld/WMS username and password',
  chatCap1: '<strong>1/5</strong> Download Google Chat', chatCap2: '<strong>2/6</strong> Tap the photo/letter in the upper-right corner', chatCap3: '<strong>3/5</strong> Tap add another account', chatCap4: '<strong>4/5</strong> Enter your Mercado Libre e-mail', chatCap5: '<strong>5/5</strong> Enter the password and validate access',
  kioskCap1: '<strong>1/5</strong> Scan your badge at the kiosk', kioskCap2: '<strong>2/5</strong> Access Gestão de Perfil', passwordCap3: '<strong>3/5</strong> Tap Cambio de contrasena', kioskCap4: '<strong>4/5</strong> Enter CPF and answer the security question', passwordCap5: '<strong>5/5</strong> Create a strong password and confirm', codeCap3: '<strong>3/5</strong> Tap generate G-SUITE code', codeCap5: '<strong>5/5</strong> Use the generated code in Google verification', unlockCap3: '<strong>3/5</strong> Tap generate user unlock code', unlockCap5: '<strong>5/5</strong> Wait for unlock confirmation',

  navWifi: 'WiFi', navMyAhgora: 'MyAhgora', navGoogleChat: 'Google Chat',
  myErrorsTitle: 'Possible MyAhgora issues', myErrorsIntro: 'Check the most common errors and what to do in each case.', exampleTitle: 'Message example', myError1Title: '“An error occurred, please try again later”', myError1Text: 'Wait 24 hours. If the error continues, send a message to People Chat asking to speak with an agent.', myError1Example1: 'First message: “Falar com um atendente”.', myError1Example2: 'After the bot asks for context: “When trying to access the MyAhgora app, the following message appears: Aconteceu um erro, tente novamente mais tarde”.', myError2Title: 'Username and password error', myError2Text: 'Make sure you are using your Handheld or WMS username, not your e-mail. If the username is correct, it will appear at the top when entering the password. Also check all password characters.', myError2Action: 'If it still does not work, change your password at your CAD self-service kiosk.', goSelfService: 'Go to self-service', myError3Title: 'Time record mirror does not appear', myError3Text: 'Wait 24 hours. If the error continues, send a message to People Chat asking to speak with an agent.', myError3Example: '“My MyAhgora does not have access to the time record mirror”.', askTicketNote: 'If you have questions or another error, ask your TL or PS to open a ticket for the IS team.',
  googleErrorsTitle: 'Possible Google Chat issues', googleErrorsIntro: 'See the most common issues when accessing Google Chat and People Chat.', googleError1Title: '“Could not sign in”', googleError1Text: 'This usually happens after a password change and is related to the eight-digit code. Go to your CAD self-service kiosk, generate the Google 8-digit code and try again.', googleError2Title: 'Two-step verification', googleError2Text: 'Generate the Google 8-digit code at the self-service kiosk. The code is not permanent and expires, so generate another one if needed.', googleError3Title: 'People Chat does not appear in Google Chat', googleError3Text: 'The chat only appears for Meli users. Search for People Chat and, if the install button appears, install it. If it does not appear and you are a Meli user, wait 24 hours and try again. If it continues, ask your TL to send an e-mail to melihelp.support@mercadolibre.com.', googleError4Title: 'E-mail and password error', googleError4Text: 'Check that your Mercado Libre e-mail is correct and that the password was typed with all characters. If it does not work, change your password at the self-service kiosk.',
  selfServiceTag: 'Self-service', selfServiceTitle: 'Self-service kiosk', selfServiceIntro: 'Use your CAD kiosk to change password, generate Google 8-digit code or unlock user.', passwordTitle: 'How to change password', passwordText: 'Scan your badge at the kiosk, access Gestão de Perfil and tap Cambio de contrasena. Enter CPF, answer the security question and create a password with at least 8 characters, uppercase letter, lowercase letter, numbers and special characters. Do not use your name, surname or months of the year.', codeTitle: 'How to generate an 8-digit code', codeText: 'Scan your badge at the kiosk, access Gestão de Perfil and tap generate G-SUITE code. Enter CPF, answer the security question and the code will be generated.', unlockTitle: 'How to unlock user', unlockText: 'Scan your badge at the kiosk, access Gestão de Perfil and tap generate user unlock code. Enter CPF, answer the security question and the user will be unlocked.',
  ticketsTitle: 'Opening tickets', ticketsIntro: 'Tickets are important records for control, security, metrics and management. The IS team needs a ticket to act.', ticketsHowTitle: 'How to open', ticketsHowText: 'The TL or PS can create a ticket by accessing Meli Tools and searching for Jira SupportShipping. When entering Jira, use the corporate e-mail and continue to the ticket screen.', ticketsWarningTitle: 'Important', ticketsWarningText: 'One ticket must be created for each device or person. Be descriptive: include the problem, location and, if applicable, the affected user. Tickets created incorrectly, duplicated or outside the standard may be rejected by the IS team.', ticketsTypesTitle: 'Most used tickets', ticketWifi: 'connection issues, slow network or instability affecting operations.', ticketEquipmentTitle: 'Equipment:', ticketEquipment: 'handhelds, scanners, printers, request for new equipment, configuration or issues.', ticketSoftware: 'MyAhgora or Google Chat. For Google Chat, select Gmail. For MyAhgora, select otro.',
  footerText: 'Internal System • Quick guide for operations support'
};

const languageSelect = document.querySelector('#languageSelect');
const languageFlag = document.querySelector('#languageFlag');
const themeToggle = document.querySelector('#themeToggle');
const themeIcon = document.querySelector('#themeIcon');
const menuToggle = document.querySelector('#menuToggle');
const mainNav = document.querySelector('#mainNav');
const backToTop = document.querySelector('#backToTop');
const logo = document.querySelector('#meliLogo');

const flags = { pt: '🇧🇷', es: '🇪🇸', en: '🇺🇸' };
const logos = {
  pt: 'assets/logos/logo.png',
  es: 'assets/logos/logo.png',
  en: 'assets/logos/logo.png'
};

function normalizeLanguage(language) {
  const value = (language || '').toLowerCase();
  if (value.startsWith('pt')) return 'pt';
  if (value.startsWith('es')) return 'es';
  if (value.startsWith('en')) return 'en';
  return null;
}

function detectInitialLanguage() {
  const userSelectedLanguage = localStorage.getItem('is-language-manual');
  if (userSelectedLanguage && translations[userSelectedLanguage]) return userSelectedLanguage;

  const browserLanguages = Array.isArray(navigator.languages) && navigator.languages.length
    ? navigator.languages
    : [navigator.language];

  for (const language of browserLanguages) {
    const detected = normalizeLanguage(language);
    if (detected && translations[detected]) return detected;
  }

  return 'pt';
}

function setLanguage(lang, persistChoice = false) {
  const selectedLanguage = translations[lang] ? lang : 'pt';
  const dictionary = translations[selectedLanguage] || translations.pt;
  document.documentElement.lang = selectedLanguage === 'pt' ? 'pt-BR' : selectedLanguage;
  languageSelect.value = selectedLanguage;
  languageFlag.textContent = flags[selectedLanguage];
  logo.src = logos[selectedLanguage];

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    if (dictionary[key]) element.innerHTML = dictionary[key];
  });

  if (persistChoice) {
    localStorage.setItem('is-language-manual', selectedLanguage);
  }
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('is-theme', theme);
  if (themeIcon) themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
}

languageSelect.addEventListener('change', (event) => setLanguage(event.target.value, true));

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  setTheme(current === 'dark' ? 'light' : 'dark');
});

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

window.addEventListener('scroll', () => {
  backToTop.classList.toggle('visible', window.scrollY > 600);

  const sections = document.querySelectorAll('section[id]');
  let current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 130;
    if (window.scrollY >= sectionTop) current = section.id;
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
});

backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

setTheme(localStorage.getItem('is-theme') || 'light');
setLanguage(detectInitialLanguage());

function setupCarousels() {
  document.querySelectorAll('[data-carousel]').forEach((carousel) => {
    const track = carousel.querySelector('[data-carousel-track]');
    const slides = Array.from(carousel.querySelectorAll('.carousel-slide'));
    const prev = carousel.querySelector('[data-carousel-prev]');
    const next = carousel.querySelector('[data-carousel-next]');
    const dotsContainer = carousel.querySelector('[data-carousel-dots]');
    let currentIndex = 0;

    function render() {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
      carousel.querySelectorAll('.carousel-dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
        dot.setAttribute('aria-current', index === currentIndex ? 'true' : 'false');
      });
    }

    slides.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'carousel-dot';
      dot.setAttribute('aria-label', `Ir para imagem ${index + 1}`);
      dot.addEventListener('click', () => {
        currentIndex = index;
        render();
      });
      dotsContainer.appendChild(dot);
    });

    prev.addEventListener('click', () => {
      currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
      render();
    });

    next.addEventListener('click', () => {
      currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
      render();
    });

    render();
  });
}

setupCarousels();
