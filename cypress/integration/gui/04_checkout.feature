Feature: Compra de produto

    Background:
        Given que estou na página de produtos

    Scenario Outline: Comprar produto com sucesso
        When adiciono o produto <nomeProduto> ao carrinho
        And acesso o carrinho
        Then devo visualizar o produto <nomeProduto> no carrinho

        When prossigo para o checkout
        And preencho os dados do cliente com nome <nome>, sobrenome <sobrenome> e cep <cep>
        Then devo visualizar o valor total da compra
        And devo visualizar o valor da taxa de entrega

        When finalizo a compra
        Then devo visualizar a mensagem <mensagem> de compra realizada com sucesso

        Examples:
            | nomeProduto       | nome | sobrenome | cep       | mensagem                  |
            | Sample Shirt Name | João | Silva     | 13000-000 | Thank you for your order! |

