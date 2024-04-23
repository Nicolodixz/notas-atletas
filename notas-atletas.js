let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
   ];
   
   function calcularMedia(atletas) {
    atletas.forEach(function(atleta){
        let notas = atleta.notas.sort(function(a,b){
          if (a > b){
            return 1
          } else if (a < b){
            return -1
          } else{
            return 0 
          }
        });
        console.log(notas)
        let notasMeio = notas.slice(1,4)
        console.log(notasMeio)
        let soma = notasMeio.reduce(function(total, atual){
            return total + atual
    })
        let media = soma / notasMeio.length
        console.log(`Atleta: ${atleta.nome}`);
        console.log(`Notas Obtidas: ${atleta.notas}`);
        console.log(`Média Válida: ${media}`)
        console.log("")
    });
    };
   calcularMedia(atletas);
