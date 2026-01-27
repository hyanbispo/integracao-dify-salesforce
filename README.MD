# Validação de Integração de IA: Node.js + Dify.ai (Ecossistema Salesforce)

Este projeto foi desenvolvido como um laboratório técnico para validar a integração entre motores de IA (Dify.ai) e sistemas de CRM, simulando o comportamento de automações como o **Salesforce Flow** e **Agentforce** através de código Node.js.

## 🎯 Objetivo do Projeto
Devido a limitações de ambiente em instâncias Starter do Salesforce, este projeto foi construído via **VS Code** para garantir a integridade da comunicação via API, validação de segurança (Bearer Token) e tratamento de dados antes da implementação em produção.

## 🚀 Funcionalidades Implementadas
- **Consumo de API REST**: Integração direta com o endpoint do Dify para processamento de mensagens em tempo real.
- **Chat Interativo (CLI)**: Interface via terminal que permite conversas contínuas com a IA utilizando o módulo `readline`.
- **Sistema de Logs e Observabilidade**: Implementação de gravação de erros em arquivo local (`logs.txt`) para monitoramento de falhas de comunicação.
- **Sanitização de Respostas**: Lógica para extração e limpeza do conteúdo útil (JSON para String) visando a melhor experiência do usuário final.

## 🛠️ Tecnologias Utilizadas
- **Node.js**: Motor de execução do projeto.
- **Dify.ai**: Orquestração de LLM e Agentes de IA.
- **JavaScript (ES6+)**: Lógica de programação e tratamento de promessas (Async/Await).

Este repositório demonstra competências em:
1. **Engenharia de Software**: Separação de responsabilidades e tratamento de exceções.
2. **Arquitetura de Integração**: Domínio de fluxos HTTP e segurança de APIs.
3. **Resolução de Problemas**: Capacidade de criar ambientes de teste alternativos para validar requisitos técnicos de negócio.

Projeto feito apenas para fins de treinar as dinâmicas de programação.