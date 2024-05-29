import {governmentBuildingsType, HousesType} from "./01";

export const addMoneyToBudget = (building: governmentBuildingsType, budget: number) => {
    building.budget += budget
}

export function repairHouse(houses: HousesType) {
    houses.repaired = true
}

export const toFireStaff = (Building: governmentBuildingsType, staff: number) => {
    Building.staffCount -=  staff
}

export const toHireStaff = (Building: governmentBuildingsType, staff: number) => {
    Building.staffCount +=  staff
}