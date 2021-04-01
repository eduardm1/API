  export interface ClientModel {
    clientcode: string
    street: string
    city: string
    pob: string
    zipcode: string
    pobzipcode: string
    longitude: string
    latitude: string
    country: string
    clientname: string
  }
  
  export interface CO2Model {
    emissionsperkm: number
    transporttype: string
    fe: string
    intervalweight: string
    teu: number
    Shipment: ShipmentModel[]
  }
  
export interface ContainerModel {
    containertype: string     
    lengthcontainer: number      
    widthcontainer: number     
    heightcontainer: number     
    Shipment: ShipmentModel[]
  }
  
  export interface NOXModel {
    emissionsperkm: number
    transporttype:  string    
    intervalweight: string   
    teu: number           
    Shipment: ShipmentModel[]
    }
  
  export interface ShipmentModel {
    shipmentid: number
    sequencenumber: number
    date: Date
    modality: string
    distance: number
    intervaldistance: string   
    emissionprocessing: number
    fefrom: string
    feto: string
    routeid: string
    fromclient: string
    toclient: string
    containertype: string
    intervalweight: string
    transporttype: string
    shipmentweight: number
    teu: number
    co2pershipment: number
    Container: ContainerModel
    CO2: CO2Model
    NOX: NOXModel
  }
  
  export interface RoutesModel {
    routeid: string
    modality: string
    fueltype: string
    TransportType: string
  }
  