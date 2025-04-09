# rdstation-captura-utms

Códigos prontos para capturar UTMs em formulários integrados ao RD Station.

## O que esse repositório contém

- preenche-utm-rdstation.js
Script para capturar UTMs da URL, salvar no localStorage e preencher automaticamente os campos do formulário (funciona em formulários fixos e pop-ups)

- ocultar-campos.js
Script para ocultar os campos personalizados e seus rótulos, garantindo que o usuário não visualize os campos de UTM no formulário

- ocultar-campos.css
Alternativa em CSS para esconder apenas os campos personalizados, sem remover o rótulo

- README.md
Instruções de uso e explicações sobre como adaptar os nomes dos campos personalizados (custom_fields[...])

## Como usar

1. Crie os campos personalizados no RD Station:
   - `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`
2. Adicione os campos ao formulário da landing page ou pop-up
3. Use o código CSS para ocultar os campos
4. Adicione o script para preencher os campos automaticamente

## Resultado

Todos os leads vão chegar com a origem registrada (UTMs), permitindo análise completa das campanhas.

## Licença

MIT – Livre para usar, adaptar e compartilhar.

> ⚠️ Os nomes dos campos no CSS (`custom_fields[...]`) são gerados automaticamente pelo RD Station e podem ser diferentes para cada conta. Verifique no seu HTML o nome exato de cada campo UTM.
