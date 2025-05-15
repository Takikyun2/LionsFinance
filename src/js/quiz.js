const quizData = [
    {
        pergunta: "O que é um orçamento pessoal?",
        opcoes: [
            "Um plano de investimento em ações",
            "Um controle de entradas e saídas de dinheiro",
            "Um limite de gastos imposto pelo banco",
            "Uma conta poupança para emergências"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a melhor definição para “gastos essenciais”?",
        opcoes: [
            "Viagens e passeios",
            "Parcelas do cartão de crédito",
            "Alimentação, moradia e transporte",
            "Compras de roupas e acessórios"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a porcentagem ideal da renda mensal que se recomenda economizar, segundo especialistas?",
        opcoes: [
            "5%",
            "10%",
            "30%",
            "50%"
        ],
        correta: 1
    },
    {
        pergunta: "Ter uma reserva de emergência significa:",
        opcoes: [
            "Guardar dinheiro apenas quando sobra",
            "Aplicar todo o dinheiro em ações de risco",
            "Ter um valor guardado para imprevistos",
            "Pagar as contas sempre em dia"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o maior risco de comprar por impulso?",
        opcoes: [
            "Pagar mais barato",
            "Não encontrar o produto de novo",
            "Comprometer o orçamento e se endividar",
            "Economizar tempo na decisão"
        ],
        correta: 2
    },
    {
        pergunta: "Qual ferramenta ajuda a controlar melhor as finanças?",
        opcoes: [
            "Redes sociais",
            "Planilhas ou aplicativos de controle financeiro",
            "Propagandas na TV",
            "Cartão de crédito"
        ],
        correta: 1
    },
    {
        pergunta: "O que significa “viver acima das suas possibilidades”?",
        opcoes: [
            "Guardar muito dinheiro todo mês",
            "Gastar mais do que se ganha",
            "Pagar as contas no vencimento",
            "Comprar apenas com dinheiro à vista"
        ],
        correta: 1
    },
    {
        pergunta: "Qual dessas opções representa uma boa prática de planejamento financeiro?",
        opcoes: [
            "Ignorar as dívidas",
            "Anotar (ter os gastos visíveis e organizados) todos os gastos",
            "Usar todo o limite do cartão de crédito",
            "Gastar o que sobrar em lazer"
        ],
        correta: 1
    },
    {
        pergunta: "Quando é recomendável começar a pensar na aposentadoria?",
        opcoes: [
            "Só depois dos 40 anos",
            "Assim que começar a trabalhar",
            "Quando faltar 5 anos para parar de trabalhar",
            "Nunca — o governo cuida disso"
        ],
        correta: 1
    },
    {
        pergunta: "Investir é:",
        opcoes: [
            "Algo exclusivo para pessoas ricas",
            "Guardar dinheiro em casa",
            "Aplicar dinheiro com objetivo de retorno futuro",
            "Deixar o dinheiro parado na conta corrente"
        ],
        correta: 2
    },
    {
        pergunta: "O que significa “investir” no mercado financeiro?",
        opcoes: [
            "Guardar dinheiro embaixo do colchão",
            "Usar o cartão de crédito",
            "Aplicar dinheiro com a intenção de obter lucro no futuro",
            "Fazer compras pela internet"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a principal função do Banco Central do Brasil?",
        opcoes: [
            "Vender ações",
            "Controlar a inflação, os juros e o sistema financeiro do país",
            "Emprestar dinheiro diretamente para pessoas físicas",
            "Administrar contas de empresas"
        ],
        correta: 1
    },
    {
        pergunta: "Qual desses investimentos é conhecido por ter baixo risco?",
        opcoes: [
            "Ações de empresas pequenas",
            "Loteria",
            "CDB com garantia do FGC",
            "Criptomoedas"
        ],
        correta: 2
    },
    {
        pergunta: "O que é a taxa Selic?",
        opcoes: [
            "O valor do dólar",
            "O valor do salário mínimo",
            "A taxa básica de juros da economia brasileira",
            "Um imposto sobre produtos importados"
        ],
        correta: 2
    },
    {
        pergunta: "O que é um “rendimento” em um investimento?",
        opcoes: [
            "A quantidade de dinheiro emprestada ao banco",
            "O valor dos impostos pagos",
            "O lucro ou retorno obtido com o investimento",
            "O valor que se gasta para abrir uma conta"
        ],
        correta: 2
    },
    {
        pergunta: "O que significa “diversificar investimentos”?",
        opcoes: [
            "Colocar todo o dinheiro em um único lugar",
            "Gastar o dinheiro com diferentes coisas",
            "Aplicar em diferentes tipos de investimentos para reduzir riscos",
            "Investir apenas em ações"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o papel de uma corretora de valores?",
        opcoes: [
            "Guardar dinheiro em uma conta poupança",
            "Oferecer empréstimos pessoais",
            "Intermediar a compra e venda de investimentos como ações e fundos",
            "Cobrar taxas bancárias"
        ],
        correta: 2
    }
];


class Quiz {
    constructor() {
        this.quizContainer = document.querySelector('.quiz-container');
        this.progressoBarra = document.querySelector('.progresso-barra');
        this.perguntaNumero = document.querySelector('.pergunta-numero');
        this.perguntaTexto = document.querySelector('.pergunta-texto');
        this.opcoesContainer = document.querySelector('.opcoes-resposta');
        this.botoesNavegacao = document.querySelectorAll('.quiz-navegacao .btn');

        this.perguntaAtual = 0;
        this.pontuacao = 0;

        this.iniciarQuiz();
        this.adicionarEventos();
    }

    iniciarQuiz() {
        this.mostrarPergunta();
        this.atualizarProgresso();
    }

    mostrarPergunta() {
        const pergunta = quizData[this.perguntaAtual];
        this.perguntaNumero.textContent = `Pergunta ${this.perguntaAtual + 1}/${quizData.length}`;
        this.perguntaTexto.textContent = pergunta.pergunta;

        this.opcoesContainer.innerHTML = pergunta.opcoes
            .map((opcao, index) =>
                `<div class="opcao" data-index="${index}">${opcao}</div>`
            ).join('');
    }

    atualizarProgresso() {
        const progresso = (this.perguntaAtual + 1) / quizData.length * 100;
        this.progressoBarra.style.width = `${progresso}%`;
    }

    adicionarEventos() {
        // Seleção de opções
        this.opcoesContainer.addEventListener('click', (e) => {
            const opcaoSelecionada = e.target.closest('.opcao');
            if (!opcaoSelecionada) return;

            document.querySelectorAll('.opcao').forEach(op => op.classList.remove('selecionada'));
            opcaoSelecionada.classList.add('selecionada');
        });

        // Navegação
        this.botoesNavegacao.forEach(botao => {
            botao.addEventListener('click', () => {
                if (botao.textContent === 'Próxima') {
                    this.verificarResposta();
                    this.proximaPergunta();
                }
            });
        });
    }

    verificarResposta() {
        const opcaoSelecionada = document.querySelector('.opcao.selecionada');
        if (opcaoSelecionada &&
            Number(opcaoSelecionada.dataset.index) === quizData[this.perguntaAtual].correta) {
            this.pontuacao++;
        }
    }

    proximaPergunta() {
        this.perguntaAtual++;

        if (this.perguntaAtual < quizData.length) {
            this.mostrarPergunta();
            this.atualizarProgresso();
        } else {
            this.mostrarResultado();
        }
    }

    mostrarResultado() {
        this.quizContainer.innerHTML = `
            <div class="resultado-final">
                <h2>Quiz Concluído!</h2>
                <p>Sua pontuação: ${this.pontuacao}/${quizData.length}</p>
                <p>${this.getFeedback()}</p>
                <button class="btn" onclick="location.reload()">Refazer Quiz</button>
            </div>
        `;
    }

    getFeedback() {
        const percentual = (this.pontuacao / quizData.length) * 100;
        if (percentual < 50) return "Hora de aprender mais sobre finanças!";
        if (percentual < 80) return "Você está no caminho certo!";
        return "Excelente domínio!";
    }
}

// Iniciar quiz quando a página carregar
window.addEventListener('load', () => new Quiz());