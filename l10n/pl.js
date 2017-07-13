OC.L10N.register(
    "user_saml",
    {
    "Saved" : "Zapisano",
    "X.509 certificate of the Service Provider" : "Certyfikat X.509 dostawcy usługi",
    "Private key of the Service Provider" : "Klucz prywatny dostawcy usługi",
    "Indicates that the nameID of the <samlp:logoutRequest> sent by this SP will be encrypted." : "Oznacza, że nameID <samlp:logoutRequest> wysłany przez tego dostawcę usług będzie zaszyfrowany.",
    "Indicates whether the <samlp:AuthnRequest> messages sent by this SP will be signed. [Metadata of the SP will offer this info]" : "Oznacza czy <samlp:AuthnRequest> wiadomości wysłane przez tego dostawcę usług będą podpisane. [Metadane dostawcy usług będą przekazywały te informacje]",
    "Indicates whether the  <samlp:logoutRequest> messages sent by this SP will be signed." : "Oznacza czy <samlp:logoutRequest> wiadomości wysłane przez tego dostawcę usług będą podpisane.",
    "Indicates whether the  <samlp:logoutResponse> messages sent by this SP will be signed." : "Oznacza czy <samlp:logoutResponse> wiadomości wysłane przez tego dostawcę usług będą podpisane.",
    "Whether the metadata should be signed." : "Czy metadane powinny być podpisane.",
    "Indicates a requirement for the <samlp:Response>, <samlp:LogoutRequest> and <samlp:LogoutResponse> elements received by this SP to be signed." : "Oznacza wymóg podpisania dla elementów <samlp:Response>, <samlp:LogoutRequest> i <samlp:LogoutResponse> otrzymanych przez tego dostawcę usług.",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be signed. [Metadata of the SP will offer this info]" : "Oznacza wymóg podpisania dla elementów <saml:Assertion> otrzymanych przez tego dostawcę usług. [Metadane dostawcy usług będą przekazywały te informacje]",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be encrypted." : "Oznacza wymóg szyfrowania dla elementów <saml:Assertion> otrzymanych przez tego dostawcę usług.",
    " Indicates a requirement for the NameID element on the SAMLResponse received by this SP to be present." : "Oznacza wymóg obecności elementu NameID przy SAMLResponse otrzymanego przez tego dostawcę usług.",
    "Indicates a requirement for the NameID received by this SP to be encrypted." : "Oznacza wymóg szyfrowania NameID otrzymanego przez tego dostawcę usług.",
    "Indicates if the SP will validate all received XMLs." : "Oznacza czy dostawca usług ma weryfikować wszystkie otrzymane XML-e.",
    "ADFS URL-Encodes SAML data as lowercase, and the toolkit by default uses uppercase. Enable for ADFS compatibility on signature verification." : "Dane ADFS URL-Encodes SAML są małymi literami a narzędzie standardowo obsługuje duże litery. Włącz dla ADFS kompatybilność weryfikacji podpisu.",
    "Attribute to map the UID to." : "Atrybut do mapowania UID.",
    "Only allow authentication if an account is existent on some other backend. (e.g. LDAP)" : "Zezwól na uwierzytelnienie tylko jeśli konto istnieje na innym backendzie (np. LDAP)",
    "Attribute to map the displayname to." : "Atrybut do mapowania wyświetlanej nazwy użytkownika.",
    "Attribute to map the email address to." : "Atrybut do zamapowania adresu e-mail.",
    "Use SAML auth for the %s desktop clients (requires user re-authentication)" : "Użyj uwierzytelnienia LDAP dla %s klienta stacji roboczej (wymaga ponownego uwierzytelnienia)",
    "SSO & SAML authentication" : "Uwierzytelenienie SSO i SAML",
    "Open documentation" : "Otwórz dokumentację",
    "Please choose whether you want to authenticate using the SAML provider built-in in Nextcloud or whether you want to authenticate against an environment variable." : "Wybierz czy chcesz uwierzytelniać używając wbudowanego w Nextcloud dostawcę SAML czy chcesz uwierzytelniać przez zmienne środowiskowe.",
    "Use built-in SAML authentication" : "Użyj wbudowanego uwierzytelnienia SAML",
    "Use environment variable" : "Użyj zmiennej środowiskowej",
    "Make sure to configure an administrative user that can access the instance via SSO. Logging-in with your regular %s account won't be possible anymore." : "Upewnij się, że skonfigurowałeś użytkownika z uprawnieniami administratora, który ma dostęp do instancji przez SSO. Zalogowanie się twoim zwykłym kontem %s nie będzie już możliwe.",
    "General" : "Ogólne",
    "Service Provider Data" : "Dane dostawcy usług",
    "If your Service Provider should use certificates you can optionally specify them here." : "Jeśli twój dostawca usług powinien używać certyfikatów możesz je opcjonalnie tutaj ustawić.",
    "Identity Provider Data" : "Dane od dostawcy tożsamości",
    "Configure your IdP settings here." : "Tutaj skonfiguruj swoje ustawienia IdP.",
    "Identifier of the IdP entity (must be a URI)" : "Tożsamość podmiotu IdP (musi być URI)",
    "URL Target of the IdP where the SP will send the Authentication Request Message" : "Adres URL IdP gdzie dostawca usług wysyła wiadomość o żądaniu uwierzytelnienia (Authentication Request Message)",
    "URL Location of the IdP where the SP will send the SLO Request" : "Adres URL IdP gdzie dostawca usług wyśle żądanie SLO",
    "Public X.509 certificate of the IdP" : "Publiczny certyfikat X.509 IdP",
    "Attribute mapping" : "Atrybut mapowania",
    "If you want to optionally map SAML attributes to the user you can configure these here." : "Jeśli chcesz opcjonalnie mapować atrybuty SAML do użytkownika możesz je tu skonfigurować.",
    "Security settings" : "Ustawienia bezpieczeństwa",
    "For increased security we recommend enabling the following settings if supported by your environment." : "Dla zwiększenia bezpieczeństwa zalecamy włączenie kolejnych ustawień jeśli są wspierane przez twoje środowisko.",
    "Signatures and encryption offered" : "Podpisy i szyfrowanie są oferowane",
    "Signatures and encryption required" : "Podpisy i szyfrowanie są wymagane",
    "Download metadata XML" : "Ściągnij metadane XML",
    "Metadata invalid" : "Nie prawidłowe metadane",
    "Metadata valid" : "Prawidłowe metadane",
    "Account not provisioned." : "Konto nie jest wspierane",
    "Your account is not provisioned, access to this service is thus not possible." : "Twoje konto nie jest świadczone, dostęp do usługi jest po prostu niemożliwy.",
    "Show Service Provider settings ..." : "Pokaż ustawienia dostawcy usług...",
    "Show optional Identity Provider settings ..." : "Pokaż opcjonalne ustawienia tożsamości dostawcy usług…",
    "Show security settings ..." : "Pokaż ustawienia bezpieczeństwa ...",
    "Show attribute mapping settings ..." : "Wyświetl ustawienia atrybutów mapowania..."
},
"nplurals=4; plural=(n==1 ? 0 : (n%10>=2 && n%10<=4) && (n%100<12 || n%100>14) ? 1 : n!=1 && (n%10>=0 && n%10<=1) || (n%10>=5 && n%10<=9) || (n%100>=12 && n%100<=14) ? 2 : 3);");
