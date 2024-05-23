import dotenv from 'dotenv';
import {
  AdAccount,
  Campaign,
  FacebookAdsApi,
} from 'facebook-nodejs-business-sdk';
dotenv.config();

const META_ACCESS_TOKEN = process.env.META_ACCESS_TOKEN;

if (!META_ACCESS_TOKEN) {
  throw new Error('META_ACCESS_TOKEN is not defined');
}

FacebookAdsApi.init(META_ACCESS_TOKEN);

const start = async () => {
  try {
    const ACCOUNT_ID = '123';
    const account = new AdAccount(ACCOUNT_ID);
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
