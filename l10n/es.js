OC.L10N.register(
    "user_saml",
    {
    "Saved" : "Guardado",
    "X.509 certificate of the Service Provider" : "Certificado X.509 del Proveedor de Servicio",
    "Private key of the Service Provider" : "Llave privada de el Proveedor de Servicio",
    "Indicates that the nameID of the <samlp:logoutRequest> sent by this SP will be encrypted." : "Indica que el nameID del <samlp:logoutRequest> enviado por este SP será cifrado.",
    "Indicates whether the <samlp:AuthnRequest> messages sent by this SP will be signed. [Metadata of the SP will offer this info]" : "Indica si los mensajes <samlp:AuthnRequest> enviados por este SP serán firmados. [Los metadatos del SP ofrecerán esta información]",
    "Indicates whether the  <samlp:logoutRequest> messages sent by this SP will be signed." : "Indica cuando los mensajes <samlp:logoutRequest> mandados por este SP serán firmados.",
    "Indicates whether the  <samlp:logoutResponse> messages sent by this SP will be signed." : "Indica cuando el mensaje  <samlp:logoutResponse> es enviado por este SP será firmado.",
    "Whether the metadata should be signed." : "Tal vez los metadatos debe ser firmado.",
    "Indicates a requirement for the <samlp:Response>, <samlp:LogoutRequest> and <samlp:LogoutResponse> elements received by this SP to be signed." : "Indica un requisito para los elementos <samlp:Response>, <samlp:LogoutRequest> y <samlp:LogoutResponse> recibidos por este SP a ser asignado.",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be signed. [Metadata of the SP will offer this info]" : "Indica un requisito de los elementos <saml:Assertion> recibido por este SP para ser firmados. [Metadata del SP ofrecerá este información]",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be encrypted." : "Indica un requisito para el elemento <saml:Assertion> recibido por este SP para ser cifrado.",
    " Indicates a requirement for the NameID element on the SAMLResponse received by this SP to be present." : "Indica un requisito para que el elemento NameID en el SAMLResponse recibido por este SP esté presente.",
    "Indicates a requirement for the NameID received by this SP to be encrypted." : "Indica un requisito para que el NameID recibido por este SP esté cifrado.",
    "Indicates if the SP will validate all received XML." : "Indica si el SP validará todo el XML recibido.",
    "ADFS URL-Encodes SAML data as lowercase, and the toolkit by default uses uppercase. Enable for ADFS compatibility on signature verification." : "ADFS URL-Cifra datos SAML en minúsculas, y el kit de herramientas usa mayúsculas por omisión. Active ADFS para compatibilidad en la firma de verificación.",
    "Attribute to map the UID to." : "Atributo para definir la UID.",
    "Only allow authentication if an account exists on some other backend. (e.g. LDAP)" : "Permitir la autenticación solo si una cuenta existe en algún otro motor (LDAP, p. ej.).",
    "Attribute to map the displayname to." : "Atributo para definir el nombre mostrado",
    "Attribute to map the email address to." : "Atributo para definir la dirección de correo electrónico",
    "Use SAML auth for the %s desktop clients (requires user re-authentication)" : "Usar la autenticación SAML para los clientes de escritorio %s (necesita una re-autenticación del usuario)",
    "SSO & SAML authentication" : "Autenticación SSO & SAML",
    "Open documentation" : "Abrir documentación",
    "Please choose whether you want to authenticate using the SAML provider built-in in Nextcloud or whether you want to authenticate against an environment variable." : "Por favor elija si desea autenticar usando el proveedor SAML nativo en Nextcloud o si desea autenticar contra una variable del entorno.",
    "Use built-in SAML authentication" : "Use la autenticación nativa SAML",
    "Use environment variable" : "Usar variable de entorno",
    "Make sure to configure an administrative user that can access the instance via SSO. Logging-in with your regular %s account won't be possible anymore." : "Asegúrese de configurar un usuario administrativo que pueda acceder a la instancia vía SSO. Acceder con su cuenta normal %s no será ya posible.",
    "General" : "General",
    "Service Provider Data" : "Proovedor de Servicio de Datos",
    "If your Service Provider should use certificates you can optionally specify them here." : "Si su proveedor de servicio usa certificados, se pueden opcionalmente especificar aquí.",
    "Show Service Provider settings…" : "Mostrar configuración del Proveedor de servicio",
    "Identity Provider Data" : "Identificación del Proveedor de Datos",
    "Configure your IdP settings here." : "Configura tus configuraciones de IdP aquí.",
    "Identifier of the IdP entity (must be a URI)" : "Identificador de la entidad IdP (debe ser un URI)",
    "URL Target of the IdP where the SP will send the Authentication Request Message" : "URL objetivo del IdP donde el SP mandará el  Mensaje de Solicitud de Autenticación",
    "Show optional Identity Provider settings…" : "Mostrar configuración del Proveedor de identidad opcional...",
    "URL Location of the IdP where the SP will send the SLO Request" : "Dirección URL de el IdP donde el SP enviará las peticiones SLO",
    "Public X.509 certificate of the IdP" : "Certificado público X.509 del IdP",
    "Attribute mapping" : "Definición de atributos",
    "If you want to optionally map attributes to the user you can configure these here." : "Si opcionalmente quieres mapear atributos al usuario puedes configurar éstos aquí.",
    "Show attribute mapping settings…" : "Mostrar configuración de mapeado de atributos",
    "Security settings" : "Configuración de seguridad",
    "For increased security we recommend enabling the following settings if supported by your environment." : "Para incrementar la seguridad recomendamos activar los siguientes ajustes si son soportados por su entorno.",
    "Show security settings…" : "Mostrar configuración de seguridad...",
    "Signatures and encryption offered" : "Firmas y cifrado ofrecido",
    "Signatures and encryption required" : "Firmas y cifrado necesitado",
    "Download metadata XML" : "Descargar metadatos en XML",
    "Metadata invalid" : "Metadatos inválidos",
    "Metadata valid" : "Metadatos validos",
    "Account not provisioned." : "Cuenta de usuario no aprovisionada",
    "Your account is not provisioned, access to this service is thus not possible." : "Su cuenta no esta aprovisionada, por lo tanto el acceso a este servicio no es posible.",
    "Indicates if the SP will validate all received XMLs." : "Indica si el SP validará todos los XMLs recibidos.",
    "Only allow authentication if an account is existent on some other backend. (e.g. LDAP)" : "Solo permita la autenticación si la cuenta existe en algún otro punto. (p.e. LDAP)",
    "Show Service Provider settings ..." : "Mostrar configuración del Proveedor de Servicio ...",
    "Show optional Identity Provider settings ..." : "Mostrar configuración de la identificación del Proveedor ...",
    "Show security settings ..." : "Mostrar la configuración de seguridad ....",
    "If you want to optionally map SAML attributes to the user you can configure these here." : "Si desea opcionalmente definir atributos SAML al usuario, puede configurar estos aquí.",
    "Show attribute mapping settings ..." : "Mostrar ajustes de los atributos definidos"
},
"nplurals=2; plural=(n != 1);");
