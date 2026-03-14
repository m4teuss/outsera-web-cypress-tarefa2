Feature: Busca de produtos

    Background: Acessar pagina de produtos
        Given que estou na página de produtos

    Scenario Outline: CT_001# Buscar produtos existentes no catálogo
        When seleciono produto <nomeProduto>
        Then devo visualizar o nome do produto <nomeProduto>
        And devo visualizar a descrição do produto <descricaoProduto>

        Examples:
            | nomeProduto       | descricaoProduto                     |
            | Sample Shirt Name | A sample description for the product |
            | Sample Shoe Name  | A sample description for the product |


    Scenario Outline: CT_002# Buscar produto especifico "T-Shirt" existentes no catálogo
        When seleciono produto <nomeProduto>
        Then devo visualizar o nome do produto <nomeProduto>
        And devo visualizar a descrição do produto <descricaoProduto>

        Examples:
            | nomeProduto         | descricaoProduto                     |
            | Sample T-Shirt Name | A sample description for the product |
