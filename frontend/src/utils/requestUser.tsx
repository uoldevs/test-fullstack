interface User {
    id: number,
    username: string,
    cpf: string,
    phone: string,
    status: string,
    email: string,
  }

export const getUsers = () => {
    const url = `http://localhost:6586/get-users`
    try {
    const request = fetch(url, {
        method: 'GET',
          headers: {'Content-Type': 'application/json'},
        })
    const result = request.then((response: Response) => response.json())
    return result;
    }    catch(err) {
        return err
    }
}


export const createUser = (user: User) => {
    const url = `http://localhost:6586/create-user`
    try {
    const request = fetch(url, {
        method: 'POST',
        body: JSON.stringify({ 
            username: user.username,
            cpf: user.cpf,
            phone: user.phone,
            status: user.status,
            email: user.email
          }),
          headers: {'Content-Type': 'application/json'},
        })
    const result = request.then((response: Response) => response)
    return result;
    }    catch(err) {
        return err
    }
}
export const updateUser = (user: User) => {
    const url = `http://localhost:6586/update-user`
    try {
    const request = fetch(url, {
        method: 'PUT',
        body: JSON.stringify({ 
            id: user.id,
            username: user.username,
            cpf: user.cpf,
            phone: user.phone,
            status: user.status,
            email: user.email
          }),
          headers: {'Content-Type': 'application/json'},
        })
    const result = request.then((response: Response) => response)
    return result;
    }    catch(err) {
        return err
    }
}