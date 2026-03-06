Feature: Carrinho de Compras

    Background:
        Given que estou na página de produtos

    Scenario Outline: CT_001# Adicionar produto ao carrinho
        When adiciono o produto <nomeProduto> ao carrinho
        And acesso o carrinho
        Then o carrinho deve conter <qtdProduct> produto 
        And devo visualizar o produto <nomeProduto> no carrinho

        Examples:
            | nomeProduto       | qtdProduct |
            | Sample Shirt Name | 1          |

