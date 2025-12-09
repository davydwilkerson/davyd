#!/usr/bin/env python3
"""
Script para extrair dados das tabelas HTML e converter para formato JavaScript
"""

from bs4 import BeautifulSoup
import json
import re

def extrair_numero_dia(dia_texto):
    """Extrai o número do dia de strings como '1.0', '2.0', etc."""
    match = re.search(r'(\d+)', str(dia_texto))
    return int(match.group(1)) if match else 0

def extrair_link(elemento):
    """Extrai link de um elemento que pode conter <a href="">"""
    if not elemento:
        return ""
    link = elemento.find('a', class_='link')
    if link and link.get('href'):
        return link.get('href')
    # Se não tem link, retorna o texto
    texto = elemento.get_text(strip=True)
    if texto and not texto.startswith('http'):
        return ""  # Não é URL
    return texto

def processar_html_semana(html_content, numero_semana):
    """Processa o HTML de uma semana e retorna a estrutura de dados"""
    soup = BeautifulSoup(html_content, 'html.parser')

    # Determina se é semana de revisão
    titulo = soup.find('h1')
    is_revisao = 'Revisão' in titulo.get_text() if titulo else False
    if numero_semana in [5, 10, 15, 20, 21, 22, 23, 24]:
        is_revisao = True

    # Encontra a tabela
    tabela = soup.find('table')
    if not tabela:
        return None

    # Extrai as linhas (exceto cabeçalho)
    linhas = tabela.find('tbody').find_all('tr') if tabela.find('tbody') else tabela.find_all('tr')[1:]

    dias = []
    for linha in linhas:
        colunas = linha.find_all('td')
        if len(colunas) < 6:
            continue

        dia_num = extrair_numero_dia(colunas[0].get_text(strip=True))
        disciplina = colunas[1].get_text(strip=True)
        tema = colunas[2].get_text(strip=True)
        teoria = extrair_link(colunas[3])
        exercicios_col = colunas[4].get_text(strip=True)
        exercicios_link = extrair_link(colunas[4])

        # Se tem link nos exercícios, usa o link; senão usa o texto (pode ser descrição)
        exercicios = exercicios_link if exercicios_link else exercicios_col

        dias.append({
            "dia": dia_num,
            "disciplina": disciplina,
            "tema": tema,
            "teoria": teoria,
            "exercicios": exercicios,
            "concluido": False,
            "tempoEstudado": 0
        })

    return {
        "id": numero_semana,
        "nome": f"SEMANA {numero_semana}",
        "revisao": is_revisao,
        "dias": dias
    }

# Teste manual com HTML da semana 19
html_semana_19 = '''
<!-- Cole aqui o HTML da semana 19 -->
'''

if __name__ == "__main__":
    print("Script de extração pronto.")
    print("Use a função processar_html_semana(html_content, numero_semana)")
