export default class Cliente{
 
    #id!: string
    #nome!: string
    #idade!: number
    
    constructor(nome: string, idade: number, id: string){

        this.#nome = nome
        this.#idade = idade
        this.#id = id
    }

    // Método vazio
    static vazio(){
        return new Cliente(' ', 0, ' ')
    }

    // Getters
    get id(){
       return this.#id 
    }

    get nome(){
       return this.#nome 
    }

    get idade(){
       return this.#idade 
    }
    
}