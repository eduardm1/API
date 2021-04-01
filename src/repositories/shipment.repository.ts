import { Shipment } from '.prisma/client';
import { ShipmentModel} from '../models/model'

//get all the clients from the database.
export const getShipments = async (offset: number, limit: number, shipmentId: number | undefined): Promise<any> => {
    // console.log(userRepository.metadata);
    shipmentId = shipmentId || undefined;
    return await globalThis.prisma.shipment.findMany({
        skip: offset,
        take: limit,
        where: {
           shipmentid: shipmentId
        }
    });
    
}

//create a client in the database based on the body of the POST request
export const createShipment = async (payload: Shipment): Promise<any> => {
    return await globalThis.prisma.shipment.create({
        data: payload
    });
}

export const updateShipment = async (payload: Shipment): Promise<any> => {
    return await globalThis.prisma.shipment.update({
        where: {
            shipmentid: payload.shipmentid
        },
        data: payload
    });
}


export const deleteShipment = async (id: number): Promise<any | null> =>
{
    return await globalThis.prisma.shipment.delete({
        where:{
            shipmentid: id
        }
    })
  }