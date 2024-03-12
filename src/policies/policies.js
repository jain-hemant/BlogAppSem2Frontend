const ROLES = {
    SUPER_ADMIN: 'superAdmin',
    ADMIN: 'admin',
    USER: 'user',
    CREATOR: 'creator',
    GUEST: 'guest',

}


const policies = {

    [ROLES.SUPER_ADMIN]: [
        'dashboard:visit', 'logout:visit', 'categories:visit', 'blogs:visit', 'comments:visit', 'users:visit', 'profile:visit', 'single-blog:visit'
    ],
    [ROLES.ADMIN]: [
        'dashboard:visit', 'logout:visit', 'blog:visit', 'profile:visit', 'single-blog:visit'
    ],
    [ROLES.USER]: [
        'dashboard:visit', 'logout:visit', 'profile:visit', 'single-blog:visit', 
    ],
    [ROLES.GUEST]: [
        'login:visit',
        'signup:visit',
        'dashboard:visit',
        'single-blog:visit'
    ],
}

export {
    ROLES
}
export default policies