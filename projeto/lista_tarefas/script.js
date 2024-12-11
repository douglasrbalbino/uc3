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
        if(checkbox.checked) { // o checked é referente ao input usado aqui, do type: checkbox
            li.classList.add("completed");
        } else {
            li.classList.remove("completed");
        }s
    });


    //adicionando um botão para remover a tarefa
    const removeBtn = document.createElement("button");
    removeBtn.innerHTML = "<strong>🗑</strong>"
    removeBtn.addEventListener("click", () => {
        listaDeTarefas.removeChild(li);
    });

    const divFlexLi = document.createElement("div");
    divFlexLi.append(checkbox);
    divFlexLi.append(textoDaTarefa);

    li.append(divFlexLi);
    li.append(removeBtn);
    listaDeTarefas.append(li);
}

tarefaInput.addEventListener("keydown", (event) => {
    if(event.key === "Enter") {
        addBtn.click();
    }
})