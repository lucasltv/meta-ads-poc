import dotenv from 'dotenv';
import {AdAccount, FacebookAdsApi} from 'facebook-nodejs-business-sdk';
dotenv.config();

const {META_ACCESS_TOKEN, META_ACCOUNT_ID} = process.env;

FacebookAdsApi.init(META_ACCESS_TOKEN!);

const start = async () => {
  try {
    const account = new AdAccount(META_ACCOUNT_ID);
    const campaigns = await account.getCampaigns([], {
      limit: 10,
      fields: ['id', 'name'],
    });
    debugger;
  } catch (error) {
    debugger;
    console.error('Error fetching campaigns:', error);
  }
};

start();
