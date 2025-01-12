
export const userControllers = (dependencies) => {
    return {
        createUser: async (req, res ,next) => {
            const { useCases: { createUserUsecase } } = dependencies;
           

            const { name, AccountNumber, IntroducerID } = req.body;
            const Introducerid = parseInt(IntroducerID);


            if (!AccountNumber) {
                return res.status(400).json({ status: 'error', message: 'AccountNumber is required' });
            }

            if (!name) {
                return res.status(400).json({ status: 'error', message: 'Name is required' });
            }
            if (Introducerid && typeof Introducerid !== 'number') {
                return res.status(400).json({ status: 'error', message: 'Invalid data' });
            }


            try {
                const { executeFunction } = createUserUsecase(dependencies);
                const result = await executeFunction(AccountNumber, name, Introducerid);
                if (!result.success) {
                    return res.status(result.statusCode).json({ status: 'error', message: result.message })
                }

                return res.status(201).json({
                    status: 'success',
                    message: 'User created successfully',
                    user: result
                });

            } catch (error) {
                console.error(error);
                return res.status(500).json({
                    status: 'error',
                    message: error.message
                });
               
            }
        }
    }
};
