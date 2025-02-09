// Fake axios as a demonstration

function data<T>(value: T): {data: T} {
    return { data: value }
}

export const axios = {
    get: <T>(url: string) => {
        switch (url) {
            case 'user/john':
                return data({
                    name: 'John',
                    age: 25
                } as T)
            case 'user/mark':
                return data({
                    name: 'Mark'
                } as T)
            default: throw new Error("404: Not Found")
        }
    }
}
