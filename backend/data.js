import bcrypt from 'bcryptjs';
const data = {
    users: [
        {
            name: 'Deepank',
            email: 'deepankpushpad10@gmail.com',
            password: bcrypt.hashSync('deepank', 8),
            isAdmin: true,
            isSeller: true,
            seller: {
                name: 'Centria',
                logo: '/uploads/centria.jpeg',
                description: 'Centria',
                rating: 4.5,
                numReviews: 120,
            },
        },
    ],
};
export default data;
