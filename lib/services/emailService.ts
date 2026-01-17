import { Resend } from 'resend';
import { ContactFormSchema } from '@/models';

const resend = new Resend(process.env.RESEND_API_KEY);

export interface SendQuoteEmailParams {
  formData: ContactFormSchema;
}

export async function sendQuoteEmail({ formData }: SendQuoteEmailParams) {
  try {
    const { name, email, phone, needs, interests, budget } = formData;

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Nova Solicitação de Orçamento - Nivora Labs</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .field-label { font-weight: bold; color: #555; }
            .field-value { margin-top: 5px; }
            .interests { background: white; padding: 10px; border-radius: 4px; margin-top: 5px; }
            .budget-highlight { background: #667eea; color: white; padding: 10px; border-radius: 4px; text-align: center; font-size: 18px; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🚀 Nova Solicitação de Orçamento</h1>
              <p>Recebemos uma nova solicitação através do site da Nivora Labs</p>
            </div>

            <div class="content">
              <div class="field">
                <div class="field-label">Nome:</div>
                <div class="field-value">${name}</div>
              </div>

              <div class="field">
                <div class="field-label">Email:</div>
                <div class="field-value">${email}</div>
              </div>

              ${phone ? `
              <div class="field">
                <div class="field-label">Telefone:</div>
                <div class="field-value">${phone}</div>
              </div>
              ` : ''}

              <div class="field">
                <div class="field-label">Áreas de Interesse:</div>
                <div class="interests">
                  ${interests.map(interest => `<span style="background: #e3f2fd; padding: 4px 8px; margin: 2px; border-radius: 4px; display: inline-block;">${interest}</span>`).join('')}
                </div>
              </div>

              <div class="field">
                <div class="field-label">Orçamento Estimado:</div>
                <div class="budget-highlight">
                  R$ ${budget.toLocaleString('pt-BR')},00
                </div>
              </div>

              <div class="field">
                <div class="field-label">Necessidades do Projeto:</div>
                <div class="field-value" style="white-space: pre-wrap;">${needs}</div>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    const result = await resend.emails.send({
      from: 'Nivora Labs <onboarding@resend.dev>',
      to: 'adm@nivoralabs.com.br',
      subject: `Nova Solicitação de Orçamento - ${name}`,
      html: emailHtml,
      replyTo: email,
    });

    return { success: true, data: result };
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Erro desconhecido ao enviar email'
    };
  }
}