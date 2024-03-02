export const dynamic = 'force-dynamic';

import { lemonSqueezyApiInstance } from '@/utils/axios';


export async function POST(req){
    try{
        const reqData = await req.json();

        if(!reqData.productId) return Response.json({message: 'Product id is required'}, {status: 400});

        const response = await lemonSqueezyApiInstance.post('/checkouts', {
            "data": {
                "type": "checkouts",
                attributes: {
                  checkout_data: {
                    custom: {
                      userId: user.id,
                    }
                  }
                },
                "relationships": {
                  "store": {
                    "data": {
                      "type": "stores",
                      "id": process.env.LEMONSQUEEZY_STORE_ID,
                    }
                  },
                  "variant": {
                    "data": {
                      "type": "variants",
                      "id": reqData.productId.toString()
                    }
                  }
                }
              }
        });
        const checkoutUrl = response.data.data.attributes.url
        console.log(response.data)

        return Response.json{ checkoutUrl }

    } catch(error) {
        console.error(error);
        Response.json({message: 'An error occured'}, {status: 500});
    }
}