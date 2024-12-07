export default async function handler(req, res) {
    const { orderID } = req.body;
  
    const auth = Buffer.from(
      `${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}:${process.env.PAYPAL_SECRET}`
    ).toString('base64');
  
    const response = await fetch(
      `https://api-m.sandbox.paypal.com/v2/checkout/orders/${orderID}/capture`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${auth}`,
        },
      }
    );
  
    const data = await response.json();
    if (response.ok) {
      res.status(200).json({ success: true, data });
    } else {
      res.status(500).json({ success: false, error: data });
    }
  }
  