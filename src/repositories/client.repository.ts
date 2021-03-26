import { Client, prisma, PrismaClient,} from '@prisma/client'

//get all the clients from the database.
export const getClients = async (offset: number, limit: number): Promise<Client[]> => {
    // console.log(userRepository.metadata);
    return await globalThis.prisma.client.findMany({
        skip: offset,
        take: limit
    });
    
}

//create a client in the database based on the body of the POST request
export const createClient = async (payload: Client): Promise<Client> => {
    return await globalThis.prisma.client.create({
        data: payload
    });
}

//get a single client based on it's id from the URL parameter
export const getClient = async (id:string): Promise<Client | null>  => {
    return await globalThis.prisma.client.findUnique({
        where: {
            clientcode: id
        }
    })
  };

export const deleteClient = async (id: string): Promise<Client | null> =>
{
    return await globalThis.prisma.client.delete({
        where:{
            clientcode: id
        }
    })
  }