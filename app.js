const data = [
    {
      nome: 'Roger Medeiros',
      sexo: 'M',
      salario: 3250,
    },
    {
      nome: 'Carolina Silva',
      sexo: 'F',
      salario: 1200,
    },
    {
      nome: 'Cristina Avila',
      sexo: 'F',
      salario: 8100,
    },
    {
      nome: 'Gustavo Hoffman',
      sexo: 'M',
      salario: 5200.35,
    },
    {
      nome: 'Eva Trindade',
      sexo: 'F',
      salario: 2501,
    },
    {
      nome: 'Andre Mathias',
      sexo: 'M',
      salario: 1750,
    },
    {
      nome: 'Joice Castro da Silva',
      sexo: 'F',
      salario: 3350.25,
    },
  ];
  
  console.log("1. Quantidade total de pessoas:", data.length);
  
  const pessoasFeminino = data.filter((pessoa) => pessoa.sexo === 'F');
  console.log("2. Quantidade de pessoas do sexo feminino:", pessoasFeminino.length);
  
  const somaSalario = data.reduce((total, pessoa) => total + pessoa.salario, 0);
  console.log("3. Soma dos salários de todas as pessoas:", somaSalario);
  
  const mediaSalario = somaSalario / data.length;
  console.log("4. Média dos salários de todas as pessoas:", mediaSalario);
  
  const somaSalarioMasculino = data
    .filter((pessoa) => pessoa.sexo === 'M')
    .reduce((total, pessoa) => total + pessoa.salario, 0);
  console.log("5. Soma dos salários de todas as pessoas do sexo masculino:", somaSalarioMasculino);
  
  const pessoasMasculino = data.filter((pessoa) => pessoa.sexo === 'M');
  const mediaSalarioMasculino = somaSalarioMasculino / pessoasMasculino.length;
  console.log("6. Média dos salários de todas as pessoas do sexo masculino:", mediaSalarioMasculino);
  
  const salarioSuperior7000 = data.some((pessoa) => pessoa.salario > 7000);
  console.log("7. Existe algum salário superior a R$ 7.000? ", salarioSuperior7000);
  
  const indexEvaTrindade = data.findIndex((pessoa) => pessoa.nome === 'Eva Trindade');
  console.log("8. Posição da pessoa de nome 'Eva Trindade':", indexEvaTrindade);
  
  const pessoasSilva = data.filter((pessoa) => pessoa.nome.includes('Silva'));
  console.log("9. Pessoas com sobrenome 'Silva':", pessoasSilva);
  
  const nomes = data.map((pessoa) => pessoa.nome);
  console.log("10. Nomes das pessoas:", nomes);
  