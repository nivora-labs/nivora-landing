import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema } from '@/models';
import { sendQuoteEmail } from '@/lib/services/emailService';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validar os dados do formulário
    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Dados inválidos',
          details: validationResult.error.issues
        },
        { status: 400 }
      );
    }

    // Enviar email com os dados validados
    const emailResult = await sendQuoteEmail({
      formData: validationResult.data
    });

    if (!emailResult.success) {
      console.error('Erro ao enviar email:', emailResult.error);
      return NextResponse.json(
        {
          success: false,
          error: 'Erro ao enviar email. Tente novamente mais tarde.'
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Email enviado com sucesso!'
    });

  } catch (error) {
    console.error('Erro interno do servidor:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Erro interno do servidor'
      },
      { status: 500 }
    );
  }
}