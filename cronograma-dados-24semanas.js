// ==========================================
// DADOS COMPLETOS - 24 SEMANAS
// Cronograma de Estudos - Enfermeiro Aprovado
// ==========================================

const cronogramaDataDefault = {
    semanas: [
        // SEMANA 1
        {
            id: 1,
            nome: "SEMANA 1",
            revisao: false,
            dias: [
                { dia: 1, disciplina: "PORTUGUÊS", tema: "COMPREENSÃO E INTERPRETAÇÃO DE TEXTOS", teoria: "https://www.youtube.com/watch?v=9C2EZxWzKjo", exercicios: "https://questoes.grancursosonline.com.br/questoes-de-concursos/lingua-portuguesa-interpretacao-de-texto-403701", concluido: false, tempoEstudado: 0 },
                { dia: 1, disciplina: "ESPECÍFICA 1", tema: "FUNDAMENTOS DE ENFERMAGEM - SINAIS VITAIS", teoria: "https://drive.google.com/file/d/1CC3mUmYa1kRv9oOZ4cI8FOwTSQheoA6Q/view?usp=sharing", exercicios: "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=172&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&subject_ids%5B%5D=10696", concluido: false, tempoEstudado: 0 },
                { dia: 1, disciplina: "RLM", tema: "REVISÃO", teoria: "", exercicios: "https://questoes.grancursosonline.com.br/aluno/filtro/concursos?assunto=404260%2C425277%2C425266%2C425267%2C425268&desatualizada=0&anulada=0&query=", concluido: false, tempoEstudado: 0 },
                { dia: 2, disciplina: "ESPECÍFICA 2", tema: "FUNDAMENTOS DE ENFERMAGEM - OXIGENOTERAPIA", teoria: "https://www.youtube.com/watch?v=aFJK5adC_Qo", exercicios: "Exercícios no final do conteúdo", concluido: false, tempoEstudado: 0 },
                { dia: 2, disciplina: "SUS 1", tema: "EVOLUÇÃO HISTÓRICA DO SISTEMA DE SAÚDE BRASILEIRO", teoria: "https://www.youtube.com/watch?v=ZBJjKgVXs7M", exercicios: "https://drive.google.com/drive/folders/1G3BvJn0I1gLU7qx4B25WaNgou97utjw_?usp=share_link", concluido: false, tempoEstudado: 0 },
                { dia: 2, disciplina: "ESPECÍFICA 1", tema: "FUNDAMENTOS DE ENFERMAGEM - EXAME FÍSICO (ECTOSCOPIA)", teoria: "https://www.youtube.com/watch?v=C3-nVQUbvME&t=316s", exercicios: "https://drive.google.com/file/d/1oMaU8G2ZPGblENWQtwIchrou6KFqlt83/view?usp=sharing", concluido: false, tempoEstudado: 0 },
                { dia: 3, disciplina: "SUS 1", tema: "CONSTITUIÇÃO FEDERAL 1988 - ARTIGOS 194 A 200", teoria: "https://www.youtube.com/watch?v=qFBZfgUR7WI", exercicios: "https://drive.google.com/drive/folders/1bIkjiFN5mkcF8cE0ATxQWBxjThGQCAxP?usp=share_link", concluido: false, tempoEstudado: 0 },
                { dia: 3, disciplina: "ESPECÍFICA 2", tema: "FUNDAMENTOS DE ENFERMAGEM - MEDIDAS DE BIOSSEGURANÇA", teoria: "https://www.youtube.com/watch?v=h5CaFZ32uH4", exercicios: "https://drive.google.com/drive/folders/1DuzVlKlneOz5-BG0aK6maykLbSa54fjr?usp=share_link", concluido: false, tempoEstudado: 0 },
                { dia: 3, disciplina: "PORTUGUÊS", tema: "FONÉTICA E FONOLOGIA", teoria: "https://www.youtube.com/watch?v=kYRiLqEWCKo", exercicios: "https://questoes.grancursosonline.com.br/questoes-de-concursos/lingua-portuguesa-fonetica-e-fonologia-403680", concluido: false, tempoEstudado: 0 },
                { dia: 4, disciplina: "ESPECÍFICA 1", tema: "FUNDAMENTOS DE ENFERMAGEM - SINAIS VITAIS (ASSISTIR OUTRA AULA COMPLEMENTAR)", teoria: "https://www.youtube.com/watch?v=r8AIQKPOD1Q", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 4, disciplina: "SUS 2", tema: "LEI 8080/90 E DECRETO 7508/11", teoria: "https://www.youtube.com/watch?v=MiyfzlHyXxE", exercicios: "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=211&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&subject_ids%5B%5D=19979", concluido: false, tempoEstudado: 0 },
                { dia: 4, disciplina: "RLM", tema: "REVISÃO", teoria: "", exercicios: "https://questoes.grancursosonline.com.br/aluno/filtro/concursos?assunto=404260%2C425277%2C425266%2C425267%2C425268&desatualizada=0&anulada=0&query=", concluido: false, tempoEstudado: 0 },
                { dia: 5, disciplina: "SUS 2", tema: "PRINCÍPIOS E DIRETRIZES DO SUS", teoria: "https://www.youtube.com/watch?v=X768cJOy754", exercicios: "https://questoes.grancursosonline.com.br/aluno/filtro/concursos?anos=2025%2C2024%2C2023%2C2022%2C2021&cargo=5489%2C7802%2C20392%2C22015%2C41474%2C6909%2C7670%2C7803%2C24413%2C36670%2C7681%2C7398%2C21172%2C21374%2C20876%2C24245%2C6916%2C41470%2C41471%2C1226&assunto=424069&desatualizada=0&anulada=0", concluido: false, tempoEstudado: 0 },
                { dia: 5, disciplina: "ESPECÍFICA 1", tema: "SAÚDE DA MULHER", teoria: "https://www.youtube.com/watch?v=qLwI8yS_xUs", exercicios: "https://questoes.grancursosonline.com.br/aluno/filtro/concursos?tiposProva=1&anos=2025%2C2024%2C2023&assunto=413437&desatualizada=0&anulada=0", concluido: false, tempoEstudado: 0 },
                { dia: 5, disciplina: "ESPECÍFICA 2", tema: "TÉCNICAS BÁSICAS DE ENFERMAGEM - CATETERISMO, SONDAS, DRENOS E OSTOMIAS", teoria: "https://www.youtube.com/watch?v=C8CdkAgmZQI", exercicios: "Exercícios no final do conteúdo", concluido: false, tempoEstudado: 0 },
                { dia: 6, disciplina: "REVISÃO SEMANAL", tema: "GERAL", teoria: "REVISE TODOS OS SEUS ATIVOS DE APRENDIZAGEM PRODUZIDOS AO LONGO DA SEMANA", exercicios: "TRABALHE E ESTUDE TODOS OS ERROS COMETIDOS EM QUESTÕES RESOLVIDAS", concluido: false, tempoEstudado: 0 },
                { dia: 7, disciplina: "SIMULADO", tema: "", teoria: "https://www.pciconcursos.com.br/provas/enfermeiro-2023", exercicios: "", concluido: false, tempoEstudado: 0 }
            ]
        },

        // SEMANA 2
        {
            id: 2,
            nome: "SEMANA 2",
            revisao: false,
            dias: [
                { dia: 1, disciplina: "PORTUGUÊS", tema: "MORFOLOGIA - ESTRUTURA DAS PALAVRAS (ASSISTIR METADE)", teoria: "https://www.youtube.com/watch?v=eXbOKY9pQ5Q", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 1, disciplina: "ESPECÍFICA 1", tema: "ATENÇÃO PRIMÁRIA A SAÚDE (ASSISTIR METADE)", teoria: "https://www.youtube.com/watch?v=Y1w41BaOlvc&t=1s", exercicios: "Exercícios no final do conteúdo", concluido: false, tempoEstudado: 0 },
                { dia: 1, disciplina: "RLM", tema: "REVISÃO", teoria: "ESTUDE OS ATIVOS DE APRENDIZAGEM ELABORADOS DURANTE O ESTUDO", exercicios: "https://questoes.grancursosonline.com.br/aluno/filtro/concursos?assunto=404260%2C425277%2C425266%2C425267%2C425268&desatualizada=0&anulada=0&query=", concluido: false, tempoEstudado: 0 },
                { dia: 2, disciplina: "ESPECÍFICA 2", tema: "PREPARO E ADMINISTRAÇÃO DE MEDICAMENTOS (ASSISTIR METADE)", teoria: "https://www.youtube.com/watch?v=JLBxLIPnG1Q", exercicios: "Exercícios no final do conteúdo", concluido: false, tempoEstudado: 0 },
                { dia: 2, disciplina: "SUS 1", tema: "REVISÃO", teoria: "ESTUDE OS ATIVOS DE APRENDIZAGEM ELABORADOS DURANTE O ESTUDO", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 2, disciplina: "ESPECÍFICA 1", tema: "ATENÇÃO PRIMÁRIA A SAÚDE (FINALIZAR)", teoria: "https://www.youtube.com/watch?v=Y1w41BaOlvc&t=1s", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 3, disciplina: "SUS 1", tema: "REVISÃO", teoria: "ESTUDE OS ATIVOS DE APRENDIZAGEM ELABORADOS DURANTE O ESTUDO", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 3, disciplina: "ESPECÍFICA 2", tema: "PREPARO E ADMINISTRAÇÃO DE MEDICAMENTOS (FINALIZAR)", teoria: "https://www.youtube.com/watch?v=JLBxLIPnG1Q", exercicios: "https://questoes.grancursosonline.com.br/aluno/filtro/concursos?tiposProva=1&anos=2025%2C2024&assunto=413430&desatualizada=0&anulada=0", concluido: false, tempoEstudado: 0 },
                { dia: 3, disciplina: "PORTUGUÊS", tema: "MORFOLOGIA - ESTRUTURA DAS PALAVRAS (FINALIZAR)", teoria: "https://www.youtube.com/watch?v=eXbOKY9pQ5Q", exercicios: "https://questoes.grancursosonline.com.br/aluno/filtro/concursos?anos=2025%2C2024%2C2023&assunto=403642&desatualizada=0&anulada=0", concluido: false, tempoEstudado: 0 },
                { dia: 4, disciplina: "ESPECÍFICA 1", tema: "E-SUS / PRONTUÁRIO ELETRÔNICO", teoria: "https://www.youtube.com/watch?v=FqJbC7b9TpA", exercicios: "https://questoes.grancursosonline.com.br/aluno/filtro/concursos?tiposProva=1&anos=2025%2C2024&assunto=451629&desatualizada=0&anulada=0", concluido: false, tempoEstudado: 0 },
                { dia: 4, disciplina: "SUS 2", tema: "REVISÃO", teoria: "ESTUDE OS ATIVOS DE APRENDIZAGEM ELABORADOS DURANTE O ESTUDO", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 4, disciplina: "RLM", tema: "REVISÃO", teoria: "ESTUDE OS ATIVOS DE APRENDIZAGEM ELABORADOS DURANTE O ESTUDO", exercicios: "https://questoes.grancursosonline.com.br/aluno/filtro/concursos?assunto=404260%2C425277%2C425266%2C425267%2C425268&desatualizada=0&anulada=0&query=", concluido: false, tempoEstudado: 0 },
                { dia: 5, disciplina: "SUS 2", tema: "REVISÃO", teoria: "ESTUDE OS ATIVOS DE APRENDIZAGEM ELABORADOS DURANTE O ESTUDO", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 5, disciplina: "ESPECÍFICA 1", tema: "CADERNETA DA GESTANTE", teoria: "https://www.youtube.com/watch?v=UzLfRkpxb74", exercicios: "https://questoes.grancursosonline.com.br/aluno/filtro/concursos?tiposProva=1&anos=2025%2C2024&assunto=428339&desatualizada=0&anulada=0", concluido: false, tempoEstudado: 0 },
                { dia: 5, disciplina: "ESPECÍFICA 2", tema: "ADMINSTRAÇÃO DE MEDICAMENTOS (ASSISTIR ATÉ 1H15MIN)", teoria: "https://www.youtube.com/watch?v=R1qMd62FI2g&t=2s", exercicios: "Exercícios no final do conteúdo", concluido: false, tempoEstudado: 0 },
                { dia: 6, disciplina: "REVISÃO SEMANAL", tema: "GERAL", teoria: "REVISE TODOS OS SEUS ATIVOS DE APRENDIZAGEM PRODUZIDOS AO LONGO DA SEMANA", exercicios: "TRABALHE E ESTUDE TODOS OS ERROS COMETIDOS EM QUESTÕES RESOLVIDAS", concluido: false, tempoEstudado: 0 },
                { dia: 7, disciplina: "SIMULADO", tema: "", teoria: "https://www.pciconcursos.com.br/provas/enfermeiro-2023", exercicios: "", concluido: false, tempoEstudado: 0 }
            ]
        },

        // SEMANA 3
        {
            id: 3,
            nome: "SEMANA 3",
            revisao: false,
            dias: [
                { dia: 1, disciplina: "PORTUGUÊS", tema: "CONTEÚDO DA SEMANA 3 - DIA 1", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 2, disciplina: "ESPECÍFICA 1", tema: "CONTEÚDO DA SEMANA 3 - DIA 2", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 3, disciplina: "SUS 1", tema: "CONTEÚDO DA SEMANA 3 - DIA 3", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 4, disciplina: "ESPECÍFICA 2", tema: "CONTEÚDO DA SEMANA 3 - DIA 4", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 5, disciplina: "RLM", tema: "CONTEÚDO DA SEMANA 3 - DIA 5", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 6, disciplina: "REVISÃO SEMANAL", tema: "GERAL", teoria: "REVISE TODOS OS SEUS ATIVOS DE APRENDIZAGEM PRODUZIDOS AO LONGO DA SEMANA", exercicios: "TRABALHE E ESTUDE TODOS OS ERROS COMETIDOS EM QUESTÕES RESOLVIDAS", concluido: false, tempoEstudado: 0 },
                { dia: 7, disciplina: "SIMULADO", tema: "", teoria: "https://www.pciconcursos.com.br/provas/enfermeiro-2023", exercicios: "", concluido: false, tempoEstudado: 0 }
            ]
        },

        // SEMANA 4
        {
            id: 4,
            nome: "SEMANA 4",
            revisao: false,
            dias: [
                { dia: 1, disciplina: "PORTUGUÊS", tema: "CONTEÚDO DA SEMANA 4 - DIA 1", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 2, disciplina: "ESPECÍFICA 1", tema: "CONTEÚDO DA SEMANA 4 - DIA 2", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 3, disciplina: "SUS 1", tema: "CONTEÚDO DA SEMANA 4 - DIA 3", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 4, disciplina: "ESPECÍFICA 2", tema: "CONTEÚDO DA SEMANA 4 - DIA 4", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 5, disciplina: "RLM", tema: "CONTEÚDO DA SEMANA 4 - DIA 5", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 6, disciplina: "REVISÃO SEMANAL", tema: "GERAL", teoria: "REVISE TODOS OS SEUS ATIVOS DE APRENDIZAGEM PRODUZIDOS AO LONGO DA SEMANA", exercicios: "TRABALHE E ESTUDE TODOS OS ERROS COMETIDOS EM QUESTÕES RESOLVIDAS", concluido: false, tempoEstudado: 0 },
                { dia: 7, disciplina: "SIMULADO", tema: "", teoria: "https://www.pciconcursos.com.br/provas/enfermeiro-2023", exercicios: "", concluido: false, tempoEstudado: 0 }
            ]
        },

        // SEMANA 5 (REVISÃO)
        {
            id: 5,
            nome: "SEMANA 5",
            revisao: true,
            dias: [
                { dia: 1, disciplina: "PORTUGUÊS", tema: "REVISÃO - DIA 1", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 2, disciplina: "ESPECÍFICA 1", tema: "REVISÃO - DIA 2", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 3, disciplina: "SUS 1", tema: "REVISÃO - DIA 3", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 4, disciplina: "ESPECÍFICA 2", tema: "REVISÃO - DIA 4", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 5, disciplina: "RLM", tema: "REVISÃO - DIA 5", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 6, disciplina: "REVISÃO SEMANAL", tema: "GERAL", teoria: "REVISE TODOS OS SEUS ATIVOS DE APRENDIZAGEM PRODUZIDOS AO LONGO DA SEMANA", exercicios: "TRABALHE E ESTUDE TODOS OS ERROS COMETIDOS EM QUESTÕES RESOLVIDAS", concluido: false, tempoEstudado: 0 },
                { dia: 7, disciplina: "SIMULADO", tema: "", teoria: "https://www.pciconcursos.com.br/provas/enfermeiro-2023", exercicios: "", concluido: false, tempoEstudado: 0 }
            ]
        },

        // SEMANA 6
        {
            id: 6,
            nome: "SEMANA 6",
            revisao: false,
            dias: [
                { dia: 1, disciplina: "PORTUGUÊS", tema: "CONTEÚDO DA SEMANA 6 - DIA 1", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 2, disciplina: "ESPECÍFICA 1", tema: "CONTEÚDO DA SEMANA 6 - DIA 2", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 3, disciplina: "SUS 1", tema: "CONTEÚDO DA SEMANA 6 - DIA 3", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 4, disciplina: "ESPECÍFICA 2", tema: "CONTEÚDO DA SEMANA 6 - DIA 4", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 5, disciplina: "RLM", tema: "CONTEÚDO DA SEMANA 6 - DIA 5", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 6, disciplina: "REVISÃO SEMANAL", tema: "GERAL", teoria: "REVISE TODOS OS SEUS ATIVOS DE APRENDIZAGEM PRODUZIDOS AO LONGO DA SEMANA", exercicios: "TRABALHE E ESTUDE TODOS OS ERROS COMETIDOS EM QUESTÕES RESOLVIDAS", concluido: false, tempoEstudado: 0 },
                { dia: 7, disciplina: "SIMULADO", tema: "", teoria: "https://www.pciconcursos.com.br/provas/enfermeiro-2023", exercicios: "", concluido: false, tempoEstudado: 0 }
            ]
        },

        // SEMANA 7
        {
            id: 7,
            nome: "SEMANA 7",
            revisao: false,
            dias: [
                { dia: 1, disciplina: "PORTUGUÊS", tema: "CONTEÚDO DA SEMANA 7 - DIA 1", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 2, disciplina: "ESPECÍFICA 1", tema: "CONTEÚDO DA SEMANA 7 - DIA 2", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 3, disciplina: "SUS 1", tema: "CONTEÚDO DA SEMANA 7 - DIA 3", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 4, disciplina: "ESPECÍFICA 2", tema: "CONTEÚDO DA SEMANA 7 - DIA 4", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 5, disciplina: "RLM", tema: "CONTEÚDO DA SEMANA 7 - DIA 5", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 6, disciplina: "REVISÃO SEMANAL", tema: "GERAL", teoria: "REVISE TODOS OS SEUS ATIVOS DE APRENDIZAGEM PRODUZIDOS AO LONGO DA SEMANA", exercicios: "TRABALHE E ESTUDE TODOS OS ERROS COMETIDOS EM QUESTÕES RESOLVIDAS", concluido: false, tempoEstudado: 0 },
                { dia: 7, disciplina: "SIMULADO", tema: "", teoria: "https://www.pciconcursos.com.br/provas/enfermeiro-2023", exercicios: "", concluido: false, tempoEstudado: 0 }
            ]
        },

        // SEMANA 8
        {
            id: 8,
            nome: "SEMANA 8",
            revisao: false,
            dias: [
                { dia: 1, disciplina: "PORTUGUÊS", tema: "CONTEÚDO DA SEMANA 8 - DIA 1", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 2, disciplina: "ESPECÍFICA 1", tema: "CONTEÚDO DA SEMANA 8 - DIA 2", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 3, disciplina: "SUS 1", tema: "CONTEÚDO DA SEMANA 8 - DIA 3", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 4, disciplina: "ESPECÍFICA 2", tema: "CONTEÚDO DA SEMANA 8 - DIA 4", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 5, disciplina: "RLM", tema: "CONTEÚDO DA SEMANA 8 - DIA 5", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 6, disciplina: "REVISÃO SEMANAL", tema: "GERAL", teoria: "REVISE TODOS OS SEUS ATIVOS DE APRENDIZAGEM PRODUZIDOS AO LONGO DA SEMANA", exercicios: "TRABALHE E ESTUDE TODOS OS ERROS COMETIDOS EM QUESTÕES RESOLVIDAS", concluido: false, tempoEstudado: 0 },
                { dia: 7, disciplina: "SIMULADO", tema: "", teoria: "https://www.pciconcursos.com.br/provas/enfermeiro-2023", exercicios: "", concluido: false, tempoEstudado: 0 }
            ]
        },

        // SEMANA 9
        {
            id: 9,
            nome: "SEMANA 9",
            revisao: false,
            dias: [
                { dia: 1, disciplina: "PORTUGUÊS", tema: "CONTEÚDO DA SEMANA 9 - DIA 1", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 2, disciplina: "ESPECÍFICA 1", tema: "CONTEÚDO DA SEMANA 9 - DIA 2", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 3, disciplina: "SUS 1", tema: "CONTEÚDO DA SEMANA 9 - DIA 3", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 4, disciplina: "ESPECÍFICA 2", tema: "CONTEÚDO DA SEMANA 9 - DIA 4", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 5, disciplina: "RLM", tema: "CONTEÚDO DA SEMANA 9 - DIA 5", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 6, disciplina: "REVISÃO SEMANAL", tema: "GERAL", teoria: "REVISE TODOS OS SEUS ATIVOS DE APRENDIZAGEM PRODUZIDOS AO LONGO DA SEMANA", exercicios: "TRABALHE E ESTUDE TODOS OS ERROS COMETIDOS EM QUESTÕES RESOLVIDAS", concluido: false, tempoEstudado: 0 },
                { dia: 7, disciplina: "SIMULADO", tema: "", teoria: "https://www.pciconcursos.com.br/provas/enfermeiro-2023", exercicios: "", concluido: false, tempoEstudado: 0 }
            ]
        },

        // SEMANA 10 (REVISÃO)
        {
            id: 10,
            nome: "SEMANA 10",
            revisao: true,
            dias: [
                { dia: 1, disciplina: "PORTUGUÊS", tema: "REVISÃO - DIA 1", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 2, disciplina: "ESPECÍFICA 1", tema: "REVISÃO - DIA 2", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 3, disciplina: "SUS 1", tema: "REVISÃO - DIA 3", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 4, disciplina: "ESPECÍFICA 2", tema: "REVISÃO - DIA 4", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 5, disciplina: "RLM", tema: "REVISÃO - DIA 5", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 6, disciplina: "REVISÃO SEMANAL", tema: "GERAL", teoria: "REVISE TODOS OS SEUS ATIVOS DE APRENDIZAGEM PRODUZIDOS AO LONGO DA SEMANA", exercicios: "TRABALHE E ESTUDE TODOS OS ERROS COMETIDOS EM QUESTÕES RESOLVIDAS", concluido: false, tempoEstudado: 0 },
                { dia: 7, disciplina: "SIMULADO", tema: "", teoria: "https://www.pciconcursos.com.br/provas/enfermeiro-2023", exercicios: "", concluido: false, tempoEstudado: 0 }
            ]
        },

        // SEMANA 11
        {
            id: 11,
            nome: "SEMANA 11",
            revisao: false,
            dias: [
                { dia: 1, disciplina: "PORTUGUÊS", tema: "CONTEÚDO DA SEMANA 11 - DIA 1", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 2, disciplina: "ESPECÍFICA 1", tema: "CONTEÚDO DA SEMANA 11 - DIA 2", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 3, disciplina: "SUS 1", tema: "CONTEÚDO DA SEMANA 11 - DIA 3", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 4, disciplina: "ESPECÍFICA 2", tema: "CONTEÚDO DA SEMANA 11 - DIA 4", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 5, disciplina: "RLM", tema: "CONTEÚDO DA SEMANA 11 - DIA 5", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 6, disciplina: "REVISÃO SEMANAL", tema: "GERAL", teoria: "REVISE TODOS OS SEUS ATIVOS DE APRENDIZAGEM PRODUZIDOS AO LONGO DA SEMANA", exercicios: "TRABALHE E ESTUDE TODOS OS ERROS COMETIDOS EM QUESTÕES RESOLVIDAS", concluido: false, tempoEstudado: 0 },
                { dia: 7, disciplina: "SIMULADO", tema: "", teoria: "https://www.pciconcursos.com.br/provas/enfermeiro-2023", exercicios: "", concluido: false, tempoEstudado: 0 }
            ]
        },

        // SEMANA 12
        {
            id: 12,
            nome: "SEMANA 12",
            revisao: false,
            dias: [
                { dia: 1, disciplina: "PORTUGUÊS", tema: "CONTEÚDO DA SEMANA 12 - DIA 1", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 2, disciplina: "ESPECÍFICA 1", tema: "CONTEÚDO DA SEMANA 12 - DIA 2", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 3, disciplina: "SUS 1", tema: "CONTEÚDO DA SEMANA 12 - DIA 3", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 4, disciplina: "ESPECÍFICA 2", tema: "CONTEÚDO DA SEMANA 12 - DIA 4", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 5, disciplina: "RLM", tema: "CONTEÚDO DA SEMANA 12 - DIA 5", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 6, disciplina: "REVISÃO SEMANAL", tema: "GERAL", teoria: "REVISE TODOS OS SEUS ATIVOS DE APRENDIZAGEM PRODUZIDOS AO LONGO DA SEMANA", exercicios: "TRABALHE E ESTUDE TODOS OS ERROS COMETIDOS EM QUESTÕES RESOLVIDAS", concluido: false, tempoEstudado: 0 },
                { dia: 7, disciplina: "SIMULADO", tema: "", teoria: "https://www.pciconcursos.com.br/provas/enfermeiro-2023", exercicios: "", concluido: false, tempoEstudado: 0 }
            ]
        },

        // SEMANA 13
        {
            id: 13,
            nome: "SEMANA 13",
            revisao: false,
            dias: [
                { dia: 1, disciplina: "PORTUGUÊS", tema: "CONTEÚDO DA SEMANA 13 - DIA 1", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 2, disciplina: "ESPECÍFICA 1", tema: "CONTEÚDO DA SEMANA 13 - DIA 2", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 3, disciplina: "SUS 1", tema: "CONTEÚDO DA SEMANA 13 - DIA 3", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 4, disciplina: "ESPECÍFICA 2", tema: "CONTEÚDO DA SEMANA 13 - DIA 4", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 5, disciplina: "RLM", tema: "CONTEÚDO DA SEMANA 13 - DIA 5", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 6, disciplina: "REVISÃO SEMANAL", tema: "GERAL", teoria: "REVISE TODOS OS SEUS ATIVOS DE APRENDIZAGEM PRODUZIDOS AO LONGO DA SEMANA", exercicios: "TRABALHE E ESTUDE TODOS OS ERROS COMETIDOS EM QUESTÕES RESOLVIDAS", concluido: false, tempoEstudado: 0 },
                { dia: 7, disciplina: "SIMULADO", tema: "", teoria: "https://www.pciconcursos.com.br/provas/enfermeiro-2023", exercicios: "", concluido: false, tempoEstudado: 0 }
            ]
        },

        // SEMANA 14
        {
            id: 14,
            nome: "SEMANA 14",
            revisao: false,
            dias: [
                { dia: 1, disciplina: "PORTUGUÊS", tema: "CONTEÚDO DA SEMANA 14 - DIA 1", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 2, disciplina: "ESPECÍFICA 1", tema: "CONTEÚDO DA SEMANA 14 - DIA 2", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 3, disciplina: "SUS 1", tema: "CONTEÚDO DA SEMANA 14 - DIA 3", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 4, disciplina: "ESPECÍFICA 2", tema: "CONTEÚDO DA SEMANA 14 - DIA 4", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 5, disciplina: "RLM", tema: "CONTEÚDO DA SEMANA 14 - DIA 5", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 6, disciplina: "REVISÃO SEMANAL", tema: "GERAL", teoria: "REVISE TODOS OS SEUS ATIVOS DE APRENDIZAGEM PRODUZIDOS AO LONGO DA SEMANA", exercicios: "TRABALHE E ESTUDE TODOS OS ERROS COMETIDOS EM QUESTÕES RESOLVIDAS", concluido: false, tempoEstudado: 0 },
                { dia: 7, disciplina: "SIMULADO", tema: "", teoria: "https://www.pciconcursos.com.br/provas/enfermeiro-2023", exercicios: "", concluido: false, tempoEstudado: 0 }
            ]
        },

        // SEMANA 15 (REVISÃO)
        {
            id: 15,
            nome: "SEMANA 15",
            revisao: true,
            dias: [
                { dia: 1, disciplina: "PORTUGUÊS", tema: "REVISÃO - DIA 1", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 2, disciplina: "ESPECÍFICA 1", tema: "REVISÃO - DIA 2", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 3, disciplina: "SUS 1", tema: "REVISÃO - DIA 3", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 4, disciplina: "ESPECÍFICA 2", tema: "REVISÃO - DIA 4", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 5, disciplina: "RLM", tema: "REVISÃO - DIA 5", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 6, disciplina: "REVISÃO SEMANAL", tema: "GERAL", teoria: "REVISE TODOS OS SEUS ATIVOS DE APRENDIZAGEM PRODUZIDOS AO LONGO DA SEMANA", exercicios: "TRABALHE E ESTUDE TODOS OS ERROS COMETIDOS EM QUESTÕES RESOLVIDAS", concluido: false, tempoEstudado: 0 },
                { dia: 7, disciplina: "SIMULADO", tema: "", teoria: "https://www.pciconcursos.com.br/provas/enfermeiro-2023", exercicios: "", concluido: false, tempoEstudado: 0 }
            ]
        },

        // SEMANA 16
        {
            id: 16,
            nome: "SEMANA 16",
            revisao: false,
            dias: [
                { dia: 1, disciplina: "PORTUGUÊS", tema: "CONTEÚDO DA SEMANA 16 - DIA 1", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 2, disciplina: "ESPECÍFICA 1", tema: "CONTEÚDO DA SEMANA 16 - DIA 2", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 3, disciplina: "SUS 1", tema: "CONTEÚDO DA SEMANA 16 - DIA 3", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 4, disciplina: "ESPECÍFICA 2", tema: "CONTEÚDO DA SEMANA 16 - DIA 4", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 5, disciplina: "RLM", tema: "CONTEÚDO DA SEMANA 16 - DIA 5", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 6, disciplina: "REVISÃO SEMANAL", tema: "GERAL", teoria: "REVISE TODOS OS SEUS ATIVOS DE APRENDIZAGEM PRODUZIDOS AO LONGO DA SEMANA", exercicios: "TRABALHE E ESTUDE TODOS OS ERROS COMETIDOS EM QUESTÕES RESOLVIDAS", concluido: false, tempoEstudado: 0 },
                { dia: 7, disciplina: "SIMULADO", tema: "", teoria: "https://www.pciconcursos.com.br/provas/enfermeiro-2023", exercicios: "", concluido: false, tempoEstudado: 0 }
            ]
        },

        // SEMANA 17
        {
            id: 17,
            nome: "SEMANA 17",
            revisao: false,
            dias: [
                { dia: 1, disciplina: "PORTUGUÊS", tema: "CONTEÚDO DA SEMANA 17 - DIA 1", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 2, disciplina: "ESPECÍFICA 1", tema: "CONTEÚDO DA SEMANA 17 - DIA 2", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 3, disciplina: "SUS 1", tema: "CONTEÚDO DA SEMANA 17 - DIA 3", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 4, disciplina: "ESPECÍFICA 2", tema: "CONTEÚDO DA SEMANA 17 - DIA 4", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 5, disciplina: "RLM", tema: "CONTEÚDO DA SEMANA 17 - DIA 5", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 6, disciplina: "REVISÃO SEMANAL", tema: "GERAL", teoria: "REVISE TODOS OS SEUS ATIVOS DE APRENDIZAGEM PRODUZIDOS AO LONGO DA SEMANA", exercicios: "TRABALHE E ESTUDE TODOS OS ERROS COMETIDOS EM QUESTÕES RESOLVIDAS", concluido: false, tempoEstudado: 0 },
                { dia: 7, disciplina: "SIMULADO", tema: "", teoria: "https://www.pciconcursos.com.br/provas/enfermeiro-2023", exercicios: "", concluido: false, tempoEstudado: 0 }
            ]
        },

        // SEMANA 18
        {
            id: 18,
            nome: "SEMANA 18",
            revisao: false,
            dias: [
                { dia: 1, disciplina: "PORTUGUÊS", tema: "CONTEÚDO DA SEMANA 18 - DIA 1", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 2, disciplina: "ESPECÍFICA 1", tema: "CONTEÚDO DA SEMANA 18 - DIA 2", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 3, disciplina: "SUS 1", tema: "CONTEÚDO DA SEMANA 18 - DIA 3", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 4, disciplina: "ESPECÍFICA 2", tema: "CONTEÚDO DA SEMANA 18 - DIA 4", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 5, disciplina: "RLM", tema: "CONTEÚDO DA SEMANA 18 - DIA 5", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 6, disciplina: "REVISÃO SEMANAL", tema: "GERAL", teoria: "REVISE TODOS OS SEUS ATIVOS DE APRENDIZAGEM PRODUZIDOS AO LONGO DA SEMANA", exercicios: "TRABALHE E ESTUDE TODOS OS ERROS COMETIDOS EM QUESTÕES RESOLVIDAS", concluido: false, tempoEstudado: 0 },
                { dia: 7, disciplina: "SIMULADO", tema: "", teoria: "https://www.pciconcursos.com.br/provas/enfermeiro-2023", exercicios: "", concluido: false, tempoEstudado: 0 }
            ]
        },

        // SEMANA 19
        {
            id: 19,
            nome: "SEMANA 19",
            revisao: false,
            dias: [
                { dia: 1, disciplina: "PORTUGUÊS", tema: "CONTEÚDO DA SEMANA 19 - DIA 1", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 2, disciplina: "ESPECÍFICA 1", tema: "CONTEÚDO DA SEMANA 19 - DIA 2", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 3, disciplina: "SUS 1", tema: "CONTEÚDO DA SEMANA 19 - DIA 3", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 4, disciplina: "ESPECÍFICA 2", tema: "CONTEÚDO DA SEMANA 19 - DIA 4", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 5, disciplina: "RLM", tema: "CONTEÚDO DA SEMANA 19 - DIA 5", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 6, disciplina: "REVISÃO SEMANAL", tema: "GERAL", teoria: "REVISE TODOS OS SEUS ATIVOS DE APRENDIZAGEM PRODUZIDOS AO LONGO DA SEMANA", exercicios: "TRABALHE E ESTUDE TODOS OS ERROS COMETIDOS EM QUESTÕES RESOLVIDAS", concluido: false, tempoEstudado: 0 },
                { dia: 7, disciplina: "SIMULADO", tema: "", teoria: "https://www.pciconcursos.com.br/provas/enfermeiro-2023", exercicios: "", concluido: false, tempoEstudado: 0 }
            ]
        },

        // SEMANA 20 (REVISÃO-INTENSIVO)
        {
            id: 20,
            nome: "SEMANA 20",
            revisao: true,
            dias: [
                { dia: 1, disciplina: "PORTUGUÊS", tema: "REVISÃO-INTENSIVO - DIA 1", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 2, disciplina: "ESPECÍFICA 1", tema: "REVISÃO-INTENSIVO - DIA 2", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 3, disciplina: "SUS 1", tema: "REVISÃO-INTENSIVO - DIA 3", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 4, disciplina: "ESPECÍFICA 2", tema: "REVISÃO-INTENSIVO - DIA 4", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 5, disciplina: "RLM", tema: "REVISÃO-INTENSIVO - DIA 5", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 6, disciplina: "REVISÃO SEMANAL", tema: "GERAL", teoria: "REVISE TODOS OS SEUS ATIVOS DE APRENDIZAGEM PRODUZIDOS AO LONGO DA SEMANA", exercicios: "TRABALHE E ESTUDE TODOS OS ERROS COMETIDOS EM QUESTÕES RESOLVIDAS", concluido: false, tempoEstudado: 0 },
                { dia: 7, disciplina: "SIMULADO", tema: "", teoria: "https://www.pciconcursos.com.br/provas/enfermeiro-2023", exercicios: "", concluido: false, tempoEstudado: 0 }
            ]
        },

        // SEMANA 21 (REVISÃO-INTENSIVO)
        {
            id: 21,
            nome: "SEMANA 21",
            revisao: true,
            dias: [
                { dia: 1, disciplina: "PORTUGUÊS", tema: "REVISÃO-INTENSIVO - DIA 1", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 2, disciplina: "ESPECÍFICA 1", tema: "REVISÃO-INTENSIVO - DIA 2", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 3, disciplina: "SUS 1", tema: "REVISÃO-INTENSIVO - DIA 3", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 4, disciplina: "ESPECÍFICA 2", tema: "REVISÃO-INTENSIVO - DIA 4", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 5, disciplina: "RLM", tema: "REVISÃO-INTENSIVO - DIA 5", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 6, disciplina: "REVISÃO SEMANAL", tema: "GERAL", teoria: "REVISE TODOS OS SEUS ATIVOS DE APRENDIZAGEM PRODUZIDOS AO LONGO DA SEMANA", exercicios: "TRABALHE E ESTUDE TODOS OS ERROS COMETIDOS EM QUESTÕES RESOLVIDAS", concluido: false, tempoEstudado: 0 },
                { dia: 7, disciplina: "SIMULADO", tema: "", teoria: "https://www.pciconcursos.com.br/provas/enfermeiro-2023", exercicios: "", concluido: false, tempoEstudado: 0 }
            ]
        },

        // SEMANA 22 (REVISÃO-INTENSIVO)
        {
            id: 22,
            nome: "SEMANA 22",
            revisao: true,
            dias: [
                { dia: 1, disciplina: "PORTUGUÊS", tema: "REVISÃO-INTENSIVO - DIA 1", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 2, disciplina: "ESPECÍFICA 1", tema: "REVISÃO-INTENSIVO - DIA 2", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 3, disciplina: "SUS 1", tema: "REVISÃO-INTENSIVO - DIA 3", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 4, disciplina: "ESPECÍFICA 2", tema: "REVISÃO-INTENSIVO - DIA 4", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 5, disciplina: "RLM", tema: "REVISÃO-INTENSIVO - DIA 5", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 6, disciplina: "REVISÃO SEMANAL", tema: "GERAL", teoria: "REVISE TODOS OS SEUS ATIVOS DE APRENDIZAGEM PRODUZIDOS AO LONGO DA SEMANA", exercicios: "TRABALHE E ESTUDE TODOS OS ERROS COMETIDOS EM QUESTÕES RESOLVIDAS", concluido: false, tempoEstudado: 0 },
                { dia: 7, disciplina: "SIMULADO", tema: "", teoria: "https://www.pciconcursos.com.br/provas/enfermeiro-2023", exercicios: "", concluido: false, tempoEstudado: 0 }
            ]
        },

        // SEMANA 23 (REVISÃO-INTENSIVO)
        {
            id: 23,
            nome: "SEMANA 23",
            revisao: true,
            dias: [
                { dia: 1, disciplina: "PORTUGUÊS", tema: "REVISÃO-INTENSIVO - DIA 1", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 2, disciplina: "ESPECÍFICA 1", tema: "REVISÃO-INTENSIVO - DIA 2", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 3, disciplina: "SUS 1", tema: "REVISÃO-INTENSIVO - DIA 3", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 4, disciplina: "ESPECÍFICA 2", tema: "REVISÃO-INTENSIVO - DIA 4", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 5, disciplina: "RLM", tema: "REVISÃO-INTENSIVO - DIA 5", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 6, disciplina: "REVISÃO SEMANAL", tema: "GERAL", teoria: "REVISE TODOS OS SEUS ATIVOS DE APRENDIZAGEM PRODUZIDOS AO LONGO DA SEMANA", exercicios: "TRABALHE E ESTUDE TODOS OS ERROS COMETIDOS EM QUESTÕES RESOLVIDAS", concluido: false, tempoEstudado: 0 },
                { dia: 7, disciplina: "SIMULADO", tema: "", teoria: "https://www.pciconcursos.com.br/provas/enfermeiro-2023", exercicios: "", concluido: false, tempoEstudado: 0 }
            ]
        },

        // SEMANA 24 (REVISÃO-INTENSIVO)
        {
            id: 24,
            nome: "SEMANA 24",
            revisao: true,
            dias: [
                { dia: 1, disciplina: "PORTUGUÊS", tema: "REVISÃO-INTENSIVO - DIA 1", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 2, disciplina: "ESPECÍFICA 1", tema: "REVISÃO-INTENSIVO - DIA 2", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 3, disciplina: "SUS 1", tema: "REVISÃO-INTENSIVO - DIA 3", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 4, disciplina: "ESPECÍFICA 2", tema: "REVISÃO-INTENSIVO - DIA 4", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 5, disciplina: "RLM", tema: "REVISÃO-INTENSIVO - DIA 5", teoria: "", exercicios: "", concluido: false, tempoEstudado: 0 },
                { dia: 6, disciplina: "REVISÃO SEMANAL", tema: "GERAL", teoria: "REVISE TODOS OS SEUS ATIVOS DE APRENDIZAGEM PRODUZIDOS AO LONGO DA SEMANA", exercicios: "TRABALHE E ESTUDE TODOS OS ERROS COMETIDOS EM QUESTÕES RESOLVIDAS", concluido: false, tempoEstudado: 0 },
                { dia: 7, disciplina: "SIMULADO", tema: "", teoria: "https://www.pciconcursos.com.br/provas/enfermeiro-2023", exercicios: "", concluido: false, tempoEstudado: 0 }
            ]
        }
    ]
};

// Exportar para uso em módulos (se necessário)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = cronogramaDataDefault;
}
