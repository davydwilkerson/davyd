# 🚀 Como Converter o Excel para HTML Completo

## ✅ Opção 1: Usar o Script Python (RECOMENDADO)

### Passo 1: Instalar Python
- Se não tiver Python instalado, baixe em: https://www.python.org/downloads/
- Durante a instalação, marque "Add Python to PATH"

### Passo 2: Instalar biblioteca openpyxl
Abra o terminal/prompt de comando e rode:
```bash
pip install openpyxl
```

### Passo 3: Colocar os arquivos na mesma pasta
Certifique-se que estão na mesma pasta:
- ✅ `CRONOGRAMA DE ESTUDOS EA.xlsx` (seu arquivo Excel)
- ✅ `cronograma-wordpress-FINAL.html` (template)
- ✅ `converter-excel-para-html.py` (script)

### Passo 4: Rodar o script
No terminal/prompt, dentro da pasta dos arquivos, rode:
```bash
python converter-excel-para-html.py "CRONOGRAMA DE ESTUDOS EA.xlsx"
```

### Passo 5: Pronto! 🎉
O script vai gerar: `cronograma-completo-FINAL.html`

Abra no navegador para testar, depois copie TODO o conteúdo para o WordPress!

---

## ✅ Opção 2: Exportar Excel como CSV e Colar Aqui

Se não conseguir rodar o script Python:

### Passo 1: Abrir Excel
Abra o arquivo `CRONOGRAMA DE ESTUDOS EA.xlsx`

### Passo 2: Para cada semana (1 a 24)
1. Vá na aba "SEMANA X"
2. Selecione todas as linhas com dados
3. Copie (Ctrl+C)
4. Cole aqui no chat neste formato:

```
SEMANA X
DIA | DISCIPLINA | TEMA | TEORIA | EXERCÍCIOS
1 | PORTUGUÊS | Tema aqui | link | link
1 | ESPECÍFICA 1 | Tema aqui | link | link
...
```

### Passo 3: Eu processo e gero o HTML
Eu vou processar tudo e gerar o HTML completo para você!

---

## ✅ Opção 3: Exportar Excel como Texto

1. No Excel, vá em "Arquivo" → "Salvar Como"
2. Escolha o formato "Texto (Separado por tabulações) (*.txt)"
3. Salve como `cronograma-dados.txt`
4. Abra o arquivo .txt no bloco de notas
5. Copie TODO o conteúdo
6. Cole aqui no chat

Eu vou converter automaticamente!

---

## ❓ Problemas Comuns

### "pip não é reconhecido"
- Reinstale o Python marcando "Add Python to PATH"
- Ou use: `python -m pip install openpyxl`

### "ModuleNotFoundError: No module named 'openpyxl'"
- Rode novamente: `pip install openpyxl`

### "Arquivo não encontrado"
- Certifique-se que está na pasta correta
- Use aspas no nome do arquivo se tiver espaços

---

## 💡 Qual opção escolher?

- **Opção 1** (Script Python): Mais rápido e automático ✅
- **Opção 2** (Copiar/Colar): Se não conseguir instalar Python
- **Opção 3** (Exportar TXT): Alternativa intermediária

Escolha a que for mais fácil para você!
