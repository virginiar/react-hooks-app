export interface User {
    id: number;
    name: string;
    location: string;
    role: string;
}

export const getUserAction = async (id: number) => {
    console.log('La función fue llamada.');
    await new Promise((res) => setTimeout(res, 2000));

    console.log('La función resolvió.');

    return {
        id: id,
        name: 'Virginia R',
        location: 'España',
        role: 'Aprendiendo React',
    };
};
