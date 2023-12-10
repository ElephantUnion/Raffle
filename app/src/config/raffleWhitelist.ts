import { RaffleMetaData } from '../lib/types';
import { TESTING } from './misc';

const testWhitelist = new Map<string, RaffleMetaData>([]);

const prodWhitelist = new Map<string, RaffleMetaData>([
  // [
  //   '12otT8Z9VQDxYb5Pi5LVB7MfpAtVMdyVEYVz5pFoFDRw',
  //   {
  //     name: 'Delysid Kiddos #1',
  //     overviewImageUri: '/resources/solana-logo.gif',
  //     description: 'Delysid Raffle #1',
  //   },
  // ],
  // [
  //   'AJThzC47zuqgzcwx6e9Si3LFhWdHiGPNQuw7LQYLuJjU',
  //   {
  //     name: 'Zeroday1173',
  //     overviewImageUri: '/resources/Zeroday1173.png',
  //     description: 'Zeroday1173',
  //   },
  // ],
  [
    'F6jSq4NCmQbi2Vv9vGaTKKRFgwsBwwmuP6PmjBi4HaQS',
    {
      name: 'Cets on Creck #400',
      overviewImageUri: '/resources/Cet400.png',
      description: 'Cets on Creck #400',
    },
  ],
  [
    'AmKVqRLEuP9uRwDrJqTWSMpoKnJySCueE2yRve7HuNZ3',
    {
      name: 'Delysid Kiddos #1049',
      overviewImageUri: '/resources/DelysidKiddos1049.png',
      description: 'Delysid Kiddos #1049',
    },
  ],
  [
    '4ujaf46SqzsCLgM7eEdULxmBQpvHBDwRLb1xyvWop465',
    {
      name: 'Blocksmith Labs #1049',
      overviewImageUri: '/resources/BlocksmithLabs1054.png',
      description: 'Blocksmith Labs #1054',
    },
  ],
  [
    '7UdBUcs5JsuBQU8rFbLzBEVEbRvkz6ZFcF66zhmhQwXY',
    {
      name: 'Rakkudo #3104',
      overviewImageUri: '/resources/Rakkudo3104.png',
      description: 'Rakkudo #3104',
    },
  ],
  [
    'UF5KoUQy6Dh54ZmEixHqyfhrYWwi4Bu1aTXNJ1CdzfE',
    {
      name: 'Vandal #9841',
      overviewImageUri: '/resources/Vandal9841.png',
      description: 'Vandal #9841',
    },
  ],
  [
    '4MmLPvYnxNu3ZUY3PEJP5wQee9KH8ANKBpJC174B5J5d',
    {
      name: 'Maxi #216',
      overviewImageUri: '/resources/Maxi216.jpeg',
      description: 'Maxi #216',
    },
  ],
  [
    '7Dv9wjmNCKVdpk218djt7cnPHTE6rYQgyUdnRdUAPgXX',
    {
      name: 'Primates #6443',
      overviewImageUri: '/resources/Primate6443.png',
      description: 'Primates #6443',
    },
  ],
  [
    'AXKZckTrMFRnfow3L1wodPVuETaSw3BMFPf8i2rxD1a',
    {
      name: 'Sentry #4777',
      overviewImageUri: '/resources/Sentry4777.png',
      description: 'Sentry #4777',
    },
  ],
  [
    '6LeRKpPyShqYWJeuhPckKwJPgbh9nnrX6wUF2uPmobLH',
    {
      name: 'ABC #7213',
      overviewImageUri: '/resources/ABC7213.jpeg',
      description: 'ABC #7213',
    },
  ],
  [
    'CPgJNz8uABaeZJEUDSHMreeyrqSj7a3VdtuY4kdqrmnn',
    {
      name: 'Jikan #195',
      overviewImageUri: '/resources/Jikan195.png',
      description: 'Jikan #195',
    },
  ],
  [
    'HN2pKsAAs8wuy6HAN8jV5rtSHTQyrWsg7ScLjBhvycZj',
    {
      name: 'Ukiyan #4281',
      overviewImageUri: '/resources/ukiyo4281.png',
      description: 'Ukiyan #4281',
    },
  ],
  [
    'Ez4yD6chE4vx2N6WUeXbUM5zaBzmRrWw47JQivicKUU4',
    {
      name: 'Lunar NFT',
      overviewImageUri: '/resources/lunar.gif',
      description: 'Lunar NFT',
    },
  ],
]);

export const RAFFLES_WHITELIST = TESTING ? testWhitelist : prodWhitelist;
