export const pushDataLayer = (event:string,payload:Record<string,unknown>={}) => {
  if (typeof window === 'undefined') return;
  (window as any).dataLayer = (window as any).dataLayer || [];
  (window as any).dataLayer.push({ event, ...payload });
};
