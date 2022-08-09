// TODO 6 - Call buy_ticket entrypoint in the Lottery contract
import { tezos } from "./tezos";

// KT1Mbcm3s69ThWmHf9fxEVtNfV1iLad2CMzR : Health Register contract deployed on jakartanet

// KT1CzSerSLpKV4FR7gjNFMoKk95qTYpJgc5z : Login contract deployed on jakartanet

export const addRecordOperation = async (date, record_text) => {
  try {
    const contractInstance = await tezos.wallet.at("KT1Mbcm3s69ThWmHf9fxEVtNfV1iLad2CMzR");
    const op = await contractInstance.methods.add_record(date, record_text).send();
    await op.confirmation(1);
  } catch (err) {
    throw err;
  }
};

export const registerOperation = async () => {
  try {
    const contractInstance = await tezos.wallet.at("KT1Mbcm3s69ThWmHf9fxEVtNfV1iLad2CMzR");
    const op = await contractInstance.methods.register().send();
    await op.confirmation(1);
  } catch (err) {
    throw err;
  }
};

export const loginOperation = async (name, password) => {
  try {
    const contractInstance = await tezos.wallet.at("KT1CzSerSLpKV4FR7gjNFMoKk95qTYpJgc5z");
    const op = await contractInstance.methods.add_record(name, password).send();
    await op.confirmation(1);
  } catch (err) {
    throw err;
  }
};