const App = {
   data() {
       return {
           servers: [],
           name: ''
       }
   },
   methods: {
       async remove(id) {
           await fetch(`/api/server/${id}`, {method: 'DELETE'})
           this.servers = this.servers.filter(s => s.id !== id)
       },
       async createServer() {
           const data = {
               name: this.name,
               status: 'created'
           }
           const res = await fetch('/api/server', {
               method: 'POST',
               headers: {
                   'Content-Type': 'application/json'
               },
               body: JSON.stringify(data)
           })
           this.name = '' 
           const newServer = await res.json()
           console.log(newServer)
           this.servers.push(newServer)
       }
   },
   async mounted() {
       const res = await fetch('/api/server')
       this.servers = await res.json()
   }
}

Vue.createApp(App).mount('#app')
