import { Container, prisma, PrismaClient,} from '@prisma/client'

//get all the clients from the database.
export const getContainers = async (offset: number, limit: number): Promise<Container[]> => {
    // console.log(userRepository.metadata);
    return await globalThis.prisma.container.findMany({
        skip: offset,
        take: limit
    });
    
}

//create a client in the database based on the body of the POST request
export const createContainer = async (payload: Container): Promise<Container> => {
    return await globalThis.prisma.container.create({
        data: payload
    });
}

export const updateContainer = async (payload: Container): Promise<Container> => {
    return await globalThis.prisma.container.update({
        where: {
            containertype: payload.containertype
        },
        data: payload
    });
}
//get a single client based on it's id from the URL parameter
export const getContainer = async (containerType:string): Promise<Container | null>  => {
    return await globalThis.prisma.container.findUnique({
        where: {
            containertype: containerType
        }
    })
  };

export const deleteContainer = async (containerType: string): Promise<Container | null> =>
{
    return await globalThis.prisma.container.delete({
        where:{
            containertype: containerType
        }
    })
  }