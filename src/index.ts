import dotenv from 'dotenv';
import {
  AdAccount,
  Campaign,
  FacebookAdsApi,
} from 'facebook-nodejs-business-sdk';
dotenv.config();

const {META_ACCESS_TOKEN, META_ACCOUNT_ID} = process.env;

FacebookAdsApi.init(META_ACCESS_TOKEN!);
const account = new AdAccount(META_ACCOUNT_ID);

const start = async () => {
  try {
    const campaigns = await account.getCampaigns([
      Campaign.Fields.name,
      Campaign.Fields.status,
    ]);
    debugger;
  } catch (error) {
    debugger;
    console.error('Error fetching campaigns:', error);
  }
};

start();
