/**
 * Query Prices
 * https://api.coingecko.com/api/v3/simple/price?ids=xcad-network&vs_currencies=usd
 *
 * Use the API above to query the current price for the "xcad-network" token.
 * This price value will need to be displayed on the client-side.
 *
 * Example Response: { 'xcad-network': { usd: 4.78 } }
 */

import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  price: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const baseUrl: string = "https://api.coingecko.com/api/v3/simple/price";
  const id: string = "xcad-network";
  const currency: string = "usd";
  const response = await fetch(
    `${baseUrl}?ids=${id}&vs_currencies=${currency}`
  );
  const data = await response.json();
  res.status(200).json(data);
}
