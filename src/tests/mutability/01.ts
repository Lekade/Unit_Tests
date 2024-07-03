import {Simulate} from "react-dom/test-utils";
import change = Simulate.change;

export type placeOfResidenceType ={
    country: string
    city: string
}

export type  studentType = {
    name: string
    technologies: technologiesType
}

type technologiesType = {
    [skill: string]: boolean
}

export type citiesType = string[]

export const changeCity = (obj: placeOfResidenceType, city: string) => {
         obj.city = city
    return obj
}

export const  changeImmunabilityCity= (obj: placeOfResidenceType, city: string) => {
    return {...obj, city}
}

export  const changeTechnologies = (obj:studentType , technology: string, learned: boolean) => {
    const changedStudents: studentType = {...obj}
    changedStudents.technologies[technology] = learned
    return changedStudents
}

export  const changeTechnologiesDeepCopy = (obj:studentType , technology: string, learned: boolean) => {
    const changedStudents: studentType = {...obj, technologies: {...obj.technologies}}
    changedStudents.technologies[technology] = learned
    return changedStudents
}


export  const  addCity = (arr:citiesType, city: string ) => {
    const linkArr: citiesType = arr
    linkArr.push(city)
    return linkArr
}

export  const  addCityToCopyArray = (arr:citiesType, city: string ) => {
    const linkArr: citiesType = [...arr]
    linkArr.push(city)
    return linkArr
}


