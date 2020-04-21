export const generateRandomText = (length: number): string => {
  let feedback = '';
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    feedback += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return feedback;
};
