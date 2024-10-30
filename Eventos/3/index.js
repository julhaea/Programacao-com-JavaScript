let tarefas = [];

/*Adicionar tarefa*/
const addTarefa = () => {
    const NTarefa = document.getElementById('input-add');
    const descricao = NTarefa.value.trim();

    if (descricao) {
        tarefas.push({ descricao, status: false });
        NTarefa.value = ''; // Limpa o campo de texto
        addTarefaHTML();
    }
}

/* Passar tarefas para HTML */
const addTarefaHTML = () => {
    const listaTarefas = document.getElementById('listatarefas');
    listaTarefas.innerHTML = '';

    tarefas.forEach((tarefa, index) => {
        const li = document.createElement('li');
        li.className = tarefa.status ? 'feito' : '';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = tarefa.status;
        checkbox.addEventListener('change', () => trocarstatus(index));

        const taskDesc = document.createElement('span');
        taskDesc.textContent = tarefa.descricao;
        taskDesc.className = 'task-desc';

        li.appendChild(checkbox);
        li.appendChild(taskDesc);
        listaTarefas.appendChild(li);
    });
}

/*Trocar status da tarefa */
const trocarstatus = (index) => {
    tarefas[index].status = !tarefas[index].status;
    addTarefaHTML();
}

document.getElementById('button-add').addEventListener('click', addTarefa);