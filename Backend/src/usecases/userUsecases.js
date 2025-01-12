export const useCases = {
    createUserUsecase: (dependencies) => {
        const { userRepo: { createUserRepo } } = dependencies;
        const executeFunction = async (AccountNumber, name, IntroducerID) => {
            try {
                const { success, OwnerID, message } = await createUserRepo(AccountNumber, name, IntroducerID);

                if (!success) {
                    return {
                        success: false,
                        message,
                        statusCode: 400
                    };
                }

                return {
                    success: true,
                    OwnerID,
                    message
                };
            } catch (error) {
                console.error("Error in executeFunction:", error);
                return {
                    success: false,
                    message: "An unexpected error occurred.",
                    statusCode: 500
                };
            }
        };

        return { executeFunction };
    }
};
