class Astronauta{
  constructor(
    public id: number,
    public nombre: string,
    private record: string ,
    private reward?: string){};

    obtenerRecompensa(record:string){
      if (record === 'Artemis'){
        this.reward = 'Felicidades tu ganaste 500.000.000 millones de pesos ፨)';
        return this.reward
      } else{
        this.reward = '¡NO ganaste absolutamente nada, mas exfuerzo para la proxima ፨( !';
        return this.reward
      };
    };
    set recorde(record: string  ){
      let temp:string = record.toLowerCase();
      temp = temp.replace(/\b\w/g, l => l.toUpperCase());
      this.record = temp
      this.reward = this.obtenerRecompensa(this.record)
    }
    get recorde():string  {
      return this.record;
    }
};
// via constructor
const astronautaPhidolly = new Astronauta(1, "Phidolly Ojeda" , "Santa Marte ፨)");
// setter
astronautaPhidolly.recorde = 'artemis';
console.log(astronautaPhidolly);
astronautaPhidolly.recorde = 'Luna';
console.log(astronautaPhidolly);
astronautaPhidolly.recorde = 'aRTeMiS';
console.log(astronautaPhidolly);