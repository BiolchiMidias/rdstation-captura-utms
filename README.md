# rdstation-captura-utms

Códigos prontos para capturar parâmetros UTM em formulários do RD Station, com preenchimento automático e campos ocultos.  
Ideal para rastrear a origem dos leads, mesmo em formulários que aparecem em pop-ups (como no botão do WhatsApp).

---

## 📦 O que esse repositório contém

### Arquivos principais

- [README.md](README.md)  
  Instruções de uso e explicações sobre como adaptar os nomes dos campos personalizados (`custom_fields[...]`)

- [ocultar-campos.css](ocultar-campos.css)  
  Código CSS para esconder apenas os campos personalizados (não esconde os rótulos)

---

### Pasta `form/`

- [form/preenche-utm-com-storage.js](form/preenche-utm-com-storage.js)  
  Captura os parâmetros UTM da URL, salva no `localStorage` e preenche automaticamente os campos personalizados do RD Station  
  ✅ Funciona com formulários fixos e pop-ups  
  ✅ Garante preenchimento mesmo que o formulário apareça depois

- [form/ocultar-campos-com-label.js](form/ocultar-campos-com-label.js)  
  Oculta os campos personalizados e também os seus rótulos, ideal para esconder completamente os campos de UTM do usuário

---

## 🛠️ Como usar

1. Crie os seguintes campos personalizados no RD Station:  
   - `utm_source`  
   - `utm_medium`  
   - `utm_campaign`  
   - `utm_term`  
   - `utm_content`

2. Adicione esses campos no formulário da sua landing page ou pop-up

3. Verifique os nomes reais dos campos no HTML (serão do tipo `custom_fields[1234567]`)

4. Substitua os `name="custom_fields[...]` nos scripts pelo valor correspondente da sua conta

5. Inclua no seu site:
   - O arquivo `preenche-utm-com-storage.js` (ou cole o código no final da página)
   - O `js-ocultar-campos-com-label.js` **OU** o `ocultar-campos.css`, para esconder os campos

---

## ⚠️ Importante

> Os campos personalizados do RD Station não aparecem como `utm_source` no HTML, e sim como `custom_fields[ID]`.  
> Cada conta gera IDs únicos para cada campo criado.  
> Use o inspecionar do navegador (`F12`) para localizar os valores corretos e substitua no código.

---

## ✅ Resultado

Todos os leads gerados terão os dados de origem (`utm_*`) preenchidos automaticamente, permitindo analisar de onde vêm os leads mais qualificados — mesmo quando o formulário for exibido em pop-ups como no botão do WhatsApp.

---

## 🪪 Licença

MIT — Livre para usar, adaptar e compartilhar.
