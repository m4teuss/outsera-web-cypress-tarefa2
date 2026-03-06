Feature: Fluxo de Login

    Background: Login no Sistema
        Given que eu acesso a tela de login do sistema

    @smoketest
    Scenario Outline: CT_001# Login com sucesso
        When efetuo login com <user> e <password>
        Then devo ser redirecionado para tela principal
        
        Examples:
            | user              | password    | 
            | test@qabrains.com | Password123 |
