// Pre-filled WhatsApp message for the "Free Trial" call-to-action.
// Clicking any trial button takes the visitor straight into WhatsApp
// with this message ready to send — no extra typing required.
export const TRIAL_WA_TEXT =
  "Assalamu Alaikum! I would like to book a free trial class with Al Huda International Islamic Institute. Please send me the details.";

export const CONTACT_WA_TEXT =
  "Assalamu Alaikum! I would like to get more information about Al Huda International Islamic Institute. Please guide me.";

export const TRIAL_WA_URL = `https://wa.me/923141766950?text=${encodeURIComponent(TRIAL_WA_TEXT)}`;

export const CONTACT_WA_URL = `https://wa.me/923141766950?text=${encodeURIComponent(CONTACT_WA_TEXT)}`;
