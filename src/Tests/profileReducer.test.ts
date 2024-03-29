import profileReducer, {ProfilePageType, UserDataType, PostItemType, profileReducerActions} from "../redux/reducers/profileReducer";

const {setUserDataAC, setPosts, addPost, changePostText} = profileReducerActions
const initialState: ProfilePageType = {
    userData: {
      aboutMe: "",
      contacts: {
          facebook: "facebook.com", 
          website: null, 
          vk: "vk.com/dimych", 
          twitter: "https://twitter.com/@sdf", 
          instagram: "instagra.com/sds",
          youtube: null,
          github: "github.com",
          mainLink: null},
      fullName: "",
      lookingForAJob: true,
      lookingForAJobDescription: "РЅРµ РёС‰Сѓ, Р° РґСѓСЂР°С‡СѓСЃСЊ",
      photos: {
          small: null, 
          large: null
      },
      userId: 1
    },
    userStatus: '',
    postsData: [
      {id: '1', userText: 'Это мой первый пост'}
    ],
    postText: 'vrfglvnflgnvflgnv'
} 

test('profileReducer set user data', () => {
    const newUserData: UserDataType = {
        aboutMe: 'aboUt me',
        contacts: {
            facebook: 'fdfd',
            website: 'wdfscdf',
            vk: 'vkerf',
            twitter: 'twfdvdf',
            instagram: 'inst',
            youtube: 'youdfv',
            github: 'github',
            mainLink: 'main',
        }, 
        fullName: 'dfvdfv',
        lookingForAJob: true,
        lookingForAJobDescription: 'yes',
        photos: {small: 'smaiilphoto', large: 'large phoy'},
        userId: 45
    }

    const res = profileReducer(initialState, setUserDataAC(newUserData))

    expect(res.userData).toEqual(newUserData)
})

test('profileReducer set posts data', () => {
    const newPosts: PostItemType[] = [{id: '34', userText: 'dfvdfvd'}, {id: 'dfvdfv', userText: '54'}]

    const res = profileReducer(initialState, setPosts(newPosts))

    expect(res.postsData).toEqual([{id: '1', userText: 'Это мой первый пост'}, ...newPosts])
})

test('profileReducer add new post', () => {
    const res = profileReducer(initialState, addPost())

    expect(res.postText).toBe('')
    expect(res.postsData[res.postsData.length-1].userText).toBe('vrfglvnflgnvflgnv')
})

test('profileReducer change new post text', () => {
    const newPostText = 'dgvdgvfgvfvf'

    const res = profileReducer(initialState, changePostText(newPostText))

    expect(res.postText).toBe(newPostText)
})