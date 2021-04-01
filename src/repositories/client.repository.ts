import { Client, prisma, PrismaClient,} from '@prisma/client'

//get all the clients from the database.
export const getClients = async (offset: number, limit: number, client: string | undefined): Promise<Client[]> => {
    // console.log(userRepository.metadata);
    return await globalThis.prisma.client.findMany({
        skip: offset,
        take: limit,
        where: {
            clientcode: client
        }
    });
    
}

//create a client in the database based on the body of the POST request
export const createClient = async (payload: Client): Promise<Client> => {
    return await globalThis.prisma.client.create({
        data: payload
    });
}

export const updateClient = async (payload: Client): Promise<Client> => {
    return await globalThis.prisma.client.update({
        where: {
            clientcode: payload.clientcode
        },
        data: payload
    });
}

export const deleteClient = async (id: string): Promise<Client | null> =>
{
    return await globalThis.prisma.client.delete({
        where:{
            clientcode: id
        }
    })
  }