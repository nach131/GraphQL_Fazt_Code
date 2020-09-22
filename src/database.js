import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/grapqlreactdb',{
  useNewUrlParser: true,
  useUnifiedTopology:true
})
.then(db => console.log('Conectado a la MongoDB'))
.catch(err => console.log(err))