const App = {
   data() {
       return {
           servers: [],
           name: ''
       }
   },
   methods: {
       async createServer() {
           const data = {
               name: this.name,
               status: 'created'
           }
           const res = await fetch('/api/server', {
               method: 'POST',
               header: {
                   'Content-Type': 'application/json'
               },
               body: JSON.stringify()
           })
           this.name = '' 
           const newServer = await res.json()
           console.log(newServer)

       }
   },
   async mounted() {
       const res = await fetch('/api/server')
       this.servers = await res.json()
   }
}

Vue.createApp(App).mount('#app')
