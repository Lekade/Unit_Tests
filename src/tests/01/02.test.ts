import {addSkill, makeStudentActive, studentCity, StudentType} from "./02";

let student : StudentType
beforeEach(() => {
    student = {
        id: 1,
        name: 'Valera',
        age: 30,
        isActive: false,
        address: {title: 'Minsk'},
        technologies: [{id: 1, title: 'Html'}, {id: 2, title:'Css'}, {id: 3, title:'JS'}]
    }
})

test('new tech skill should be added to student', () => {
    expect(student.technologies.length).toBe(3)

    addSkill(student, 'React')

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe('React')
    expect(student.technologies[3].id).toBeDefined()
})

test('student should be made active', () => {
    expect(student.isActive).toBe(false)

    makeStudentActive(student)

    expect(student.isActive).toBe(true)

})

test('does the student live in the city', () => {
    const result1 = studentCity(student, 'Minsk')
    const result2  = studentCity(student, 'Brest')
    expect(result1).toBe(true)
    expect(result2).toBe(false)
})