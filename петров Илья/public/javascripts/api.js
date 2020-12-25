class Api {
    getAll = () => {
        return fetch("/students/getAll")
            .then(r => r.json())
            .catch((err) => alert(err))
    }
    upsert = (student) => {
        return fetch("/students/upsert", {
            method: 'POST',
            body: JSON.stringify(student),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .catch((err) => alert(err))
    }
    delete = (id) => {
        return fetch("students/delete?id=" + id, { method: "DELETE" })
    }
}