import {governmentBuildingsType, HousesType} from "../01/01";

export function  getStreetsTitlesOfGovernmentBuildings(buildingas:Array<governmentBuildingsType>){
    return buildingas.map(b => b.address.street.title)
}

export const getStreetsTitlesOfHouses = (houses:Array<HousesType>) => {
    return houses.map(h => h.address.street.title)
}