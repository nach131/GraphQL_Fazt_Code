import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/grapqltest',{
  useNewUrlParser: true,
  useUnifiedTopology:true
})
.then(db => console.log('Conectado a la MongoDB'))
.catch(err => console.log(err))