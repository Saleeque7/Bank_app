export const useCases = {
    createUserUsecase:  (dependencies) => {
        const { userRepo: { createUserRepo } } = dependencies
        const executeFunction = async(AccountNumber, name, IntroducerID) => {

            try {
                const { newUserID,
                    message } = await createUserRepo(AccountNumber, name, IntroducerID)
                return {
                    newUserID,
                    message
                }
            } catch (error) {
                console.error("Error creating user:", error);
                throw error;
            }
        }
        return { executeFunction }
    }
}