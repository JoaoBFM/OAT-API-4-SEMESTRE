
let alunos = [];
let nextId = 1;


// CREATE
function criarAluno(dados) {
  const { nome, email, celular, cidade } = dados;

  if (!nome || !email || !celular || !cidade) {
    return { erro: "Todos os campos são obrigatórios" };
  }

  const novoAluno = { id: nextId++, nome, email, celular, cidade };
  alunos.push(novoAluno);
  return novoAluno;
}

// READ todos
function listarAlunos() {
  return alunos;
}

// READ por id
function obterAlunoPorId(id) {
  return alunos.find(a => a.id === id) || { erro: "Aluno não encontrado" };
}

// UPDATE
function atualizarAluno(id, dados) {
  const aluno = alunos.find(a => a.id === id);
  if (!aluno) return { erro: "Aluno não encontrado" };

  const { nome, email, celular, cidade } = dados;
  if (nome !== undefined) aluno.nome = nome;
  if (email !== undefined) aluno.email = email;
  if (celular !== undefined) aluno.celular = celular;
  if (cidade !== undefined) aluno.cidade = cidade;

  return aluno;
}

// DELETE
function deletarAluno(id) {
  const index = alunos.findIndex(a => a.id === id);
  if (index === -1) return { erro: "Aluno não encontrado" };

  const removido = alunos.splice(index, 1)[0];
  return removido;
}

// --- Testando funções ---
console.log("--- Criando alunos ---");
console.log(criarAluno({ nome: "João", email: "joao@ex.com", celular: "12345", cidade: "Salvador" }));
console.log(criarAluno({ nome: "Maria", email: "maria@ex.com", celular: "67890", cidade: "Itabuna" }));

console.log("\n--- Listando alunos ---");
console.log(listarAlunos());

console.log("\n--- Obtendo aluno por ID 1 ---");
console.log(obterAlunoPorId(1));

console.log("\n--- Atualizando aluno ID 2 ---");
console.log(atualizarAluno(2, { cidade: "Ilhéus" }));

console.log("\n--- Deletando aluno ID 1 ---");
console.log(deletarAluno(1));

console.log("\n--- Lista final de alunos ---");
console.log(listarAlunos());
