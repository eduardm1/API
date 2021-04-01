import { NOXModel} from '../models/model'


export const getNoxs = async (offset: number, limit: number): Promise<any[]> => {
    // console.log(userRepository.metadata);
    return await globalThis.prisma.nOX.findMany({
        skip: offset,
        take: limit
    });

}

export const createNox = async (payload: NOXModel): Promise<any> => {
    return await globalThis.prisma.nOX.create({
        data: {
            ...payload
        }
    })
}

export const updateNox = async (payload: NOXModel): Promise<any> => {
    return await globalThis.prisma.nOX.update({
        where:{
            transporttype_intervalweight_teu: {
                intervalweight: payload.intervalweight,
                teu: payload.teu,
                transporttype: payload.transporttype
            }
        },
        data: {
            ...payload
        }
    })
}

export const getNox = async (intervalweight: string, teu: string, transporttype: string): Promise<any | null> => {
    return await globalThis.prisma.nOX.findUnique({
        where: {
            transporttype_intervalweight_teu: {
                intervalweight: intervalweight,
                teu: Number(teu),
                transporttype: transporttype
            }
        }
    })
};

export const deleteNox = async ( intervalweight: string, teu: string, transporttype: string): Promise<any | null> => {
    return await globalThis.prisma.nOX.delete({
        where: {
            transporttype_intervalweight_teu: {
                intervalweight: intervalweight,
                teu: Number(teu),
                transporttype: transporttype
            }
        }
    })
};