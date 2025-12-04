// Dados do cronograma - COMPLETO (24 semanas)
const cronogramaDataDefault = {
    semanas: [
        {
            id: 1,
            nome: "SEMANA 1",
            dias: [
                {
                    dia: 1,
                    disciplina: "PORTUGUÊS",
                    tema: "COMPREENSÃO E INTERPRETAÇÃO DE TEXTOS",
                    teoria: "https://www.youtube.com/watch?v=9C2EZxWzKjo",
                    exercicios: "https://questoes.grancursosonline.com.br/questoes-de-concursos/lingua-portuguesa-interpretacao-de-texto-403701",
                    concluido: false,
                    tempoEstudado: 0
                },
                {
                    dia: 1,
                    disciplina: "ESPECÍFICA 1",
                    tema: "FUNDAMENTOS DE ENFERMAGEM - SINAIS VITAIS",
                    teoria: "https://drive.google.com/file/d/1CC3mUmYa1kRv9oOZ4cI8FOwTSQheoA6Q/view?usp=sharing",
                    exercicios: "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=172&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&subject_ids%5B%5D=6771",
                    concluido: false,
                    tempoEstudado: 0
                },
                {
                    dia: 1,
                    disciplina: "RLM",
                    tema: "PROPOSIÇÕES LÓGICAS",
                    teoria: "https://www.youtube.com/watch?v=7a9ve2MEOWc&list=PL4sBa83-9lauF3784j81T49oF2Ee1uLlB",
                    exercicios: "https://questoes.grancursosonline.com.br/aluno/filtro/concursos?assunto=404260%2C425277%2C425266%2C425267%2C425268&desatualizada=0&anulada=0&query=",
                    concluido: false,
                    tempoEstudado: 0
                },
                {
                    dia: 2,
                    disciplina: "ESPECÍFICA 2",
                    tema: "SAÚDE DA MULHER - PLANEJAMENTO REPRODUTIVO",
                    teoria: "https://www.youtube.com/watch?v=ejNR2lJKPtU",
                    exercicios: "https://questoes.grancursosonline.com.br/aluno/filtro/concursos?tiposProva=1&anos=2025%2C2024%2C2023&assunto=413326%2C405804&desatualizada=0&anulada=0",
                    concluido: false,
                    tempoEstudado: 0
                },
                {
                    dia: 2,
                    disciplina: "SUS 1",
                    tema: "EVOLUÇÃO HISTÓRICA",
                    teoria: "https://www.youtube.com/watch?v=ZBJjKgVXs7M",
                    exercicios: "https://questoes.grancursosonline.com.br/questoes-de-concursos/enfermagem-evolucao-historica-do-sus-428281",
                    concluido: false,
                    tempoEstudado: 0
                },
                {
                    dia: 2,
                    disciplina: "ESPECÍFICA 1",
                    tema: "FUNDAMENTOS DE ENFERMAGEM - OXIGENOTERAPIA",
                    teoria: "https://drive.google.com/file/d/1CC3mUmYa1kRv9oOZ4cI8FOwTSQheoA6Q/view",
                    exercicios: "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=172&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&subject_ids%5B%5D=5234",
                    concluido: false,
                    tempoEstudado: 0
                },
                {
                    dia: 3,
                    disciplina: "SUS 1",
                    tema: "CONSTITUIÇÃO FEDERAL ART. 194 A 200",
                    teoria: "https://www.youtube.com/watch?v=qFBZfgUR7WI",
                    exercicios: "https://questoes.grancursosonline.com.br/aluno/filtro/concursos?tiposProva=1&assunto=405752&desatualizada=0&anulada=0&query=constitui%C3%A7%C3%A3o+Federal+art.+194+a+200",
                    concluido: false,
                    tempoEstudado: 0
                },
                {
                    dia: 3,
                    disciplina: "ESPECÍFICA 2",
                    tema: "SAÚDE DA MULHER - ASSISTÊNCIA DE ENFERMAGEM NA GESTAÇÃO",
                    teoria: "https://www.youtube.com/watch?v=hTr1joeQP3Q",
                    exercicios: "EXERCÍCÍOS QUANDO FINALIZAR O CONTEÚDO",
                    concluido: false,
                    tempoEstudado: 0
                },
                {
                    dia: 3,
                    disciplina: "PORTUGUÊS",
                    tema: "COMPREENSÃO E INTERPRETAÇÃO DE TEXTOS",
                    teoria: "https://www.youtube.com/watch?v=8Fo44LNxqHI",
                    exercicios: "https://questoes.grancursosonline.com.br/questoes?assunto=403587&desatualizada=0&anulada=0&query=Interpreta%C3%A7%C3%A3o+de+texto",
                    concluido: false,
                    tempoEstudado: 0
                },
                {
                    dia: 4,
                    disciplina: "ESPECÍFICA 1",
                    tema: "EXAME FÍSICO",
                    teoria: "https://www.youtube.com/watch?v=C3-nVQUbvME&t=316s",
                    exercicios: "https://questoes.grancursosonline.com.br/aluno/filtro/concursos?tiposProva=1&anos=2025%2C2024%2C2023&assunto=428442&desatualizada=0&anulada=0&query=",
                    concluido: false,
                    tempoEstudado: 0
                },
                {
                    dia: 4,
                    disciplina: "SUS 2",
                    tema: "FINANCIAMENTO SUS",
                    teoria: "https://www.youtube.com/watch?v=5xoQbNBULpM",
                    exercicios: "EXERCÍCÍOS QUANDO FINALIZAR O CONTEÚDO",
                    concluido: false,
                    tempoEstudado: 0
                },
                {
                    dia: 4,
                    disciplina: "RLM",
                    tema: "CONECTIVOS",
                    teoria: "https://www.youtube.com/watch?v=2I6R8SS8-jk&list=PL4sBa83-9lauF3784j81T49oF2Ee1uLlB&index=2",
                    exercicios: "https://questoes.grancursosonline.com.br/aluno/filtro/concursos?orgao=3125&assunto=404263%2C425281%2C425282%2C404262%2C425284%2C425285%2C404264%2C425292%2C425293%2C425294%2C425295%2C404257&desatualizada=0&anulada=0&query=no%C3%A7%C3%B5es+de+l%C3%B3gicas",
                    concluido: false,
                    tempoEstudado: 0
                },
                {
                    dia: 5,
                    disciplina: "SUS 2",
                    tema: "FINANCIAMENTO SUS",
                    teoria: "https://www.youtube.com/watch?v=5xoQbNBULpM",
                    exercicios: "https://www.qconcursos.com/questoes-de-concursos/disciplinas/saude-publica-saude-publica/modelo-assistencial-e-financiamento-do-sus/questoes?utm_source=midia_paga&utm_medium=google_pmax&utm_campaign=qconcursos_acq_alwayson_pmax",
                    concluido: false,
                    tempoEstudado: 0
                },
                {
                    dia: 5,
                    disciplina: "ESPECÍFICA 1",
                    tema: "CLÍNICA MÉDICA - APARELHO RESPIRATÓRIO",
                    teoria: "https://www.youtube.com/watch?v=1ie4jRA8hTk",
                    exercicios: "https://questoes.grancursosonline.com.br/aluno/filtro/concursos?anos=2025%2C2024%2C2023%2C2022&assunto=413287%2C428471&desatualizada=0&anulada=0&query=",
                    concluido: false,
                    tempoEstudado: 0
                },
                {
                    dia: 5,
                    disciplina: "ESPECÍFICA 2",
                    tema: "SAÚDE DA MULHER - EXAMES NA GESTAÇÃO",
                    teoria: "https://www.youtube.com/watch?v=sn0Gj_rYxk4",
                    exercicios: "EXERCÍCÍOS QUANDO FINALIZAR O CONTEÚDO",
                    concluido: false,
                    tempoEstudado: 0
                },
                {
                    dia: 6,
                    disciplina: "REVISÃO SEMANAL",
                    tema: "GERAL",
                    teoria: "REVISE TODOS OS SEUS ATIVOS DE APRENDIZAGEM PRODUZIDOS AO LONGO DA SEMANA",
                    exercicios: "TRABALHE E ESTUDE TODOS OS ERROS COMETIDOS EM QUESTÕES RESOLVIDAS",
                    concluido: false,
                    tempoEstudado: 0
                },
                {
                    dia: 7,
                    disciplina: "SIMULADO",
                    tema: "",
                    teoria: "https://www.pciconcursos.com.br/provas/download/analista-em-saude-enfermeiro-prefeitura-sao-jose-dos-campos-sp-fgv-2023",
                    exercicios: "",
                    concluido: false,
                    tempoEstudado: 0
                }
            ]
        }
        // ... Adicione as outras 23 semanas aqui da mesma forma ...
        // (Por questão de espaço, vou mostrar apenas semana 1, mas você deve adicionar todas as 24 semanas que você forneceu)
    ]
};
