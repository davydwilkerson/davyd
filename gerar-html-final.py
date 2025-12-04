#!/usr/bin/env python3
"""
Script para gerar o HTML final completo do cronograma
"""

# Dados completos das 24 semanas (cole aqui os dados que você forneceu)
dados_semanas = """
{
    "semanas": [
        // COLE AQUI OS DADOS DAS 24 SEMANAS QUE VOCÊ FORNECEU NO INÍCIO
    ]
}
"""

# JavaScript completo
javascript_code = """
<script>
// ==========================================
// DADOS COMPLETOS - 24 SEMANAS
// ==========================================
const cronogramaDataDefault = """ + dados_semanas + """;

// ==========================================
// CLASSE GERENCIADORA DO CRONOGRAMA
// ==========================================
class CronogramaManager {
    constructor() {
        this.data = this.loadData();
        this.semanaAtual = this.loadSemanaAtual();
        this.init();
    }

    loadData() {
        const saved = localStorage.getItem('cronogramaData');
        return saved ? JSON.parse(saved) : cronogramaDataDefault;
    }

    saveData() {
        localStorage.setItem('cronogramaData', JSON.stringify(this.data));
        localStorage.setItem('semanaAtual', this.semanaAtual);
    }

    loadSemanaAtual() {
        const saved = localStorage.getItem('semanaAtual');
        return saved !== null ? parseInt(saved) : 0;
    }

    init() {
        this.initEventListeners();
        this.renderWeekSelector();
        this.renderDays(this.semanaAtual);
        this.updateHeaderStats();
        this.updateProgress();
        this.setupResponsiveFeatures();
    }

    renderWeekSelector() {
        const weekSelector = document.getElementById('weekSelector');
        weekSelector.innerHTML = '';

        this.data.semanas.forEach((semana, index) => {
            const weekBtn = document.createElement('button');
            weekBtn.className = `week-btn ${semana.revisao ? 'revision' : ''} ${index === this.semanaAtual ? 'active' : ''}`;
            weekBtn.innerHTML = `
                <div class="week-content">
                    <div class="week-number">${index + 1}</div>
                    <div class="week-type">${semana.revisao ? 'Revisão' : 'Semana'}</div>
                </div>
            `;
            weekBtn.addEventListener('click', () => this.changeWeek(index));
            weekSelector.appendChild(weekBtn);
        });

        this.updateWeekNavigation();
    }

    changeWeek(index) {
        if (index >= 0 && index < this.data.semanas.length) {
            this.semanaAtual = index;
            this.saveData();
            this.renderWeekSelector();
            this.renderDays(index);
            this.updateHeaderStats();
            this.updateWeekNavigation();

            const activeBtn = document.querySelector('.week-btn.active');
            if (activeBtn && window.innerWidth >= 480 && window.innerWidth < 768) {
                activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
        }
    }

    updateWeekNavigation() {
        const prevBtn = document.getElementById('prevWeekBtn');
        const nextBtn = document.getElementById('nextWeekBtn');
        const currentWeekDisplay = document.getElementById('currentWeekDisplay');

        if (prevBtn && nextBtn && currentWeekDisplay) {
            prevBtn.disabled = this.semanaAtual === 0;
            nextBtn.disabled = this.semanaAtual === this.data.semanas.length - 1;
            currentWeekDisplay.textContent = `Semana ${this.semanaAtual + 1}`;
        }
    }

    renderDays(semanaIndex) {
        const daysContainer = document.getElementById('daysContainer');
        const semana = this.data.semanas[semanaIndex];

        const diasAgrupados = {};
        semana.dias.forEach(conteudo => {
            if (!diasAgrupados[conteudo.dia]) {
                diasAgrupados[conteudo.dia] = [];
            }
            diasAgrupados[conteudo.dia].push(conteudo);
        });

        daysContainer.innerHTML = '';

        Object.keys(diasAgrupados).sort((a, b) => a - b).forEach(diaNum => {
            const diaConteudos = diasAgrupados[diaNum];
            const diaCard = document.createElement('div');
            diaCard.className = `day-card ${semana.revisao ? 'revision' : ''} fade-in`;

            let diaHTML = `
                <div class="day-header">
                    <div class="day-title">Dia ${diaNum}</div>
                    <div class="day-number">${diaNum}</div>
                </div>
                <div class="disciplines-list">
            `;

            diaConteudos.forEach((conteudo, idx) => {
                const horas = Math.floor(conteudo.tempoEstudado / 60);
                const minutos = conteudo.tempoEstudado % 60;
                const tempoFormatado = conteudo.tempoEstudado > 0 ? `${horas}h ${String(minutos).padStart(2, '0')}m` : '';

                diaHTML += `
                    <div class="discipline-item">
                        <div class="discipline-header">
                            <div class="discipline-name">${this.escapeHtml(conteudo.disciplina)}</div>
                            ${tempoFormatado ? `<div class="tempo-estudado">${tempoFormatado}</div>` : ''}
                        </div>
                        <div class="discipline-topic">${this.escapeHtml(conteudo.tema)}</div>
                        <div class="discipline-links">
                `;

                if (conteudo.teoria && this.isValidUrl(conteudo.teoria)) {
                    diaHTML += `<a href="${conteudo.teoria}" target="_blank" rel="noopener noreferrer" class="link-btn teoria">
                        <i class="fas fa-book"></i> Teoria
                    </a>`;
                }

                if (conteudo.exercicios && this.isValidUrl(conteudo.exercicios)) {
                    diaHTML += `<a href="${conteudo.exercicios}" target="_blank" rel="noopener noreferrer" class="link-btn exercicios">
                        <i class="fas fa-pen"></i> Exercícios
                    </a>`;
                }

                diaHTML += `
                        </div>
                        <div class="checklist">
                            <label class="check-item">
                                <input type="checkbox" class="check-input"
                                    ${conteudo.concluido ? 'checked' : ''}
                                    data-semana="${semanaIndex}"
                                    data-dia="${diaNum}"
                                    data-disciplina="${this.escapeHtml(conteudo.disciplina)}">
                                <span>Conteúdo concluído</span>
                            </label>
                        </div>
                    </div>
                `;
            });

            diaHTML += '</div></div>';
            diaCard.innerHTML = diaHTML;
            daysContainer.appendChild(diaCard);
        });

        document.querySelectorAll('.check-input').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                const semana = parseInt(e.target.dataset.semana);
                const dia = parseInt(e.target.dataset.dia);
                const disciplina = e.target.dataset.disciplina;
                this.toggleConcluido(semana, dia, disciplina);
            });
        });

        document.getElementById('current-week').textContent = this.semanaAtual + 1;
    }

    toggleConcluido(semanaIndex, dia, disciplina) {
        const semana = this.data.semanas[semanaIndex];
        const conteudo = semana.dias.find(c => c.dia === dia && c.disciplina === disciplina);

        if (conteudo) {
            conteudo.concluido = !conteudo.concluido;
            this.saveData();
            this.updateProgress();
            this.updateHeaderStats();

            this.showNotification(
                conteudo.concluido ?
                    'Conteúdo marcado como concluído! 🎉' :
                    'Conteúdo desmarcado.'
            );
        }
    }

    updateHeaderStats() {
        let totalTempoEstudado = 0;
        let totalConteudosConcluidos = 0;

        this.data.semanas.forEach(semana => {
            semana.dias.forEach(dia => {
                totalTempoEstudado += dia.tempoEstudado || 0;
                if (dia.concluido) totalConteudosConcluidos++;
            });
        });

        const horasTotal = Math.floor(totalTempoEstudado / 60);
        const minutosTotal = totalTempoEstudado % 60;

        document.getElementById('total-studied').textContent = `${horasTotal}h ${String(minutosTotal).padStart(2, '0')}m`;
        document.getElementById('total-completed').textContent = totalConteudosConcluidos;
        document.getElementById('current-week').textContent = this.semanaAtual + 1;
    }

    updateProgress() {
        let totalConteudos = 0;
        let conteudosConcluidos = 0;

        this.data.semanas.forEach(semana => {
            semana.dias.forEach(dia => {
                totalConteudos++;
                if (dia.concluido) conteudosConcluidos++;
            });
        });

        const progressPercent = totalConteudos > 0 ? Math.round((conteudosConcluidos / totalConteudos) * 100) : 0;
        const remainingWeeks = this.data.semanas.length - this.semanaAtual;

        document.getElementById('progressPercent').textContent = `${progressPercent}%`;
        document.getElementById('remainingWeeks').textContent = remainingWeeks;
        document.getElementById('progressFill').style.width = `${progressPercent}%`;

        document.getElementById('todayTime').textContent = '0m';
        document.getElementById('streak').textContent = '0';

        this.updateAnalysisMessage(progressPercent);
    }

    updateAnalysisMessage(progressPercent) {
        const analysisMessage = document.getElementById('analysisMessage');
        let message = '';
        let className = 'info';

        if (progressPercent === 0) {
            message = 'Comece seus estudos para receber análises personalizadas!';
            className = 'info';
        } else if (progressPercent < 25) {
            message = 'Você está começando sua jornada! Continue assim e estabeleça uma rotina consistente.';
            className = 'info';
        } else if (progressPercent < 50) {
            message = 'Bom progresso! Mantenha o ritmo e não se esqueça das revisões periódicas.';
            className = 'good';
        } else if (progressPercent < 75) {
            message = 'Excelente trabalho! Você já passou da metade do cronograma. Foco na reta final!';
            className = 'good';
        } else {
            message = 'Incrível! Você está na reta final. Revise os pontos fracos e mantenha a consistência.';
            className = 'good';
        }

        analysisMessage.className = `analysis-message ${className}`;
        analysisMessage.innerHTML = `<i class="fas fa-info-circle"></i><div>${message}</div>`;
    }

    showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span>${message}</span>
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    setupResponsiveFeatures() {
        window.addEventListener('resize', () => this.handleResize());
        this.handleResize();
    }

    handleResize() {
        const width = window.innerWidth;
        const weekSelector = document.getElementById('weekSelector');
        const weekNavControls = document.querySelector('.week-nav-controls');

        if (width < 480) {
            if (weekNavControls) weekNavControls.style.display = 'flex';
            if (weekSelector) weekSelector.style.display = 'none';
        } else if (width < 768) {
            if (weekNavControls) weekNavControls.style.display = 'flex';
            if (weekSelector) weekSelector.style.display = 'flex';
        } else {
            if (weekNavControls) weekNavControls.style.display = 'none';
            if (weekSelector) weekSelector.style.display = 'flex';
        }
    }

    initEventListeners() {
        document.getElementById('prevWeekBtn')?.addEventListener('click', () => {
            this.changeWeek(this.semanaAtual - 1);
        });

        document.getElementById('nextWeekBtn')?.addEventListener('click', () => {
            this.changeWeek(this.semanaAtual + 1);
        });
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    isValidUrl(string) {
        try {
            return string.startsWith('http://') || string.startsWith('https://');
        } catch {
            return false;
        }
    }
}

// ==========================================
// POMODORO TIMER
// ==========================================
class PomodoroTimer {
    constructor() {
        this.studyTime = 25 * 60;
        this.breakTime = 5 * 60;
        this.currentTime = this.studyTime;
        this.isRunning = false;
        this.isStudyMode = true;
        this.pomodoroCount = 0;
        this.timerInterval = null;

        this.initEventListeners();
        this.updateDisplay();
    }

    initEventListeners() {
        document.getElementById('startTimer').addEventListener('click', () => this.start());
        document.getElementById('pauseTimer').addEventListener('click', () => this.pause());
        document.getElementById('resetTimer').addEventListener('click', () => this.reset());
    }

    start() {
        if (!this.isRunning) {
            this.isRunning = true;
            this.timerInterval = setInterval(() => this.tick(), 1000);
        }
    }

    pause() {
        if (this.isRunning) {
            this.isRunning = false;
            clearInterval(this.timerInterval);
        }
    }

    reset() {
        this.pause();
        this.currentTime = this.isStudyMode ? this.studyTime : this.breakTime;
        this.updateDisplay();
    }

    tick() {
        this.currentTime--;

        if (this.currentTime < 0) {
            if (this.isStudyMode) {
                this.isStudyMode = false;
                this.currentTime = this.breakTime;
                this.pomodoroCount++;
                document.getElementById('pomodoroCount').textContent = this.pomodoroCount;
                this.showNotification('Tempo de estudo acabou! Hora da pausa de 5 minutos.');
            } else {
                this.isStudyMode = true;
                this.currentTime = this.studyTime;
                this.showNotification('Pausa acabou! Hora de voltar aos estudos.');
            }
        }

        this.updateDisplay();
    }

    updateDisplay() {
        const minutes = Math.floor(this.currentTime / 60);
        const seconds = this.currentTime % 60;

        document.getElementById('timer').textContent =
            `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        document.getElementById('timerMode').textContent =
            this.isStudyMode ? 'Tempo de Estudo' : 'Tempo de Pausa';
    }

    showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.innerHTML = `
            <i class="fas fa-clock"></i>
            <span>${message}</span>
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// ==========================================
// INICIALIZAÇÃO
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    window.cronogramaManager = new CronogramaManager();
    window.pomodoroTimer = new PomodoroTimer();
});
</script>
</body>
</html>
"""

print("Template criado!")
print("\nPara gerar o arquivo final:")
print("1. Edite este arquivo")
print("2. Cole os dados das 24 semanas na variável 'dados_semanas'")
print("3. Execute novamente")
