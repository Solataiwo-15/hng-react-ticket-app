// src/utils/mock-data.js

export const initialTickets = [
  {
    id: 'TICKET-001',
    title: 'Website is not loading on mobile',
    description: 'Users are reporting that the homepage is showing a blank white screen when accessed from a mobile browser. This seems to be happening on both iOS and Android.',
    status: 'open',
    priority: 'high',
    createdAt: new Date(2025, 9, 26, 10, 0, 0),
  },
  {
    id: 'TICKET-002',
    title: 'Login button is not working',
    description: 'The main login button on the authentication page is unresponsive. Clicking it does nothing. No errors are visible in the console.',
    status: 'in_progress',
    priority: 'high',
    createdAt: new Date(2025, 9, 25, 14, 30, 0),
  },
  {
    id: 'TICKET-003',
    title: 'Update company address in footer',
    description: 'The address listed in the website footer is outdated. Please update it to our new headquarters address: 123 Tech Avenue, Silicon Valley.',
    status: 'closed',
    priority: 'low',
    createdAt: new Date(2025, 9, 24, 9, 0, 0),
  },
  {
    id: 'TICKET-004',
    title: 'API endpoint is returning 500 error',
    description: 'The /api/users endpoint is consistently returning a 500 Internal Server Error, which is preventing the user list from loading.',
    status: 'in_progress',
    priority: 'medium',
    createdAt: new Date(2025, 9, 26, 11, 20, 0),
  },
];