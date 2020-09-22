import Message from '../../models/Message'

const Query = {

  ping() {
    return "pogon!"
  },

  messages: async () => {
    return await Message.find()
  }
}

export default Query;