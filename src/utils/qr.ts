import QRCode from 'qrcode'

export const generateQR = async (text: string): Promise<string> => {
    try {
        const qr = await QRCode.toDataURL(text)
        return qr // Devuelve imagen base64 del QR
    } catch (err) {
        throw new Error('No se pudo generar el código QR')
    }
}
