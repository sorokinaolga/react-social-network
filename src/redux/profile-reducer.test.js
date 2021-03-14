import profileReducer, { addPost, deletePost } from "./profile-reducer";

// test data
let state = {
    postData: [
        {id: 1, title: 'Post 1', src: 'https://likevideogid.ru/wp-content/uploads/2019/11/likee_avatarka13-2.jpg'},
        {id: 2, title: 'Post 2', src: 'https://likevideogid.ru/wp-content/uploads/2019/11/likee_avatarka13-2.jpg'},
        {id: 3, title: 'Post 3', src: 'https://likevideogid.ru/wp-content/uploads/2019/11/likee_avatarka13-2.jpg'},
        {id: 4, title: 'Post 4', src: 'https://likevideogid.ru/wp-content/uploads/2019/11/likee_avatarka13-2.jpg'},
    ]
}; 

it('length of post should be incremented', () => {
    //test data
    let action = addPost('test post');
    // action
    let newState = profileReducer(state, action);

    // expecttation
    expect (newState.postData.length).toBe(5);
});

it('new post text should be correct', () => {
    //test data
    let action = addPost('test post');
    // action
    let newState = profileReducer(state, action);

    // expecttation
    expect (newState.postData[4].title).toBe('test post');
});

it('length should be decremented after delete post', () => {
    // test data
    let action = deletePost(1);
    // action
    let newState = profileReducer(state, action);

    // expecttation
    expect (newState.postData.length).toBe(3);
});

it('length shouldnt be decremented after delete post if id is incorrect', () => {
    // test data
    let action = deletePost(6);
    // action
    let newState = profileReducer(state, action);

    // expecttation
    expect (newState.postData.length).toBe(4);
});
