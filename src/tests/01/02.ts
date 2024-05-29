export type  TechnologiesType = {
    id: number
    title: string
}

export  type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: {title: string}
    technologies: Array<TechnologiesType>
}

export const addSkill = (st: StudentType, skill: string) => {
    st.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(st:StudentType){
    st.isActive = true
}

export const studentCity = (st: StudentType, cityName:string) => {
    return  st.address.title === cityName
}