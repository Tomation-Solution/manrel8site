const REVAMP_EVENTS_BASE_EVENT_URL = "/revamped-events";

const revampedEventNavigationItems = [
  { title: "home", link: `${REVAMP_EVENTS_BASE_EVENT_URL}` },
  { title: "register", link: `${REVAMP_EVENTS_BASE_EVENT_URL}/register` },
  { title: "programme", link: `${REVAMP_EVENTS_BASE_EVENT_URL}/general` },
  { title: "speaker(s)", link: `${REVAMP_EVENTS_BASE_EVENT_URL}/speaker` },
  { title: "venue", link: `${REVAMP_EVENTS_BASE_EVENT_URL}/venue` },
  { title: "exhibition", link: `${REVAMP_EVENTS_BASE_EVENT_URL}/exhibition` },
  { title: "faqs", link: `${REVAMP_EVENTS_BASE_EVENT_URL}/FAQ` },
];

export { REVAMP_EVENTS_BASE_EVENT_URL, revampedEventNavigationItems };
