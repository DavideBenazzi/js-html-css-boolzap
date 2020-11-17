/**
 * Boolzapp Vue
 */
var app = new Vue({
  el: '#app',
  data: {
    // nostro account
    user: {
        name: 'Nome Utente',
        avatar: '_io'
    },
    // Elenco contatti
    contacts: [
        {
            name: 'Michele',
            avatar: '_1',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
                }
            ],
            timeResponse: dayjs().format('DD/MM/YYYY HH:mm:ss'),
        },
        {
            name: 'Fabio',
            avatar: '_2',
            visible: true,
            messages: [
                {
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'received'
                }
            ],
            timeResponse: dayjs().format('DD/MM/YYYY HH:mm:ss'),
        },
        {
            name: 'Samuele',
            avatar: '_3',
            visible: true,
            messages: [
                {
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received'
                }
            ],
            timeResponse: dayjs().format('DD/MM/YYYY HH:mm:ss'),
        },
        {
            name: 'Luisa',
            avatar: '_4',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
            ],
            timeResponse: dayjs().format('DD/MM/YYYY HH:mm:ss'),
        },
    ],
    indexContact: 0,
    userMessage: '',
    newMessage: {},
    visible: '',
  },
  methods: {
    // @CLICK FUNCTION SET CLASS:ACTIVE ON FOCUS CONTACT
    getActive(index) {
      this.indexContact = index;
    },
    // KEYUP:ENTER FUNCTION THAT SUBMIT THE MESSAGE AND CREATE THE REPLY MESSAGE DELAYED 1 SEC
    submit() {
      if (this.userMessage.trim() !== '') {
        this.newMessage = {
          date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
          message: this.userMessage,
          status: 'sent',
        };
        this.contacts[this.indexContact].messages.push(this.newMessage);
        this.userMessage = '';
        setTimeout( () => {
          this.newMessage = {
            date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
            message: 'Ok',
            status: 'received',
          };
          this.contacts[this.indexContact].messages.push(this.newMessage);
          // LAST ACCESS OF THE USER
          this.contacts[this.indexContact].timeResponse = dayjs().format('DD/MM/YYYY HH:mm:ss');
        }, 1000);
      };
    },
    // KEYUP SEARCH FUNCTION WITH TRIM AND INCLUDES
    search() {
      this.contacts.forEach( (contact , i) => {
        if ( contact.name.toLowerCase().includes( this.visible.trim().toLowerCase() ) ) {
          contact.visible = true;
        } else {
          contact.visible = false;
        };
      });
    },
  },
});
