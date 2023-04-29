import messagesReducer, { MessagesPageType, messagesReducerActions } from "../redux/reducers/messagesReducer";

const {sendMessageAC, changeMessageTextAC} = messagesReducerActions
const png: string = 'https://play-lh.googleusercontent.com/N7p1LUZQj1Zrth7Jmn6tMlogB8JYv-ozxxJC-Qwq_NIqBluDSUj0Mt8BeBphM0rX9A'
const initialState: MessagesPageType = {
    messagesData: [
      {
        id: '1', 
        name: 'Владимир Владимирович', 
        message: [
          {id: '1', status: 1, src: png, messageText: 'Добрый день, когда новые поправки?'}, 
          {id: '2', status: 0, src: png, messageText: 'Зравствуйте, скоро.'},
          {id: '3', status: 1, src: png, messageText: 'Хорошо, жду.'}
        ]
      },
      {
        id: '2', 
        name: 'Вова', 
        message: [
          {id: '1', status: 1, src: png, messageText: 'Привет, все в силе?'}, 
          {id: '2', status: 0, src: png, messageText: 'Привет, да, я готов, ты?'},
          {id: '3', status: 1, src: png, messageText: 'На 100%'}, 
        ]
      },
      {
        id: '3', 
        name: 'Сладости Минск', 
        message: [
          {id: '1', status: 1, src: png, messageText: 'Здравствуйте, я по поводу конфет из штатов.'}, 
          {id: '2', status: 0, src: png, messageText: '53.957870, 27.560187'}
        ]
      }, 
    ],
    newMessageText: 'new mes form...'
} 

test('messagesReducer send message', () => {
    const frienId = '3'

    const res = messagesReducer(initialState, sendMessageAC(frienId))

    expect(res.newMessageText).toBe('')
    expect(res.messagesData.find(el => el.id === frienId)?.message[2].messageText).toBe('new mes form...')
})

test('messagesReducer change new message text', () => {
    const newMessageText = 'new message text number two'

    const res = messagesReducer(initialState, changeMessageTextAC(newMessageText))

    expect(res.newMessageText).toBe(newMessageText)
})