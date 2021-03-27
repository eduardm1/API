import { Shipment, prisma, PrismaClient,} from '@prisma/client'

//get all the clients from the database.
export const getShipments = async (offset: number, limit: number): Promise<Shipment[]> => {
    // console.log(userRepository.metadata);
    return await globalThis.prisma.shipment.findMany({
        skip: offset,
        take: limit
    });
    
}

//create a client in the database based on the body of the POST request
export const createShipment = async (payload: Shipment): Promise<Shipment> => {
    return await globalThis.prisma.shipment.create({
        data: payload
    });
}

export const updateShipment = async (payload: Shipment): Promise<Shipment> => {
    return await globalThis.prisma.shipment.update({
        where: {
            shipmentid: payload.shipmentid
        },
        data: payload
    });
}
//get a single client based on it's id from the URL parameter
export const getShipment = async (id:number): Promise<Shipment | null>  => {
    return await globalThis.prisma.shipment.findUnique({
        where: {
            shipmentid: id
        }
    })
  };

export const deleteShipment = async (id: number): Promise<Shipment | null> =>
{
    return await globalThis.prisma.shipment.delete({
        where:{
            shipmentid: id
        }
    })
  }