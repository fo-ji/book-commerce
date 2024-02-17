import { STRIPE_SECRET_KEY } from '@/config/constants';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(STRIPE_SECRET_KEY);

export async function POST(req: Request, res: Response) {
  try {
    const { sessionId } = await req.json();
    const { client_reference_id, metadata } =
      await stripe.checkout.sessions.retrieve(sessionId);

    if (!client_reference_id || !metadata?.bookId || !prisma) {
      throw new Error('Error...');
    }

    const existed = await prisma.purchase.findFirst({
      where: {
        userId: client_reference_id,
        bookId: metadata.bookId,
      },
    });

    if (existed) return NextResponse.json({ message: 'すでに購入済みです。' });

    const purchase = await prisma.purchase.create({
      data: {
        userId: client_reference_id,
        bookId: metadata.bookId,
      },
    });
    return NextResponse.json({ purchase });
  } catch (error) {
    return NextResponse.json(error);
  }
}
