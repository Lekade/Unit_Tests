import {
    addCity, addCityToCopyArray,
    changeCity,
    changeImmunabilityCity,
    changeTechnologies, changeTechnologiesDeepCopy, citiesType,
    placeOfResidenceType,
    studentType,
} from './01'

let placeOfResidence: placeOfResidenceType
beforeEach(() => {
    placeOfResidence = {
        country: 'Belarus',
        city: 'Pinsk'
    }
})

test('change city the mutating method', () => {
    const result = changeCity(placeOfResidence, 'Minsk')

    expect(placeOfResidence.city).toBe(result.city)

    expect(placeOfResidence.city).toBe('Minsk')
    expect(placeOfResidence.city).not.toBe('Pinsk')

})

test('change city the immunability method', ()=> {
    const result = changeImmunabilityCity(placeOfResidence, 'Minsk')

    expect(placeOfResidence.city).not.toBe(result.city)

    expect(placeOfResidence.city).toBe('Pinsk')
    expect(placeOfResidence.city).not.toBe('Minsk')

    expect(result.city).toBe('Minsk')
    expect(result.city).not.toBe('Pinsk')
})

let student: studentType

beforeEach(() => {
    student = {
        name: 'Denis',
        technologies: {
            html: true,
            css: true,
            react: false,
            mui: false
        }
    }
})

test('change technologies shallow copy', () => {
    const result = changeTechnologies(student, 'react', true)

    expect(student.technologies).toBe(result.technologies)

    expect(student.technologies.react).toBe(true)
    expect(result.technologies.react).toBe(true)
    expect(student.technologies.react).not.toBe(false)
})


test('change technologies not shallow copy', () => {
    const result = changeTechnologiesDeepCopy(student, 'react', true)

    expect(student.technologies).not.toBe(result.technologies)

    expect(student.technologies.react).toBe(false)
    expect(result.technologies.react).toBe(true)
    expect(result.technologies.react).not.toBe(false)
})

let cities: citiesType
beforeEach(() => {
    cities = [
        'Pinsk',
        'Brest',
        'Minsk',
        'Gomel'
    ]
})

test('add city', () => {
    const result = addCity(cities, 'Grodno')

    expect(cities.length).toBe(result.length)
    expect(cities).toBe(result)
    expect(cities.length).toBe(5)
    expect(result.length).toBe(5)
    expect(cities).toStrictEqual([
        'Pinsk',
        'Brest',
        'Minsk',
        'Gomel',
        'Grodno'
    ])

})

test('add a city to the copied array', () => {
    const result = addCityToCopyArray(cities, 'Grodno')

    expect(cities.length).not.toBe(result.length)
    expect(cities).not.toBe(result)
    expect(cities.length).toBe(4)
    expect(result.length).toBe(5)
    expect(result).toStrictEqual([
        'Pinsk',
        'Brest',
        'Minsk',
        'Gomel',
        'Grodno'
    ])

})

