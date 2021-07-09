import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": 'de2d7fd1-a2fc-4e66-9075-a63ed9254ecb'
    }
})

export const userAPI = {
    getUser: (currentPage: number, pageSize: number) => {
       return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },

    onPageNumber: (pageNumber: number, pageSize: number) => {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`).then(response => response.data)
    },

    follow: (userId: number) => {
        return instance.post(`follow/${userId}`).then(response => response.data)
    },

    unfollow: (userId: number) => {
        return instance.delete(`follow/${userId}`).then(response => response.data)
    }
}

export const profileAPI = {
    getProfile: (userId: string) => {
        return instance.get(`profile/${userId}`)
    }
}

export const authAPI = {
    getAuth: () => {
        return instance.get("auth/me").then(response => response.data)
    }
}

