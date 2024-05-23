"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const facebook_nodejs_business_sdk_1 = require("facebook-nodejs-business-sdk");
dotenv_1.default.config();
const META_ACCESS_TOKEN = process.env.META_ACCESS_TOKEN;
if (!META_ACCESS_TOKEN) {
    throw new Error('META_ACCESS_TOKEN is not defined');
}
facebook_nodejs_business_sdk_1.FacebookAdsApi.init(META_ACCESS_TOKEN);
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ACCOUNT_ID = '672705062778542';
        const account = new facebook_nodejs_business_sdk_1.AdAccount(ACCOUNT_ID);
        const campaigns = yield account.getCampaigns([
            facebook_nodejs_business_sdk_1.Campaign.Fields.name,
            facebook_nodejs_business_sdk_1.Campaign.Fields.status,
        ]);
        debugger;
    }
    catch (error) {
        debugger;
        console.error('Error fetching campaigns:', error);
    }
});
start();
//# sourceMappingURL=index.js.map