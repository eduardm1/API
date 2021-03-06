import {ContainerModel} from '../models/model'
//get all the clients from the database.
export const getContainers = async (offset: number, limit: number, containerType: string | undefined): Promise<any> => {
    // console.log(userRepository.metadata);
    return await globalThis.prisma.container.findMany({
        skip: offset,
        take: limit,
        where: {
            containertype: containerType
        }
    });
    
}

//create a client in the database based on the body of the POST request
export const createContainer = async (payload: ContainerModel): Promise<any> => {
    return await globalThis.prisma.container.create({
        data: payload
    });
}

export const updateContainer = async (payload: ContainerModel): Promise<any> => {
    return await globalThis.prisma.container.update({
        where: {
            containertype: payload.containertype
        },
        data: payload
    });
}

export const deleteContainer = async (containerType: string): Promise<any | null> =>
{
    return await globalThis.prisma.container.delete({
        where:{
            containertype: containerType
        }
    })
  }