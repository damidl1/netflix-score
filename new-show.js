

function sendData(event) {

    event.preventDefault();  //evita comportamento standard

    const form = document.forms['create']; // metodo per prendere tutte le form in js

    // const title = form['title'].value;

    const formData = new FormData(form);  // crea un oggetto form data dalla form originale

    // let isOverBool;

    // if (formData.get('isOver') === 'on') {   // altro metodo per verificare lo stato di isOver
    //     isOverBool = true;
    // } else {
    //     isOverBool = false;
    // }


    const newShow = {
        title: formData.get('title'),
        author: formData.get('author'),
        imageUrl: formData.get('imageUrl'),
        isOver: formData.get('isOver') === 'on' ? true : false,  // isOver è uguale a on? se si true altrimenti false
        // isOver: isOverBool,
        upVotes: 0,
        downVotes: 0,
    }

    DBService.createShow(newShow).then(show => window.location = './index.html')  // una volta ottenuto lo show il sito torna alla pagina precedente aggiungendo la serie
                                 .catch(error => alert(error.message));

}


