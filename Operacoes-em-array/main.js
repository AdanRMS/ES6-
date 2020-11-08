class list {
    constructor() {
        this.data = [];

    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class todoList extends list {
    constructor() {
        super()

        this.usuario = "adan";
    }

    mostraUsuario() {
        console.log(this.usuario)
    }
}

var minhaLista = new todoList();

document.getElementById('novotodo').onclick = function(){
    minhaLista.add('Novo todo');
};

minhaLista.mostraUsuario();