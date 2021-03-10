import { Client,  Prisma, PrismaClient,} from '@prisma/client'

export interface IUserPayload {
    firstName: string;
    lastName: string;
    email: string;
}


export const getClients = async (): Promise<Client[]> => {
    // console.log(userRepository.metadata);
    const prisma = new PrismaClient()
    return await prisma.client.findMany();
    
}

export const createClient = async (payload: Client) => {
    const prisma = new PrismaClient();
    await prisma.client.create({
        data: payload
    });
}

export const getClient = async (id:string): Promise<Client | null>  => {
    const prisma = new PrismaClient()
    console.log(id)
    return prisma.client.findUnique({
        where: {
            clientcode: id
        }
    })
  };