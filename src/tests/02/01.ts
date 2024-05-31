import {CityType, governmentBuildingsType} from "../01/01";

export function demolishHousesOnTheStreet(city:CityType, streetTitle: string){
    city.houses = city.houses.filter(h => h.address.street.title !== streetTitle)
}

export const getBuildingsWithStaffCountGreaterThen = (buildings: Array<governmentBuildingsType>, quantityOfPeople: number) => {
    return  buildings.filter(b => b.staffCount > 500)
}