import {  CO2Full, PrismaClient,} from '@prisma/client'


export const getCo2s = async (): Promise<CO2Full[]> => {
    // console.log(userRepository.metadata);
    return await globalThis.prisma.cO2Full.findMany();
    
}

export const createCo2 = async (payload: CO2Full): Promise<CO2Full> => {
        return await globalThis.prisma.cO2Full.create({
            data: {
                ...payload
            }
        })
    }

export const getCo2 = async (fe: string, intervalweight: string, teu: string, transporttype: string): Promise<CO2Full | null>  => {
    return await globalThis.prisma.cO2Full.findUnique({
        where: {
           transporttype_fe_intervalweight_teu :  {
               fe: fe,
               intervalweight:intervalweight,
               teu:Number(teu),
               transporttype:transporttype}
        }
    })
  };

  export const deleteCo2 = async (fe: string, intervalweight: string, teu: string, transporttype: string): Promise<CO2Full | null>  => {
    return await globalThis.prisma.cO2Full.delete({
        where: {
           transporttype_fe_intervalweight_teu :  {
               fe: fe,
               intervalweight:intervalweight,
               teu:Number(teu),
               transporttype:transporttype}
        }
    })
  };