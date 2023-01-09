class coche {
  constructor(marca, modelo, consumoPor100) {
    this.totalGas = 100;
    this.marca = marca;
    this.modelo = modelo;
    this.consumopor100 = consumoPor100;
  }
  reposta(litros){
    this.totalGas += litros;
  }
  move(distancia){
    this.totalGas -= (distancia/100) * this.consumopor100;
  }
  restante(){
    return (this.totalGas/this.consumopor100) * 100;
  }
}

const prueba = new coche('Audi','A4',100);
console.log(prueba)
console.log(prueba.restante());