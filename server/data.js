const ROLE = {
    ADMIN: 'admin',
    USER: 'user'
}

module.exports = {
    ROLE: ROLE,
    users: [
            {id: 1, name: 'Dale', role: ROLE.ADMIN},
            {id: 2, name: 'Joe', role: ROLE.USER},
            {id: 3, name: 'Sally', role: ROLE.USER}

    ]
}