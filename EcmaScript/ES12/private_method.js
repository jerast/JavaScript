class Message {
    #show (val) { // Con el # convertimos al método en privado
        console.log(val);
    };

    get #add (val) {
        // ...
    }
};

const message = new Message();
message.show('Hola!'); // message.show is not a function