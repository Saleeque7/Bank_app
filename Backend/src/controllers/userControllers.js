
export const userControllers = (dependencies) => {
    return {
        createUser: async (req, res) => {
            const { useCases: { createUserUsecase } } = dependencies;
            const { AccountNumber, name , IntroducerID } = req.body;

            if (!AccountNumber) {
                return res.status(400).json({ status: 'error', message: 'AccountNumber is required' });
            }

            if (!name) {
                return res.status(400).json({ status: 'error', message: 'Name is required' });
            }
            if (IntroducerID && typeof IntroducerID !== 'number') {
                return res.status(400).json({ status: 'error', message: 'Invalid data' });
            }


            try {
                const { executeFunction } = createUserUsecase(dependencies);
                const result = await executeFunction(AccountNumber, name , IntroducerID);

                if (!result) {
                    return res.status(400).json({ status: 'error', message: 'Error creating user' });
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
                    message: 'An unexpected error occurred'
                });
            }
        }
    }
};
