import { Client, prisma, PrismaClient,} from '@prisma/client'

//get all the clients from the database.
export const getClients = async (): Promise<Client[]> => {
    // console.log(userRepository.metadata);
    const prisma = new PrismaClient()
    return await prisma.client.findMany();
    
}

//create a client in the database based on the body of the POST request
export const createClient = async (payload: Client): Promise<Client> => {
    const prisma = new PrismaClient();
    return await prisma.client.create({
        data: payload
    });
}

//get a single client based on it's id from the URL parameter
export const getClient = async (id:string): Promise<Client | null>  => {
    const prisma = new PrismaClient()
    console.log(id);
    return await prisma.client.findUnique({
        where: {
            clientcode: id
        }
    })
  };

  export const  deleteClient = async (id: string): Promise<Client | null> => {
    const prisma = new PrismaClient();
    return await prisma.client.delete({
        where:{
            clientcode: id
        }
    })
  }