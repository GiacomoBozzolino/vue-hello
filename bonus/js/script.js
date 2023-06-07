const {createApp} = Vue;


createApp({
    data(){
        return{
            message: 'Questo è un testo di prova',
            image:'https://picsum.photos/200/300',
        }
    }

}).mount('#app');