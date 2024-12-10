const tarefaInput = document.getElementById("tarefaInput");
const addBtn = document.getElementById("addBtn");
const listaDeTarefas = document.getElementById("listaDeTarefas");

addBtn.addEventListener("click", () => {
    if(tarefaInput.value) {
        criarTarefa(tarefaInput.value);
        tarefaInput.value = "";
        tarefaInput.focus();
    } else {
        alert("Digite uma tarefa válida!");
        tarefaInput.focus();
    }
})

function criarTarefa(titulo) {
    const li = document.createElement("li");

    //Adicionar texto a uma tarefa
    const textoDaTarefa = document.createElement("span");
    textoDaTarefa.innerText = titulo;

    //Adicionar o Checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

           // li.classList.toggle("completed", checkbox.checked)  --------> usando o  TOGGLE


        // if(checkbox.checked) {
        //     li.className = "completed";    --------> essa forma funciona, mas é "gambiarra"
        // } else {
        //     li.className = "";
        // }


    // alterando adicionando e removendo uma classe ao elemento
    checkbox.addEventListener("change", () => {
        if(checkbox.checked) {
            li.classList.add("completed");
        } else {
            li.classList.remove("completed");
        }
    })

    li.append(checkbox);
    li.append(textoDaTarefa);
    listaDeTarefas.append(li);
}