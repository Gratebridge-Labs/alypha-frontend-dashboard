interface SendContractEmailParams {
  recipientEmail: string;
  contractId: string;
  contractName: string;
  signatureRequestId: string;
}

export async function sendContractForSignature({
  recipientEmail,
  contractId,
  contractName,
  signatureRequestId
}: SendContractEmailParams) {
  try {
    const response = await fetch('/api/send-contract', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        recipientEmail,
        contractId,
        contractName,
        signatureRequestId
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send contract');
    }

    return await response.json();
  } catch (error) {
    console.error('Error sending contract:', error);
    throw error;
  }
} 