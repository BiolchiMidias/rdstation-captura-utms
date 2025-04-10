# ❓ FAQ – Captação de UTMs no RD Station

Este FAQ reúne as principais dúvidas sobre a implementação de UTMs em formulários e botões de WhatsApp no RD Station.

---

### 🔹 1. Os campos UTM estão aparecendo no formulário. O que eu faço?

Você precisa esconder os campos UTM usando **CSS** e/ou **JavaScript**.

- O **CSS** garante que o campo fique invisível desde o carregamento.
- O **JavaScript** esconde o rótulo (label) e o bloco todo, limpando o layout.

---

### 🔹 2. Preciso usar os dois códigos: CSS e JavaScript?

**Sim, é altamente recomendado.**

- O **CSS** funciona de forma imediata, inclusive em pop-ups.
- O **JS** complementa, escondendo elementos que o CSS não cobre (como labels e blocos).

---

### 🔹 3. Posso mudar os nomes dos campos no RD Station?

Não. Os nomes precisam ser exatamente os que você mapeou no código.

> Exemplo: `custom_fields[2704668]` = utm_term  
Se mudar o campo no RD, precisa atualizar também no script.

---

### 🔹 4. Como eu descubro o name (ID) do campo personalizado?

1. Acesse o site com o formulário.
2. Clique com o botão direito e escolha **Inspecionar (F12)**.
3. Ache o campo UTM e veja o atributo `name="custom_fields[XXXXX]"`.

---

### 🔹 5. O preenchimento automático dos UTMs não está funcionando. O que pode ser?

Verifique:

- A URL está com UTMs válidas? (`?utm_source=google&utm_medium=cpc`)
- O campo está com o name correto?
- O código foi adicionado corretamente no HTML?
- Há conflitos com outros scripts?
- Teste no modo anônimo para garantir que não é cache/localStorage antigo.

---

### 🔹 6. Posso usar esse código em qualquer tipo de formulário?

Este código foi feito para **formulários do RD Station**.  
Se você usa outra plataforma, precisará adaptar os `name` dos inputs.

---

### 🔹 7. Funciona em landing pages com pop-up?

Sim, **desde que você use o CSS e o JavaScript com `setInterval`**.  
Isso garante que os campos serão preenchidos mesmo que o pop-up carregue depois.

---

### 🔹 8. Os dados ficam salvos se o visitante sair da página?

Sim. O script usa **localStorage**, que mantém os dados salvos no navegador mesmo se a pessoa sair e voltar depois.

---

### 🔹 9. Preciso de consentimento para capturar esses dados?

Os UTMs não são dados pessoais.  
Mas é sempre bom avisar na sua política de privacidade que você analisa a origem dos acessos.

---

### 🔹 10. Se o visitante voltar por outro anúncio com UTM diferente, qual dado será capturado?

O script sempre pega os **UTMs mais recentes** que estiverem na URL.  
Ou seja:

- Se a pessoa voltar por outro anúncio com novas UTMs, elas **substituem** as antigas no localStorage.
- Se a pessoa voltar **sem UTM**, os dados antigos permanecem.

Isso é útil para entender qual campanha gerou a conversão real.

---

### 🧠 Ainda com dúvidas?

Abra uma issue aqui no repositório ou comente no vídeo do YouTube relacionado. Estamos aqui pra ajudar!
