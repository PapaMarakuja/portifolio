/**
 * Scrolls the window to the top with a smooth animation
 * @param {number} duration - The duration of the scroll animation in milliseconds
 */
export const scrollToTop = (duration: number = 500): void => {
  const scrollHeight = window.scrollY;
  const scrollStep = Math.PI / (duration / 15);
  const cosParameter = scrollHeight / 2;

  let scrollCount = 0;
  let scrollMargin;

  const scrollInterval = setInterval(() => {
    if (window.scrollY !== 0) {
      scrollCount += 1;
      scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
      window.scrollTo(0, scrollHeight - scrollMargin);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
};

/**
 * Hook to scroll to top when component mounts
 * Useful for page transitions
 */
export const useScrollToTop = (): void => {
  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, 10);
};

interface SocialLink {
  id: string;
  icon: string;
  url: string;
  label: string;
  color?: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    icon: 'fab fa-github',
    url: 'https://github.com/PapaMarakuja',
    label: 'GitHub',
    color: '#333'
  },
  {
    id: 'linkedin',
    icon: 'fab fa-linkedin',
    url: 'https://linkedin.com/in/rafael-pereira-855a81231',
    label: 'LinkedIn',
    color: '#0077B5'
  },
  {
    id: 'whatsapp',
    icon: 'fab fa-whatsapp',
    url: 'https://wa.me/5547992373782',
    label: 'WhatsApp',
    color: '#25D366'
  },
  {
    id: 'email',
    icon: 'fas fa-envelope',
    url: 'mailto:rafael.p.24.03@gmail.com',
    label: 'Email',
    color: '#D44638'
  },
  {
    id: 'instagram',
    icon: 'fab fa-instagram',
    url: 'https://www.instagram.com/pereiraraff',
    label: 'Instagram',
    color: '#E4405F'
  }
];

/**
 * Get a specific social link by its ID
 * @param id The ID of the social link to retrieve
 * @returns The social link object or undefined if not found
 */
export const getSocialLink = (id: string): SocialLink | undefined => {
  return socialLinks.find(link => link.id === id);
};

/**
 * Get all social links
 * @returns Array of all social link objects
 */
export const getAllSocialLinks = (): SocialLink[] => {
  return socialLinks;
};

/**
 * Get a subset of social links by their IDs
 * @param ids Array of social link IDs to retrieve
 * @returns Array of matching social link objects
 */
export const getSelectedSocialLinks = (ids: string[]): SocialLink[] => {
  return socialLinks.filter(link => ids.includes(link.id));
};

/**
 * Open a social link in a new tab
 * @param id The ID of the social link to open
 */
export const openSocialLink = (id: string): void => {
  const link = getSocialLink(id);
  if (link) {
    window.open(link.url, '_blank', 'noopener,noreferrer');
  }
};

/**
 * Generate a WhatsApp link with a predefined message
 * @param phoneNumber The phone number to message (with country code, no spaces or symbols)
 * @param message The message to pre-fill
 * @returns WhatsApp URL with the message
 */
export const generateWhatsAppLink = (phoneNumber: string, message: string = ''): string => {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};

/**
 * Generate a mailto link with subject and body
 * @param email The email address
 * @param subject The email subject
 * @param body The email body
 * @returns Mailto URL with the subject and body
 */
export const generateMailtoLink = (email: string, subject: string = '', body: string = ''): string => {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};