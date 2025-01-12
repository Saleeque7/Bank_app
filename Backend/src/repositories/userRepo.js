import pool from "../config/connectDb.js";
export const userRepo = {
    createUserRepo: async (AccountNumber, name, IntroducerID) => {
        let BeneficiaryID ;
        let BeneficiaryAccount = null;
     
        try {
            if (!IntroducerID) {
                IntroducerID = null;
                BeneficiaryID = null;
            } 

            const result = await pool.query(
                'INSERT INTO users (AccountNumber, UserName) VALUES ($1, $2) RETURNING *',
                [AccountNumber, name]
            );
            const OwnerID = result.rows[0].ownerid
            if(IntroducerID){
                const introducerAccounts = await pool.query(
                    'SELECT COUNT(*) AS totalAccounts FROM accounts WHERE IntroducerID = $1',
                    [IntroducerID]
                );
             
                const totalAccounts = parseInt(introducerAccounts.rows[0].totalaccounts) + 1;
                if (totalAccounts % 2 === 1) {
                    BeneficiaryID = IntroducerID;
                } else {
                    const introducerBeneficiary = await pool.query(
                        'SELECT BeneficiaryID FROM accounts WHERE AccountID = $1',
                        [IntroducerID]
                    );
                    BeneficiaryID =
                        introducerBeneficiary.rows.length > 0
                            ? introducerBeneficiary.rows[0].beneficiaryid
                            : null;
                }
                if (BeneficiaryID) {
                    const beneficiaryAccount = await pool.query(
                        'SELECT AccountNumber FROM users WHERE OwnerID = $1',
                        [BeneficiaryID]
                    );
                    BeneficiaryAccount =
                        beneficiaryAccount.rows.length > 0
                            ? beneficiaryAccount.rows[0].accountnumber
                            : null;
                }
            }
            
            
            await pool.query(
                'INSERT INTO accounts (IntroducerID, BeneficiaryID, AccountID) VALUES ($1, $2, $3)',
                [IntroducerID, BeneficiaryID, OwnerID]
            );

            if (BeneficiaryAccount) {
                await pool.query(
                    'UPDATE users SET Balance = Balance + 100 WHERE AccountNumber = $1',
                    [BeneficiaryAccount]
                );
            }

            return {
                result,
                message: "User created "
            };
        } catch (error) {
            console.error('Error creating user:', error);
            throw error;
        }
    },
};
