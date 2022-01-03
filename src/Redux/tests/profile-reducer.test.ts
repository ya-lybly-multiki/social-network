import ProfileReducer, {addPostAC, deletePost, ProfilePageType} from "../Profile-reduser";


//data
const state = {
    posts: [
        {id: 1, message: "hello everybody", likeCounts: 12},
        {id: 2, message: "its my first post", likeCounts: 13}
    ],
    profile:  null,
    userStatus: ""
}


it ('new post should be added' , ()=> {
    let action = addPostAC("Artem the best chel")

    // action
    const newState = ProfileReducer(state, action)

    // expect

    expect (newState.posts.length).toBe(3)
    expect(newState.posts[2].message).toBe("Artem the best chel")
})

it ('delete post' , ()=> {
    let action = deletePost(1)

    // action
    const newState = ProfileReducer(state, action)

    // expect

    expect (newState.posts.length).toBe(1)

})
