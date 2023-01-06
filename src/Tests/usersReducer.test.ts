import usersReducer, {followAC, unFollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC, toogleIsFetchingAC, UsersPageType, UserItemType} from "../redux/reducers/usersReducer";

const initialState: UsersPageType = {
    usersData: [
        {
            name: 'name',
            id: 34545,
            photos: {small: 'smalphoto', large: 'large'},
            status: '354456',
            followed: false
        }, 
        {
            name: 'ndkinvdfv',
            id: 5645,
            photos: {small: 'smatlphoto', large: 'ttrg'},
            status: 'rtgrtg',
            followed: true
        }, 
        {
            name: 'ndkinvdfv',
            id: 56453,
            photos: {small: 'smatlphoto', large: 'ttrg'},
            status: 'rtgrtg',
            followed: false
        }, 

    ],
    pageSize: 5,
    totalUsersCount: 25, 
    currentPage: 1,
    isFetching: false,
    isFetchingFollowingUsers: []
}

test('usersReducer follow', () => {
    const userId = 34545

    const res = usersReducer(initialState, followAC(userId))

    expect(res.usersData.find(el => el.id === userId)?.followed).toBe(true)
    expect(res.usersData[2].followed).toBe(false)
})

test('usersReducer unfollow', () => {
    const userId = 5645

    const res = usersReducer(initialState, unFollowAC(userId))

    expect(res.usersData.find(el => el.id === userId)?.followed).toBe(false)
    expect(res.usersData[1].followed).toBe(false)
}) 

test('usersReducer set users', () => {
    const newUsers: UserItemType[] = [
        {
            name: 'names',
            id: 345454,
            photos: {small: 'smalphotos', large: 'lardfvge'},
            status: '33454456',
            followed: true
        }, 
        {
            name: 'dv',
            id: 34543545,
            photos: {small: 'dfv', large: 'dfv'},
            status: 'dfv',
            followed: false
        }, 
        {
            name: 'name',
            id: 54545,
            photos: {small: 'sma45lphoto', large: 'lwarge'},
            status: '3544erfer56',
            followed: true
        }, 
    ]

    const res = usersReducer(initialState, setUsersAC(newUsers))

    expect(res.usersData).toEqual(newUsers)
}) 

test('usersReducer set current page', () => {
    const newCurrentPage = 67

    const res = usersReducer(initialState, setCurrentPageAC(newCurrentPage))

    expect(res.currentPage).toBe(newCurrentPage)
    expect(res.pageSize).toBe(5)
    expect(res.totalUsersCount).toBe(25)
}) 

test('usersReducer set total users count', () => {
    const newTotalUsersCount = 67

    const res = usersReducer(initialState, setTotalUsersCountAC(newTotalUsersCount))

    expect(res.totalUsersCount).toBe(newTotalUsersCount)
    expect(res.currentPage).toBe(1)
    expect(res.pageSize).toBe(5)
}) 

test('usersReducer toogle isFetching', () => {
    const newToogle = true

    const res = usersReducer(initialState, toogleIsFetchingAC(newToogle))

    expect(res.isFetching).toBe(newToogle)
    expect(res.currentPage).toBe(1)
    expect(res.pageSize).toBe(5)
}) 



