import dotenv from 'dotenv';
import {
  AdAccount,
  Campaign,
  FacebookAdsApi,
} from 'facebook-nodejs-business-sdk';
dotenv.config();

const {META_ACCESS_TOKEN, META_ACCOUNT_ID} = process.env;

FacebookAdsApi.init(META_ACCESS_TOKEN!);
const account = new AdAccount(`act_${META_ACCOUNT_ID}`);

const getActiveCampaigns = async () => {
  try {
    const campaigns = await account.getCampaigns(
      [Campaign.Fields.name, Campaign.Fields.status],
      {
        [Campaign.Fields.effective_status]: ['ACTIVE'],
      }
    );
    return campaigns;
  } catch (error) {
    console.error('Error fetching active campaigns:', error);
    throw error;
  }
};

const getCampaignInsights = async (campaignId: string) => {
  try {
    const campaign = new Campaign(campaignId);
    const insights = await campaign.getInsights([
      'impressions',
      'clicks',
      'spend',
      'reach',
      'actions',
    ]);
    return insights;
  } catch (error) {
    console.error('Error fetching campaign insights:', error);
    throw error;
  }
};

const start = async () => {
  try {
    console.log('Fetching active campaigns...');
    const campaigns = await getActiveCampaigns();
    console.log('Active Campaigns:', campaigns);

    for (const campaign of campaigns) {
      console.log(`Fetching insights for campaign: ${campaign.name}`);
      const insights = await getCampaignInsights(campaign.id);
      console.log('Campaign Insights:', insights);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

start();
