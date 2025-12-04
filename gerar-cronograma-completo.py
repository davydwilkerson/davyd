#!/usr/bin/env python3
"""
Script para gerar o arquivo HTML completo do cronograma de estudos
com todas as 24 semanas integradas
"""

import json

# Dados completos fornecidos pelo usuário (apenas estrutura base, você deve adicionar as 24 semanas completas)
dados_semanas_json = '''
PASTE_AQUI_OS_DADOS_COMPLETOS_DAS_24_SEMANAS
'''

html_template = '''<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
    <title>Cronograma de Estudos - Enfermeiro Aprovado</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">

    <!-- O CSS e HTML estão no arquivo cronograma-estudos-corrigido.html -->
    <!-- Este script gera apenas a parte de dados -->
</head>
<body>
    <script>
        // DADOS COMPLETOS SERÃO INSERIDOS AQUI
        {dados_json}

        // CÓDIGO JAVASCRIPT COMPLETO SERÁ INSERIDO AQUI
        {javascript_code}
    </script>
</body>
</html>
'''

print("Script para gerar cronograma completo")
print("Por favor, edite este arquivo e cole os dados completos das 24 semanas")
print("Depois execute: python3 gerar-cronograma-completo.py")
