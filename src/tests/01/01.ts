export  type  AddressType = {
    number: number
    street: {title:string}
}

export type HousesType = {
    id?:number
    buildedAt: number
    repaired: boolean
    address: AddressType

}

export type governmentBuildingsType = {
    type: string
    budget: number
    staffCount: number
    address: {street:{title:string}}
}

export type CityType = {
    title: string,
    houses: Array<HousesType>,
    governmentBuildings:  Array<governmentBuildingsType>,
    citizensNumber: number
}


