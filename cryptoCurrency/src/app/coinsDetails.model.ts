import { Currency } from "./currency.model";

export interface CoinsDetails {
   "id": string,
  "symbol":string,
  "name": string,
  "asset_platform_id": string,
  "platforms": {},
  "block_time_in_minutes": number,
  "hashing_algorithm": null,
  "categories": [],
  "public_notice": null,
  "additional_notices": [],
  "localization": {
    "en": string,
    "de": string,
    "es": string,
    "fr": string,
    "it": string,
    "pl": string,
    "ro": string,
    "hu": string,
    "nl": string,
    "pt": string,
    "sv": string,
    "vi": string,
    "tr": string,
    "ru": string,
    "ja": string,
    "zh": string,
    "zh-tw": string,
    "ko": string,
    "ar": string,
    "th": string,
    "id": string
  },
  "description": {
    "en": string,
    "de": string,
    "es": string,
    "fr": string,
    "it": string,
    "pl": string,
    "ro": string,
    "hu": string,
    "nl": string,
    "pt": string,
    "sv": string,
    "vi": string,
    "tr": string,
    "ru": string,
    "ja": string,
    "zh": string,
    "zh-tw": string,
    "ko": string,
    "ar": string,
    "th": string,
    "id": string
  },
  "links": {
    "homepage": string[],
    "blockchain_site": string[],
    "official_forum_url": [],
    "chat_url": string[],
    "announcement_url": [],
    "twitter_screen_name": string,
    "facebook_username": string,
    "bitcointalk_thread_identifier": null,
    "telegram_channel_identifier": string,
    "subreddit_url": null,
    "repos_url": {
      "github": [],
      "bitbucket": []
    }
  },
  "image": {
    "thumb":string,
    "small":string,
    "large": string
  },
  "country_origin": string,
  "genesis_date": null,
  "sentiment_votes_up_percentage": null,
  "sentiment_votes_down_percentage": null,
  "market_cap_rank": null,
  "coingecko_rank": number,
  "coingecko_score": number,
  "developer_score": number,
  "community_score": number,
  "liquidity_score": number,
  "public_interest_score":number
  "market_data": {
    "current_price": Currency,
    "ath_change_percentage": Currency,
    "ath_date":Currency,
    "atl_change_percentage":Currency,
    "atl_date":Currency,
    "market_cap":Currency,
    "market_cap_rank": null,
    "fully_diluted_valuation": {},
    "total_volume": Currency,
    "high_24h": Currency,
    "low_24h": Currency,
    "price_change_24h": number,
    "price_change_percentage_24h":number
    "price_change_percentage_7d": number,
    "price_change_percentage_14d": number
    "price_change_percentage_30d": number,
    "price_change_percentage_60d":number,
    "price_change_percentage_200d": number,
    "price_change_percentage_1y": number,
    "market_cap_change_24h": number,
    "market_cap_change_percentage_24h": number,
    "price_change_24h_in_currency":Currency,
    "price_change_percentage_1h_in_currency": {},
    "price_change_percentage_24h_in_currency":Currency,
    "price_change_percentage_7d_in_currency": Currency,
    "price_change_percentage_14d_in_currency": Currency,
    "price_change_percentage_30d_in_currency":Currency,
    "price_change_percentage_60d_in_currency": Currency,
    "price_change_percentage_200d_in_currency": Currency,
    "price_change_percentage_1y_in_currency": Currency,
    "market_cap_change_24h_in_currency":Currency,
    "market_cap_change_percentage_24h_in_currency":Currency,
    "total_supply": null,
    "max_supply": null,
    "circulating_supply": number,
    "last_updated": string
  },
  "community_data": {
    "facebook_likes": number,
    "twitter_followers": number,
    "reddit_average_posts_48h": number,
    "reddit_average_comments_48h": number,
    "reddit_subscribers": number,
    "reddit_accounts_active_48h": number,
    "telegram_channel_user_count": number
  },
  "developer_data": {
    "forks": number,
    "stars": number,
    "subscribers": number,
    "total_issues": number,
    "closed_issues": number,
    "pull_requests_merged": number,
    "pull_request_contributors": number,
    "code_additions_deletions_4_weeks": {
      "additions": null,
      "deletions": null
    },
    "commit_count_4_weeks": number,
    "last_4_weeks_commit_activity_series": []
  },
  "public_interest_stats": {
    "alexa_rank": number,
    "bing_matches": null
  },
  "status_updates": [],
  "last_updated": string,
  "tickers": [
    {
      "base": string,
      "target": string,
      "market": {
        "name": string,
        "identifier":string,
        "has_trading_incentive": boolean
      },
      "last": number,
      "volume": number,
      "converted_last": {
        "btc":number,
        "eth": number,
        "usd": number
      },
      "converted_volume": {
        "btc": number,
        "eth":number,
        "usd": number
      },
      "trust_score":string,
      "bid_ask_spread_percentage": number
      "timestamp": string,
      "last_traded_at": string,
      "last_fetch_at": string,
      "is_anomaly": boolean,
      "is_stale": boolean,
      "trade_url": string,
      "token_info_url": null,
      "coin_id": string
    }
  ]
}

